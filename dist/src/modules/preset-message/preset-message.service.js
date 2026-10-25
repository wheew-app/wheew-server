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
exports.PresetMessageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PresetMessageService = class PresetMessageService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createPresetMessage(createPresetMessageDto) {
        return this.prismaService.presetMessage.create({
            data: {
                message: createPresetMessageDto.message_en,
                message_it: createPresetMessageDto.message_it,
                type: createPresetMessageDto.type ?? 'CLASSIC',
                isActive: createPresetMessageDto.isActive ?? true,
            },
        });
    }
    async getAllPresetMessages(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [messages, total] = await Promise.all([
            this.prismaService.presetMessage.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.presetMessage.count(),
        ]);
        return { messages, total, page, limit };
    }
    async getPresetMessageById(id) {
        const message = await this.prismaService.presetMessage.findUnique({
            where: { id },
        });
        if (!message) {
            throw new common_1.NotFoundException(`Preset message with ID ${id} not found`);
        }
        return message;
    }
    async updatePresetMessage(id, updatePresetMessageDto) {
        const existingMessage = await this.prismaService.presetMessage.findUnique({
            where: { id },
        });
        if (!existingMessage) {
            throw new common_1.NotFoundException(`Preset message with ID ${id} not found`);
        }
        return this.prismaService.presetMessage.update({
            where: { id },
            data: {
                ...(updatePresetMessageDto.message_en !== undefined && { message: updatePresetMessageDto.message_en }),
                ...(updatePresetMessageDto.message_it !== undefined && { message_it: updatePresetMessageDto.message_it }),
                ...(updatePresetMessageDto.type !== undefined && { type: updatePresetMessageDto.type }),
                ...(updatePresetMessageDto.isActive !== undefined && { isActive: updatePresetMessageDto.isActive }),
            },
        });
    }
    async deletePresetMessage(id) {
        const existingMessage = await this.prismaService.presetMessage.findUnique({
            where: { id },
        });
        if (!existingMessage) {
            throw new common_1.NotFoundException(`Preset message with ID ${id} not found`);
        }
        await this.prismaService.presetMessage.delete({
            where: { id },
        });
        return { message: 'Preset message deleted successfully' };
    }
};
exports.PresetMessageService = PresetMessageService;
exports.PresetMessageService = PresetMessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PresetMessageService);
//# sourceMappingURL=preset-message.service.js.map