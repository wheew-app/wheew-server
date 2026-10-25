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
exports.UpdateUserLocationDto = exports.UpdateNotificationPreferenceDto = exports.CreateNotificationEventDto = exports.NotificationEventTypeEnum = void 0;
const class_validator_1 = require("class-validator");
var NotificationEventTypeEnum;
(function (NotificationEventTypeEnum) {
    NotificationEventTypeEnum["PARKING_AVAILABLE"] = "PARKING_AVAILABLE";
    NotificationEventTypeEnum["PARKING_NEARBY"] = "PARKING_NEARBY";
    NotificationEventTypeEnum["CHAT_MESSAGE"] = "CHAT_MESSAGE";
    NotificationEventTypeEnum["CHAT_DELIVERED"] = "CHAT_DELIVERED";
    NotificationEventTypeEnum["CHAT_READ"] = "CHAT_READ";
    NotificationEventTypeEnum["RATING_RECEIVED"] = "RATING_RECEIVED";
    NotificationEventTypeEnum["GROUP_CHAT_MESSAGE"] = "GROUP_CHAT_MESSAGE";
    NotificationEventTypeEnum["GROUP_CHAT_ADDED"] = "GROUP_CHAT_ADDED";
    NotificationEventTypeEnum["GROUP_CHAT_REMOVED"] = "GROUP_CHAT_REMOVED";
    NotificationEventTypeEnum["SYSTEM_NOTIFICATION"] = "SYSTEM_NOTIFICATION";
    NotificationEventTypeEnum["USER_MENTION"] = "USER_MENTION";
    NotificationEventTypeEnum["PARKING_EXPIRING_SOON"] = "PARKING_EXPIRING_SOON";
    NotificationEventTypeEnum["DOCUMENT_EXPIRING_SOON"] = "DOCUMENT_EXPIRING_SOON";
    NotificationEventTypeEnum["DOCUMENT_EXPIRED"] = "DOCUMENT_EXPIRED";
})(NotificationEventTypeEnum || (exports.NotificationEventTypeEnum = NotificationEventTypeEnum = {}));
class CreateNotificationEventDto {
    userId;
    eventType;
    title;
    message;
    payload;
}
exports.CreateNotificationEventDto = CreateNotificationEventDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationEventDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(NotificationEventTypeEnum),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationEventDto.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationEventDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationEventDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateNotificationEventDto.prototype, "payload", void 0);
class UpdateNotificationPreferenceDto {
    parkingNotifications;
    chatNotifications;
    ratingNotifications;
    groupChatNotifications;
    systemNotifications;
    notificationRadius;
}
exports.UpdateNotificationPreferenceDto = UpdateNotificationPreferenceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferenceDto.prototype, "parkingNotifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferenceDto.prototype, "chatNotifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferenceDto.prototype, "ratingNotifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferenceDto.prototype, "groupChatNotifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferenceDto.prototype, "systemNotifications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateNotificationPreferenceDto.prototype, "notificationRadius", void 0);
class UpdateUserLocationDto {
    latitude;
    longitude;
    accuracy;
}
exports.UpdateUserLocationDto = UpdateUserLocationDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateUserLocationDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateUserLocationDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUserLocationDto.prototype, "accuracy", void 0);
//# sourceMappingURL=notification-event.dto.js.map