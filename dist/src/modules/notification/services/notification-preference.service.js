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
exports.NotificationPreferenceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let NotificationPreferenceService = class NotificationPreferenceService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getPreferences(userId) {
        let preferences = await this.prismaService.notificationPreference.findUnique({
            where: { userId },
        });
        if (!preferences) {
            preferences = await this.createDefaultPreferences(userId);
        }
        return preferences;
    }
    async createDefaultPreferences(userId) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return this.prismaService.notificationPreference.create({
            data: {
                userId,
                parkingNotifications: true,
                chatNotifications: true,
                ratingNotifications: true,
                groupChatNotifications: true,
                systemNotifications: true,
                notificationRadius: 200,
            },
        });
    }
    async updatePreferences(userId, updatePreferenceDto) {
        const preferences = await this.getPreferences(userId);
        if (updatePreferenceDto.notificationRadius !== undefined) {
            if (updatePreferenceDto.notificationRadius < 50 || updatePreferenceDto.notificationRadius > 5000) {
                throw new common_1.BadRequestException('Notification radius must be between 50 and 5000 meters');
            }
        }
        return this.prismaService.notificationPreference.update({
            where: { userId },
            data: updatePreferenceDto,
        });
    }
    async isNotificationEnabled(userId, notificationType) {
        const preferences = await this.getPreferences(userId);
        const typeKey = `${notificationType}Notifications`;
        if (typeKey in preferences) {
            return preferences[typeKey];
        }
        return true;
    }
    async shouldNotifyForParking(userId, distance) {
        const isEnabled = await this.isNotificationEnabled(userId, 'parking');
        if (!isEnabled) {
            return false;
        }
        const preferences = await this.getPreferences(userId);
        return distance <= preferences.notificationRadius;
    }
    async getNotificationRadius(userId) {
        const preferences = await this.getPreferences(userId);
        return preferences.notificationRadius;
    }
    async setNotificationRadius(userId, radius) {
        if (radius < 50 || radius > 5000) {
            throw new common_1.BadRequestException('Notification radius must be between 50 and 5000 meters');
        }
        return this.updatePreferences(userId, { notificationRadius: radius });
    }
    async disableAllNotifications(userId) {
        return this.updatePreferences(userId, {
            parkingNotifications: false,
            chatNotifications: false,
            ratingNotifications: false,
            groupChatNotifications: false,
            systemNotifications: false,
        });
    }
    async enableAllNotifications(userId) {
        return this.updatePreferences(userId, {
            parkingNotifications: true,
            chatNotifications: true,
            ratingNotifications: true,
            groupChatNotifications: true,
            systemNotifications: true,
        });
    }
    async getUsersWithParkingNotificationsEnabled() {
        const preferences = await this.prismaService.notificationPreference.findMany({
            where: { parkingNotifications: true },
            select: { userId: true },
        });
        return preferences.map((p) => p.userId);
    }
};
exports.NotificationPreferenceService = NotificationPreferenceService;
exports.NotificationPreferenceService = NotificationPreferenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationPreferenceService);
//# sourceMappingURL=notification-preference.service.js.map