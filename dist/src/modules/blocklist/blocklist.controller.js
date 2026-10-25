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
exports.BlocklistController = void 0;
const common_1 = require("@nestjs/common");
const blocklist_service_1 = require("./blocklist.service");
const block_user_dto_1 = require("./dtos/block-user.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
let BlocklistController = class BlocklistController {
    blocklistService;
    constructor(blocklistService) {
        this.blocklistService = blocklistService;
    }
    async blockUser(request, blockUserDto) {
        const payload = request['payload'];
        return this.blocklistService.blockUser(payload.id, blockUserDto);
    }
    async unblockUser(request, blockedUserId) {
        const payload = request['payload'];
        return this.blocklistService.unblockUser(payload.id, blockedUserId);
    }
    async getBlockedUsers(request, page = 1, limit = 10) {
        const payload = request['payload'];
        return this.blocklistService.getBlockedUsers(payload.id, page, limit);
    }
    async getBlockStatus(request, userId) {
        const payload = request['payload'];
        return this.blocklistService.getBlockStatus(payload.id, userId);
    }
};
exports.BlocklistController = BlocklistController;
__decorate([
    (0, common_1.Post)('block'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User blocked successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        block_user_dto_1.BlockUserDto]),
    __metadata("design:returntype", Promise)
], BlocklistController.prototype, "blockUser", null);
__decorate([
    (0, common_1.Delete)('unblock/:blockedUserId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User unblocked successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('blockedUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], BlocklistController.prototype, "unblockUser", null);
__decorate([
    (0, common_1.Get)('blocked-users'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Blocked users fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Number, Number]),
    __metadata("design:returntype", Promise)
], BlocklistController.prototype, "getBlockedUsers", null);
__decorate([
    (0, common_1.Get)('status/:userId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Block status fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], BlocklistController.prototype, "getBlockStatus", null);
exports.BlocklistController = BlocklistController = __decorate([
    (0, common_1.Controller)('blocklist'),
    __metadata("design:paramtypes", [blocklist_service_1.BlocklistService])
], BlocklistController);
//# sourceMappingURL=blocklist.controller.js.map