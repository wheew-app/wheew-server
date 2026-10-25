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
exports.CreateParkingSpotDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../common/enums");
class CreateParkingSpotDto {
    latitude;
    longitude;
    parking_cost;
    electric_charging;
    disabled_facility;
    disabled_facility_location;
}
exports.CreateParkingSpotDto = CreateParkingSpotDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateParkingSpotDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateParkingSpotDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], CreateParkingSpotDto.prototype, "parking_cost", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateParkingSpotDto.prototype, "electric_charging", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateParkingSpotDto.prototype, "disabled_facility", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateParkingSpotDto.prototype, "disabled_facility_location", void 0);
//# sourceMappingURL=create-parking-spot.dto.js.map