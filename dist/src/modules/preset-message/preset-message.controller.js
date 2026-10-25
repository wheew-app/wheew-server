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
exports.PresetMessageController = void 0;
const common_1 = require("@nestjs/common");
const preset_message_service_1 = require("./preset-message.service");
const create_preset_message_dto_1 = require("./dtos/create-preset-message.dto");
const update_preset_message_dto_1 = require("./dtos/update-preset-message.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
let PresetMessageController = class PresetMessageController {
    presetMessageService;
    constructor(presetMessageService) {
        this.presetMessageService = presetMessageService;
    }
    async createPresetMessage(createPresetMessageDto) {
        const createdPresetMessage = await this.presetMessageService.createPresetMessage(createPresetMessageDto);
        return createdPresetMessage;
    }
    async getAllPresetMessages(page = 1, limit = 10) {
        return this.presetMessageService.getAllPresetMessages(page, limit);
    }
    async getPresetMessageById(id) {
        return this.presetMessageService.getPresetMessageById(id);
    }
    async updatePresetMessage(id, updatePresetMessageDto) {
        return this.presetMessageService.updatePresetMessage(id, updatePresetMessageDto);
    }
    async deletePresetMessage(id) {
        return this.presetMessageService.deletePresetMessage(id);
    }
};
exports.PresetMessageController = PresetMessageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Preset message created successfully'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preset_message_dto_1.CreatePresetMessageDto]),
    __metadata("design:returntype", Promise)
], PresetMessageController.prototype, "createPresetMessage", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Preset messages fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PresetMessageController.prototype, "getAllPresetMessages", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Preset message fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresetMessageController.prototype, "getPresetMessageById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Preset message updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_preset_message_dto_1.UpdatePresetMessageDto]),
    __metadata("design:returntype", Promise)
], PresetMessageController.prototype, "updatePresetMessage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Preset message deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresetMessageController.prototype, "deletePresetMessage", null);
exports.PresetMessageController = PresetMessageController = __decorate([
    (0, common_1.Controller)('preset-message'),
    __metadata("design:paramtypes", [preset_message_service_1.PresetMessageService])
], PresetMessageController);
//# sourceMappingURL=preset-message.controller.js.map