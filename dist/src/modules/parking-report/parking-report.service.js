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
var ParkingReportService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingReportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../../generated/prisma/enums");
const enums_2 = require("../../common/enums");
const notification_dispatcher_service_1 = require("../notification/services/notification-dispatcher.service");
const geolocation_service_1 = require("../../common/services/geolocation.service");
let ParkingReportService = ParkingReportService_1 = class ParkingReportService {
    prismaService;
    notificationDispatcherService;
    geolocationService;
    EXPIRATION_TIME_MINUTES = 10;
    DEFAULT_NEARBY_RADIUS_METERS = 200;
    logger = new common_1.Logger(ParkingReportService_1.name);
    constructor(prismaService, notificationDispatcherService, geolocationService) {
        this.prismaService = prismaService;
        this.notificationDispatcherService = notificationDispatcherService;
        this.geolocationService = geolocationService;
    }
    getExpirationTime() {
        const now = new Date();
        return new Date(now.getTime() + this.EXPIRATION_TIME_MINUTES * 60 * 1000);
    }
    isReportExpired(createdAt) {
        const now = new Date();
        const tenMinutesAgo = new Date(now.getTime() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        return createdAt < tenMinutesAgo;
    }
    getTimeRemaining(createdAt) {
        const now = new Date();
        const expiresAt = new Date(createdAt.getTime() + this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const remaining = expiresAt.getTime() - now.getTime();
        return remaining > 0 ? remaining : 0;
    }
    async createParkingReport(userId, createParkingReportDto) {
        const expiresAt = this.getExpirationTime();
        const { spotId, latitude, longitude, parking_cost, electric_charging, disabled_facility, disabled_facility_location } = createParkingReportDto;
        let finalParkingCost = parking_cost;
        if (disabled_facility) {
            finalParkingCost = enums_2.ParkingCost.FREE;
        }
        const disabledFacilityLocationValue = disabled_facility_location
            ? enums_1.DisabledFacilityLocation[disabled_facility_location]
            : undefined;
        if (spotId) {
            const spot = await this.prismaService.parkingSpot.findUnique({ where: { id: spotId } });
            if (!spot) {
                throw new common_1.NotFoundException(`Parking spot with ID ${spotId} not found`);
            }
            const tenMinutesAgo = new Date(Date.now() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
            const existingReport = await this.prismaService.parkingReport.findFirst({
                where: {
                    user_id: userId,
                    spotId,
                    createdAt: { gte: tenMinutesAgo },
                },
            });
            if (existingReport) {
                throw new common_1.BadRequestException('You cannot submit a report for the same spot within 10 minutes');
            }
            const userLocation = await this.geolocationService.getUserLocation(userId);
            if (!userLocation) {
                throw new common_1.BadRequestException('User location not found. Please update your location first.');
            }
            const distance = this.geolocationService.calculateDistance(spot.latitude, spot.longitude, userLocation.latitude, userLocation.longitude);
            if (distance > 10) {
                throw new common_1.BadRequestException('You must be within 10 meters of the parking spot to generate a report');
            }
            await this.prismaService.parkingSpot.update({
                where: { id: spotId },
                data: {
                    parking_cost: finalParkingCost,
                    electric_charging,
                    disabled_facility,
                    ...(disabledFacilityLocationValue !== undefined && { disabled_facility_location: disabledFacilityLocationValue }),
                    ...(latitude !== undefined && { latitude }),
                    ...(longitude !== undefined && { longitude }),
                },
            });
            const reportLat = latitude ?? spot.latitude;
            const reportLng = longitude ?? spot.longitude;
            const report = await this.prismaService.parkingReport.create({
                data: {
                    user_id: userId,
                    spotId,
                    latitude: reportLat,
                    longitude: reportLng,
                    parking_cost: finalParkingCost,
                    electric_charging,
                    disabled_facility,
                    disabled_facility_location: disabledFacilityLocationValue,
                    expiresAt,
                },
                include: {
                    user: { select: { id: true, name: true, nick_name: true, avatar: true } },
                },
            });
            this.logger.log(`Parking report created and spot ${spotId} updated by user ${userId}`);
            return this.postCreateCreditAndNotify(userId, report);
        }
        if (latitude === undefined || longitude === undefined) {
            throw new common_1.BadRequestException('latitude and longitude are required when spotId is not provided');
        }
        const report = await this.prismaService.parkingReport.create({
            data: {
                user_id: userId,
                latitude,
                longitude,
                parking_cost: finalParkingCost,
                electric_charging,
                disabled_facility,
                disabled_facility_location: disabledFacilityLocationValue,
                expiresAt,
            },
            include: {
                user: { select: { id: true, name: true, nick_name: true, avatar: true } },
            },
        });
        return this.postCreateCreditAndNotify(userId, report);
    }
    async postCreateCreditAndNotify(userId, report) {
        const formattedReport = this.formatReportResponse(report);
        try {
            this.notificationDispatcherService.dispatchParkingNotification(report).catch((err) => {
                this.logger.error(`Failed to dispatch parking notification: ${err.message}`);
            });
        }
        catch (err) {
            this.logger.error(`Error triggering parking notification: ${err.message}`);
        }
        return formattedReport;
    }
    formatReportResponse(report) {
        const timeRemaining = this.getTimeRemaining(report.createdAt);
        const isExpired = timeRemaining === 0;
        return {
            ...report,
            isExpired,
            timeRemainingSeconds: Math.ceil(timeRemaining / 1000),
            expiresAt: report.expiresAt || new Date(report.createdAt.getTime() + this.EXPIRATION_TIME_MINUTES * 60 * 1000),
        };
    }
    filterActiveReports(reports) {
        return reports
            .filter(report => !this.isReportExpired(report.createdAt))
            .map(report => this.formatReportResponse(report));
    }
    async getParkingReportById(id) {
        const report = await this.prismaService.parkingReport.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        nick_name: true,
                        avatar: true,
                        email: true,
                    },
                },
            },
        });
        if (!report) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} not found`);
        }
        if (this.isReportExpired(report.createdAt)) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} has expired`);
        }
        return this.formatReportResponse(report);
    }
    async getAllParkingReports(page = 1, limit = 10, isActive = true) {
        const skip = (page - 1) * limit;
        const now = new Date();
        const tenMinutesAgo = new Date(now.getTime() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const [reports, total] = await Promise.all([
            this.prismaService.parkingReport.findMany({
                where: {
                    is_active: isActive,
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
            }),
            this.prismaService.parkingReport.count({
                where: {
                    is_active: isActive,
                },
            }),
        ]);
        const formattedReports = this.filterActiveReports(reports);
        return { reports: formattedReports, total: formattedReports.length, page, limit };
    }
    async getParkingReportsByUserId(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const now = new Date();
        const tenMinutesAgo = new Date(now.getTime() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const [reports, total] = await Promise.all([
            this.prismaService.parkingReport.findMany({
                where: {
                    user_id: userId,
                    createdAt: {
                        gte: tenMinutesAgo,
                    },
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
            }),
            this.prismaService.parkingReport.count({
                where: {
                    user_id: userId,
                    createdAt: {
                        gte: tenMinutesAgo,
                    },
                },
            }),
        ]);
        const formattedReports = this.filterActiveReports(reports);
        return { reports: formattedReports, total: formattedReports.length, page, limit };
    }
    async getNearbyParkingReports(latitude, longitude, radiusInKm = 5, page = 1, limit = 10) {
        const latDelta = radiusInKm / 111;
        const lonDelta = radiusInKm / (111 * Math.cos((latitude * Math.PI) / 180));
        const skip = (page - 1) * limit;
        const now = new Date();
        const tenMinutesAgo = new Date(now.getTime() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const [reports, total] = await Promise.all([
            this.prismaService.parkingReport.findMany({
                where: {
                    is_active: true,
                    createdAt: {
                        gte: tenMinutesAgo,
                    },
                    latitude: {
                        gte: latitude - latDelta,
                        lte: latitude + latDelta,
                    },
                    longitude: {
                        gte: longitude - lonDelta,
                        lte: longitude + lonDelta,
                    },
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
            }),
            this.prismaService.parkingReport.count({
                where: {
                    is_active: true,
                    createdAt: {
                        gte: tenMinutesAgo,
                    },
                    latitude: {
                        gte: latitude - latDelta,
                        lte: latitude + latDelta,
                    },
                    longitude: {
                        gte: longitude - lonDelta,
                        lte: longitude + lonDelta,
                    },
                },
            }),
        ]);
        const formattedReports = this.filterActiveReports(reports);
        return { reports: formattedReports, total: formattedReports.length, page, limit };
    }
    async createParkingSpot(userId, createParkingSpotDto) {
        let finalParkingCost = createParkingSpotDto.parking_cost ?? enums_2.ParkingCost.FREE;
        if (createParkingSpotDto.disabled_facility) {
            finalParkingCost = enums_2.ParkingCost.FREE;
        }
        const spot = await this.prismaService.parkingSpot.create({
            data: {
                latitude: createParkingSpotDto.latitude,
                longitude: createParkingSpotDto.longitude,
                parking_cost: finalParkingCost,
                electric_charging: createParkingSpotDto.electric_charging,
                disabled_facility: createParkingSpotDto.disabled_facility,
                disabled_facility_location: createParkingSpotDto.disabled_facility_location
                    ? enums_1.DisabledFacilityLocation[createParkingSpotDto.disabled_facility_location]
                    : undefined,
            },
        });
        return spot;
    }
    async getAllParkingSpots(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [spots, total] = await Promise.all([
            this.prismaService.parkingSpot.findMany({ skip, take: limit }),
            this.prismaService.parkingSpot.count(),
        ]);
        return { spots, total, page, limit };
    }
    async getParkingSpotById(id) {
        const spot = await this.prismaService.parkingSpot.findUnique({
            where: { id },
        });
        if (!spot) {
            throw new common_1.NotFoundException(`Parking spot with ID ${id} not found`);
        }
        return spot;
    }
    async getNearbyParkingSpots(latitude, longitude, radiusInMeters = this.DEFAULT_NEARBY_RADIUS_METERS, page = 1, limit = 50) {
        if (!this.geolocationService.validateCoordinates(latitude, longitude)) {
            throw new common_1.BadRequestException('Invalid latitude or longitude');
        }
        const radiusInKm = radiusInMeters / 1000;
        const latDelta = radiusInKm / 111;
        const lonDelta = radiusInKm / (111 * Math.cos((latitude * Math.PI) / 180));
        const tenMinutesAgo = new Date(Date.now() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const candidates = await this.prismaService.parkingSpot.findMany({
            where: {
                is_active: true,
                latitude: { gte: latitude - latDelta, lte: latitude + latDelta },
                longitude: { gte: longitude - lonDelta, lte: longitude + lonDelta },
            },
            include: {
                reports: {
                    where: {
                        is_active: true,
                        createdAt: { gte: tenMinutesAgo },
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                    include: {
                        user: { select: { id: true, name: true, nick_name: true, avatar: true } },
                    },
                },
            },
        });
        const spotsWithDistance = candidates
            .map((spot) => ({
            ...spot,
            distanceMeters: Math.round(this.geolocationService.calculateDistance(latitude, longitude, spot.latitude, spot.longitude)),
            activeReport: spot.reports[0] ?? null,
        }))
            .filter((spot) => spot.distanceMeters <= radiusInMeters)
            .sort((a, b) => a.distanceMeters - b.distanceMeters);
        const skip = (page - 1) * limit;
        const paginatedSpots = spotsWithDistance.slice(skip, skip + limit);
        return {
            spots: paginatedSpots.map(({ reports, ...spot }) => spot),
            total: spotsWithDistance.length,
            page,
            limit,
            radiusInMeters,
        };
    }
    async leaveParkingSpot(userId, spotId) {
        const spot = await this.prismaService.parkingSpot.findUnique({
            where: { id: spotId },
        });
        if (!spot) {
            throw new common_1.NotFoundException(`Parking spot with ID ${spotId} not found`);
        }
        if (!spot.is_active) {
            throw new common_1.BadRequestException('This parking spot is no longer active');
        }
        const tenMinutesAgo = new Date(Date.now() - this.EXPIRATION_TIME_MINUTES * 60 * 1000);
        const recentLeaveReport = await this.prismaService.parkingReport.findFirst({
            where: {
                user_id: userId,
                spotId,
                createdAt: { gte: tenMinutesAgo },
            },
        });
        if (recentLeaveReport) {
            return recentLeaveReport;
        }
        const expiresAt = this.getExpirationTime();
        const leaveReport = await this.prismaService.parkingReport.create({
            data: {
                user_id: userId,
                spotId: spot.id,
                latitude: spot.latitude,
                longitude: spot.longitude,
                parking_cost: spot.parking_cost,
                electric_charging: spot.electric_charging,
                disabled_facility: spot.disabled_facility,
                disabled_facility_location: spot.disabled_facility_location,
                is_active: true,
                expiresAt,
            },
            include: {
                user: { select: { id: true, name: true, nick_name: true, avatar: true } },
            },
        });
        const updatedSpot = await this.prismaService.parkingSpot.update({
            where: { id: spotId },
            data: { available: true },
        });
        const leavingUser = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, nick_name: true },
        });
        const newBalance = await this.awardLeaveCredit(userId, leaveReport.id);
        this.notificationDispatcherService
            .dispatchParkingLeaveNotification(updatedSpot, leavingUser, leaveReport.id)
            .catch((err) => {
            this.logger.error(`Failed to dispatch parking leave notification: ${err.message}`);
        });
        return {
            spotId,
            latitude: updatedSpot.latitude,
            longitude: updatedSpot.longitude,
            available: updatedSpot.available,
            leaveReportId: leaveReport.id,
            creditAwarded: true,
            parking_notifications_available: newBalance,
        };
    }
    async reserveParkingSpot(userId, spotId) {
        const spot = await this.prismaService.parkingSpot.findUnique({
            where: { id: spotId },
        });
        if (!spot) {
            throw new common_1.NotFoundException(`Parking spot with ID ${spotId} not found`);
        }
        if (!spot.is_active) {
            throw new common_1.BadRequestException('This parking spot is no longer active');
        }
        const updatedSpot = await this.prismaService.parkingSpot.update({
            where: { id: spotId },
            data: { available: false },
        });
        this.logger.log(`Parking spot ${spotId} reserved by user ${userId}`);
        return {
            spotId: updatedSpot.id,
            latitude: updatedSpot.latitude,
            longitude: updatedSpot.longitude,
            available: updatedSpot.available,
        };
    }
    async awardLeaveCredit(userId, referenceId) {
        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                parking_reports_submitted: { increment: 1 },
                parking_notifications_available: { increment: 1 },
            },
        });
        await this.prismaService.parkingNotificationCredit.create({
            data: {
                user_id: userId,
                parking_report_id: referenceId,
                transaction_type: 'EARNED',
                amount: 1,
                balance: updatedUser.parking_notifications_available,
            },
        });
        this.logger.log(`Leave notification credit earned for user ${userId}. New balance: ${updatedUser.parking_notifications_available}`);
        return updatedUser.parking_notifications_available;
    }
    async updateParkingReport(id, userId, updateParkingReportDto) {
        const report = await this.prismaService.parkingReport.findUnique({
            where: { id },
        });
        if (!report) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} not found`);
        }
        if (this.isReportExpired(report.createdAt)) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} has expired`);
        }
        if (report.user_id !== userId) {
            throw new Error('Unauthorized: You can only update your own parking reports');
        }
        const disabledFacility = updateParkingReportDto.disabled_facility !== undefined
            ? updateParkingReportDto.disabled_facility
            : report.disabled_facility;
        let finalParkingCost = updateParkingReportDto.parking_cost !== undefined
            ? updateParkingReportDto.parking_cost
            : report.parking_cost;
        if (disabledFacility) {
            finalParkingCost = enums_2.ParkingCost.FREE;
        }
        const updatedReport = await this.prismaService.parkingReport.update({
            where: { id },
            data: {
                latitude: updateParkingReportDto.latitude,
                longitude: updateParkingReportDto.longitude,
                parking_cost: finalParkingCost,
                electric_charging: updateParkingReportDto.electric_charging,
                disabled_facility: updateParkingReportDto.disabled_facility,
                disabled_facility_location: updateParkingReportDto.disabled_facility_location,
                is_active: updateParkingReportDto.is_active,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        return this.formatReportResponse(updatedReport);
    }
    async deleteParkingReport(id, userId) {
        const report = await this.prismaService.parkingReport.findUnique({
            where: { id },
        });
        if (!report) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} not found`);
        }
        if (report.user_id !== userId) {
            throw new Error('Unauthorized: You can only delete your own parking reports');
        }
        return this.prismaService.parkingReport.delete({
            where: { id },
        });
    }
    async deactivateParkingReport(id, userId) {
        const report = await this.prismaService.parkingReport.findUnique({
            where: { id },
        });
        if (!report) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} not found`);
        }
        if (this.isReportExpired(report.createdAt)) {
            throw new common_1.NotFoundException(`Parking report with ID ${id} has expired`);
        }
        if (report.user_id !== userId) {
            throw new Error('Unauthorized: You can only deactivate your own parking reports');
        }
        const deactivatedReport = await this.prismaService.parkingReport.update({
            where: { id },
            data: { is_active: false },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        return this.formatReportResponse(deactivatedReport);
    }
    async getUserParkingCredits(userId) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: {
                parking_notifications_available: true,
                parking_reports_submitted: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const notificationsReceived = user.parking_reports_submitted - user.parking_notifications_available + 1;
        return {
            parking_notifications_available: user.parking_notifications_available,
            parking_reports_submitted: user.parking_reports_submitted,
            notifications_received: Math.max(0, notificationsReceived),
        };
    }
    async getUserParkingCreditHistory(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [transactions, total] = await Promise.all([
            this.prismaService.parkingNotificationCredit.findMany({
                where: { user_id: userId },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.parkingNotificationCredit.count({
                where: { user_id: userId },
            }),
        ]);
        return {
            transactions,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
};
exports.ParkingReportService = ParkingReportService;
exports.ParkingReportService = ParkingReportService = ParkingReportService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_dispatcher_service_1.NotificationDispatcherService,
        geolocation_service_1.GeolocationService])
], ParkingReportService);
//# sourceMappingURL=parking-report.service.js.map