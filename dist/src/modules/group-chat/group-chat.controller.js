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
exports.GroupChatController = void 0;
const common_1 = require("@nestjs/common");
const group_chat_service_1 = require("./group-chat.service");
const create_group_chat_room_dto_1 = require("./dtos/create-group-chat-room.dto");
const send_group_file_dto_1 = require("./dtos/send-group-file.dto");
const update_group_chat_room_dto_1 = require("./dtos/update-group-chat-room.dto");
const add_group_members_dto_1 = require("./dtos/add-group-members.dto");
const pagination_dto_1 = require("./dtos/pagination.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
let GroupChatController = class GroupChatController {
    groupChatService;
    constructor(groupChatService) {
        this.groupChatService = groupChatService;
    }
    async createGroupChatRoom(request, createGroupChatRoomDto, file) {
        const payload = request['payload'];
        return this.groupChatService.createGroupChatRoom(payload.id, createGroupChatRoomDto, file);
    }
    async sendGroupFileMessage(request, sendGroupFileDto, file) {
        const payload = request['payload'];
        return this.groupChatService.sendGroupFileMessage(payload.id, sendGroupFileDto, file);
    }
    async sendGroupVoiceMessage(request, sendGroupVoiceDto, file) {
        const payload = request['payload'];
        return this.groupChatService.sendGroupVoiceMessage(payload.id, sendGroupVoiceDto, file);
    }
    async deleteGroupMessage(request, messageId) {
        const payload = request['payload'];
        return this.groupChatService.deleteGroupMessageForEveryone(payload.id, messageId);
    }
    async getGroupChatRooms(request, paginationDto) {
        const payload = request['payload'];
        return this.groupChatService.getGroupChatRooms(payload.id, paginationDto);
    }
    async getGroupChatMessages(request, roomId, paginationDto) {
        const payload = request['payload'];
        return this.groupChatService.getGroupChatMessages(roomId, payload.id, paginationDto);
    }
    async getGroupMemberDeviceKeys(request, roomId) {
        const payload = request['payload'];
        return this.groupChatService.getGroupMemberDeviceKeys(roomId, payload.id);
    }
    async addGroupMember(request, roomId, memberId) {
        const payload = request['payload'];
        return this.groupChatService.addGroupMember(roomId, payload.id, memberId);
    }
    async addGroupMembers(request, roomId, addGroupMembersDto) {
        const payload = request['payload'];
        return this.groupChatService.addGroupMembers(roomId, payload.id, addGroupMembersDto.memberIds);
    }
    async removeGroupMember(request, roomId, memberId) {
        const payload = request['payload'];
        return this.groupChatService.removeGroupMember(roomId, payload.id, memberId);
    }
    async updateGroupChatRoom(request, roomId, updateDto, file) {
        const payload = request['payload'];
        return this.groupChatService.updateGroupChatRoom(roomId, payload.id, updateDto, file);
    }
    async leaveGroup(request, roomId) {
        const payload = request['payload'];
        return this.groupChatService.leaveGroup(roomId, payload.id);
    }
};
exports.GroupChatController = GroupChatController;
__decorate([
    (0, common_1.Post)('room'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        limits: { fileSize: 5 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/groups',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split('.').pop() || 'png';
                cb(null, `group_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group chat room created successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        create_group_chat_room_dto_1.CreateGroupChatRoomDto, Object]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "createGroupChatRoom", null);
__decorate([
    (0, common_1.Post)('message/file'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 10 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/chats',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split('.').pop() || 'bin';
                cb(null, `group_chat_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group file sent successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        send_group_file_dto_1.SendGroupFileDto, Object]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "sendGroupFileMessage", null);
__decorate([
    (0, common_1.Post)('message/voice'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 10 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/chats',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split('.').pop() || 'audio';
                cb(null, `group_voice_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group voice message sent successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        send_group_file_dto_1.SendGroupVoiceDto, Object]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "sendGroupVoiceMessage", null);
__decorate([
    (0, common_1.Delete)('message/:messageId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group message deleted successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('messageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "deleteGroupMessage", null);
__decorate([
    (0, common_1.Get)('rooms'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group chat rooms fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "getGroupChatRooms", null);
__decorate([
    (0, common_1.Get)('room/:roomId/messages'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group chat messages fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "getGroupChatMessages", null);
__decorate([
    (0, common_1.Get)('room/:roomId/e2ee/keys'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group member device keys fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "getGroupMemberDeviceKeys", null);
__decorate([
    (0, common_1.Post)('room/:roomId/member/:memberId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Member added to group successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __param(2, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, String]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "addGroupMember", null);
__decorate([
    (0, common_1.Post)('room/:roomId/members'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Members added to group successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, add_group_members_dto_1.AddGroupMembersDto]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "addGroupMembers", null);
__decorate([
    (0, common_1.Delete)('room/:roomId/member/:memberId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Member removed from group successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __param(2, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, String]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "removeGroupMember", null);
__decorate([
    (0, common_1.Patch)('room/:roomId'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        limits: { fileSize: 5 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/groups',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const ext = file.originalname.split('.').pop() || 'png';
                cb(null, `group_${uuid}.${ext}`);
            }
        })
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Group chat room updated successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, update_group_chat_room_dto_1.UpdateGroupChatRoomDto, Object]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "updateGroupChatRoom", null);
__decorate([
    (0, common_1.Delete)('room/:roomId/leave'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Left group successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], GroupChatController.prototype, "leaveGroup", null);
exports.GroupChatController = GroupChatController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [group_chat_service_1.GroupChatService])
], GroupChatController);
//# sourceMappingURL=group-chat.controller.js.map