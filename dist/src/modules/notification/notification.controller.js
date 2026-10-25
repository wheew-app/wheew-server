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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const create_notification_dto_1 = require("./dtos/create-notification.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const enums_1 = require("../../../generated/prisma/enums");
const notification_event_service_1 = require("./services/notification-event.service");
const notification_preference_service_1 = require("./services/notification-preference.service");
const notification_dispatcher_service_1 = require("./services/notification-dispatcher.service");
const notification_event_dto_1 = require("./dtos/notification-event.dto");
const send_location_notification_dto_1 = require("./dtos/send-location-notification.dto");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
let NotificationController = class NotificationController {
    notificationService;
    notificationEventService;
    notificationPreferenceService;
    notificationDispatcherService;
    smtpProvider;
    constructor(notificationService, notificationEventService, notificationPreferenceService, notificationDispatcherService, smtpProvider) {
        this.notificationService = notificationService;
        this.notificationEventService = notificationEventService;
        this.notificationPreferenceService = notificationPreferenceService;
        this.notificationDispatcherService = notificationDispatcherService;
        this.smtpProvider = smtpProvider;
    }
    async createNotification(createNotificationDto) {
        const createdNotification = await this.notificationService.createNotification(createNotificationDto);
        return createdNotification;
    }
    async getNotificationEvents(request, pagination, unreadOnly = 'false') {
        const tokenPayload = request['payload'];
        const result = await this.notificationEventService.getEventsByUser(tokenPayload.id, pagination, unreadOnly === 'true');
        return result;
    }
    async getNotificationEvent(request, eventId) {
        const tokenPayload = request['payload'];
        const event = await this.notificationEventService.getEventById(eventId);
        if (event.userId !== tokenPayload.id) {
            throw new Error('Unauthorized');
        }
        return event;
    }
    async markNotificationAsRead(request, eventId) {
        const tokenPayload = request['payload'];
        return await this.notificationEventService.markAsRead(eventId, tokenPayload.id);
    }
    async markAllNotificationsAsRead(request) {
        const tokenPayload = request['payload'];
        return await this.notificationEventService.markAllAsRead(tokenPayload.id);
    }
    async deleteNotification(request, eventId) {
        const tokenPayload = request['payload'];
        await this.notificationEventService.deleteEvent(eventId, tokenPayload.id);
        return { success: true };
    }
    async deleteAllNotifications(request) {
        const tokenPayload = request['payload'];
        return await this.notificationEventService.deleteAllEvents(tokenPayload.id);
    }
    async getPreferences(request) {
        const tokenPayload = request['payload'];
        return await this.notificationPreferenceService.getPreferences(tokenPayload.id);
    }
    async updatePreferences(request, updateDto) {
        const tokenPayload = request['payload'];
        return await this.notificationPreferenceService.updatePreferences(tokenPayload.id, updateDto);
    }
    async updateUserLocation(request, updateLocationDto) {
        const tokenPayload = request['payload'];
        const geolocationService = new (require('../../common/services/geolocation.service').GeolocationService)(null);
        if (!geolocationService.validateCoordinates(updateLocationDto.latitude, updateLocationDto.longitude)) {
            throw new Error('Invalid coordinates');
        }
        return await geolocationService.updateUserLocation(tokenPayload.id, updateLocationDto.latitude, updateLocationDto.longitude, updateLocationDto.accuracy);
    }
    async getUserLocation(request) {
        const tokenPayload = request['payload'];
        const geolocationService = new (require('../../common/services/geolocation.service').GeolocationService)(null);
        return await geolocationService.getUserLocation(tokenPayload.id);
    }
    async getUnreadCount(request) {
        const tokenPayload = request['payload'];
        const result = await this.notificationEventService.getEventsByUser(tokenPayload.id, { page: 1, limit: 1 }, true);
        return { unreadCount: result.unreadCount };
    }
    async sendLocationBasedNotification(request, sendLocationNotificationDto) {
        const tokenPayload = request['payload'];
        if (tokenPayload.role !== enums_1.UserRole.ADMIN) {
            throw new common_1.BadRequestException("Only administrators can send location-based notifications");
        }
        try {
            const result = await this.notificationDispatcherService.dispatchLocationNotification(sendLocationNotificationDto.latitude, sendLocationNotificationDto.longitude, sendLocationNotificationDto.radiusInKm, sendLocationNotificationDto.title, sendLocationNotificationDto.message, sendLocationNotificationDto.emailSubject, sendLocationNotificationDto.sendEmail, sendLocationNotificationDto.sendPushNotification, this.smtpProvider);
            return {
                success: true,
                totalUsersFound: result.totalUsersFound,
                notificationsSent: result.notificationsSent,
                emailsSent: result.emailsSent,
                failedCount: result.failedCount,
                message: `Notifications sent successfully to ${result.notificationsSent} users via push notification and ${result.emailsSent} users via email`,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to send location-based notifications: ${error.message}`);
        }
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Post)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification created successfully"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    (0, common_1.Get)("events"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification events fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Query)('unreadOnly')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_dto_1.PaginationDto, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationEvents", null);
__decorate([
    (0, common_1.Get)("events/:id"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification event fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationEvent", null);
__decorate([
    (0, common_1.Patch)("events/:id/read"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification marked as read"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markNotificationAsRead", null);
__decorate([
    (0, common_1.Patch)("read-all"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("all notifications marked as read"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAllNotificationsAsRead", null);
__decorate([
    (0, common_1.Delete)("events/:id"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification deleted successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Delete)("events"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("all notifications deleted successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteAllNotifications", null);
__decorate([
    (0, common_1.Get)("preferences"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification preferences fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getPreferences", null);
__decorate([
    (0, common_1.Put)("preferences"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("notification preferences updated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, notification_event_dto_1.UpdateNotificationPreferenceDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Post)("location"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("user location updated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, notification_event_dto_1.UpdateUserLocationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateUserLocation", null);
__decorate([
    (0, common_1.Get)("location"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("user location fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUserLocation", null);
__decorate([
    (0, common_1.Get)("count/unread"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("unread notification count fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Post)("send-location-based"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("location-based notification sent successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, send_location_notification_dto_1.SendLocationNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendLocationBasedNotification", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)({
        path: "notifications"
    }),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        notification_event_service_1.NotificationEventService,
        notification_preference_service_1.NotificationPreferenceService,
        notification_dispatcher_service_1.NotificationDispatcherService,
        smtp_provider_1.SMTPProvider])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map