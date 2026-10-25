import { GroupChatService } from './group-chat.service';
import { CreateGroupChatRoomDto } from './dtos/create-group-chat-room.dto';
import { SendGroupFileDto, SendGroupVoiceDto } from './dtos/send-group-file.dto';
import { UpdateGroupChatRoomDto } from './dtos/update-group-chat-room.dto';
import { AddGroupMembersDto } from './dtos/add-group-members.dto';
import { PaginationDto } from './dtos/pagination.dto';
export declare class GroupChatController {
    private readonly groupChatService;
    constructor(groupChatService: GroupChatService);
    createGroupChatRoom(request: Request, createGroupChatRoomDto: CreateGroupChatRoomDto, file?: Express.Multer.File): Promise<{
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
            group_role: import("../../../generated/prisma/enums").GroupRole;
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
    sendGroupFileMessage(request: Request, sendGroupFileDto: SendGroupFileDto, file: Express.Multer.File): Promise<{
        sender: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../../generated/prisma/enums").MessageType;
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
    sendGroupVoiceMessage(request: Request, sendGroupVoiceDto: SendGroupVoiceDto, file: Express.Multer.File): Promise<{
        sender: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../../generated/prisma/enums").MessageType;
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
    deleteGroupMessage(request: Request, messageId: string): Promise<any>;
    getGroupChatRooms(request: Request, paginationDto: PaginationDto): Promise<{
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
                group_role: import("../../../generated/prisma/enums").GroupRole;
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
    getGroupChatMessages(request: Request, roomId: string, paginationDto: PaginationDto): Promise<{
        messages: any[];
        total: number;
    }>;
    getGroupMemberDeviceKeys(request: Request, roomId: string): Promise<{
        groupChatRoomId: string;
        members: {
            userId: string;
            groupRole: import("../../../generated/prisma/enums").GroupRole;
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
    addGroupMember(request: Request, roomId: string, memberId: string): Promise<{
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
        group_role: import("../../../generated/prisma/enums").GroupRole;
    }>;
    addGroupMembers(request: Request, roomId: string, addGroupMembersDto: AddGroupMembersDto): Promise<{
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
            group_role: import("../../../generated/prisma/enums").GroupRole;
        })[];
    }>;
    removeGroupMember(request: Request, roomId: string, memberId: string): Promise<{
        message: string;
    }>;
    updateGroupChatRoom(request: Request, roomId: string, updateDto: UpdateGroupChatRoomDto, file?: Express.Multer.File): Promise<{
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
            group_role: import("../../../generated/prisma/enums").GroupRole;
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
    leaveGroup(request: Request, roomId: string): Promise<{
        message: string;
    }>;
}
