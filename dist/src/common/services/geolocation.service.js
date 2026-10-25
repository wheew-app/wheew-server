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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../modules/prisma/prisma.service");
let GeolocationService = class GeolocationService {
    prismaService;
    EARTH_RADIUS_METERS = 6371000;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const toRad = (degree) => (degree * Math.PI) / 180;
        const φ1 = toRad(lat1);
        const φ2 = toRad(lat2);
        const Δφ = toRad(lat2 - lat1);
        const Δλ = toRad(lon2 - lon1);
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) *
                Math.cos(φ2) *
                Math.sin(Δλ / 2) *
                Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = this.EARTH_RADIUS_METERS * c;
        return distance;
    }
    async findUsersWithinRadius(centerLat, centerLon, radiusMeters, excludeUserId) {
        const userLocations = await this.prismaService.userLocation.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        nick_name: true,
                        email: true,
                        fcm_token: true,
                        is_blocked: true,
                        is_deleted: true,
                    },
                },
            },
        });
        const usersInRadius = userLocations
            .filter((location) => {
            if (excludeUserId && location.user.id === excludeUserId) {
                return false;
            }
            if (location.user.is_blocked || location.user.is_deleted) {
                return false;
            }
            const distance = this.calculateDistance(centerLat, centerLon, location.latitude, location.longitude);
            return distance <= radiusMeters;
        })
            .map((location) => ({
            id: location.user.id,
            name: location.user.name || '',
            nick_name: location.user.nick_name,
            email: location.user.email,
            fcm_token: location.user.fcm_token,
            distance: this.calculateDistance(centerLat, centerLon, location.latitude, location.longitude),
        }));
        return usersInRadius;
    }
    async updateUserLocation(userId, latitude, longitude, accuracy) {
        return this.prismaService.userLocation.upsert({
            where: { userId },
            create: {
                userId,
                latitude,
                longitude,
                accuracy,
            },
            update: {
                latitude,
                longitude,
                accuracy,
                updatedAt: new Date(),
            },
        });
    }
    async getUserLocation(userId) {
        return this.prismaService.userLocation.findUnique({
            where: { userId },
        });
    }
    async isUserWithinRadius(userId, centerLat, centerLon, radiusMeters) {
        const userLocation = await this.getUserLocation(userId);
        if (!userLocation) {
            return false;
        }
        const distance = this.calculateDistance(centerLat, centerLon, userLocation.latitude, userLocation.longitude);
        return distance <= radiusMeters;
    }
    async getNearestParkingSpots(userId, limit = 10) {
        const userLocation = await this.getUserLocation(userId);
        if (!userLocation) {
            return [];
        }
        const parkingReports = await this.prismaService.parkingReport.findMany({
            where: {
                is_active: true,
                expiresAt: {
                    gte: new Date(),
                },
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
        const parkingWithDistance = parkingReports
            .map((report) => ({
            ...report,
            distance: this.calculateDistance(userLocation.latitude, userLocation.longitude, report.latitude, report.longitude),
        }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, limit);
        return parkingWithDistance;
    }
    validateCoordinates(latitude, longitude) {
        const latValid = latitude >= -90 && latitude <= 90;
        const lonValid = longitude >= -180 && longitude <= 180;
        return latValid && lonValid;
    }
    decimalToDMS(coordinate) {
        const absolute = Math.abs(coordinate);
        const degrees = Math.floor(absolute);
        const minutesDecimal = (absolute - degrees) * 60;
        const minutes = Math.floor(minutesDecimal);
        const seconds = ((minutesDecimal - minutes) * 60).toFixed(2);
        return `${degrees}° ${minutes}' ${seconds}"`;
    }
};
exports.GeolocationService = GeolocationService;
exports.GeolocationService = GeolocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GeolocationService);
//# sourceMappingURL=geolocation.service.js.map