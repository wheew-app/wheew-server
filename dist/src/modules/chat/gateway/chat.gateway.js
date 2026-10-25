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
exports.SocketGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("../chat.service");
const group_chat_service_1 = require("../../group-chat/group-chat.service");
const events_enum_1 = require("../enums/events.enum");
const send_message_dto_1 = require("../dtos/send-message.dto");
const user_service_1 = require("../../user/user.service");
const class_transformer_1 = require("class-transformer");
const all_message_dto_1 = require("../dtos/all-message.dto");
const get_all_messages_dto_1 = require("../dtos/get-all-messages.dto");
const get_user_rooms_dto_1 = require("../dtos/get-user-rooms.dto");
const message_acknowledgement_dto_1 = require("../dtos/message-acknowledgement.dto");
const WsExceptionHandler_1 = require("../../../common/exceptions/WsExceptionHandler");
const create_group_chat_room_dto_1 = require("../../group-chat/dtos/create-group-chat-room.dto");
const send_group_message_dto_1 = require("../../group-chat/dtos/send-group-message.dto");
const pagination_dto_1 = require("../../group-chat/dtos/pagination.dto");
const socket_room_service_1 = require("../services/socket-room.service");
const mongo_id_validation_pipe_1 = require("../../../common/pipes/mongo-id-validation.pipe");
const mongo_id_util_1 = require("../../../common/utils/mongo-id.util");
let SocketGateway = class SocketGateway {
    chatService;
    userService;
    groupChatService;
    socketRoomService;
    server;
    userTypingStates = new Map();
    typingTimeouts = new Map();
    constructor(chatService, userService, groupChatService, socketRoomService) {
        this.chatService = chatService;
        this.userService = userService;
        this.groupChatService = groupChatService;
        this.socketRoomService = socketRoomService;
    }
    afterInit(server) {
        this.socketRoomService.setServer(server);
    }
    generateGroupRoomId(groupChatRoomId) {
        return `group-${groupChatRoomId}`;
    }
    generateUserRoomId(userId) {
        return `user-${userId}`;
    }
    clearTypingTimeout(key) {
        const timeout = this.typingTimeouts.get(key);
        if (timeout) {
            clearTimeout(timeout);
            this.typingTimeouts.delete(key);
        }
    }
    setTypingTimeout(key, onExpire) {
        this.clearTypingTimeout(key);
        const timeout = setTimeout(() => {
            this.typingTimeouts.delete(key);
            onExpire();
        }, 5000);
        timeout.unref?.();
        this.typingTimeouts.set(key, timeout);
    }
    async handleDisconnect(client) {
        console.log(`client disconnected: ${client.id}`);
        const userId = client.data.userId;
        if (userId) {
            console.log(`User ${userId} disconnected.`);
            const isOffline = this.socketRoomService.markUserDisconnected(userId, client.id);
            this.userTypingStates.forEach((typingUsers, groupChatRoomId) => {
                if (typingUsers.delete(userId)) {
                    this.server.to(this.generateGroupRoomId(groupChatRoomId)).emit(events_enum_1.EMIT_EVENTS.GROUP_USER_STOPPED_TYPING, {
                        userId,
                        groupChatRoomId
                    });
                }
                if (typingUsers.size === 0) {
                    this.userTypingStates.delete(groupChatRoomId);
                }
            });
            if (isOffline) {
                const lastSeen = await this.userService.updateLastSeenAt(userId).catch((err) => {
                    console.error(`Failed to update lastSeenAt for user ${userId}:`, err);
                    return null;
                });
                this.server.emit(events_enum_1.EMIT_EVENTS.USER_OFFLINE, {
                    userId,
                    isOnline: false,
                    lastSeenAt: lastSeen?.lastSeenAt ?? new Date()
                });
            }
        }
    }
    async handleConnection(client, ...args) {
        console.log(`client connected: ${client.id}`);
        try {
            const userId = client.handshake.query.userId;
            if (!userId) {
                client.emit(events_enum_1.EMIT_EVENTS.ERROR, { message: "userId is required" });
                client.disconnect();
                return;
            }
            if (!(0, mongo_id_util_1.isValidMongoId)(userId)) {
                client.emit(events_enum_1.EMIT_EVENTS.ERROR, { message: "userId must be a valid MongoDB ObjectId" });
                client.disconnect();
                return;
            }
            const user = await this.userService.findUserById(userId);
            if (!user) {
                client.emit(events_enum_1.EMIT_EVENTS.ERROR, { message: "User not found" });
                client.disconnect();
                return;
            }
            client.join(this.generateUserRoomId(userId));
            const wasOffline = this.socketRoomService.markUserConnected(userId, client.id);
            client.data.userId = userId;
            if (wasOffline) {
                this.server.emit(events_enum_1.EMIT_EVENTS.USER_ONLINE, {
                    userId,
                    isOnline: true,
                    lastSeenAt: null
                });
            }
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, { message: "User Successfully Connected With Socket" });
        }
        catch (err) {
            console.log(`Socket connection error for client ${client.id}:`, err);
            client.emit(events_enum_1.EMIT_EVENTS.ERROR, { message: err.message ?? "Connection failed" });
            client.disconnect();
        }
    }
    handleMessage(data, client) {
    }
    async handleChat(data, client) {
        try {
            const userId = client.data.userId;
            const chat = await this.chatService.createMessage(userId, data);
            if (chat.isMessageRequest) {
                this.server.to(this.generateUserRoomId(data.receiver_id)).emit(events_enum_1.EMIT_EVENTS.MESSAGE_REQUEST, chat.request);
                this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.MESSAGE_REQUEST_SENT, chat.request);
                return;
            }
            this.server.to(this.generateUserRoomId(data.receiver_id)).emit(events_enum_1.EMIT_EVENTS.NEW_MESSAGE, { ...chat, is_mine: false });
            this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.MESSAGE_SENT, { ...chat, is_mine: true });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleMesssageDelivery(acknowledgements, client) {
        console.log("message received", acknowledgements);
        try {
            if (acknowledgements && Array.isArray(acknowledgements.messageIds)) {
                acknowledgements.messageIds.forEach(async (messageId) => {
                    try {
                        const chat = await this.chatService.acknowledgeMessageDelivery(messageId);
                        if (chat) {
                            this.server.to(this.generateUserRoomId(chat.sender_id)).emit(events_enum_1.EMIT_EVENTS.MESSAGE_DELIVERED, chat);
                        }
                    }
                    catch (innerErr) {
                        console.error(`Error acknowledging message ${messageId}:`, innerErr);
                    }
                });
            }
        }
        catch (err) {
            console.error('Error in handleMesssageDelivery:', err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleTyping(data, client) {
        try {
            const userId = client.data.userId;
            await this.chatService.ensureUserCanTypeInRoom(userId, data.roomId, data.receiverId);
            const user = await this.userService.findUserById(userId);
            const payload = {
                senderId: userId,
                receiverId: data.receiverId,
                roomId: data.roomId,
                user: user ? {
                    id: user.id,
                    nick_name: user.nick_name,
                    avatar: user.avatar
                } : null
            };
            this.server.to(this.generateUserRoomId(data.receiverId)).emit(events_enum_1.EMIT_EVENTS.USER_TYPING, payload);
            const typingKey = `one-to-one-${data.roomId}-${userId}`;
            this.setTypingTimeout(typingKey, () => {
                this.server.to(this.generateUserRoomId(data.receiverId)).emit(events_enum_1.EMIT_EVENTS.USER_STOPPED_TYPING, {
                    senderId: userId,
                    receiverId: data.receiverId,
                    roomId: data.roomId
                });
            });
        }
        catch (err) {
            console.error('Error in handleTyping:', err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleStopTyping(data, client) {
        try {
            const userId = client.data.userId;
            await this.chatService.ensureUserCanTypeInRoom(userId, data.roomId, data.receiverId);
            const typingKey = `one-to-one-${data.roomId}-${userId}`;
            this.clearTypingTimeout(typingKey);
            this.server.to(this.generateUserRoomId(data.receiverId)).emit(events_enum_1.EMIT_EVENTS.USER_STOPPED_TYPING, {
                senderId: userId,
                receiverId: data.receiverId,
                roomId: data.roomId
            });
        }
        catch (err) {
            console.error('Error in handleStopTyping:', err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async getAllUserRooms(getUserRoomsDto, client) {
        try {
            const userId = client.data.userId;
            const rooms = await this.chatService.getUserChatRooms(userId, getUserRoomsDto);
            console.log(rooms);
            this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.ALL_CHAT_ROOMS, rooms);
        }
        catch (err) {
            console.error('Error in getAllUserRooms:', err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async getAllRoomMessages(getAllMessageDto, client) {
        try {
            const userId = client.data.userId;
            console.log(getAllMessageDto);
            const messages = await this.chatService.getRoomMessages(userId, getAllMessageDto);
            const messageDto = (0, class_transformer_1.plainToInstance)(all_message_dto_1.AllMessageDto, messages, {
                excludeExtraneousValues: true
            });
            this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.ALL_MESSAGES, {
                ...messageDto
            });
        }
        catch (err) {
            console.error('Error in getAllRoomMessages:', err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleCreateGroupChat(data, client) {
        try {
            const userId = client.data.userId;
            const groupChat = await this.groupChatService.createGroupChatRoom(userId, data);
            const groupRoomId = this.generateGroupRoomId(groupChat.id);
            client.join(groupRoomId);
            groupChat.members.forEach(member => {
                this.server.to(this.generateUserRoomId(member.user_id)).emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                    message: `You've been added to group: ${groupChat.name}`,
                    groupChat
                });
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "Group chat created successfully",
                groupChat
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleSendGroupMessage(data, client) {
        try {
            const userId = client.data.userId;
            const message = await this.groupChatService.sendGroupMessage(userId, data);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            client.broadcast.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_NEW_MESSAGE, {
                ...message,
                groupChatRoomId: data.groupChatRoomId,
                is_mine: false
            });
            client.emit(events_enum_1.EMIT_EVENTS.GROUP_MESSAGE_SENT, {
                ...message,
                is_mine: true
            });
            this.userTypingStates.get(data.groupChatRoomId)?.delete(userId);
            this.clearTypingTimeout(`group-${data.groupChatRoomId}-${userId}`);
            client.broadcast.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_USER_STOPPED_TYPING, {
                userId,
                groupChatRoomId: data.groupChatRoomId
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleJoinGroupChat(data, client) {
        try {
            const userId = client.data.userId;
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            client.join(groupRoomId);
            this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: `User ${userId} joined the group`,
                userId,
                groupChatRoomId: data.groupChatRoomId
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "Successfully joined group chat"
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleLeaveGroupChat(data, client) {
        try {
            const userId = client.data.userId;
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            const result = await this.groupChatService.leaveGroup(data.groupChatRoomId, userId);
            client.leave(groupRoomId);
            this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_MEMBER_REMOVED, {
                message: `User ${userId} left the group`,
                userId,
                groupChatRoomId: data.groupChatRoomId
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: result.message || "Successfully left group chat"
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleFetchGroupChatRooms(pagination, client) {
        try {
            const userId = client.data.userId;
            const response = await this.groupChatService.getGroupChatRooms(userId, pagination);
            response.rooms.forEach(room => {
                const groupRoomId = this.generateGroupRoomId(room.id);
                client.join(groupRoomId);
            });
            this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.GROUP_CHAT_ROOMS, response);
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleFetchGroupMessages(data, client) {
        try {
            const userId = client.data.userId;
            const response = await this.groupChatService.getGroupChatMessages(data.groupChatRoomId, userId, data.pagination);
            this.server.to(this.generateUserRoomId(userId)).emit(events_enum_1.EMIT_EVENTS.GROUP_MESSAGES, response);
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleAddGroupMember(data, client) {
        try {
            const userId = client.data.userId;
            const newMember = await this.groupChatService.addGroupMember(data.groupChatRoomId, userId, data.newMemberId);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_MEMBER_ADDED, {
                message: `${newMember.user.nick_name} was added to the group`,
                newMember,
                groupChatRoomId: data.groupChatRoomId
            });
            this.server.to(this.generateUserRoomId(data.newMemberId)).emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "You've been added to a group",
                groupChatRoomId: data.groupChatRoomId,
                newMember
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "Member added successfully",
                newMember
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleAddGroupMembers(data, client) {
        try {
            const userId = client.data.userId;
            const result = await this.groupChatService.addGroupMembers(data.groupChatRoomId, userId, data.memberIds);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            result.members.forEach((newMember) => {
                this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_MEMBERS_ADDED, {
                    message: `${newMember.user.nick_name} was added to the group`,
                    newMember,
                    groupChatRoomId: data.groupChatRoomId,
                    addedCount: result.addedCount,
                });
                this.server.to(this.generateUserRoomId(newMember.user_id)).emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                    message: "You've been added to a group",
                    groupChatRoomId: data.groupChatRoomId,
                    newMember
                });
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: `${result.addedCount} member(s) added successfully`,
                addedCount: result.addedCount,
                alreadyMemberCount: result.alreadyMemberCount,
                members: result.members
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleRemoveGroupMember(data, client) {
        try {
            const userId = client.data.userId;
            await this.groupChatService.removeGroupMember(data.groupChatRoomId, userId, data.memberId);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            const memberUserRoomId = this.generateUserRoomId(data.memberId);
            this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_MEMBER_REMOVED, {
                message: `Member was removed from the group`,
                memberId: data.memberId,
                removedBy: userId,
                groupChatRoomId: data.groupChatRoomId
            });
            this.server.to(memberUserRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_MEMBER_REMOVED, {
                message: "You've been removed from a group",
                groupChatRoomId: data.groupChatRoomId,
                memberId: data.memberId
            });
            const socketsInRoom = await this.server.in(groupRoomId).fetchSockets();
            for (const socket of socketsInRoom) {
                if (socket.data.userId === data.memberId) {
                    socket.leave(groupRoomId);
                }
            }
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "Member removed successfully"
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleUpdateGroupChat(data, client) {
        try {
            const userId = client.data.userId;
            const updatedGroup = await this.groupChatService.updateGroupChatRoom(data.groupChatRoomId, userId, data.updateData);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_UPDATED, {
                message: "Group information updated",
                updatedGroup,
                updatedBy: userId,
                groupChatRoomId: data.groupChatRoomId
            });
            client.emit(events_enum_1.EMIT_EVENTS.SUCCESS, {
                message: "Group updated successfully",
                updatedGroup
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleGroupTyping(data, client) {
        try {
            const userId = client.data.userId;
            await this.groupChatService.ensureGroupMember(data.groupChatRoomId, userId);
            const typingKey = `group-${data.groupChatRoomId}-${userId}`;
            if (!this.userTypingStates.has(data.groupChatRoomId)) {
                this.userTypingStates.set(data.groupChatRoomId, new Set());
            }
            this.userTypingStates.get(data.groupChatRoomId).add(userId);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            const user = await this.userService.findUserById(userId);
            client.broadcast.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_USER_TYPING, {
                userId,
                groupChatRoomId: data.groupChatRoomId,
                user: user ? {
                    id: user.id,
                    nick_name: user.nick_name,
                    avatar: user.avatar
                } : null
            });
            this.setTypingTimeout(typingKey, () => {
                this.userTypingStates.get(data.groupChatRoomId)?.delete(userId);
                this.server.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_USER_STOPPED_TYPING, {
                    userId,
                    groupChatRoomId: data.groupChatRoomId
                });
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
    async handleGroupStopTyping(data, client) {
        try {
            const userId = client.data.userId;
            await this.groupChatService.ensureGroupMember(data.groupChatRoomId, userId);
            if (this.userTypingStates.has(data.groupChatRoomId)) {
                this.userTypingStates.get(data.groupChatRoomId).delete(userId);
            }
            this.clearTypingTimeout(`group-${data.groupChatRoomId}-${userId}`);
            const groupRoomId = this.generateGroupRoomId(data.groupChatRoomId);
            client.broadcast.to(groupRoomId).emit(events_enum_1.EMIT_EVENTS.GROUP_USER_STOPPED_TYPING, {
                userId,
                groupChatRoomId: data.groupChatRoomId
            });
        }
        catch (err) {
            console.log(err);
            throw new websockets_1.WsException({ message: err.message });
        }
    }
};
exports.SocketGateway = SocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("greeting"),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], SocketGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_message_dto_1.SendMessageDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.MESSAGE_RECEIVED),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_acknowledgement_dto_1.MessageAcknowledgementDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleMesssageDelivery", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.STOP_TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleStopTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.FETCH_CHAT_ROOMS),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_rooms_dto_1.GetUserRoomsDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "getAllUserRooms", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.FETCH_MESSAGES),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_messages_dto_1.GetAllMessagesDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "getAllRoomMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.CREATE_GROUP_CHAT),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_chat_room_dto_1.CreateGroupChatRoomDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleCreateGroupChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.SEND_GROUP_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_group_message_dto_1.SendGroupMessageDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleSendGroupMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.JOIN_GROUP_CHAT),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleJoinGroupChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.LEAVE_GROUP_CHAT),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleLeaveGroupChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.FETCH_GROUP_CHAT_ROOMS),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleFetchGroupChatRooms", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.FETCH_GROUP_MESSAGES),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleFetchGroupMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.ADD_GROUP_MEMBER),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleAddGroupMember", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.ADD_GROUP_MEMBERS),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleAddGroupMembers", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.REMOVE_GROUP_MEMBER),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleRemoveGroupMember", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.UPDATE_GROUP_CHAT),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleUpdateGroupChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.GROUP_TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleGroupTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_enum_1.SUBSCRIBED_EVENTS.GROUP_STOP_TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleGroupStopTyping", null);
exports.SocketGateway = SocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: "http://10.10.20.44:3000"
        }
    }),
    (0, common_1.UsePipes)(new mongo_id_validation_pipe_1.MongoIdValidationPipe(), new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    })),
    (0, common_1.UseFilters)(WsExceptionHandler_1.WsExceptionsFilter),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        user_service_1.UserService,
        group_chat_service_1.GroupChatService,
        socket_room_service_1.SocketRoomService])
], SocketGateway);
//# sourceMappingURL=chat.gateway.js.map