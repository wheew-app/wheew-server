import { PrismaService } from "../prisma/prisma.service";
import { SendMessageDto } from "./dtos/send-message.dto";
import { GetAllMessagesDto } from "./dtos/get-all-messages.dto";
import { GetUserRoomsDto } from "./dtos/get-user-rooms.dto";
import { RatingService } from "../rating/rating.service";
import { SendFileDto } from "./dtos/send-file.dto";
import { MessageType } from "generated/prisma/enums";
import { NotificationDispatcherService } from "../notification/services/notification-dispatcher.service";
import { CreateMessageRequestDto, RegisterDeviceKeyDto } from "./dtos/message-request.dto";
import { SendVoiceDto } from "./dtos/send-file.dto";
export declare class ChatService {
    private readonly prismaService;
    private readonly ratingService;
    private readonly notificationDispatcherService;
    private readonly socketRoomService?;
    private readonly logger;
    constructor(prismaService: PrismaService, ratingService: RatingService, notificationDispatcherService: NotificationDispatcherService, socketRoomService?: any | undefined);
    createMessage(userId: string, sendMessageDto: SendMessageDto): Promise<({
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
        type: MessageType;
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
    }) | {
        isMessageRequest: boolean;
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
            roomId: string | null;
            firstMessage: string | null;
            presetMessageId: string | null;
            status: import("generated/prisma/enums").MessageRequestStatus;
        };
    }>;
    sendFileMessage(userId: string, sendFileDto: SendFileDto, file: Express.Multer.File): Promise<{
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
        type: MessageType;
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
    sendVoiceMessage(userId: string, sendVoiceDto: SendVoiceDto, file: Express.Multer.File): Promise<{
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
        type: MessageType;
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
    private createChatRoomIfNotExists;
    private getActivePresetMessage;
    private createOrUpdatePendingMessageRequest;
    private resolveMessageRequestFirstMessage;
    getChatRoomIfExist(userId: string, receiverId: string): Promise<{
        id: string;
        is_deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
        user1_id: string;
        user2_id: string;
    } | undefined>;
    createMessageRequest(userId: string, dto: CreateMessageRequestDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: import("generated/prisma/enums").MessageRequestStatus;
    } | {
        isExistingChat: boolean;
        roomId: string;
    }>;
    getMessageRequestInbox(userId: string, page?: number, limit?: number): Promise<{
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
    getSentMessageRequests(userId: string, page?: number, limit?: number): Promise<{
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
    getMessageRequestThread(userId: string, requestId: string): Promise<{
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
    getMessageRequestCounts(userId: string): Promise<{
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
    acceptMessageRequest(userId: string, requestId: string): Promise<{
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
            roomId: string | null;
            firstMessage: string | null;
            presetMessageId: string | null;
            status: import("generated/prisma/enums").MessageRequestStatus;
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
    declineMessageRequest(userId: string, requestId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
        roomId: string | null;
        firstMessage: string | null;
        presetMessageId: string | null;
        status: import("generated/prisma/enums").MessageRequestStatus;
    }>;
    blockMessageRequestSender(userId: string, requestId: string): Promise<{
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
            roomId: string | null;
            firstMessage: string | null;
            presetMessageId: string | null;
            status: import("generated/prisma/enums").MessageRequestStatus;
        };
        block: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            blocked_user_id: string;
        };
    }>;
    withdrawMessageRequest(userId: string, requestId: string): Promise<{
        message: string;
        deleted: boolean;
        requestId: string;
    }>;
    registerDeviceKey(userId: string, dto: RegisterDeviceKeyDto): Promise<{
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
    deactivateDeviceKey(userId: string, deviceId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        isActive: boolean;
        deviceId: string;
        publicKey: string;
    }>;
    getUserChatRooms(userId: string, getUserRoomsDto: GetUserRoomsDto): Promise<{
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
                group_role: import("generated/prisma/enums").GroupRole;
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
                type: MessageType;
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
            status: import("generated/prisma/enums").MessageRequestStatus;
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
    getRoomMessages(userId: string, getAllMessageDto: GetAllMessagesDto): Promise<{
        messages: any[];
        total: number;
    }>;
    deleteMessageForEveryone(userId: string, messageId: string): Promise<any>;
    acknowledgeMessageDelivery(messageId: string): Promise<{
        message: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: MessageType;
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
    isUserExistOnRoom(userId: string, roomId: string): Promise<boolean>;
    ensureUserCanTypeInRoom(userId: string, roomId: string, receiverId: string): Promise<{
        id: string;
        is_deleted: boolean;
        createdAt: Date;
        updatedAt: Date;
        user1_id: string;
        user2_id: string;
    }>;
    private maskDeletedChatMessage;
    private attachPresence;
    private formatMessageRequestState;
    private formatMessageRequestForReceiver;
    private formatMessageRequestForSender;
    private getMessageRequestActions;
    private deleteLegacyWithdrawnMessageRequests;
    getOrCreateRoomByPlate(currentUserId: string, plateNo: string): Promise<{
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
