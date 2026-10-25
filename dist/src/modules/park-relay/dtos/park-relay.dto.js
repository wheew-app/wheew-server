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
exports.UpdateParkingAreaRatingDto = exports.CreateParkingAreaRatingDto = exports.UpdateParkingAreaDto = exports.ViewportParkingAreaDto = exports.SearchParkingAreaDto = exports.SubmitParkingAreaPointDto = exports.CreateParkingAreaDto = exports.ParkingAreaPointDto = exports.AnswerPaidParkingPromptDto = exports.ParkedEventDto = exports.CreateParkingSessionDto = exports.SaveParkingLocationDto = exports.AcceptHandoffAndParkDto = exports.CreateParkingHandoffDto = exports.UpdateParkingModeDto = exports.ParkingCoordinatesDto = exports.ParkingSaveSourceDto = exports.ParkingSearchStatusDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../common/enums");
var ParkingSearchStatusDto;
(function (ParkingSearchStatusDto) {
    ParkingSearchStatusDto["IDLE"] = "IDLE";
    ParkingSearchStatusDto["SEARCHING"] = "SEARCHING";
    ParkingSearchStatusDto["PARKED"] = "PARKED";
})(ParkingSearchStatusDto || (exports.ParkingSearchStatusDto = ParkingSearchStatusDto = {}));
var ParkingSaveSourceDto;
(function (ParkingSaveSourceDto) {
    ParkingSaveSourceDto["AUTO"] = "AUTO";
    ParkingSaveSourceDto["MANUAL"] = "MANUAL";
})(ParkingSaveSourceDto || (exports.ParkingSaveSourceDto = ParkingSaveSourceDto = {}));
class ParkingCoordinatesDto {
    latitude;
    longitude;
}
exports.ParkingCoordinatesDto = ParkingCoordinatesDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ParkingCoordinatesDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ParkingCoordinatesDto.prototype, "longitude", void 0);
class UpdateParkingModeDto extends ParkingCoordinatesDto {
    accuracy;
    confidence;
}
exports.UpdateParkingModeDto = UpdateParkingModeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateParkingModeDto.prototype, "accuracy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateParkingModeDto.prototype, "confidence", void 0);
class CreateParkingHandoffDto extends ParkingCoordinatesDto {
}
exports.CreateParkingHandoffDto = CreateParkingHandoffDto;
class AcceptHandoffAndParkDto {
    note;
    photoUrl;
    accuracy;
    confidence;
}
exports.AcceptHandoffAndParkDto = AcceptHandoffAndParkDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcceptHandoffAndParkDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AcceptHandoffAndParkDto.prototype, "photoUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AcceptHandoffAndParkDto.prototype, "accuracy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AcceptHandoffAndParkDto.prototype, "confidence", void 0);
class SaveParkingLocationDto extends ParkingCoordinatesDto {
    name;
    spotId;
    accuracy;
    confidence;
    source;
    parkingType;
    durationMin;
    expiresAt;
    note;
    photoUrl;
}
exports.SaveParkingLocationDto = SaveParkingLocationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "spotId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveParkingLocationDto.prototype, "accuracy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveParkingLocationDto.prototype, "confidence", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(ParkingSaveSourceDto),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "source", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "parkingType", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingType === enums_1.ParkingCost.PAID),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SaveParkingLocationDto.prototype, "durationMin", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingType === enums_1.ParkingCost.PAID),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "expiresAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveParkingLocationDto.prototype, "photoUrl", void 0);
class CreateParkingSessionDto extends ParkingCoordinatesDto {
    spotId;
    costType;
    durationMin;
    expiresAt;
}
exports.CreateParkingSessionDto = CreateParkingSessionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateParkingSessionDto.prototype, "spotId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], CreateParkingSessionDto.prototype, "costType", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.costType === enums_1.ParkingCost.PAID),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateParkingSessionDto.prototype, "durationMin", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.costType === enums_1.ParkingCost.PAID),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateParkingSessionDto.prototype, "expiresAt", void 0);
class ParkedEventDto extends SaveParkingLocationDto {
    createPaidParkingPrompt;
}
exports.ParkedEventDto = ParkedEventDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ParkedEventDto.prototype, "createPaidParkingPrompt", void 0);
class AnswerPaidParkingPromptDto {
    parkingType;
    durationMin;
    expiresAt;
}
exports.AnswerPaidParkingPromptDto = AnswerPaidParkingPromptDto;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], AnswerPaidParkingPromptDto.prototype, "parkingType", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingType === enums_1.ParkingCost.PAID),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], AnswerPaidParkingPromptDto.prototype, "durationMin", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingType === enums_1.ParkingCost.PAID),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AnswerPaidParkingPromptDto.prototype, "expiresAt", void 0);
class ParkingAreaPointDto extends ParkingCoordinatesDto {
}
exports.ParkingAreaPointDto = ParkingAreaPointDto;
const toParkingAreaTypeArray = ({ value }) => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.flatMap((item) => String(item).split(',')).filter(Boolean);
    }
    return String(value).split(',').filter(Boolean);
};
class CreateParkingAreaDto {
    name;
    description;
    centerLat;
    centerLng;
    polygon;
    parkingCost;
    parkingFee;
    parkingAreaTypes;
    disabledFacilityLocation;
    totalSpots;
    isActive;
}
exports.CreateParkingAreaDto = CreateParkingAreaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateParkingAreaDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateParkingAreaDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateParkingAreaDto.prototype, "centerLat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateParkingAreaDto.prototype, "centerLng", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ParkingAreaPointDto),
    __metadata("design:type", Array)
], CreateParkingAreaDto.prototype, "polygon", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], CreateParkingAreaDto.prototype, "parkingCost", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingCost === enums_1.ParkingCost.PAID),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], CreateParkingAreaDto.prototype, "parkingFee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(toParkingAreaTypeArray),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingAreaType, { each: true }),
    __metadata("design:type", Array)
], CreateParkingAreaDto.prototype, "parkingAreaTypes", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingAreaTypes?.includes(enums_1.ParkingAreaType.DISABLED_FACILITY)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    __metadata("design:type", String)
], CreateParkingAreaDto.prototype, "disabledFacilityLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateParkingAreaDto.prototype, "totalSpots", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateParkingAreaDto.prototype, "isActive", void 0);
class SubmitParkingAreaPointDto {
    name;
    description;
    centerLat;
    centerLng;
    parkingCost;
    parkingFee;
    parkingAreaTypes;
    disabledFacilityLocation;
    totalSpots;
}
exports.SubmitParkingAreaPointDto = SubmitParkingAreaPointDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitParkingAreaPointDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubmitParkingAreaPointDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SubmitParkingAreaPointDto.prototype, "centerLat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SubmitParkingAreaPointDto.prototype, "centerLng", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], SubmitParkingAreaPointDto.prototype, "parkingCost", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingCost === enums_1.ParkingCost.PAID),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], SubmitParkingAreaPointDto.prototype, "parkingFee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(toParkingAreaTypeArray),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingAreaType, { each: true }),
    __metadata("design:type", Array)
], SubmitParkingAreaPointDto.prototype, "parkingAreaTypes", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingAreaTypes?.includes(enums_1.ParkingAreaType.DISABLED_FACILITY)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    __metadata("design:type", String)
], SubmitParkingAreaPointDto.prototype, "disabledFacilityLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SubmitParkingAreaPointDto.prototype, "totalSpots", void 0);
class SearchParkingAreaDto {
    query;
    parkingCost;
    parkingAreaTypes;
    disabledFacilityLocation;
    isActive;
    latitude;
    longitude;
    radiusMeters;
    page;
    limit;
}
exports.SearchParkingAreaDto = SearchParkingAreaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchParkingAreaDto.prototype, "query", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], SearchParkingAreaDto.prototype, "parkingCost", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(toParkingAreaTypeArray),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingAreaType, { each: true }),
    __metadata("design:type", Array)
], SearchParkingAreaDto.prototype, "parkingAreaTypes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    __metadata("design:type", String)
], SearchParkingAreaDto.prototype, "disabledFacilityLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === undefined || value === null || value === '')
            return undefined;
        if (value === true || value === 'true')
            return true;
        if (value === false || value === 'false')
            return false;
        return value;
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SearchParkingAreaDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchParkingAreaDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchParkingAreaDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchParkingAreaDto.prototype, "radiusMeters", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchParkingAreaDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchParkingAreaDto.prototype, "limit", void 0);
class ViewportParkingAreaDto {
    north;
    south;
    east;
    west;
    parkingCost;
    parkingAreaTypes;
    disabledFacilityLocation;
    limit;
}
exports.ViewportParkingAreaDto = ViewportParkingAreaDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], ViewportParkingAreaDto.prototype, "north", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-90),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], ViewportParkingAreaDto.prototype, "south", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], ViewportParkingAreaDto.prototype, "east", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-180),
    (0, class_validator_1.Max)(180),
    __metadata("design:type", Number)
], ViewportParkingAreaDto.prototype, "west", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], ViewportParkingAreaDto.prototype, "parkingCost", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(toParkingAreaTypeArray),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingAreaType, { each: true }),
    __metadata("design:type", Array)
], ViewportParkingAreaDto.prototype, "parkingAreaTypes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    __metadata("design:type", String)
], ViewportParkingAreaDto.prototype, "disabledFacilityLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(500),
    __metadata("design:type", Number)
], ViewportParkingAreaDto.prototype, "limit", void 0);
class UpdateParkingAreaDto {
    name;
    description;
    centerLat;
    centerLng;
    polygon;
    parkingCost;
    parkingFee;
    parkingAreaTypes;
    disabledFacilityLocation;
    totalSpots;
    isActive;
}
exports.UpdateParkingAreaDto = UpdateParkingAreaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateParkingAreaDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateParkingAreaDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateParkingAreaDto.prototype, "centerLat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateParkingAreaDto.prototype, "centerLng", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ParkingAreaPointDto),
    __metadata("design:type", Array)
], UpdateParkingAreaDto.prototype, "polygon", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingCost),
    __metadata("design:type", String)
], UpdateParkingAreaDto.prototype, "parkingCost", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingCost === enums_1.ParkingCost.PAID),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], UpdateParkingAreaDto.prototype, "parkingFee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(toParkingAreaTypeArray),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(enums_1.ParkingAreaType, { each: true }),
    __metadata("design:type", Array)
], UpdateParkingAreaDto.prototype, "parkingAreaTypes", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((dto) => dto.parkingAreaTypes?.includes(enums_1.ParkingAreaType.DISABLED_FACILITY)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DisabledFacilityLocation),
    __metadata("design:type", String)
], UpdateParkingAreaDto.prototype, "disabledFacilityLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateParkingAreaDto.prototype, "totalSpots", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateParkingAreaDto.prototype, "isActive", void 0);
class CreateParkingAreaRatingDto {
    rating;
    review;
}
exports.CreateParkingAreaRatingDto = CreateParkingAreaRatingDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateParkingAreaRatingDto.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateParkingAreaRatingDto.prototype, "review", void 0);
class UpdateParkingAreaRatingDto extends CreateParkingAreaRatingDto {
}
exports.UpdateParkingAreaRatingDto = UpdateParkingAreaRatingDto;
//# sourceMappingURL=park-relay.dto.js.map