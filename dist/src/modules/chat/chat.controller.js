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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const get_user_rooms_dto_1 = require("./dtos/get-user-rooms.dto");
const get_all_messages_dto_1 = require("./dtos/get-all-messages.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const send_file_dto_1 = require("./dtos/send-file.dto");
const message_request_dto_1 = require("./dtos/message-request.dto");
let ChatController = class ChatController {
    chatService;
    constructor(chatService) {
        this.chatService = chatService;
    }
    async sendFileMessage(request, sendFileDto, file) {
        const payload = request["payload"];
        return this.chatService.sendFileMessage(payload.id, sendFileDto, file);
    }
    async sendVoiceMessage(request, sendVoiceDto, file) {
        const payload = request["payload"];
        return this.chatService.sendVoiceMessage(payload.id, sendVoiceDto, file);
    }
    async deleteMessage(request, messageId) {
        const payload = request["payload"];
        return this.chatService.deleteMessageForEveryone(payload.id, messageId);
    }
    async createMessageRequest(request, dto) {
        const payload = request["payload"];
        return this.chatService.createMessageRequest(payload.id, dto);
    }
    async getMessageRequestInbox(request, page = 1, limit = 10) {
        const payload = request["payload"];
        return this.chatService.getMessageRequestInbox(payload.id, page, limit);
    }
    async getSentMessageRequests(request, page = 1, limit = 10) {
        const payload = request["payload"];
        return this.chatService.getSentMessageRequests(payload.id, page, limit);
    }
    async getMessageRequestCounts(request) {
        const payload = request["payload"];
        return this.chatService.getMessageRequestCounts(payload.id);
    }
    async getMessageRequestThread(request, requestId) {
        const payload = request["payload"];
        return this.chatService.getMessageRequestThread(payload.id, requestId);
    }
    async acceptMessageRequest(request, requestId) {
        const payload = request["payload"];
        return this.chatService.acceptMessageRequest(payload.id, requestId);
    }
    async declineMessageRequest(request, requestId) {
        const payload = request["payload"];
        return this.chatService.declineMessageRequest(payload.id, requestId);
    }
    async rejectMessageRequest(request, requestId) {
        const payload = request["payload"];
        return this.chatService.declineMessageRequest(payload.id, requestId);
    }
    async blockMessageRequestSender(request, requestId) {
        const payload = request["payload"];
        return this.chatService.blockMessageRequestSender(payload.id, requestId);
    }
    async withdrawMessageRequest(request, requestId) {
        const payload = request["payload"];
        return this.chatService.withdrawMessageRequest(payload.id, requestId);
    }
    async registerDeviceKey(request, dto) {
        const payload = request["payload"];
        return this.chatService.registerDeviceKey(payload.id, dto);
    }
    async getUserDeviceKeys(userId) {
        return this.chatService.getUserDeviceKeys(userId);
    }
    async deactivateDeviceKey(request, deviceId) {
        const payload = request["payload"];
        return this.chatService.deactivateDeviceKey(payload.id, deviceId);
    }
    async getUserChatRooms(request, getUserRoomsDto) {
        const payload = request["payload"];
        return this.chatService.getUserChatRooms(payload.id, getUserRoomsDto);
    }
    async getRoomMessages(request, getAllMessageDto) {
        const payload = request["payload"];
        return this.chatService.getRoomMessages(payload.id, getAllMessageDto);
    }
    async startConversationByPlate(request, plate_no) {
        const payload = request["payload"];
        return this.chatService.getOrCreateRoomByPlate(payload.id, plate_no);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)("message/file"),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        limits: { fileSize: 10 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads/chats",
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split(".").pop() || "bin";
                cb(null, `chat_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("File sent successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        send_file_dto_1.SendFileDto, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendFileMessage", null);
__decorate([
    (0, common_1.Post)("message/voice"),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        limits: { fileSize: 10 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads/chats",
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split(".").pop() || "audio";
                cb(null, `voice_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Voice message sent successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        send_file_dto_1.SendVoiceDto, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendVoiceMessage", null);
__decorate([
    (0, common_1.Delete)("messages/:messageId"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message deleted successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("messageId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteMessage", null);
__decorate([
    (0, common_1.Post)("message-requests"),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request created successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        message_request_dto_1.CreateMessageRequestDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createMessageRequest", null);
__decorate([
    (0, common_1.Get)("message-requests/inbox"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message requests fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Number, Number]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getMessageRequestInbox", null);
__decorate([
    (0, common_1.Get)("message-requests/sent"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Sent message requests fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Number, Number]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getSentMessageRequests", null);
__decorate([
    (0, common_1.Get)("message-requests/counts"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request counts fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getMessageRequestCounts", null);
__decorate([
    (0, common_1.Get)("message-requests/:id/thread"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request thread fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getMessageRequestThread", null);
__decorate([
    (0, common_1.Post)("message-requests/:id/accept"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request accepted successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "acceptMessageRequest", null);
__decorate([
    (0, common_1.Post)("message-requests/:id/decline"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request declined successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "declineMessageRequest", null);
__decorate([
    (0, common_1.Post)("message-requests/:id/reject"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request rejected successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "rejectMessageRequest", null);
__decorate([
    (0, common_1.Post)("message-requests/:id/block"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request sender blocked successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "blockMessageRequestSender", null);
__decorate([
    (0, common_1.Post)("message-requests/:id/withdraw"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Message request withdrawn successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "withdrawMessageRequest", null);
__decorate([
    (0, common_1.Post)("e2ee/device-key"),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Device key registered successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        message_request_dto_1.RegisterDeviceKeyDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "registerDeviceKey", null);
__decorate([
    (0, common_1.Get)("e2ee/users/:userId/keys"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User device keys fetched successfully"),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getUserDeviceKeys", null);
__decorate([
    (0, common_1.Delete)("e2ee/device-key/:deviceId"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Device key deactivated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("deviceId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deactivateDeviceKey", null);
__decorate([
    (0, common_1.Get)("rooms"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User chat rooms fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        get_user_rooms_dto_1.GetUserRoomsDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getUserChatRooms", null);
__decorate([
    (0, common_1.Get)("rooms/messages"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Room messages fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        get_all_messages_dto_1.GetAllMessagesDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getRoomMessages", null);
__decorate([
    (0, common_1.Post)("rooms/by-plate"),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User info fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)("plate_no")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "startConversationByPlate", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)("chat"),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map