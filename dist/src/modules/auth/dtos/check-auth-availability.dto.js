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
exports.CheckAuthAvailabilityDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const trimValue = ({ value }) => typeof value === "string" ? value.trim() : value;
class CheckAuthAvailabilityDto {
    nick_name;
    licence_id;
    license_id;
}
exports.CheckAuthAvailabilityDto = CheckAuthAvailabilityDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], CheckAuthAvailabilityDto.prototype, "nick_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(6, 7, {
        message: "Licence ID must be 6 or 7 characters long"
    }),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], CheckAuthAvailabilityDto.prototype, "licence_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(6, 7, {
        message: "License ID must be 6 or 7 characters long"
    }),
    (0, class_transformer_1.Transform)(trimValue),
    __metadata("design:type", String)
], CheckAuthAvailabilityDto.prototype, "license_id", void 0);
//# sourceMappingURL=check-auth-availability.dto.js.map