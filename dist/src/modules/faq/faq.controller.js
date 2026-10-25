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
exports.FaqController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
const enums_1 = require("../../../generated/prisma/enums");
const create_faq_dto_1 = require("./dtos/create-faq.dto");
const faq_response_dto_1 = require("./dtos/faq-response.dto");
const update_faq_dto_1 = require("./dtos/update-faq.dto");
const faq_service_1 = require("./faq.service");
let FaqController = class FaqController {
    faqService;
    constructor(faqService) {
        this.faqService = faqService;
    }
    async createFaq(createFaqDto) {
        const faq = await this.faqService.createFaq(createFaqDto);
        return (0, class_transformer_1.plainToInstance)(faq_response_dto_1.FaqResponseDto, faq, {
            excludeExtraneousValues: true,
        });
    }
    async getFaqs(paginationDto) {
        const result = await this.faqService.getFaqs(paginationDto);
        return (0, class_transformer_1.plainToInstance)(faq_response_dto_1.PaginatedFaqResponseDto, result, {
            excludeExtraneousValues: true,
        });
    }
    async getFaqById(faqId) {
        const faq = await this.faqService.getFaqById(faqId);
        return (0, class_transformer_1.plainToInstance)(faq_response_dto_1.FaqResponseDto, faq, {
            excludeExtraneousValues: true,
        });
    }
    async updateFaq(faqId, updateFaqDto) {
        const faq = await this.faqService.updateFaq(faqId, updateFaqDto);
        return (0, class_transformer_1.plainToInstance)(faq_response_dto_1.FaqResponseDto, faq, {
            excludeExtraneousValues: true,
        });
    }
    async deleteFaq(faqId) {
        return this.faqService.deleteFaq(faqId);
    }
};
exports.FaqController = FaqController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Faq created successfully"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faq_dto_1.CreateFaqDto]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "createFaq", null);
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Faqs fetched successfully"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getFaqs", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Faq fetched successfully"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getFaqById", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Faq updated successfully"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_faq_dto_1.UpdateFaqDto]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "updateFaq", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Faq deleted successfully"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "deleteFaq", null);
exports.FaqController = FaqController = __decorate([
    (0, common_1.Controller)({
        path: "faqs",
    }),
    __metadata("design:paramtypes", [faq_service_1.FaqService])
], FaqController);
//# sourceMappingURL=faq.controller.js.map