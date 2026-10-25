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
exports.BlacklistedwordController = void 0;
const common_1 = require("@nestjs/common");
const blacklistedword_service_1 = require("./blacklistedword.service");
const create_blacklistedword_dto_1 = require("./dtos/create-blacklistedword.dto");
const update_blacklistedword_dto_1 = require("./dtos/update-blacklistedword.dto");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const roles_guards_1 = require("../../common/guards/roles.guards");
const enums_1 = require("../../../generated/prisma/enums");
let BlacklistedwordController = class BlacklistedwordController {
    blacklistedwordService;
    constructor(blacklistedwordService) {
        this.blacklistedwordService = blacklistedwordService;
    }
    async addBlacklistedWord(createBlacklistedwordDto) {
        return await this.blacklistedwordService.addBlacklistedWord(createBlacklistedwordDto);
    }
    async updateBlacklistedWord(wordId, updateBlacklistedwordDto) {
        return await this.blacklistedwordService.updateBlacklistedWord(wordId, updateBlacklistedwordDto);
    }
    async getBlacklistedWords(paginationDto) {
        return await this.blacklistedwordService.getBlacklistedWords(paginationDto);
    }
    async getAllBlacklistedWordsAsArray() {
        return await this.blacklistedwordService.getAllBlacklistedWordsAsArray();
    }
    async getBlacklistedWordById(wordId) {
        return await this.blacklistedwordService.getBlacklistedWordById(wordId);
    }
    async deleteBlacklistedWord(wordId) {
        return await this.blacklistedwordService.deleteBlacklistedWord(wordId);
    }
};
exports.BlacklistedwordController = BlacklistedwordController;
__decorate([
    (0, common_1.Post)("add"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Blacklisted word added successfully"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blacklistedword_dto_1.CreateBlacklistedwordDto]),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "addBlacklistedWord", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Blacklisted word updated successfully"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blacklistedword_dto_1.UpdateBlacklistedwordDto]),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "updateBlacklistedWord", null);
__decorate([
    (0, common_1.Get)("list"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Blacklisted words fetched successfully"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "getBlacklistedWords", null);
__decorate([
    (0, common_1.Get)("all/words"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("All blacklisted words fetched successfully"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "getAllBlacklistedWordsAsArray", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Blacklisted word fetched successfully"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "getBlacklistedWordById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Blacklisted word deleted successfully"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlacklistedwordController.prototype, "deleteBlacklistedWord", null);
exports.BlacklistedwordController = BlacklistedwordController = __decorate([
    (0, common_1.Controller)({
        path: "blacklisted-words",
    }),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    __metadata("design:paramtypes", [blacklistedword_service_1.BlacklistedwordService])
], BlacklistedwordController);
//# sourceMappingURL=blacklistedword.controller.js.map