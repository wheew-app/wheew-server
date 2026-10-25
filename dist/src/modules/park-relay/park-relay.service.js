"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ParkRelayService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkRelayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const geolocation_service_1 = require("../../common/services/geolocation.service");
const notification_event_service_1 = require("../notification/services/notification-event.service");
const notification_event_dto_1 = require("../notification/dtos/notification-event.dto");
const firebase_provider_1 = require("../notification/providers/firebase.provider");
const events_enum_1 = require("../chat/enums/events.enum");
const socket_room_service_1 = require("../chat/services/socket-room.service");
const enums_1 = require("../../common/enums");
const park_relay_dto_1 = require("./dtos/park-relay.dto");
let ParkRelayService = ParkRelayService_1 = class ParkRelayService {
    prismaService;
    geolocationService;
    notificationEventService;
    firebaseClient;
    socketRoomService;
    logger = new common_1.Logger(ParkRelayService_1.name);
    HANDOFF_WINDOW_MINUTES = 5;
    ACCEPTED_HANDOFF_WINDOW_MINUTES = 5;
    HANDOFF_RADIUS_METERS = 300;
    PARKING_EXPIRY_WARNING_MINUTES = 10;
    HANDOFF_CLEANUP_INTERVAL_MS = 60 * 1000;
    PARKING_EXPIRY_INTERVAL_MS = 60 * 1000;
    handoffCleanupTimer;
    parkingExpiryTimer;
    constructor(prismaService, geolocationService, notificationEventService, firebaseClient, socketRoomService) {
        this.prismaService = prismaService;
        this.geolocationService = geolocationService;
        this.notificationEventService = notificationEventService;
        this.firebaseClient = firebaseClient;
        this.socketRoomService = socketRoomService;
    }
    onModuleInit() {
        this.handoffCleanupTimer = setInterval(() => {
            this.cleanupExpiredHandoffs().catch((error) => {
                this.logger.error(`Failed to clean up expired parking handoffs: ${error instanceof Error ? error.message : String(error)}`);
            });
        }, this.HANDOFF_CLEANUP_INTERVAL_MS);
        this.cleanupExpiredHandoffs().catch((error) => {
            this.logger.error(`Failed to run initial expired parking handoff cleanup: ${error instanceof Error ? error.message : String(error)}`);
        });
        this.parkingExpiryTimer = setInterval(() => {
            this.dispatchParkingExpiryWarnings().catch((error) => {
                this.logger.error(`Failed to dispatch parking expiry warnings: ${error instanceof Error ? error.message : String(error)}`);
            });
        }, this.PARKING_EXPIRY_INTERVAL_MS);
        this.dispatchParkingExpiryWarnings().catch((error) => {
            this.logger.error(`Failed to run initial parking expiry warning dispatch: ${error instanceof Error ? error.message : String(error)}`);
        });
    }
    onModuleDestroy() {
        if (this.handoffCleanupTimer) {
            clearInterval(this.handoffCleanupTimer);
        }
        if (this.parkingExpiryTimer) {
            clearInterval(this.parkingExpiryTimer);
        }
    }
    async startSearching(userId, dto) {
        this.validateCoordinates(dto.latitude, dto.longitude);
        return this.prismaService.parkingSearchSession.upsert({
            where: { userId },
            create: {
                userId,
                latitude: dto.latitude,
                longitude: dto.longitude,
                accuracy: dto.accuracy,
                status: 'SEARCHING',
            },
            update: {
                latitude: dto.latitude,
                longitude: dto.longitude,
                accuracy: dto.accuracy,
                status: 'SEARCHING',
            },
        });
    }
    async markParked(userId, dto) {
        this.validateCoordinates(dto.latitude, dto.longitude);
        return this.prismaService.parkingSearchSession.upsert({
            where: { userId },
            create: {
                userId,
                latitude: dto.latitude,
                longitude: dto.longitude,
                accuracy: dto.accuracy,
                status: 'PARKED',
            },
            update: {
                latitude: dto.latitude,
                longitude: dto.longitude,
                accuracy: dto.accuracy,
                status: 'PARKED',
            },
        });
    }
    async setIdle(userId) {
        const session = await this.prismaService.parkingSearchSession.findUnique({
            where: { userId },
        });
        if (!session) {
            return { status: 'IDLE' };
        }
        return this.prismaService.parkingSearchSession.update({
            where: { userId },
            data: { status: 'IDLE' },
        });
    }
    async getMyParkingMode(userId) {
        const session = await this.prismaService.parkingSearchSession.findUnique({
            where: { userId },
        });
        return session ?? { userId, status: 'IDLE' };
    }
    async createHandoff(userId, dto) {
        this.validateCoordinates(dto.latitude, dto.longitude);
        await this.cleanupExpiredHandoffs();
        await this.assertNoUnexpiredHandoff(userId);
        const expiresAt = new Date(Date.now() + this.HANDOFF_WINDOW_MINUTES * 60 * 1000);
        const approximateLocation = this.buildApproximateLocation(dto.latitude, dto.longitude);
        const handoff = await this.prismaService.parkingHandoff.create({
            data: {
                releaserId: userId,
                latitude: dto.latitude,
                longitude: dto.longitude,
                approxLatitude: approximateLocation.latitude,
                approxLongitude: approximateLocation.longitude,
                expiresAt,
                status: 'AVAILABLE',
            },
        });
        await this.setIdle(userId);
        await this.closeActiveParkingForUser(userId);
        const seekers = await this.findActiveSeekers(dto.latitude, dto.longitude, userId);
        await Promise.all(seekers.map((seeker) => this.notifyParkingHandoffSeeker(seeker.id, handoff, seeker.distance)));
        return this.attachParkingAreaSummary({
            ...handoff,
            windowSeconds: this.HANDOFF_WINDOW_MINUTES * 60,
            radiusMeters: this.HANDOFF_RADIUS_METERS,
            notifiedSeekers: seekers.length,
            approximateLocation,
        }, new Map());
    }
    async acceptHandoff(userId, handoffId) {
        await this.expireOldHandoffs();
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        if (handoff.releaserId === userId) {
            throw new common_1.BadRequestException('You cannot accept your own parking handoff');
        }
        if (handoff.expiresAt < new Date()) {
            await this.prismaService.parkingHandoff.update({
                where: { id: handoffId },
                data: { status: 'EXPIRED' },
            });
            throw new common_1.BadRequestException('Parking handoff has expired');
        }
        const result = await this.prismaService.parkingHandoff.updateMany({
            where: {
                id: handoffId,
                status: 'AVAILABLE',
                seekerId: null,
                expiresAt: { gte: new Date() },
            },
            data: {
                seekerId: userId,
                status: 'ACCEPTED',
                acceptedAt: new Date(),
                expiresAt: new Date(Date.now() + this.ACCEPTED_HANDOFF_WINDOW_MINUTES * 60 * 1000),
            },
        });
        if (result.count === 0) {
            throw new common_1.BadRequestException('Parking handoff is no longer available');
        }
        const accepted = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        return {
            ...accepted,
            secondsAddedAfterAcceptance: this.ACCEPTED_HANDOFF_WINDOW_MINUTES * 60,
            googleMapsLink: this.buildGoogleMapsLink(handoff.latitude, handoff.longitude, 'driving'),
        };
    }
    async acceptHandoffAndPark(userId, handoffId, dto) {
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        const alreadyAcceptedByUser = handoff.status === 'ACCEPTED' && handoff.seekerId === userId;
        if (!alreadyAcceptedByUser) {
            await this.acceptHandoff(userId, handoffId);
        }
        const occupied = await this.markHandoffOccupied(userId, handoffId);
        const areasBySpotId = await this.getParkingAreaSummariesBySpotIds([occupied.spotId]);
        const parkingArea = occupied.spotId ? areasBySpotId.get(occupied.spotId) ?? null : null;
        const parkingType = parkingArea?.parkingCost === enums_1.ParkingCost.FREE ? enums_1.ParkingCost.FREE : undefined;
        const savedParking = await this.saveParkingLocation(userId, {
            latitude: occupied.latitude,
            longitude: occupied.longitude,
            accuracy: dto.accuracy,
            confidence: dto.confidence,
            source: park_relay_dto_1.ParkingSaveSourceDto.AUTO,
            parkingType,
            note: dto.note,
            photoUrl: dto.photoUrl,
        }, true);
        const parkingMode = await this.markParked(userId, {
            latitude: occupied.latitude,
            longitude: occupied.longitude,
            accuracy: dto.accuracy,
            confidence: dto.confidence,
        });
        return {
            handoff: this.attachParkingAreaSummary(occupied, areasBySpotId),
            savedParking,
            parkingMode,
            paidParkingPrompt: savedParking.paidParkingPrompt,
        };
    }
    async cancelHandoff(userId, handoffId) {
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        if (handoff.releaserId !== userId) {
            throw new common_1.BadRequestException('Only the releaser can cancel this handoff');
        }
        if (handoff.status !== 'AVAILABLE') {
            throw new common_1.BadRequestException('Only available handoffs can be cancelled');
        }
        await this.updateParkRelayReputation(handoff.releaserId, 'cancelled');
        return this.prismaService.parkingHandoff.update({
            where: { id: handoffId },
            data: {
                status: 'CANCELLED',
                cancelledAt: new Date(),
            },
        });
    }
    async markHandoffOccupied(userId, handoffId) {
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        if (handoff.seekerId !== userId) {
            throw new common_1.BadRequestException('Only the accepted seeker can mark this parking handoff occupied');
        }
        if (handoff.status !== 'ACCEPTED') {
            throw new common_1.BadRequestException('Only accepted parking handoffs can be marked occupied');
        }
        const updated = await this.prismaService.parkingHandoff.update({
            where: { id: handoffId },
            data: {
                status: 'OCCUPIED',
                occupiedAt: new Date(),
            },
        });
        await this.updateParkRelayReputation(handoff.releaserId, 'occupied');
        return updated;
    }
    async markHandoffFound(userId, handoffId) {
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        if (handoff.seekerId !== userId) {
            throw new common_1.BadRequestException('Only the accepted seeker can mark this parking handoff found');
        }
        if (handoff.status !== 'ACCEPTED') {
            throw new common_1.BadRequestException('Only accepted parking handoffs can be marked found');
        }
        const updated = await this.prismaService.parkingHandoff.update({
            where: { id: handoffId },
            data: {
                status: 'FOUND',
                foundAt: new Date(),
            },
        });
        await this.updateParkRelayReputation(handoff.releaserId, 'found');
        return updated;
    }
    async getNearbyHandoffs(userId, latitude, longitude, radiusMeters = this.HANDOFF_RADIUS_METERS) {
        this.validateCoordinates(latitude, longitude);
        await this.expireOldHandoffs();
        const handoffs = await this.prismaService.parkingHandoff.findMany({
            where: {
                status: 'AVAILABLE',
                expiresAt: { gte: new Date() },
                releaserId: { not: userId },
            },
            orderBy: { createdAt: 'desc' },
        });
        const nearby = handoffs
            .map((handoff) => ({
            id: handoff.id,
            spotId: handoff.spotId,
            status: handoff.status,
            expiresAt: handoff.expiresAt,
            createdAt: handoff.createdAt,
            updatedAt: handoff.updatedAt,
            latitude: handoff.latitude,
            longitude: handoff.longitude,
            hasExactLocation: true,
            distanceMeters: Math.round(this.geolocationService.calculateDistance(latitude, longitude, handoff.latitude, handoff.longitude)),
        }))
            .filter((handoff) => handoff.distanceMeters <= radiusMeters)
            .sort((a, b) => a.distanceMeters - b.distanceMeters);
        const areasBySpotId = await this.getParkingAreaSummariesBySpotIds(nearby.map((handoff) => handoff.spotId));
        return nearby.map((handoff) => this.attachParkingAreaSummary(handoff, areasBySpotId));
    }
    async getHandoffById(handoffId, userId, latitude, longitude) {
        await this.expireOldHandoffs();
        const handoff = await this.prismaService.parkingHandoff.findUnique({
            where: { id: handoffId },
        });
        if (!handoff) {
            throw new common_1.NotFoundException('Parking handoff not found');
        }
        const distanceCoordinates = await this.resolveDistanceCoordinates(userId, latitude, longitude);
        const distanceMeters = distanceCoordinates
            ? Math.round(this.geolocationService.calculateDistance(distanceCoordinates.latitude, distanceCoordinates.longitude, handoff.latitude, handoff.longitude))
            : null;
        const canSeeExactLocation = this.canSeeExactHandoffLocation(handoff, userId);
        const approximateLocation = this.getHandoffApproximateLocation(handoff);
        const responseLatitude = canSeeExactLocation ? handoff.latitude : approximateLocation.latitude;
        const responseLongitude = canSeeExactLocation ? handoff.longitude : approximateLocation.longitude;
        const areasBySpotId = await this.getParkingAreaSummariesBySpotIds([handoff.spotId]);
        return this.attachParkingAreaSummary({
            id: handoff.id,
            releaserId: handoff.releaserId,
            seekerId: handoff.seekerId,
            spotId: handoff.spotId,
            status: handoff.status,
            expiresAt: handoff.expiresAt,
            acceptedAt: handoff.acceptedAt,
            cancelledAt: handoff.cancelledAt,
            foundAt: handoff.foundAt,
            occupiedAt: handoff.occupiedAt,
            createdAt: handoff.createdAt,
            updatedAt: handoff.updatedAt,
            latitude: responseLatitude,
            longitude: responseLongitude,
            hasExactLocation: canSeeExactLocation,
            distanceMeters,
            googleMapsLink: canSeeExactLocation
                ? this.buildGoogleMapsLink(handoff.latitude, handoff.longitude, 'driving')
                : null,
        }, areasBySpotId);
    }
    async saveParkingLocation(userId, dto, createPaidParkingPrompt = true) {
        this.validateCoordinates(dto.latitude, dto.longitude);
        const paidExpiresAt = this.resolvePaidParkingExpiry(dto.parkingType, dto.durationMin, dto.expiresAt);
        await this.prismaService.savedParkingLocation.updateMany({
            where: { userId, isActive: true },
            data: { isActive: false },
        });
        const savedParkingData = {
            userId,
            name: dto.name,
            spotId: dto.spotId,
            latitude: dto.latitude,
            longitude: dto.longitude,
            accuracy: dto.accuracy,
            confidence: dto.confidence,
            source: dto.source ?? park_relay_dto_1.ParkingSaveSourceDto.MANUAL,
            note: dto.note,
            photoUrl: dto.photoUrl,
            isActive: true,
            parkingType: dto.parkingType,
            paidExpiresAt,
        };
        const saved = await this.createSavedParkingLocationWithIndexFallback(userId, savedParkingData);
        const parkingSession = dto.parkingType === enums_1.ParkingCost.PAID
            ? await this.createParkingSession(userId, {
                latitude: dto.latitude,
                longitude: dto.longitude,
                costType: enums_1.ParkingCost.PAID,
                durationMin: dto.durationMin,
                expiresAt: dto.expiresAt,
            })
            : null;
        const paidParkingPrompt = dto.parkingType || !createPaidParkingPrompt
            ? null
            : await this.createPendingPaidParkingPrompt(userId, saved.id);
        const distanceMeters = await this.getSavedParkingDistanceMeters(userId, saved);
        return {
            ...saved,
            googleMapsWalkingLink: this.buildGoogleMapsLink(saved.latitude, saved.longitude, 'walking'),
            distanceMeters,
            parkingSession,
            paidParkingPrompt,
        };
    }
    async processParkedEvent(userId, dto) {
        const savedParking = await this.saveParkingLocation(userId, {
            ...dto,
            source: dto.source ?? park_relay_dto_1.ParkingSaveSourceDto.AUTO,
        }, dto.createPaidParkingPrompt !== false);
        const parkingMode = await this.markParked(userId, {
            latitude: dto.latitude,
            longitude: dto.longitude,
            accuracy: dto.accuracy,
            confidence: dto.confidence,
        });
        return {
            savedParking,
            parkingMode,
            paidParkingPrompt: savedParking.paidParkingPrompt,
        };
    }
    async getSavedParkingLocation(userId) {
        await this.expireParkingSessions();
        const saved = await this.prismaService.savedParkingLocation.findFirst({
            where: { userId, isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!saved) {
            throw new common_1.NotFoundException('Saved parking location not found');
        }
        const parkingSession = await this.prismaService.parkingSession.findFirst({
            where: { userId, status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
        });
        const distanceMeters = await this.getSavedParkingDistanceMeters(userId, saved);
        return {
            ...saved,
            googleMapsWalkingLink: this.buildGoogleMapsLink(saved.latitude, saved.longitude, 'walking'),
            distanceMeters,
            parkingSession: parkingSession
                ? {
                    ...parkingSession,
                    googleMapsWalkingLink: this.buildGoogleMapsLink(parkingSession.latitude, parkingSession.longitude, 'walking'),
                }
                : null,
        };
    }
    async getSavedParkingHistory(userId, page = 1, limit = 20) {
        await this.expireParkingSessions();
        const normalizedPage = Math.max(Number(page) || 1, 1);
        const normalizedLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
        const skip = (normalizedPage - 1) * normalizedLimit;
        const [locations, total] = await Promise.all([
            this.prismaService.savedParkingLocation.findMany({
                where: { userId },
                skip,
                take: normalizedLimit,
                orderBy: { createdAt: 'desc' },
                include: {
                    parkingArea: true,
                },
            }),
            this.prismaService.savedParkingLocation.count({
                where: { userId },
            }),
        ]);
        const userLocation = await this.geolocationService.getUserLocation(userId);
        return {
            locations: locations.map((location) => ({
                ...location,
                googleMapsWalkingLink: this.buildGoogleMapsLink(location.latitude, location.longitude, 'walking'),
                distanceMeters: this.calculateDistanceFromUserLocation(userLocation, location),
            })),
            total,
            page: normalizedPage,
            limit: normalizedLimit,
            totalPages: Math.ceil(total / normalizedLimit),
        };
    }
    async getPendingPaidParkingPrompt(userId) {
        const prompt = await this.prismaService.paidParkingPrompt.findFirst({
            where: { userId, status: 'PENDING' },
            orderBy: { createdAt: 'desc' },
        });
        if (!prompt) {
            return null;
        }
        const savedParkingLocation = await this.prismaService.savedParkingLocation.findUnique({
            where: { id: prompt.savedParkingLocationId },
        });
        return {
            ...prompt,
            savedParkingLocation,
        };
    }
    async answerPaidParkingPrompt(userId, promptId, dto) {
        const prompt = await this.getOwnedPendingPaidParkingPrompt(userId, promptId);
        const savedParkingLocation = await this.prismaService.savedParkingLocation.findUnique({
            where: { id: prompt.savedParkingLocationId },
        });
        if (!savedParkingLocation) {
            throw new common_1.NotFoundException('Saved parking location not found');
        }
        const paidExpiresAt = this.resolvePaidParkingExpiry(dto.parkingType, dto.durationMin, dto.expiresAt);
        const parkingSession = dto.parkingType === enums_1.ParkingCost.PAID
            ? await this.createParkingSession(userId, {
                latitude: savedParkingLocation.latitude,
                longitude: savedParkingLocation.longitude,
                costType: enums_1.ParkingCost.PAID,
                durationMin: dto.durationMin,
                expiresAt: dto.expiresAt,
            })
            : null;
        await this.prismaService.savedParkingLocation.update({
            where: { id: savedParkingLocation.id },
            data: {
                parkingType: dto.parkingType,
                paidExpiresAt,
            },
        });
        const updatedPrompt = await this.prismaService.paidParkingPrompt.update({
            where: { id: prompt.id },
            data: {
                status: 'ANSWERED',
                answeredAt: new Date(),
            },
        });
        return {
            prompt: updatedPrompt,
            parkingSession,
        };
    }
    async dismissPaidParkingPrompt(userId, promptId) {
        const prompt = await this.getOwnedPendingPaidParkingPrompt(userId, promptId);
        return this.prismaService.paidParkingPrompt.update({
            where: { id: prompt.id },
            data: {
                status: 'DISMISSED',
                answeredAt: new Date(),
            },
        });
    }
    async getAllSavedParkingLocations(page = 1, limit = 20) {
        await this.expireParkingSessions();
        const normalizedPage = Math.max(Number(page) || 1, 1);
        const normalizedLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
        const skip = (normalizedPage - 1) * normalizedLimit;
        const [locations, total] = await Promise.all([
            this.prismaService.savedParkingLocation.findMany({
                skip,
                take: normalizedLimit,
                orderBy: { updatedAt: 'desc' },
            }),
            this.prismaService.savedParkingLocation.count(),
        ]);
        const userIds = [...new Set(locations.map((location) => location.userId))];
        const users = await this.prismaService.user.findMany({
            where: { id: { in: userIds } },
            select: {
                id: true,
                name: true,
                nick_name: true,
                email: true,
                avatar: true,
                is_blocked: true,
                is_deleted: true,
            },
        });
        const usersById = new Map(users.map((user) => [user.id, user]));
        const parkingSessions = await this.prismaService.parkingSession.findMany({
            where: {
                userId: { in: userIds },
                status: 'ACTIVE',
            },
            orderBy: { createdAt: 'desc' },
        });
        const parkingSessionsByUserId = new Map();
        parkingSessions.forEach((session) => {
            if (!parkingSessionsByUserId.has(session.userId)) {
                parkingSessionsByUserId.set(session.userId, session);
            }
        });
        return {
            locations: locations.map((location) => {
                const parkingSession = parkingSessionsByUserId.get(location.userId);
                return {
                    ...location,
                    user: usersById.get(location.userId) ?? null,
                    googleMapsWalkingLink: this.buildGoogleMapsLink(location.latitude, location.longitude, 'walking'),
                    parkingSession: parkingSession
                        ? {
                            ...parkingSession,
                            googleMapsWalkingLink: this.buildGoogleMapsLink(parkingSession.latitude, parkingSession.longitude, 'walking'),
                        }
                        : null,
                };
            }),
            total,
            page: normalizedPage,
            limit: normalizedLimit,
            totalPages: Math.ceil(total / normalizedLimit),
        };
    }
    async deleteSavedParkingLocation(userId) {
        const saved = await this.prismaService.savedParkingLocation.findFirst({
            where: { userId, isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!saved) {
            throw new common_1.NotFoundException('Saved parking location not found');
        }
        await this.prismaService.savedParkingLocation.update({
            where: { id: saved.id },
            data: { isActive: false },
        });
        return { message: 'Saved parking location deleted successfully' };
    }
    async createParkingSession(userId, dto) {
        this.validateCoordinates(dto.latitude, dto.longitude);
        const paidExpiresAt = this.resolvePaidParkingExpiry(dto.costType, dto.durationMin, dto.expiresAt);
        await this.prismaService.parkingSession.updateMany({
            where: { userId, status: 'ACTIVE' },
            data: { status: 'LEFT' },
        });
        const expiresAt = dto.costType === enums_1.ParkingCost.PAID
            ? paidExpiresAt
            : null;
        const session = await this.prismaService.parkingSession.create({
            data: {
                userId,
                spotId: dto.spotId,
                latitude: dto.latitude,
                longitude: dto.longitude,
                costType: dto.costType,
                durationMin: dto.durationMin,
                expiresAt,
                status: 'ACTIVE',
            },
        });
        await this.markParked(userId, {
            latitude: dto.latitude,
            longitude: dto.longitude,
        });
        return {
            ...session,
            googleMapsWalkingLink: this.buildGoogleMapsLink(dto.latitude, dto.longitude, 'walking'),
        };
    }
    async getActiveParkingSession(userId) {
        await this.expireParkingSessions();
        const session = await this.prismaService.parkingSession.findFirst({
            where: { userId, status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
        });
        if (!session) {
            throw new common_1.NotFoundException('Active parking session not found');
        }
        return {
            ...session,
            googleMapsWalkingLink: this.buildGoogleMapsLink(session.latitude, session.longitude, 'walking'),
        };
    }
    async leaveParkingSession(userId, sessionId) {
        const session = await this.prismaService.parkingSession.findUnique({
            where: { id: sessionId },
        });
        if (!session) {
            throw new common_1.NotFoundException('Parking session not found');
        }
        if (session.userId !== userId) {
            throw new common_1.BadRequestException('You can only leave your own parking session');
        }
        await this.setIdle(userId);
        return this.prismaService.parkingSession.update({
            where: { id: sessionId },
            data: { status: 'LEFT' },
        });
    }
    async dispatchParkingExpiryWarnings() {
        const warningCutoff = new Date(Date.now() + this.PARKING_EXPIRY_WARNING_MINUTES * 60 * 1000);
        const sessions = await this.prismaService.parkingSession.findMany({
            where: {
                status: 'ACTIVE',
                costType: enums_1.ParkingCost.PAID,
                expiresAt: {
                    lte: warningCutoff,
                    gt: new Date(),
                },
                expiryWarningSentAt: null,
            },
        });
        for (const session of sessions) {
            await this.notifyParkingExpiry(session.userId, session);
            await this.prismaService.parkingSession.update({
                where: { id: session.id },
                data: { expiryWarningSentAt: new Date() },
            });
        }
        await this.expireParkingSessions();
        return { warningsSent: sessions.length };
    }
    async createParkingArea(adminId, dto) {
        this.validateCoordinates(dto.centerLat, dto.centerLng);
        this.validatePolygon(dto.polygon);
        const parkingAreaTypes = this.normalizeParkingAreaTypes(dto.parkingAreaTypes);
        return this.prismaService.parkingArea.create({
            data: {
                name: dto.name,
                description: dto.description,
                centerLat: dto.centerLat,
                centerLng: dto.centerLng,
                polygon: dto.polygon,
                parkingCost: dto.parkingCost,
                parkingFee: dto.parkingFee,
                parkingAreaTypes: parkingAreaTypes,
                disabledFacilityLocation: this.resolveDisabledFacilityLocation(parkingAreaTypes, dto.disabledFacilityLocation),
                totalSpots: dto.totalSpots,
                isActive: dto.isActive ?? true,
                createdById: adminId,
            },
        });
    }
    async submitParkingAreaPoint(userId, dto) {
        this.validateCoordinates(dto.centerLat, dto.centerLng);
        const parkingAreaTypes = this.normalizeParkingAreaTypes(dto.parkingAreaTypes);
        return this.prismaService.parkingArea.create({
            data: {
                name: dto.name,
                description: dto.description,
                centerLat: dto.centerLat,
                centerLng: dto.centerLng,
                parkingCost: dto.parkingCost,
                parkingFee: dto.parkingFee,
                parkingAreaTypes: parkingAreaTypes,
                disabledFacilityLocation: this.resolveDisabledFacilityLocation(parkingAreaTypes, dto.disabledFacilityLocation),
                totalSpots: dto.totalSpots,
                isActive: true,
                createdById: userId,
            },
        });
    }
    async getParkingAreas(page = 1, limit = 20, isActive) {
        const skip = (Number(page) - 1) * Number(limit);
        const where = isActive !== undefined ? { isActive } : {};
        const [areas, total] = await Promise.all([
            this.prismaService.parkingArea.findMany({
                where,
                skip,
                take: Number(limit),
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.parkingArea.count({ where }),
        ]);
        return { areas, total, page: Number(page), limit: Number(limit) };
    }
    async searchParkingAreas(query) {
        const page = Math.max(Number(query.page) || 1, 1);
        const limit = Math.min(Math.max(Number(query.limit) || 20, 1), 100);
        const skip = (page - 1) * limit;
        const where = {
            isActive: query.isActive ?? true,
        };
        const hasLatitude = query.latitude !== undefined;
        const hasLongitude = query.longitude !== undefined;
        if (query.query) {
            where.OR = [
                { name: { contains: query.query, mode: 'insensitive' } },
                { description: { contains: query.query, mode: 'insensitive' } },
            ];
        }
        if (query.parkingCost) {
            where.parkingCost = query.parkingCost;
        }
        if (query.parkingAreaTypes?.length) {
            where.parkingAreaTypes = { hasEvery: query.parkingAreaTypes };
        }
        if (query.disabledFacilityLocation) {
            where.disabledFacilityLocation = query.disabledFacilityLocation;
        }
        if (hasLatitude !== hasLongitude) {
            throw new common_1.BadRequestException('latitude and longitude must be provided together');
        }
        if (query.radiusMeters !== undefined && (!hasLatitude || !hasLongitude)) {
            throw new common_1.BadRequestException('radiusMeters requires latitude and longitude');
        }
        if (hasLatitude && hasLongitude) {
            this.validateCoordinates(query.latitude, query.longitude);
        }
        if (query.radiusMeters !== undefined) {
            this.validateParkingAreaSearchRadius(Number(query.radiusMeters));
        }
        const areas = await this.prismaService.parkingArea.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
        const areasWithDistance = hasLatitude && hasLongitude
            ? areas
                .map((area) => ({
                ...area,
                distanceMeters: Math.round(this.geolocationService.calculateDistance(query.latitude, query.longitude, area.centerLat, area.centerLng)),
                googleMapsLink: this.buildGoogleMapsLink(area.centerLat, area.centerLng, 'driving'),
            }))
                .filter((area) => (query.radiusMeters === undefined
                ? true
                : area.distanceMeters <= Number(query.radiusMeters)))
                .sort((a, b) => a.distanceMeters - b.distanceMeters)
            : areas;
        return {
            areas: areasWithDistance.slice(skip, skip + limit),
            total: areasWithDistance.length,
            page,
            limit,
        };
    }
    async getNearbyParkingAreas(latitude, longitude, radiusMeters = 1000) {
        this.validateCoordinates(latitude, longitude);
        this.validateParkingAreaSearchRadius(Number(radiusMeters));
        const areas = await this.prismaService.parkingArea.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        return areas
            .map((area) => ({
            ...area,
            distanceMeters: Math.round(this.geolocationService.calculateDistance(latitude, longitude, area.centerLat, area.centerLng)),
            googleMapsLink: this.buildGoogleMapsLink(area.centerLat, area.centerLng, 'driving'),
        }))
            .filter((area) => area.distanceMeters <= Number(radiusMeters))
            .sort((a, b) => a.distanceMeters - b.distanceMeters);
    }
    async getParkingAreasInViewport(query) {
        const north = Number(query.north);
        const south = Number(query.south);
        const east = Number(query.east);
        const west = Number(query.west);
        const limit = Math.min(Math.max(Number(query.limit) || 200, 1), 500);
        if (north <= south) {
            throw new common_1.BadRequestException('north must be greater than south');
        }
        const where = {
            isActive: true,
            centerLat: { gte: south, lte: north },
        };
        if (west <= east) {
            where.centerLng = { gte: west, lte: east };
        }
        else {
            where.OR = [
                { centerLng: { gte: west } },
                { centerLng: { lte: east } },
            ];
        }
        if (query.parkingCost) {
            where.parkingCost = query.parkingCost;
        }
        if (query.parkingAreaTypes?.length) {
            where.parkingAreaTypes = { hasEvery: query.parkingAreaTypes };
        }
        if (query.disabledFacilityLocation) {
            where.disabledFacilityLocation = query.disabledFacilityLocation;
        }
        const [areas, total] = await Promise.all([
            this.prismaService.parkingArea.findMany({
                where,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.parkingArea.count({ where }),
        ]);
        return {
            areas: areas.map((area) => ({
                ...area,
                googleMapsLink: this.buildGoogleMapsLink(area.centerLat, area.centerLng, 'driving'),
            })),
            total,
            limit,
            truncated: total > limit,
            bounds: { north, south, east, west },
        };
    }
    async updateParkingArea(areaId, dto) {
        const area = await this.prismaService.parkingArea.findUnique({
            where: { id: areaId },
        });
        if (!area) {
            throw new common_1.NotFoundException('Parking area not found');
        }
        if (dto.polygon) {
            this.validatePolygon(dto.polygon);
        }
        const nextCenterLat = dto.centerLat ?? area.centerLat;
        const nextCenterLng = dto.centerLng ?? area.centerLng;
        if (dto.centerLat !== undefined || dto.centerLng !== undefined) {
            this.validateCoordinates(nextCenterLat, nextCenterLng);
        }
        const nextParkingAreaTypes = dto.parkingAreaTypes !== undefined
            ? this.normalizeParkingAreaTypes(dto.parkingAreaTypes)
            : area.parkingAreaTypes;
        return this.prismaService.parkingArea.update({
            where: { id: areaId },
            data: {
                name: dto.name,
                description: dto.description,
                centerLat: dto.centerLat,
                centerLng: dto.centerLng,
                polygon: dto.polygon,
                parkingCost: dto.parkingCost,
                parkingFee: dto.parkingFee,
                parkingAreaTypes: dto.parkingAreaTypes !== undefined
                    ? nextParkingAreaTypes
                    : undefined,
                disabledFacilityLocation: this.resolveDisabledFacilityLocation(nextParkingAreaTypes, dto.disabledFacilityLocation, area.disabledFacilityLocation),
                totalSpots: dto.totalSpots,
                isActive: dto.isActive,
            },
        });
    }
    async deleteParkingArea(areaId) {
        const area = await this.prismaService.parkingArea.findUnique({
            where: { id: areaId },
        });
        if (!area) {
            throw new common_1.NotFoundException('Parking area not found');
        }
        await this.prismaService.parkingArea.delete({
            where: { id: areaId },
        });
        return { message: 'Parking area deleted successfully' };
    }
    async createParkingAreaRating(userId, areaId, dto) {
        await this.assertParkingAreaExists(areaId);
        const existingRating = await this.prismaService.parkingAreaRating.findUnique({
            where: {
                parkingAreaId_userId: {
                    parkingAreaId: areaId,
                    userId,
                },
            },
        });
        if (existingRating) {
            throw new common_1.BadRequestException('You have already rated this parking area');
        }
        const rating = await this.createParkingAreaRatingRecord(userId, areaId, dto);
        await this.refreshParkingAreaRatingSummary(areaId);
        return rating;
    }
    async createParkingAreaRatingRecord(userId, areaId, dto) {
        try {
            return await this.prismaService.parkingAreaRating.create({
                data: {
                    parkingAreaId: areaId,
                    userId,
                    rating: dto.rating,
                    review: dto.review,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('You have already rated this parking area');
            }
            throw error;
        }
    }
    async updateMyParkingAreaRating(userId, areaId, dto) {
        await this.assertParkingAreaExists(areaId);
        const existingRating = await this.prismaService.parkingAreaRating.findUnique({
            where: {
                parkingAreaId_userId: {
                    parkingAreaId: areaId,
                    userId,
                },
            },
        });
        if (!existingRating) {
            throw new common_1.NotFoundException('Parking area rating not found');
        }
        const rating = await this.prismaService.parkingAreaRating.update({
            where: { id: existingRating.id },
            data: {
                rating: dto.rating,
                review: dto.review,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        await this.refreshParkingAreaRatingSummary(areaId);
        return rating;
    }
    async getParkingAreaRatings(areaId, page = 1, limit = 10) {
        await this.assertParkingAreaExists(areaId);
        const normalizedPage = Math.max(Number(page) || 1, 1);
        const normalizedLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);
        const skip = (normalizedPage - 1) * normalizedLimit;
        const [ratings, total] = await Promise.all([
            this.prismaService.parkingAreaRating.findMany({
                where: { parkingAreaId: areaId },
                skip,
                take: normalizedLimit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
            }),
            this.prismaService.parkingAreaRating.count({
                where: { parkingAreaId: areaId },
            }),
        ]);
        return {
            ratings,
            total,
            page: normalizedPage,
            limit: normalizedLimit,
            totalPages: Math.ceil(total / normalizedLimit),
        };
    }
    async getMyParkingAreaRating(userId, areaId) {
        await this.assertParkingAreaExists(areaId);
        const rating = await this.prismaService.parkingAreaRating.findUnique({
            where: {
                parkingAreaId_userId: {
                    parkingAreaId: areaId,
                    userId,
                },
            },
        });
        if (!rating) {
            throw new common_1.NotFoundException('Parking area rating not found');
        }
        return rating;
    }
    async getParkingAreaRatingSummary(areaId) {
        const area = await this.assertParkingAreaExists(areaId);
        return {
            parkingAreaId: area.id,
            rating: area.rating ?? 0,
            reviewCount: area.reviewCount,
        };
    }
    async findActiveSeekers(latitude, longitude, excludeUserId) {
        const sessions = await this.prismaService.parkingSearchSession.findMany({
            where: { status: 'SEARCHING' },
        });
        const candidates = await Promise.all(sessions
            .filter((session) => session.userId !== excludeUserId)
            .map(async (session) => {
            const distance = this.geolocationService.calculateDistance(latitude, longitude, session.latitude, session.longitude);
            if (distance > this.HANDOFF_RADIUS_METERS) {
                return null;
            }
            const user = await this.prismaService.user.findUnique({
                where: { id: session.userId },
                select: {
                    id: true,
                    fcm_token: true,
                    is_blocked: true,
                    is_deleted: true,
                },
            });
            if (!user || user.is_blocked || user.is_deleted) {
                return null;
            }
            return {
                id: user.id,
                fcmToken: user.fcm_token,
                distance: Math.round(distance),
            };
        }));
        return candidates
            .filter((candidate) => Boolean(candidate))
            .sort((a, b) => a.distance - b.distance);
    }
    async resolveDistanceCoordinates(userId, latitude, longitude) {
        const hasLatitude = latitude !== undefined && !Number.isNaN(latitude);
        const hasLongitude = longitude !== undefined && !Number.isNaN(longitude);
        if (hasLatitude || hasLongitude) {
            if (!hasLatitude || !hasLongitude) {
                throw new common_1.BadRequestException('latitude and longitude must be provided together');
            }
            this.validateCoordinates(latitude, longitude);
            return {
                latitude: latitude,
                longitude: longitude,
            };
        }
        if (!userId) {
            return null;
        }
        const [activeParkingSession, searchSession, savedParkingLocation, userLocation] = await Promise.all([
            this.prismaService.parkingSession.findFirst({
                where: { userId, status: 'ACTIVE' },
                orderBy: { createdAt: 'desc' },
                select: { latitude: true, longitude: true },
            }),
            this.prismaService.parkingSearchSession.findUnique({
                where: { userId },
                select: { latitude: true, longitude: true },
            }),
            this.prismaService.savedParkingLocation.findFirst({
                where: { userId, isActive: true },
                orderBy: { createdAt: 'desc' },
                select: { latitude: true, longitude: true },
            }),
            this.prismaService.userLocation.findUnique({
                where: { userId },
                select: { latitude: true, longitude: true },
            }),
        ]);
        return activeParkingSession ?? searchSession ?? savedParkingLocation ?? userLocation ?? null;
    }
    async notifyParkingHandoffSeeker(seekerId, handoff, distanceMeters) {
        const title = 'Parking spot opening nearby';
        const message = 'A driver is leaving a parking spot near you';
        const approximateLocation = this.getHandoffApproximateLocation(handoff);
        const payload = {
            handoffId: handoff.id,
            latitude: approximateLocation.latitude,
            longitude: approximateLocation.longitude,
            expiresAt: handoff.expiresAt,
            distanceMeters,
            hasExactLocation: false,
            type: 'PARK_RELAY_HANDOFF',
        };
        try {
            await this.notificationEventService.createEvent({
                userId: seekerId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.PARKING_NEARBY,
                title,
                message,
                payload,
            });
            const user = await this.prismaService.user.findUnique({
                where: { id: seekerId },
                select: { fcm_token: true },
            });
            if (user?.fcm_token) {
                await this.firebaseClient.sendPushNotification(user.fcm_token, title, message);
            }
            this.socketRoomService?.emitToUser(seekerId, events_enum_1.EMIT_EVENTS.PARK_RELAY_HANDOFF_NEARBY, payload);
        }
        catch (err) {
            this.logger.error(`Failed to notify seeker ${seekerId}: ${err.message}`);
        }
    }
    async notifyParkingExpiry(userId, session) {
        const title = 'Paid parking expiring soon';
        const message = 'Are you leaving the paid spot? Your paid spot is expiring in 10 minutes.';
        try {
            await this.notificationEventService.createEvent({
                userId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.PARKING_EXPIRING_SOON,
                title,
                message,
                payload: {
                    parkingSessionId: session.id,
                    expiresAt: session.expiresAt,
                    latitude: session.latitude,
                    longitude: session.longitude,
                    type: 'PARKTIME_EXPIRY_WARNING',
                },
            });
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
                select: { fcm_token: true },
            });
            if (user?.fcm_token) {
                await this.firebaseClient.sendPushNotification(user.fcm_token, title, message);
            }
        }
        catch (err) {
            this.logger.error(`Failed to send parking expiry warning to ${userId}: ${err.message}`);
        }
    }
    async assertNoUnexpiredHandoff(userId) {
        const existingHandoff = await this.prismaService.parkingHandoff.findFirst({
            where: {
                releaserId: userId,
                status: 'AVAILABLE',
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                status: true,
                expiresAt: true,
            },
        });
        if (!existingHandoff) {
            return;
        }
        const secondsRemaining = Math.max(1, Math.ceil((existingHandoff.expiresAt.getTime() - Date.now()) / 1000));
        throw new common_1.BadRequestException({
            message: 'You already have an active parking handoff. Please wait until it expires before creating another one.',
            handoffId: existingHandoff.id,
            status: existingHandoff.status,
            expiresAt: existingHandoff.expiresAt,
            secondsRemaining,
        });
    }
    async cleanupExpiredHandoffs() {
        await this.expireOldHandoffs();
        const result = await this.prismaService.parkingHandoff.deleteMany({
            where: {
                status: 'EXPIRED',
                expiresAt: { lt: new Date() },
            },
        });
        if (result.count > 0) {
            this.logger.log(`Removed ${result.count} expired parking handoff(s).`);
        }
        return result;
    }
    async expireOldHandoffs() {
        const expiredHandoffs = await this.prismaService.parkingHandoff.findMany({
            where: {
                status: { in: ['AVAILABLE', 'ACCEPTED'] },
                expiresAt: { lt: new Date() },
            },
        });
        for (const handoff of expiredHandoffs) {
            const result = await this.prismaService.parkingHandoff.updateMany({
                where: {
                    id: handoff.id,
                    status: { in: ['AVAILABLE', 'ACCEPTED'] },
                },
                data: { status: 'EXPIRED' },
            });
            if (result.count === 0) {
                continue;
            }
            await this.updateParkRelayReputation(handoff.releaserId, 'expired');
            await this.notifyHandoffExpired(handoff.releaserId, handoff);
        }
    }
    async expireParkingSessions() {
        await this.prismaService.parkingSession.updateMany({
            where: {
                status: 'ACTIVE',
                expiresAt: { lt: new Date() },
            },
            data: { status: 'EXPIRED' },
        });
    }
    async createSavedParkingLocationWithIndexFallback(userId, data) {
        try {
            return await this.prismaService.savedParkingLocation.create({ data });
        }
        catch (error) {
            if (!this.isLegacySavedParkingUserIdUniqueIndexError(error)) {
                throw error;
            }
            this.logger.warn('saved_parking_locations_userId_key still exists in the database. Updating the existing saved parking location as a compatibility fallback. Run pnpm run fix:saved-parking-index to enable full parking history.');
            const existingSavedParking = await this.prismaService.savedParkingLocation.findFirst({
                where: { userId },
                orderBy: { createdAt: 'desc' },
            });
            if (!existingSavedParking) {
                throw error;
            }
            return this.prismaService.savedParkingLocation.update({
                where: { id: existingSavedParking.id },
                data,
            });
        }
    }
    isLegacySavedParkingUserIdUniqueIndexError(error) {
        const target = error?.meta?.target;
        const targetText = Array.isArray(target) ? target.join(',') : String(target ?? '');
        return error?.code === 'P2002'
            && targetText.includes('saved_parking_locations_userId_key');
    }
    async getSavedParkingDistanceMeters(userId, location) {
        const userLocation = await this.geolocationService.getUserLocation(userId);
        return this.calculateDistanceFromUserLocation(userLocation, location);
    }
    calculateDistanceFromUserLocation(userLocation, location) {
        if (!userLocation) {
            return null;
        }
        return Math.round(this.geolocationService.calculateDistance(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude));
    }
    async notifyHandoffExpired(userId, handoff) {
        const title = 'Parking handoff expired';
        const message = 'Your parking handoff expired without being completed.';
        try {
            await this.notificationEventService.createEvent({
                userId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.SYSTEM_NOTIFICATION,
                title,
                message,
                payload: {
                    handoffId: handoff.id,
                    expiresAt: handoff.expiresAt,
                    type: 'PARK_RELAY_HANDOFF_EXPIRED',
                },
            });
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
                select: { fcm_token: true },
            });
            if (user?.fcm_token) {
                await this.firebaseClient.sendPushNotification(user.fcm_token, title, message);
            }
        }
        catch (error) {
            this.logger.error(`Failed to notify handoff releaser ${userId} of expiry: ${error.message}`);
        }
    }
    resolvePaidParkingExpiry(parkingType, durationMin, expiresAt) {
        if (parkingType !== enums_1.ParkingCost.PAID) {
            return null;
        }
        if (expiresAt) {
            const parsedExpiry = new Date(expiresAt);
            if (Number.isNaN(parsedExpiry.getTime())) {
                throw new common_1.BadRequestException('expiresAt must be a valid date');
            }
            if (parsedExpiry <= new Date()) {
                throw new common_1.BadRequestException('expiresAt must be in the future');
            }
            return parsedExpiry;
        }
        if (!durationMin || durationMin <= 0) {
            throw new common_1.BadRequestException('durationMin or expiresAt is required for paid parking sessions');
        }
        return new Date(Date.now() + durationMin * 60 * 1000);
    }
    async createPendingPaidParkingPrompt(userId, savedParkingLocationId) {
        await this.prismaService.paidParkingPrompt.updateMany({
            where: { userId, status: 'PENDING' },
            data: {
                status: 'DISMISSED',
                answeredAt: new Date(),
            },
        });
        return this.prismaService.paidParkingPrompt.create({
            data: {
                userId,
                savedParkingLocationId,
                status: 'PENDING',
            },
        });
    }
    async getOwnedPendingPaidParkingPrompt(userId, promptId) {
        const prompt = await this.prismaService.paidParkingPrompt.findUnique({
            where: { id: promptId },
        });
        if (!prompt) {
            throw new common_1.NotFoundException('Paid parking prompt not found');
        }
        if (prompt.userId !== userId) {
            throw new common_1.BadRequestException('You do not have permission to answer this prompt');
        }
        if (prompt.status !== 'PENDING') {
            throw new common_1.BadRequestException('This paid parking prompt has already been handled');
        }
        return prompt;
    }
    async closeActiveParkingForUser(userId) {
        await Promise.all([
            this.prismaService.parkingSession.updateMany({
                where: { userId, status: 'ACTIVE' },
                data: { status: 'LEFT' },
            }),
            this.prismaService.savedParkingLocation.updateMany({
                where: { userId, isActive: true },
                data: { isActive: false },
            }),
        ]);
    }
    async getParkingAreaSummariesBySpotIds(spotIds) {
        const uniqueIds = [...new Set(spotIds.filter((id) => Boolean(id)))];
        if (uniqueIds.length === 0) {
            return new Map();
        }
        const areas = await this.prismaService.parkingArea.findMany({
            where: { id: { in: uniqueIds } },
            select: {
                id: true,
                name: true,
                description: true,
                rating: true,
                reviewCount: true,
                totalSpots: true,
                parkingCost: true,
                parkingFee: true,
                parkingAreaTypes: true,
                disabledFacilityLocation: true,
            },
        });
        return new Map(areas.map((area) => [area.id, area]));
    }
    attachParkingAreaSummary(record, areasBySpotId) {
        return {
            ...record,
            parkingArea: record.spotId ? (areasBySpotId.get(record.spotId) ?? null) : null,
        };
    }
    buildApproximateLocation(latitude, longitude) {
        return {
            latitude: Math.round((latitude + 0.0007) * 1000) / 1000,
            longitude: Math.round((longitude - 0.0007) * 1000) / 1000,
        };
    }
    getHandoffApproximateLocation(handoff) {
        if (handoff.approxLatitude !== null && handoff.approxLatitude !== undefined
            && handoff.approxLongitude !== null && handoff.approxLongitude !== undefined) {
            return {
                latitude: handoff.approxLatitude,
                longitude: handoff.approxLongitude,
            };
        }
        return this.buildApproximateLocation(handoff.latitude, handoff.longitude);
    }
    canSeeExactHandoffLocation(handoff, userId) {
        if (!userId) {
            return false;
        }
        if (handoff.releaserId === userId) {
            return true;
        }
        return handoff.seekerId === userId && ['ACCEPTED', 'FOUND', 'OCCUPIED'].includes(handoff.status);
    }
    async updateParkRelayReputation(userId, outcome) {
        const createData = {
            userId,
            successfulHandoffs: outcome === 'found' ? 1 : 0,
            occupiedReports: outcome === 'occupied' ? 1 : 0,
            cancelledHandoffs: outcome === 'cancelled' ? 1 : 0,
            expiredHandoffs: outcome === 'expired' ? 1 : 0,
        };
        const updateData = {
            ...(outcome === 'found' ? { successfulHandoffs: { increment: 1 } } : {}),
            ...(outcome === 'occupied' ? { occupiedReports: { increment: 1 } } : {}),
            ...(outcome === 'cancelled' ? { cancelledHandoffs: { increment: 1 } } : {}),
            ...(outcome === 'expired' ? { expiredHandoffs: { increment: 1 } } : {}),
        };
        const reputation = await this.prismaService.parkRelayReputation.upsert({
            where: { userId },
            create: createData,
            update: updateData,
        });
        return this.prismaService.parkRelayReputation.update({
            where: { userId },
            data: { score: this.calculateParkRelayReputationScore(reputation) },
        });
    }
    calculateParkRelayReputationScore(reputation) {
        const total = reputation.successfulHandoffs
            + reputation.occupiedReports
            + reputation.cancelledHandoffs
            + reputation.expiredHandoffs;
        if (total === 0) {
            return 0;
        }
        const rawScore = (reputation.successfulHandoffs
            - reputation.occupiedReports * 2
            - reputation.cancelledHandoffs
            - reputation.expiredHandoffs) / total;
        return Math.max(-1, Math.min(1, Number(rawScore.toFixed(2))));
    }
    normalizeParkingAreaTypes(parkingAreaTypes) {
        return Array.from(new Set(parkingAreaTypes ?? []));
    }
    resolveDisabledFacilityLocation(parkingAreaTypes, disabledFacilityLocation, existingDisabledFacilityLocation) {
        if (!parkingAreaTypes.includes(enums_1.ParkingAreaType.DISABLED_FACILITY)) {
            return null;
        }
        return disabledFacilityLocation
            ?? existingDisabledFacilityLocation
            ?? enums_1.DisabledFacilityLocation.ALL;
    }
    validateParkingAreaSearchRadius(radiusMeters) {
        if (Number.isNaN(radiusMeters)) {
            throw new common_1.BadRequestException('radiusMeters must be a number');
        }
        if (radiusMeters < 100 || radiusMeters > 20000) {
            throw new common_1.BadRequestException('radiusMeters must be between 100 and 20000');
        }
    }
    async assertParkingAreaExists(areaId) {
        const area = await this.prismaService.parkingArea.findUnique({
            where: { id: areaId },
        });
        if (!area) {
            throw new common_1.NotFoundException('Parking area not found');
        }
        return area;
    }
    async refreshParkingAreaRatingSummary(areaId) {
        const aggregate = await this.prismaService.parkingAreaRating.aggregate({
            where: { parkingAreaId: areaId },
            _avg: { rating: true },
            _count: { rating: true },
        });
        const rating = aggregate._avg.rating === null
            ? null
            : Math.round(aggregate._avg.rating * 10) / 10;
        return this.prismaService.parkingArea.update({
            where: { id: areaId },
            data: {
                rating,
                reviewCount: aggregate._count.rating,
            },
        });
    }
    validateCoordinates(latitude, longitude) {
        if (!this.geolocationService.validateCoordinates(Number(latitude), Number(longitude))) {
            throw new common_1.BadRequestException('Invalid latitude or longitude');
        }
    }
    validatePolygon(polygon) {
        if (polygon.length < 3) {
            throw new common_1.BadRequestException('Parking area polygon must contain at least three points');
        }
        polygon.forEach((point) => this.validateCoordinates(point.latitude, point.longitude));
    }
    buildGoogleMapsLink(latitude, longitude, travelMode) {
        return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=${travelMode}`;
    }
};
exports.ParkRelayService = ParkRelayService;
exports.ParkRelayService = ParkRelayService = ParkRelayService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        geolocation_service_1.GeolocationService,
        notification_event_service_1.NotificationEventService,
        firebase_provider_1.FireBaseClient,
        socket_room_service_1.SocketRoomService])
], ParkRelayService);
//# sourceMappingURL=park-relay.service.js.map