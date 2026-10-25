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
exports.PaginatedFaqResponseDto = exports.FaqResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
class FaqResponseDto {
    id;
    title;
    description;
    createdAt;
    updatedAt;
}
exports.FaqResponseDto = FaqResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FaqResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FaqResponseDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FaqResponseDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], FaqResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], FaqResponseDto.prototype, "updatedAt", void 0);
class PaginatedFaqResponseDto {
    faqs;
    totalFaqs;
    page;
    limit;
    totalPages;
}
exports.PaginatedFaqResponseDto = PaginatedFaqResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => FaqResponseDto),
    __metadata("design:type", Array)
], PaginatedFaqResponseDto.prototype, "faqs", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PaginatedFaqResponseDto.prototype, "totalFaqs", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PaginatedFaqResponseDto.prototype, "page", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PaginatedFaqResponseDto.prototype, "limit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PaginatedFaqResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=faq-response.dto.js.map