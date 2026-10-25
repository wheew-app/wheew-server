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
exports.AppleSigninDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../../generated/prisma/enums");
const gender_transformer_1 = require("../../../common/transformers/gender.transformer");
const is_fcm_token_validator_1 = require("../../../common/validators/is-fcm-token.validator");
const trimValue = ({ value }) => typeof value === "string" ? value.trim() : value;
class AppleSigninDto {
    identityToken;
    nonce;
    fcm_token;
    name;
    licence_id;
    nick_name;
    designation;
    gender;
    birth_year;
    is_more_options_accepted;
    vehicle_type;
    vehicle_model;
    vehicle_color;
    country;
    city;
}
exports.AppleSigninDto = AppleSigninDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "identityToken", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "nonce", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(trimValue),
    (0, is_fcm_token_validator_1.IsFcmToken)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "fcm_token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "licence_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "nick_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "designation", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Gender),
    (0, class_transformer_1.Transform)(gender_transformer_1.transformGender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1000),
    (0, class_validator_1.Max)(new Date().getFullYear() - 16, {
        message: "User age must be 16 or greater"
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AppleSigninDto.prototype, "birth_year", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AppleSigninDto.prototype, "is_more_options_accepted", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.VehicleType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "vehicle_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "vehicle_model", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "vehicle_color", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppleSigninDto.prototype, "city", void 0);
//# sourceMappingURL=apple-signin.dto.js.map