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
exports.DocumentExpiryWarningsDto = exports.UserDocumentsListDto = exports.UserDocumentResponseDto = exports.UpdateUserDocumentFileDto = exports.UpdateUserDocumentDto = exports.UploadUserDocumentFileDto = exports.UploadUserDocumentDto = exports.DocumentTypeEnum = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var DocumentTypeEnum;
(function (DocumentTypeEnum) {
    DocumentTypeEnum["LICENSE"] = "LICENSE";
    DocumentTypeEnum["INSURANCE"] = "INSURANCE";
    DocumentTypeEnum["TAX"] = "TAX";
    DocumentTypeEnum["VEHICLE_OWNERSHIP"] = "VEHICLE_OWNERSHIP";
    DocumentTypeEnum["CAR_INSPECTION"] = "CAR_INSPECTION";
})(DocumentTypeEnum || (exports.DocumentTypeEnum = DocumentTypeEnum = {}));
class UploadUserDocumentDto {
    document_type;
    unique_id;
    expiry_date;
    document_url;
}
exports.UploadUserDocumentDto = UploadUserDocumentDto;
__decorate([
    (0, class_validator_1.IsEnum)(DocumentTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentDto.prototype, "document_type", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === undefined || value === null ? value : String(value)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadUserDocumentDto.prototype, "unique_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentDto.prototype, "document_url", void 0);
class UploadUserDocumentFileDto {
    document_type;
    unique_id;
    expiry_date;
    document_url;
}
exports.UploadUserDocumentFileDto = UploadUserDocumentFileDto;
__decorate([
    (0, class_validator_1.IsEnum)(DocumentTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentFileDto.prototype, "document_type", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === undefined || value === null ? value : String(value)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadUserDocumentFileDto.prototype, "unique_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentFileDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadUserDocumentFileDto.prototype, "document_url", void 0);
class UpdateUserDocumentDto {
    unique_id;
    document_url;
    document_type;
    expiry_date;
}
exports.UpdateUserDocumentDto = UpdateUserDocumentDto;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === undefined || value === null ? value : String(value)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDocumentDto.prototype, "unique_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentDto.prototype, "document_url", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DocumentTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentDto.prototype, "document_type", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentDto.prototype, "expiry_date", void 0);
class UpdateUserDocumentFileDto {
    unique_id;
    expiry_date;
    document_type;
    document_url;
}
exports.UpdateUserDocumentFileDto = UpdateUserDocumentFileDto;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === undefined || value === null ? value : String(value)),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDocumentFileDto.prototype, "unique_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentFileDto.prototype, "expiry_date", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DocumentTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentFileDto.prototype, "document_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDocumentFileDto.prototype, "document_url", void 0);
class UserDocumentResponseDto {
    id;
    unique_id;
    document_type;
    document_url;
    expiry_date;
    is_verified;
    isExpired;
    daysUntilExpiry;
}
exports.UserDocumentResponseDto = UserDocumentResponseDto;
class UserDocumentsListDto {
    documents;
}
exports.UserDocumentsListDto = UserDocumentsListDto;
class DocumentExpiryWarningsDto {
    expired;
    expiring;
    hasWarnings;
}
exports.DocumentExpiryWarningsDto = DocumentExpiryWarningsDto;
//# sourceMappingURL=user-document.dto.js.map