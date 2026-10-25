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
exports.FaqService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FaqService = class FaqService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createFaq(createFaqDto) {
        const title = createFaqDto.title.trim();
        const description = createFaqDto.description.trim();
        if (!title) {
            throw new common_1.BadRequestException("Faq title cannot be empty");
        }
        if (!description) {
            throw new common_1.BadRequestException("Faq description cannot be empty");
        }
        return this.prismaService.faq.create({
            data: {
                title,
                description,
            },
        });
    }
    async getFaqs(paginationDto) {
        const page = paginationDto.page || 1;
        const limit = paginationDto.limit || 20;
        const skip = (page - 1) * limit;
        const [totalFaqs, faqs] = await Promise.all([
            this.prismaService.faq.count(),
            this.prismaService.faq.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }),
        ]);
        return {
            faqs,
            totalFaqs,
            page,
            limit,
            totalPages: Math.ceil(totalFaqs / limit),
        };
    }
    async getFaqById(faqId) {
        const faq = await this.prismaService.faq.findUnique({
            where: { id: faqId },
        });
        if (!faq) {
            throw new common_1.NotFoundException("Faq not found");
        }
        return faq;
    }
    async updateFaq(faqId, updateFaqDto) {
        const existingFaq = await this.getFaqById(faqId);
        const updateData = {};
        if (updateFaqDto.title !== undefined) {
            const title = updateFaqDto.title.trim();
            if (!title) {
                throw new common_1.BadRequestException("Faq title cannot be empty");
            }
            updateData.title = title;
        }
        if (updateFaqDto.description !== undefined) {
            const description = updateFaqDto.description.trim();
            if (!description) {
                throw new common_1.BadRequestException("Faq description cannot be empty");
            }
            updateData.description = description;
        }
        if (Object.keys(updateData).length === 0) {
            return existingFaq;
        }
        return this.prismaService.faq.update({
            where: { id: faqId },
            data: updateData,
        });
    }
    async deleteFaq(faqId) {
        await this.getFaqById(faqId);
        await this.prismaService.faq.delete({
            where: { id: faqId },
        });
        return { message: "Faq deleted successfully" };
    }
};
exports.FaqService = FaqService;
exports.FaqService = FaqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FaqService);
//# sourceMappingURL=faq.service.js.map