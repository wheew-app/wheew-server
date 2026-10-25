import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupChatRoomDto } from './dtos/create-group-chat-room.dto';
import { SendGroupMessageDto } from './dtos/send-group-message.dto';
import { SendGroupFileDto, SendGroupVoiceDto } from './dtos/send-group-file.dto';
import { UpdateGroupChatRoomDto } from './dtos/update-group-chat-room.dto';
import { PaginationDto } from './dtos/pagination.dto';
import { MessageType } from 'generated/prisma/enums';
import { NotificationDispatcherService } from '../notification/services/notification-dispatcher.service';
export declare class GroupChatService {
    private readonly prismaService;
    private readonly notificationDispatcherService;
    private readonly socketRoomService?;
    private readonly logger;
    constructor(prismaService: PrismaService, notificationDispatcherService: NotificationDispatcherService, socketRoomService?: any | undefined);
    createGroupChatRoom(userId: string, createGroupChatRoomDto: CreateGroupChatRoomDto, file?: Express.Multer.File): Promise<{
        members: ({
            user: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            groupChatRoom_id: string;
            last_read_message_id: string | null;
            group_role: import("generated/prisma/enums").GroupRole;
        })[];
    } & {
        id: string;
        name: string;
        is_deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        group_members_count: number;
    }>;
    sendGroupMessage(userId: string, sendGroupMessageDto: SendGroupMessageDto): Promise<{
        sender: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: MessageType;
        message: string;
        encryptionType: string | null;
        encryptionVersion: number | null;
        senderKeyId: string | null;
        nonce: string | null;
        encryptedKeys: import("@prisma/client/runtime/library").JsonValue | null;
        durationSeconds: number | null;
        waveform: import("@prisma/client/runtime/library").JsonValue | null;
        groupChatRoom_id: string;
        file_url: string | null;
        file_name: string | null;
        file_size: number | null;
        file_mime_type: string | null;
        isDeletedForEveryone: boolean;
        deletedAt: Date | null;
        deletedById: string | null;
        sender_id: string;
    }>;
    sendGroupFileMessage(userId: string, sendGroupFileDto: SendGroupFileDto, file: Express.Multer.File): Promise<{
        sender: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: MessageType;
        message: string;
        encryptionType: string | null;
        encryptionVersion: number | null;
        senderKeyId: string | null;
        nonce: string | null;
        encryptedKeys: import("@prisma/client/runtime/library").JsonValue | null;
        durationSeconds: number | null;
        waveform: import("@prisma/client/runtime/library").JsonValue | null;
        groupChatRoom_id: string;
        file_url: string | null;
        file_name: string | null;
        file_size: number | null;
        file_mime_type: string | null;
        isDeletedForEveryone: boolean;
        deletedAt: Date | null;
        deletedById: string | null;
        sender_id: string;
    }>;
    sendGroupVoiceMessage(userId: string, sendGroupVoiceDto: SendGroupVoiceDto, file: Express.Multer.File): Promise<{
        sender: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: MessageType;
        message: string;
        encryptionType: string | null;
        encryptionVersion: number | null;
        senderKeyId: string | null;
        nonce: string | null;
        encryptedKeys: import("@prisma/client/runtime/library").JsonValue | null;
        durationSeconds: number | null;
        waveform: import("@prisma/client/runtime/library").JsonValue | null;
        groupChatRoom_id: string;
        file_url: string | null;
        file_name: string | null;
        file_size: number | null;
        file_mime_type: string | null;
        isDeletedForEveryone: boolean;
        deletedAt: Date | null;
        deletedById: string | null;
        sender_id: string;
    }>;
    getGroupChatRooms(userId: string, paginationDto: PaginationDto): Promise<{
        rooms: {
            members: {
                user: {
                    id: string;
                    nick_name: string;
                    avatar: string | null;
                    lastSeenAt: Date | null;
                } & {
                    isOnline: any;
                    lastSeenAt: any;
                };
                id: string;
                createdAt: Date;
                updatedAt: Date;
                user_id: string;
                groupChatRoom_id: string;
                last_read_message_id: string | null;
                group_role: import("generated/prisma/enums").GroupRole;
            }[];
            chats: any[];
            id: string;
            name: string;
            is_deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            group_members_count: number;
        }[];
        total: number;
    }>;
    getGroupChatMessages(groupChatRoomId: string, userId: string, paginationDto: PaginationDto): Promise<{
        messages: any[];
        total: number;
    }>;
    deleteGroupMessageForEveryone(userId: string, messageId: string): Promise<any>;
    getGroupMemberDeviceKeys(groupChatRoomId: string, userId: string): Promise<{
        groupChatRoomId: string;
        members: {
            userId: string;
            groupRole: import("generated/prisma/enums").GroupRole;
            user: {
                id: string;
                nick_name: string;
                avatar: string | null;
                deviceKeys: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    isActive: boolean;
                    deviceId: string;
                    publicKey: string;
                }[];
            };
            deviceKeys: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                isActive: boolean;
                deviceId: string;
                publicKey: string;
            }[];
        }[];
    }>;
    addGroupMember(groupChatRoomId: string, userId: string, newMemberId: string): Promise<{
        user: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        groupChatRoom_id: string;
        last_read_message_id: string | null;
        group_role: import("generated/prisma/enums").GroupRole;
    }>;
    addGroupMembers(groupChatRoomId: string, userId: string, newMemberIds: string[]): Promise<{
        addedCount: number;
        alreadyMemberCount: number;
        members: ({
            user: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            groupChatRoom_id: string;
            last_read_message_id: string | null;
            group_role: import("generated/prisma/enums").GroupRole;
        })[];
    }>;
    removeGroupMember(groupChatRoomId: string, userId: string, memberId: string): Promise<{
        message: string;
    }>;
    updateGroupChatRoom(groupChatRoomId: string, userId: string, updateDto: UpdateGroupChatRoomDto, file?: Express.Multer.File): Promise<{
        members: ({
            user: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            groupChatRoom_id: string;
            last_read_message_id: string | null;
            group_role: import("generated/prisma/enums").GroupRole;
        })[];
    } & {
        id: string;
        name: string;
        is_deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        group_members_count: number;
    }>;
    private deleteGroupImage;
    private normalizeEncryptedKeys;
    private normalizeWaveform;
    ensureGroupMember(groupChatRoomId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        groupChatRoom_id: string;
        last_read_message_id: string | null;
        group_role: import("generated/prisma/enums").GroupRole;
    }>;
    private broadcastGroupMessage;
    private maskDeletedGroupMessage;
    private attachPresence;
    leaveGroup(groupChatRoomId: string, userId: string): Promise<{
        message: string;
    }>;
    getGroupMembers(groupChatRoomId: string, userId: string, paginationDto: PaginationDto): Promise<{
        members: ({
            user: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            groupChatRoom_id: string;
            last_read_message_id: string | null;
            group_role: import("generated/prisma/enums").GroupRole;
        })[];
        total: number;
    }>;
    getUsersForAddingToGroup(groupChatRoomId: string, userId: string, paginationDto: PaginationDto): Promise<{
        users: {
            id: string;
            nick_name: string;
            avatar: string | null;
        }[];
        total: number;
    }>;
    searchUsersToAddToGroup(groupChatRoomId: string, userId: string, query: string, paginationDto: PaginationDto): Promise<{
        users: {
            id: string;
            nick_name: string;
            avatar: string | null;
        }[];
        total: number;
    }>;
}
