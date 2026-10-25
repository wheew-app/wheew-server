import { ChatService } from "./chat.service";
import { GetUserRoomsDto } from "./dtos/get-user-rooms.dto";
import { GetAllMessagesDto } from "./dtos/get-all-messages.dto";
import { SendFileDto, SendVoiceDto } from "./dtos/send-file.dto";
import { CreateMessageRequestDto, RegisterDeviceKeyDto } from "./dtos/message-request.dto";
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    sendFileMessage(request: Request, sendFileDto: SendFileDto, file: Express.Multer.File): Promise<{
        sender: {
            nick_name: string;
            id: string;
            avatar: string | null;
        };
        receiver: {
            nick_name: string;
            id: string;
            avatar: string | null;
        };
    } & {
        message: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../../generated/prisma/enums").MessageType;
        encryptionType: string | null;
        encryptionVersion: number | null;
        senderKeyId: string | null;
        receiverKeyId: string | null;
        nonce: string | null;
        is_read: boolean;
        is_delivered: boolean;
        file_url: string | null;
        file_name: string | null;
        file_size: number | null;
        file_mime_type: string | null;
        durationSeconds: number | null;
        waveform: import("@prisma/client/runtime/library").JsonValue | null;
        isDeletedForEveryone: boolean;
        deletedAt: Date | null;
        deletedById: string | null;
        chatRoom_id: string;
        sender_id: string;
        receiver_id: string;
    }>;
    sendVoiceMessage(request: Request, sendVoiceDto: SendVoiceDto, file: Express.Multer.File): Promise<{
        sender: {
            nick_name: string;
            id: string;
            avatar: string | null;
        };
        receiver: {
            nick_name: string;
            id: string;
            avatar: string | null;
        };
    } & {
        message: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../../generated/prisma/enums").MessageType;
        encryptionType: string | null;
        encryptionVersion: number | null;
        senderKeyId: string | null;
        receiverKeyId: string | null;
        nonce: string | null;
        is_read: boolean;
        is_delivered: boolean;
        file_url: string | null;
        file_name: string | null;
        file_size: number | null;
        file_mime_type: string | null;
        durationSeconds: number | null;
        waveform: import("@prisma/client/runtime/library").JsonValue | null;
        isDeletedForEveryone: boolean;
        deletedAt: Date | null;
        deletedById: string | null;
        chatRoom_id: string;
        sender_id: string;
        receiver_id: string;
    }>;
    deleteMessage(request: Request, messageId: string): Promise<any>;
    createMessageRequest(request: Request, dto: CreateMessageRequestDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: import("../../../generated/prisma/enums").MessageRequestStatus;
    } | {
        isExistingChat: boolean;
        roomId: string;
    }>;
    getMessageRequestInbox(request: Request, page?: number, limit?: number): Promise<{
        requests: {
            sender: any;
            canAccept: boolean;
            canReject: boolean;
            canBlock: boolean;
            threadType: string;
            id: any;
            senderId: any;
            receiverId: any;
            roomId: any;
            firstMessage: any;
            presetMessageId: any;
            status: any;
            createdAt: any;
            updatedAt: any;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getSentMessageRequests(request: Request, page?: number, limit?: number): Promise<{
        requests: {
            receiver: any;
            canWithdraw: boolean;
            canMessage: boolean;
            threadType: string;
            id: any;
            senderId: any;
            receiverId: any;
            roomId: any;
            firstMessage: any;
            presetMessageId: any;
            status: any;
            createdAt: any;
            updatedAt: any;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getMessageRequestCounts(request: Request): Promise<{
        received: {
            pending: number;
        };
        sent: {
            pending: number;
            accepted: number;
            declined: number;
            total: number;
        };
    }>;
    getMessageRequestThread(request: Request, requestId: string): Promise<{
        type: string;
        request: {
            id: any;
            senderId: any;
            receiverId: any;
            roomId: any;
            firstMessage: any;
            presetMessageId: any;
            status: any;
            createdAt: any;
            updatedAt: any;
        };
        otherUser: ({
            nick_name: string;
            id: string;
            avatar: string | null;
            licence_id: string | null;
            email_verified: boolean;
            license_no_verified: boolean;
            is_vehicle_verified: boolean;
            lastSeenAt: Date | null;
        } & {
            isOnline: any;
            lastSeenAt: any;
        }) | null;
        messages: {
            id: string;
            requestId: string;
            chatRoom_id: null;
            sender_id: string;
            receiver_id: string;
            message: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            is_mine: boolean;
        }[];
        actions: string[];
    }>;
    acceptMessageRequest(request: Request, requestId: string): Promise<{
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
            roomId: string | null;
            firstMessage: string | null;
            presetMessageId: string | null;
            status: import("../../../generated/prisma/enums").MessageRequestStatus;
        };
        room: {
            id: string;
            is_deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
            user1_id: string;
            user2_id: string;
        };
        deliveredMessage: any;
    }>;
    declineMessageRequest(request: Request, requestId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: import("../../../generated/prisma/enums").MessageRequestStatus;
    }>;
    rejectMessageRequest(request: Request, requestId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: import("../../../generated/prisma/enums").MessageRequestStatus;
    }>;
    blockMessageRequestSender(request: Request, requestId: string): Promise<{
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
            roomId: string | null;
            firstMessage: string | null;
            presetMessageId: string | null;
            status: import("../../../generated/prisma/enums").MessageRequestStatus;
        };
        block: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            blocked_user_id: string;
        };
    }>;
    withdrawMessageRequest(request: Request, requestId: string): Promise<{
        message: string;
        deleted: boolean;
        requestId: string;
    }>;
    registerDeviceKey(request: Request, dto: RegisterDeviceKeyDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        deviceId: string;
        publicKey: string;
    }>;
    getUserDeviceKeys(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        deviceId: string;
        publicKey: string;
    }[]>;
    deactivateDeviceKey(request: Request, deviceId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        deviceId: string;
        publicKey: string;
    }>;
    getUserChatRooms(request: Request, getUserRoomsDto: GetUserRoomsDto): Promise<{
        rooms: ({
            type: string;
            otherUser: {
                nick_name: string;
                id: string;
                avatar: string | null;
                licence_id: string | null;
                is_vehicle_verified: boolean;
                lastSeenAt: Date | null;
            } & {
                isOnline: any;
                lastSeenAt: any;
            };
            latest_message: any;
            unread_count: number;
            isBlockedByMe: boolean;
            isBlockedMe: boolean;
            id: string;
            is_deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
            user1_id: string;
            user2_id: string;
        } | {
            type: string;
            group_members_count: number;
            group_members: {
                id: string;
                user_id: string;
                group_role: import("../../../generated/prisma/enums").GroupRole;
                user: {
                    nick_name: string;
                    id: string;
                    avatar: string | null;
                    licence_id: string | null;
                    lastSeenAt: Date | null;
                } & {
                    isOnline: any;
                    lastSeenAt: any;
                };
            }[];
            latest_message: {
                id: string;
                groupChatRoom_id: string;
                sender_id: string;
                message: any;
                createdAt: Date;
                type: import("../../../generated/prisma/enums").MessageType;
                file_url: any;
                file_name: any;
                file_size: any;
                file_mime_type: any;
                isDeletedForEveryone: any;
                deletedAt: any;
                deletedById: any;
                sender: {
                    id: string;
                    nick_name: string;
                    avatar: string | null;
                };
                is_mine: boolean;
            } | null;
            total_messages: number;
            unread_count: number;
            name: string;
            id: string;
            is_deleted: boolean;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
        } | {
            id: string;
            type: string;
            threadType: string;
            requestId: string;
            roomId: null;
            status: import("../../../generated/prisma/enums").MessageRequestStatus;
            otherUser: ({
                nick_name: string;
                id: string;
                avatar: string | null;
                licence_id: string | null;
                is_vehicle_verified: boolean;
                lastSeenAt: Date | null;
            } & {
                isOnline: any;
                lastSeenAt: any;
            }) | null;
            request: {
                id: any;
                senderId: any;
                receiverId: any;
                roomId: any;
                firstMessage: any;
                presetMessageId: any;
                status: any;
                createdAt: any;
                updatedAt: any;
            };
            latest_message: {
                id: string;
                requestId: string;
                chatRoom_id: null;
                sender_id: string;
                receiver_id: string;
                message: string;
                type: string;
                createdAt: Date;
                updatedAt: Date;
                is_mine: boolean;
            } | null;
            unread_count: number;
            canAccept: boolean;
            canReject: boolean;
            canBlock: boolean;
            actions: string[];
            createdAt: Date;
            updatedAt: Date;
        })[];
        total: number;
    }>;
    getRoomMessages(request: Request, getAllMessageDto: GetAllMessagesDto): Promise<{
        messages: any[];
        total: number;
    }>;
    startConversationByPlate(request: Request, plate_no: string): Promise<{
        roomId: string;
        user: {
            id: string;
            nick_name: string;
            avatar: string | null;
            licence_id: string | null;
            is_blocked: false;
            rating: number;
            totalRating: number;
            totalRatings: number;
        };
        isExistingChat: boolean;
    } | {
        user: {
            id: string;
            nick_name: string;
            avatar: string | null;
            licence_id: string | null;
            is_blocked: false;
            rating: number;
            totalRating: number;
            totalRatings: number;
        };
        isExistingChat: boolean;
        roomId?: undefined;
    }>;
}
