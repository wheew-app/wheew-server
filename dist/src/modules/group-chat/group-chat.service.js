"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GroupChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../../generated/prisma/enums");
const notification_dispatcher_service_1 = require("../notification/services/notification-dispatcher.service");
const fs = __importStar(require("fs"));
let GroupChatService = GroupChatService_1 = class GroupChatService {
    prismaService;
    notificationDispatcherService;
    socketRoomService;
    logger = new common_1.Logger(GroupChatService_1.name);
    constructor(prismaService, notificationDispatcherService, socketRoomService) {
        this.prismaService = prismaService;
        this.notificationDispatcherService = notificationDispatcherService;
        this.socketRoomService = socketRoomService;
    }
    async createGroupChatRoom(userId, createGroupChatRoomDto, file) {
        const memberIds = [...new Set([userId, ...createGroupChatRoomDto.memberIds])];
        const imagePath = file ? file.path.replace(/\\/g, '/') : createGroupChatRoomDto.image;
        const groupChatRoom = await this.prismaService.groupChatRoom.create({
            data: {
                name: createGroupChatRoomDto.name,
                image: imagePath,
                group_members_count: memberIds.length,
                members: {
                    createMany: {
                        data: memberIds.map((memberId, index) => ({
                            user_id: memberId,
                            group_role: index === 0 ? 'GROUP_ADMIN' : 'GROUP_MEMBER',
                        })),
                    },
                },
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                nick_name: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        });
        return groupChatRoom;
    }
    async sendGroupMessage(userId, sendGroupMessageDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: sendGroupMessageDto.groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        const groupChat = await this.prismaService.groupChat.create({
            data: {
                groupChatRoom_id: sendGroupMessageDto.groupChatRoomId,
                sender_id: userId,
                message: sendGroupMessageDto.message,
                encryptionType: sendGroupMessageDto.encryptionType,
                encryptionVersion: sendGroupMessageDto.encryptionVersion,
                senderKeyId: sendGroupMessageDto.senderKeyId,
                nonce: sendGroupMessageDto.nonce,
                encryptedKeys: this.normalizeEncryptedKeys(sendGroupMessageDto.encryptedKeys),
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const groupChatRoom = await this.prismaService.groupChatRoom.update({
            where: { id: sendGroupMessageDto.groupChatRoomId },
            data: { updatedAt: new Date() },
        });
        this.notificationDispatcherService.dispatchGroupChatNotification(groupChat, groupChatRoom).catch((err) => {
            this.logger.error(`Failed to dispatch group chat notification: ${err.message}`);
        });
        return groupChat;
    }
    async sendGroupFileMessage(userId, sendGroupFileDto, file) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        await this.ensureGroupMember(sendGroupFileDto.groupChatRoomId, userId);
        const groupChat = await this.prismaService.groupChat.create({
            data: {
                groupChatRoom_id: sendGroupFileDto.groupChatRoomId,
                sender_id: userId,
                message: sendGroupFileDto.message || file.originalname,
                type: enums_1.MessageType.FILE,
                file_url: `/uploads/chats/${file.filename}`,
                file_name: file.originalname,
                file_size: file.size,
                file_mime_type: file.mimetype,
                encryptionType: sendGroupFileDto.encryptionType,
                encryptionVersion: sendGroupFileDto.encryptionVersion,
                senderKeyId: sendGroupFileDto.senderKeyId,
                nonce: sendGroupFileDto.nonce,
                encryptedKeys: this.normalizeEncryptedKeys(sendGroupFileDto.encryptedKeys),
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const groupChatRoom = await this.prismaService.groupChatRoom.update({
            where: { id: sendGroupFileDto.groupChatRoomId },
            data: { updatedAt: new Date() },
        });
        this.notificationDispatcherService.dispatchGroupChatNotification(groupChat, groupChatRoom).catch((err) => {
            this.logger.error(`Failed to dispatch group chat file notification: ${err.message}`);
        });
        await this.broadcastGroupMessage(sendGroupFileDto.groupChatRoomId, userId, groupChat);
        return groupChat;
    }
    async sendGroupVoiceMessage(userId, sendGroupVoiceDto, file) {
        if (!file) {
            throw new common_1.BadRequestException('Voice file is required');
        }
        if (!file.mimetype.startsWith('audio/')) {
            throw new common_1.BadRequestException('Group voice message must be an audio file');
        }
        await this.ensureGroupMember(sendGroupVoiceDto.groupChatRoomId, userId);
        const groupChat = await this.prismaService.groupChat.create({
            data: {
                groupChatRoom_id: sendGroupVoiceDto.groupChatRoomId,
                sender_id: userId,
                message: sendGroupVoiceDto.message || file.originalname,
                type: enums_1.MessageType.VOICE,
                file_url: `/uploads/chats/${file.filename}`,
                file_name: file.originalname,
                file_size: file.size,
                file_mime_type: file.mimetype,
                durationSeconds: sendGroupVoiceDto.durationSeconds,
                waveform: this.normalizeWaveform(sendGroupVoiceDto.waveform),
                encryptionType: sendGroupVoiceDto.encryptionType,
                encryptionVersion: sendGroupVoiceDto.encryptionVersion,
                senderKeyId: sendGroupVoiceDto.senderKeyId,
                nonce: sendGroupVoiceDto.nonce,
                encryptedKeys: this.normalizeEncryptedKeys(sendGroupVoiceDto.encryptedKeys),
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const groupChatRoom = await this.prismaService.groupChatRoom.update({
            where: { id: sendGroupVoiceDto.groupChatRoomId },
            data: { updatedAt: new Date() },
        });
        this.notificationDispatcherService.dispatchGroupChatNotification(groupChat, groupChatRoom).catch((err) => {
            this.logger.error(`Failed to dispatch group chat voice notification: ${err.message}`);
        });
        await this.broadcastGroupMessage(sendGroupVoiceDto.groupChatRoomId, userId, groupChat);
        return groupChat;
    }
    async getGroupChatRooms(userId, paginationDto) {
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const [rooms, total] = await Promise.all([
            this.prismaService.groupChatRoom.findMany({
                where: {
                    members: {
                        some: {
                            user_id: userId,
                        },
                    },
                },
                include: {
                    members: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    nick_name: true,
                                    avatar: true,
                                    lastSeenAt: true,
                                },
                            },
                        },
                    },
                    chats: {
                        orderBy: { createdAt: 'desc' },
                        take: 1,
                        include: {
                            sender: {
                                select: {
                                    id: true,
                                    nick_name: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { updatedAt: 'desc' },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.groupChatRoom.count({
                where: {
                    members: {
                        some: {
                            user_id: userId,
                        },
                    },
                },
            }),
        ]);
        return {
            rooms: rooms.map((room) => ({
                ...room,
                members: room.members.map((member) => ({
                    ...member,
                    user: this.attachPresence(member.user),
                })),
                chats: room.chats.map((chat) => this.maskDeletedGroupMessage(chat)),
            })),
            total,
        };
    }
    async getGroupChatMessages(groupChatRoomId, userId, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const [messages, total] = await Promise.all([
            this.prismaService.groupChat.findMany({
                where: { groupChatRoom_id: groupChatRoomId },
                include: {
                    sender: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.groupChat.count({
                where: { groupChatRoom_id: groupChatRoomId },
            }),
        ]);
        await this.prismaService.groupChatRoomMember.update({
            where: {
                id: membership.id,
            },
            data: {
                last_read_message_id: messages[0]?.id || null,
            },
        });
        const mappedMessages = messages.map((message) => ({
            ...this.maskDeletedGroupMessage(message),
            is_mine: message.sender_id === userId,
        }));
        return { messages: mappedMessages, total };
    }
    async deleteGroupMessageForEveryone(userId, messageId) {
        const message = await this.prismaService.groupChat.findUnique({
            where: { id: messageId },
        });
        if (!message) {
            throw new common_1.NotFoundException('Group message not found');
        }
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: message.groupChatRoom_id,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        const isSender = message.sender_id === userId;
        const isGroupAdmin = membership.group_role === 'GROUP_ADMIN';
        if (!isSender && !isGroupAdmin) {
            throw new common_1.BadRequestException('Only the sender or a group admin can delete this message');
        }
        if (message.isDeletedForEveryone) {
            return this.maskDeletedGroupMessage(message);
        }
        const deletedMessage = await this.prismaService.groupChat.update({
            where: { id: messageId },
            data: {
                message: '',
                file_url: null,
                file_name: null,
                file_size: null,
                file_mime_type: null,
                durationSeconds: null,
                waveform: null,
                encryptionType: null,
                encryptionVersion: null,
                senderKeyId: null,
                nonce: null,
                encryptedKeys: null,
                isDeletedForEveryone: true,
                deletedAt: new Date(),
                deletedById: userId,
            },
        });
        if (this.socketRoomService?.server) {
            const members = await this.prismaService.groupChatRoomMember.findMany({
                where: { groupChatRoom_id: deletedMessage.groupChatRoom_id },
                select: { user_id: true },
            });
            const payload = {
                messageId: deletedMessage.id,
                groupChatRoomId: deletedMessage.groupChatRoom_id,
                deletedById: userId,
                isDeletedForEveryone: true,
                deletedAt: deletedMessage.deletedAt,
            };
            members.forEach((member) => {
                this.socketRoomService.server.to(`user-${member.user_id}`).emit('group-message-deleted', payload);
            });
        }
        return this.maskDeletedGroupMessage(deletedMessage);
    }
    async getGroupMemberDeviceKeys(groupChatRoomId, userId) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        const members = await this.prismaService.groupChatRoomMember.findMany({
            where: { groupChatRoom_id: groupChatRoomId },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                        deviceKeys: {
                            where: { isActive: true },
                            orderBy: { createdAt: 'desc' },
                            select: {
                                id: true,
                                deviceId: true,
                                publicKey: true,
                                isActive: true,
                                createdAt: true,
                                updatedAt: true,
                            },
                        },
                    },
                },
            },
        });
        return {
            groupChatRoomId,
            members: members.map((member) => ({
                userId: member.user_id,
                groupRole: member.group_role,
                user: member.user,
                deviceKeys: member.user.deviceKeys,
            })),
        };
    }
    async addGroupMember(groupChatRoomId, userId, newMemberId) {
        const requesterMembership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!requesterMembership || requesterMembership.group_role !== 'GROUP_ADMIN') {
            throw new common_1.BadRequestException('Only group admin can add members');
        }
        const existingMember = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: newMemberId,
            },
        });
        console.log(groupChatRoomId, newMemberId, existingMember);
        if (existingMember) {
            throw new common_1.BadRequestException('User is already a member of this group');
        }
        const newMember = await this.prismaService.groupChatRoomMember.create({
            data: {
                groupChatRoom_id: groupChatRoomId,
                user_id: newMemberId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const groupRoom = await this.prismaService.groupChatRoom.update({
            where: { id: groupChatRoomId },
            data: {
                group_members_count: {
                    increment: 1,
                },
            },
        });
        this.notificationDispatcherService.dispatchGroupAddedNotification(groupChatRoomId, groupRoom.name, newMemberId).catch((err) => {
            this.logger.error(`Failed to dispatch group added notification for member ${newMemberId}: ${err.message}`);
        });
        return newMember;
    }
    async addGroupMembers(groupChatRoomId, userId, newMemberIds) {
        const requesterMembership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!requesterMembership || requesterMembership.group_role !== 'GROUP_ADMIN') {
            throw new common_1.BadRequestException('Only group admin can add members');
        }
        const uniqueMemberIds = [...new Set(newMemberIds)];
        const existingMembers = await this.prismaService.groupChatRoomMember.findMany({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: {
                    in: uniqueMemberIds,
                },
            },
            select: {
                user_id: true,
            },
        });
        const existingMemberIds = existingMembers.map((m) => m.user_id);
        const newMembersToAdd = uniqueMemberIds.filter((id) => !existingMemberIds.includes(id));
        if (newMembersToAdd.length === 0) {
            throw new common_1.BadRequestException('All users are already members of this group');
        }
        const addedMembers = await this.prismaService.groupChatRoomMember.createMany({
            data: newMembersToAdd.map((memberId) => ({
                groupChatRoom_id: groupChatRoomId,
                user_id: memberId,
            })),
        });
        const addedMembersWithDetails = await this.prismaService.groupChatRoomMember.findMany({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: {
                    in: newMembersToAdd,
                },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const groupRoom = await this.prismaService.groupChatRoom.update({
            where: { id: groupChatRoomId },
            data: {
                group_members_count: {
                    increment: newMembersToAdd.length,
                },
            },
        });
        newMembersToAdd.forEach((memberId) => {
            this.notificationDispatcherService.dispatchGroupAddedNotification(groupChatRoomId, groupRoom.name, memberId).catch((err) => {
                this.logger.error(`Failed to dispatch group added notification for member ${memberId}: ${err.message}`);
            });
        });
        return {
            addedCount: newMembersToAdd.length,
            alreadyMemberCount: existingMemberIds.length,
            members: addedMembersWithDetails,
        };
    }
    async removeGroupMember(groupChatRoomId, userId, memberId) {
        if (userId === memberId) {
            throw new common_1.BadRequestException("You can remove yourself");
        }
        const requesterMembership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!requesterMembership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        if (userId !== memberId && requesterMembership.group_role !== 'GROUP_ADMIN') {
            throw new common_1.BadRequestException('Only group admin can remove other members');
        }
        const memberToRemove = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: memberId,
            },
        });
        if (!memberToRemove) {
            throw new common_1.NotFoundException('Member not found in this group');
        }
        await this.prismaService.groupChatRoomMember.delete({
            where: { id: memberToRemove.id },
        });
        const groupRoom = await this.prismaService.groupChatRoom.update({
            where: { id: groupChatRoomId },
            data: {
                group_members_count: {
                    decrement: 1,
                },
            },
        });
        if (userId !== memberId) {
            this.notificationDispatcherService.dispatchGroupRemovedNotification(groupChatRoomId, groupRoom.name, memberId).catch((err) => {
                this.logger.error(`Failed to dispatch group removed notification for member ${memberId}: ${err.message}`);
            });
        }
        if (this.socketRoomService) {
            try {
                await this.socketRoomService.removeUserFromGroupRoom(groupChatRoomId, memberId);
                await this.socketRoomService.broadcastUserRemoved(groupChatRoomId, memberId, userId);
            }
            catch (err) {
                this.logger.error(`Failed to handle socket.io room removal for member removal:`, err);
            }
        }
        return { message: 'Member removed successfully' };
    }
    async updateGroupChatRoom(groupChatRoomId, userId, updateDto, file) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership || membership.group_role !== 'GROUP_ADMIN') {
            throw new common_1.BadRequestException('Only group admin can update group details');
        }
        const room = await this.prismaService.groupChatRoom.findUnique({
            where: { id: groupChatRoomId },
        });
        if (!room) {
            throw new common_1.NotFoundException('Group chat room not found');
        }
        if (file && room.image) {
            console.log(file);
            this.deleteGroupImage(room.image);
        }
        const imagePath = file ? file.path.replace(/\\/g, '/') : updateDto.image;
        const updatedRoom = await this.prismaService.groupChatRoom.update({
            where: { id: groupChatRoomId },
            data: {
                name: updateDto.name,
                image: imagePath,
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                nick_name: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        });
        return updatedRoom;
    }
    deleteGroupImage(imagePath) {
        try {
            if (imagePath) {
                const normalizedPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
                if (fs.existsSync(normalizedPath)) {
                    fs.unlinkSync(normalizedPath);
                    this.logger.log(`Old group image deleted successfully: ${normalizedPath}`);
                }
            }
        }
        catch (error) {
            this.logger.error(`Failed to delete old group image: ${error.message}`);
        }
    }
    normalizeEncryptedKeys(encryptedKeys) {
        if (!encryptedKeys) {
            return undefined;
        }
        if (typeof encryptedKeys !== 'string') {
            if (!Array.isArray(encryptedKeys)) {
                throw new common_1.BadRequestException('encryptedKeys must be an array');
            }
            return encryptedKeys;
        }
        try {
            const parsed = JSON.parse(encryptedKeys);
            if (!Array.isArray(parsed)) {
                throw new common_1.BadRequestException('encryptedKeys must be a valid JSON array');
            }
            return parsed;
        }
        catch {
            throw new common_1.BadRequestException('encryptedKeys must be a valid JSON array');
        }
    }
    normalizeWaveform(waveform) {
        if (!waveform) {
            return undefined;
        }
        if (typeof waveform !== 'string') {
            if (!Array.isArray(waveform)) {
                throw new common_1.BadRequestException('waveform must be an array');
            }
            return waveform;
        }
        try {
            const parsed = JSON.parse(waveform);
            if (!Array.isArray(parsed)) {
                throw new common_1.BadRequestException('waveform must be a valid JSON array');
            }
            return parsed;
        }
        catch {
            throw new common_1.BadRequestException('waveform must be a valid JSON array');
        }
    }
    async ensureGroupMember(groupChatRoomId, userId) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.BadRequestException('You are not a member of this group');
        }
        return membership;
    }
    async broadcastGroupMessage(groupChatRoomId, senderId, groupChat) {
        if (!this.socketRoomService?.server) {
            return;
        }
        const members = await this.prismaService.groupChatRoomMember.findMany({
            where: { groupChatRoom_id: groupChatRoomId },
            select: { user_id: true },
        });
        members.forEach((member) => {
            const userRoomId = `user-${member.user_id}`;
            const isMine = member.user_id === senderId;
            if (isMine) {
                this.socketRoomService.server.to(userRoomId).emit('group-message-sent', {
                    ...groupChat,
                    is_mine: true,
                });
            }
            else {
                this.socketRoomService.server.to(userRoomId).emit('group-new-message', {
                    ...groupChat,
                    groupChatRoomId,
                    is_mine: false,
                });
            }
        });
    }
    maskDeletedGroupMessage(message) {
        if (!message?.isDeletedForEveryone) {
            return message;
        }
        return {
            ...message,
            message: null,
            file_url: null,
            file_name: null,
            file_size: null,
            file_mime_type: null,
            durationSeconds: null,
            waveform: null,
            encryptionType: null,
            encryptionVersion: null,
            senderKeyId: null,
            nonce: null,
            encryptedKeys: null,
        };
    }
    attachPresence(user) {
        const presence = this.socketRoomService?.getPresence
            ? this.socketRoomService.getPresence(user.id, user.lastSeenAt)
            : { isOnline: false, lastSeenAt: user.lastSeenAt ?? null };
        return {
            ...user,
            isOnline: presence.isOnline,
            lastSeenAt: presence.lastSeenAt,
        };
    }
    async leaveGroup(groupChatRoomId, userId) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        if (membership.group_role === 'GROUP_ADMIN') {
            const otherAdminsCount = await this.prismaService.groupChatRoomMember.count({
                where: {
                    groupChatRoom_id: groupChatRoomId,
                    group_role: 'GROUP_ADMIN',
                    user_id: {
                        not: userId,
                    },
                },
            });
            if (otherAdminsCount === 0) {
                const earliestMember = await this.prismaService.groupChatRoomMember.findFirst({
                    where: {
                        groupChatRoom_id: groupChatRoomId,
                        user_id: {
                            not: userId,
                        },
                    },
                    orderBy: {
                        createdAt: 'asc',
                    },
                });
                if (earliestMember) {
                    await this.prismaService.groupChatRoomMember.update({
                        where: { id: earliestMember.id },
                        data: { group_role: 'GROUP_ADMIN' },
                    });
                }
            }
        }
        await this.prismaService.groupChatRoomMember.delete({
            where: { id: membership.id },
        });
        const remainingMembersCount = await this.prismaService.groupChatRoomMember.count({
            where: {
                groupChatRoom_id: groupChatRoomId,
            },
        });
        if (this.socketRoomService) {
            try {
                await this.socketRoomService.removeUserFromGroupRoom(groupChatRoomId, userId);
                await this.socketRoomService.broadcastUserLeft(groupChatRoomId, userId);
            }
            catch (err) {
                this.logger.error(`Failed to handle socket.io room removal for user leaving:`, err);
            }
        }
        if (remainingMembersCount === 0) {
            await this.prismaService.groupChatRoom.delete({
                where: { id: groupChatRoomId },
            });
            return { message: 'Left group successfully. Group has been deleted as no members remain' };
        }
        await this.prismaService.groupChatRoom.update({
            where: { id: groupChatRoomId },
            data: {
                group_members_count: {
                    decrement: 1,
                },
            },
        });
        return { message: 'Left group successfully' };
    }
    async getGroupMembers(groupChatRoomId, userId, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const take = paginationDto.limit;
        const [members, total] = await Promise.all([
            this.prismaService.groupChatRoomMember.findMany({
                where: { groupChatRoom_id: groupChatRoomId },
                include: {
                    user: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
                skip,
                take,
            }),
            this.prismaService.groupChatRoomMember.count({
                where: { groupChatRoom_id: groupChatRoomId },
            }),
        ]);
        return { members, total };
    }
    async getUsersForAddingToGroup(groupChatRoomId, userId, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const [users, total] = await Promise.all([
            this.prismaService.user.findMany({
                where: {
                    NOT: {
                        groupChatRooms: {
                            some: {
                                groupChatRoom_id: groupChatRoomId,
                            },
                        },
                    },
                },
                select: {
                    id: true,
                    nick_name: true,
                    avatar: true,
                },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.user.count({
                where: {
                    NOT: {
                        groupChatRooms: {
                            some: {
                                groupChatRoom_id: groupChatRoomId,
                            },
                        },
                    },
                },
            }),
        ]);
        return { users, total };
    }
    async searchUsersToAddToGroup(groupChatRoomId, userId, query, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const searchUserWhere = {
            NOT: {
                groupChatRooms: {
                    some: {
                        groupChatRoom_id: groupChatRoomId,
                    },
                },
            },
            OR: [
                { nick_name: { contains: query, mode: 'insensitive' } },
                { email: { contains: query, mode: 'insensitive' } },
            ],
        };
        const [users, total] = await Promise.all([
            this.prismaService.user.findMany({
                where: searchUserWhere,
                select: {
                    id: true,
                    nick_name: true,
                    avatar: true,
                },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.user.count({
                where: searchUserWhere
            }),
        ]);
        return { users, total };
    }
};
exports.GroupChatService = GroupChatService;
exports.GroupChatService = GroupChatService = GroupChatService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Optional)()),
    __param(2, (0, common_1.Inject)('SOCKET_ROOM_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_dispatcher_service_1.NotificationDispatcherService, Object])
], GroupChatService);
//# sourceMappingURL=group-chat.service.js.map