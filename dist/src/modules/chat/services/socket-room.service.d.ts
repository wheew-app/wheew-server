import { Server } from 'socket.io';
export declare class SocketRoomService {
    private readonly logger;
    private server?;
    private readonly onlineUsers;
    constructor();
    setServer(server: Server): void;
    markUserConnected(userId: string, socketId: string): boolean;
    markUserDisconnected(userId: string, socketId: string): boolean;
    getOnlineUserIds(): string[];
    getPresence(userId: string, lastSeenAt?: Date | string | null): {
        userId: string;
        isOnline: boolean;
        lastSeenAt: string | Date | null;
    };
    getPresenceMap(users: Array<{
        id: string;
        lastSeenAt?: Date | string | null;
    }>): Map<string, {
        userId: string;
        isOnline: boolean;
        lastSeenAt: string | Date | null;
    }>;
    emitToUser(userId: string, event: string, payload: any): void;
    private generateGroupRoomId;
    private generateUserRoomId;
    isUserConnected(userId: string): Promise<boolean>;
    removeUserFromGroupRoom(groupChatRoomId: string, userId: string): Promise<void>;
    broadcastUserRemoved(groupChatRoomId: string, removedUserId: string, removedBy: string): Promise<void>;
    broadcastUserLeft(groupChatRoomId: string, userId: string): Promise<void>;
}
