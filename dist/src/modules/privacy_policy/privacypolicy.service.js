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
exports.PrivacyPolicyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PrivacyPolicyService = class PrivacyPolicyService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async updateCreatePolicy(createUpdatePolicyDto) {
        const existingPolicy = await this.prismaService.sitePolicy.findFirst({ where: { type: createUpdatePolicyDto.type } });
        if (existingPolicy) {
            return await this.prismaService.sitePolicy.update({ where: { id: existingPolicy.id }, data: { content: createUpdatePolicyDto.content } });
        }
        return await this.prismaService.sitePolicy.create({ data: { type: createUpdatePolicyDto.type, content: createUpdatePolicyDto.content } });
    }
    async getSitePolicy(type) {
        const policy = await this.prismaService.sitePolicy.findFirst({ where: { type } });
        if (policy) {
            return policy;
        }
        throw new common_1.NotFoundException(`${type} not found!`);
    }
};
exports.PrivacyPolicyService = PrivacyPolicyService;
exports.PrivacyPolicyService = PrivacyPolicyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrivacyPolicyService);
//# sourceMappingURL=privacypolicy.service.js.map