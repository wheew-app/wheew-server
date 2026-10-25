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
exports.HelpSupportController = void 0;
const common_1 = require("@nestjs/common");
const help_support_service_1 = require("./help-support.service");
const create_support_ticket_dto_1 = require("./dtos/create-support-ticket.dto");
const reply_support_ticket_dto_1 = require("./dtos/reply-support-ticket.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const decorators_1 = require("../../common/decorators");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const enums_1 = require("../../../generated/prisma/enums");
let HelpSupportController = class HelpSupportController {
    helpSupportService;
    constructor(helpSupportService) {
        this.helpSupportService = helpSupportService;
    }
    async createTicket(userId, createDto) {
        return this.helpSupportService.createTicket(userId, createDto);
    }
    async getAllTickets() {
        return this.helpSupportService.getAllTickets();
    }
    async replyToTicket(ticketId, replyDto) {
        return this.helpSupportService.replyToTicket(ticketId, replyDto);
    }
};
exports.HelpSupportController = HelpSupportController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Support ticket submitted successfully"),
    __param(0, (0, decorators_1.GetUser)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_support_ticket_dto_1.CreateSupportTicketDto]),
    __metadata("design:returntype", Promise)
], HelpSupportController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Support tickets fetched successfully"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelpSupportController.prototype, "getAllTickets", null);
__decorate([
    (0, common_1.Post)(":id/reply"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Response sent successfully"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reply_support_ticket_dto_1.ReplySupportTicketDto]),
    __metadata("design:returntype", Promise)
], HelpSupportController.prototype, "replyToTicket", null);
exports.HelpSupportController = HelpSupportController = __decorate([
    (0, common_1.Controller)("help-support"),
    __metadata("design:paramtypes", [help_support_service_1.HelpSupportService])
], HelpSupportController);
//# sourceMappingURL=help-support.controller.js.map