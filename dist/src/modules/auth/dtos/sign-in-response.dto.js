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
exports.SignInResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../../generated/prisma/enums");
class SignInResponseDto {
    id;
    name;
    email;
    licence_id;
    nick_name;
    phone;
    email_verified;
    role;
    token;
    requiresOnboarding;
    license_no_verified;
    is_vehicle_verified;
    is_vehicle_ownership_document_submitted;
    country;
    city;
    gender;
    birth_year;
}
exports.SignInResponseDto = SignInResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.ADMIN] }),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.ADMIN] }),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.USER] }),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "licence_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ groups: [enums_1.UserRole.USER] }),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "nick_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SignInResponseDto.prototype, "email_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "token", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SignInResponseDto.prototype, "requiresOnboarding", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SignInResponseDto.prototype, "license_no_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SignInResponseDto.prototype, "is_vehicle_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], SignInResponseDto.prototype, "is_vehicle_ownership_document_submitted", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "city", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SignInResponseDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SignInResponseDto.prototype, "birth_year", void 0);
//# sourceMappingURL=sign-in-response.dto.js.map