import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "../chat.service";
import { GroupChatService } from "src/modules/group-chat/group-chat.service";
import { SendMessageDto } from "../dtos/send-message.dto";
import { UserService } from "src/modules/user/user.service";
import { GetAllMessagesDto } from "../dtos/get-all-messages.dto";
import { GetUserRoomsDto } from "../dtos/get-user-rooms.dto";
import { MessageAcknowledgementDto } from "../dtos/message-acknowledgement.dto";
import { CreateGroupChatRoomDto } from "src/modules/group-chat/dtos/create-group-chat-room.dto";
import { SendGroupMessageDto } from "src/modules/group-chat/dtos/send-group-message.dto";
import { UpdateGroupChatRoomDto } from "src/modules/group-chat/dtos/update-group-chat-room.dto";
import { PaginationDto } from "src/modules/group-chat/dtos/pagination.dto";
import { SocketRoomService } from "../services/socket-room.service";
export declare class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatService;
    private readonly userService;
    private readonly groupChatService;
    private readonly socketRoomService;
    server: Server;
    private userTypingStates;
    private typingTimeouts;
    constructor(chatService: ChatService, userService: UserService, groupChatService: GroupChatService, socketRoomService: SocketRoomService);
    afterInit(server: Server): void;
    private generateGroupRoomId;
    private generateUserRoomId;
    private clearTypingTimeout;
    private setTypingTimeout;
    handleDisconnect(client: Socket): Promise<void>;
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
    handleMessage(data: any, client: Socket): void;
    handleChat(data: SendMessageDto, client: Socket): Promise<void>;
    handleMesssageDelivery(acknowledgements: MessageAcknowledgementDto, client: Socket): Promise<void>;
    handleTyping(data: {
        receiverId: string;
        roomId: string;
    }, client: Socket): Promise<void>;
    handleStopTyping(data: {
        receiverId: string;
        roomId: string;
    }, client: Socket): Promise<void>;
    getAllUserRooms(getUserRoomsDto: GetUserRoomsDto, client: Socket): Promise<void>;
    getAllRoomMessages(getAllMessageDto: GetAllMessagesDto, client: Socket): Promise<void>;
    handleCreateGroupChat(data: CreateGroupChatRoomDto, client: Socket): Promise<void>;
    handleSendGroupMessage(data: SendGroupMessageDto, client: Socket): Promise<void>;
    handleJoinGroupChat(data: {
        groupChatRoomId: string;
    }, client: Socket): Promise<void>;
    handleLeaveGroupChat(data: {
        groupChatRoomId: string;
    }, client: Socket): Promise<void>;
    handleFetchGroupChatRooms(pagination: PaginationDto, client: Socket): Promise<void>;
    handleFetchGroupMessages(data: {
        groupChatRoomId: string;
        pagination: PaginationDto;
    }, client: Socket): Promise<void>;
    handleAddGroupMember(data: {
        groupChatRoomId: string;
        newMemberId: string;
    }, client: Socket): Promise<void>;
    handleAddGroupMembers(data: {
        groupChatRoomId: string;
        memberIds: string[];
    }, client: Socket): Promise<void>;
    handleRemoveGroupMember(data: {
        groupChatRoomId: string;
        memberId: string;
    }, client: Socket): Promise<void>;
    handleUpdateGroupChat(data: {
        groupChatRoomId: string;
        updateData: UpdateGroupChatRoomDto;
    }, client: Socket): Promise<void>;
    handleGroupTyping(data: {
        groupChatRoomId: string;
    }, client: Socket): Promise<void>;
    handleGroupStopTyping(data: {
        groupChatRoomId: string;
    }, client: Socket): Promise<void>;
}
