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
exports.UserResponseDto = exports.AuthMeDocumentDto = void 0;
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../../generated/prisma/enums");
class AuthMeDocumentDto {
    document_type;
    daysUntilExpiry;
}
exports.AuthMeDocumentDto = AuthMeDocumentDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AuthMeDocumentDto.prototype, "document_type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], AuthMeDocumentDto.prototype, "daysUntilExpiry", void 0);
class UserResponseDto {
    id;
    avatar;
    name;
    email;
    phone;
    role;
    is_more_options_accepted;
    licence_id;
    nick_name;
    license_no_verified;
    is_blocked;
    designation;
    dob;
    email_verified;
    is_deleted;
    rating;
    totalRating;
    totalRatings;
    subscription_end_at;
    is_subscription_active;
    total_created_sessions;
    total_cancelled_sessions;
    vehicle_type;
    vehicle_model;
    vehicle_color;
    is_vehicle_verified;
    is_vehicle_ownership_document_submitted;
    country;
    city;
    gender;
    birth_year;
    age;
    isOnline;
    lastSeenAt;
    documents;
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(obj => {
        if (obj.value) {
            let value = obj.value;
            value = value.replaceAll("\\", "\/");
            return `${value}`;
        }
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.ADMIN] }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER] }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: [enums_1.UserRole.ADMIN]
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_more_options_accepted", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.USER] }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "licence_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.USER] }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "nick_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "license_no_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: [enums_1.UserRole.ADMIN]
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_blocked", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "designation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(obj => {
        if (!obj.value)
            return obj.value;
        return new Date(obj.value).toLocaleDateString();
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "dob", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "email_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_deleted", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "rating", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "totalRating", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "totalRatings", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "subscription_end_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_subscription_active", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "total_created_sessions", void 0);
__decorate([
    (0, class_transformer_1.Expose)({
        groups: ['admin']
    }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "total_cancelled_sessions", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "vehicle_type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "vehicle_model", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "vehicle_color", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_vehicle_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "is_vehicle_ownership_document_submitted", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "city", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "birth_year", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "isOnline", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "lastSeenAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserResponseDto.prototype, "documents", void 0);
//# sourceMappingURL=user-response.dto.js.map