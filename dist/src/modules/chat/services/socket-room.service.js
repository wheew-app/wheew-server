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
var SocketRoomService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketRoomService = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let SocketRoomService = SocketRoomService_1 = class SocketRoomService {
    logger = new common_1.Logger(SocketRoomService_1.name);
    server;
    onlineUsers = new Map();
    constructor() { }
    setServer(server) {
        this.server = server;
    }
    markUserConnected(userId, socketId) {
        const sockets = this.onlineUsers.get(userId) ?? new Set();
        const wasOffline = sockets.size === 0;
        sockets.add(socketId);
        this.onlineUsers.set(userId, sockets);
        return wasOffline;
    }
    markUserDisconnected(userId, socketId) {
        const sockets = this.onlineUsers.get(userId);
        if (!sockets) {
            return true;
        }
        sockets.delete(socketId);
        if (sockets.size === 0) {
            this.onlineUsers.delete(userId);
            return true;
        }
        this.onlineUsers.set(userId, sockets);
        return false;
    }
    getOnlineUserIds() {
        return [...this.onlineUsers.keys()];
    }
    getPresence(userId, lastSeenAt) {
        return {
            userId,
            isOnline: this.onlineUsers.has(userId),
            lastSeenAt: this.onlineUsers.has(userId) ? null : (lastSeenAt ?? null),
        };
    }
    getPresenceMap(users) {
        return new Map(users.map((user) => [user.id, this.getPresence(user.id, user.lastSeenAt)]));
    }
    emitToUser(userId, event, payload) {
        if (!this.server) {
            this.logger.warn('Socket.IO server not initialized, skipping emit');
            return;
        }
        this.server.to(`user-${userId}`).emit(event, payload);
    }
    generateGroupRoomId(groupChatRoomId) {
        return `group-${groupChatRoomId}`;
    }
    generateUserRoomId(userId) {
        return `user-${userId}`;
    }
    async isUserConnected(userId) {
        if (this.onlineUsers.has(userId)) {
            return true;
        }
        if (!this.server) {
            return false;
        }
        try {
            const userRoomId = this.generateUserRoomId(userId);
            const socketsInRoom = await this.server.in(userRoomId).fetchSockets();
            return socketsInRoom.length > 0;
        }
        catch (err) {
            this.logger.error(`Error checking connection status for user ${userId}:`, err);
            return false;
        }
    }
    async removeUserFromGroupRoom(groupChatRoomId, userId) {
        if (!this.server) {
            this.logger.warn('Socket.IO server not initialized, skipping socket room removal');
            return;
        }
        try {
            const groupRoomId = this.generateGroupRoomId(groupChatRoomId);
            const socketsInRoom = await this.server.in(groupRoomId).fetchSockets();
            let removedCount = 0;
            for (const socket of socketsInRoom) {
                if (socket.data.userId === userId) {
                    socket.leave(groupRoomId);
                    removedCount++;
                }
            }
            if (removedCount > 0) {
                this.logger.log(`Removed user ${userId} from group room ${groupChatRoomId} (${removedCount} socket(s) disconnected)`);
            }
        }
        catch (err) {
            this.logger.error(`Error removing user ${userId} from group room ${groupChatRoomId}:`, err);
        }
    }
    async broadcastUserRemoved(groupChatRoomId, removedUserId, removedBy) {
        if (!this.server) {
            return;
        }
        try {
            const groupRoomId = this.generateGroupRoomId(groupChatRoomId);
            const memberUserRoomId = this.generateUserRoomId(removedUserId);
            this.server.to(groupRoomId).emit('group-member-removed', {
                message: `Member was removed from the group`,
                memberId: removedUserId,
                removedBy: removedBy,
                groupChatRoomId: groupChatRoomId,
            });
            this.server.to(memberUserRoomId).emit('group-member-removed', {
                message: "You've been removed from a group",
                groupChatRoomId: groupChatRoomId,
                memberId: removedUserId,
            });
            this.logger.log(`Broadcasted removal of user ${removedUserId} from group ${groupChatRoomId}`);
        }
        catch (err) {
            this.logger.error(`Error broadcasting user removal for group ${groupChatRoomId}:`, err);
        }
    }
    async broadcastUserLeft(groupChatRoomId, userId) {
        if (!this.server) {
            return;
        }
        try {
            const groupRoomId = this.generateGroupRoomId(groupChatRoomId);
            this.server.to(groupRoomId).emit('group-member-removed', {
                message: `User left the group`,
                userId,
                groupChatRoomId: groupChatRoomId,
            });
            this.logger.log(`Broadcasted that user ${userId} left group ${groupChatRoomId}`);
        }
        catch (err) {
            this.logger.error(`Error broadcasting user left for group ${groupChatRoomId}:`, err);
        }
    }
};
exports.SocketRoomService = SocketRoomService;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketRoomService.prototype, "server", void 0);
exports.SocketRoomService = SocketRoomService = SocketRoomService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SocketRoomService);
//# sourceMappingURL=socket-room.service.js.map