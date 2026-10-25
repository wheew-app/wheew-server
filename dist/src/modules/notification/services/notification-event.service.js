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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEventService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let NotificationEventService = class NotificationEventService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createEvent(createNotificationEventDto) {
        const user = await this.prismaService.user.findFirst({
            where: { id: createNotificationEventDto.userId },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const event = await this.prismaService.notificationEvent.create({
            data: {
                userId: createNotificationEventDto.userId,
                eventType: createNotificationEventDto.eventType,
                title: createNotificationEventDto.title,
                message: createNotificationEventDto.message,
                payload: createNotificationEventDto.payload
                    ? JSON.stringify(createNotificationEventDto.payload)
                    : null,
            },
        });
        return this.formatEventResponse(event);
    }
    async bulkCreateEvents(userIds, eventType, title, message, payload) {
        const events = await Promise.all(userIds.map((userId) => this.createEvent({
            userId,
            eventType,
            title,
            message,
            payload,
        }).catch((err) => {
            console.error(`Failed to create notification for user ${userId}:`, err);
            return null;
        })));
        return events.filter((e) => e !== null);
    }
    async getEventsByUser(userId, pagination, unreadOnly = false) {
        const skip = (pagination.page - 1) * pagination.limit;
        const whereClause = { userId };
        if (unreadOnly) {
            whereClause.isRead = false;
        }
        const [events, total, unreadCount] = await Promise.all([
            this.prismaService.notificationEvent.findMany({
                where: whereClause,
                orderBy: { createdAt: 'desc' },
                skip,
                take: pagination.limit,
            }),
            this.prismaService.notificationEvent.count({
                where: whereClause,
            }),
            this.prismaService.notificationEvent.count({
                where: { userId, isRead: false },
            }),
        ]);
        return {
            events: events.map((e) => this.formatEventResponse(e)),
            total,
            unreadCount,
        };
    }
    async getEventById(eventId) {
        const event = await this.prismaService.notificationEvent.findUnique({
            where: { id: eventId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        nick_name: true,
                    },
                },
            },
        });
        if (!event) {
            throw new common_1.NotFoundException('Notification event not found');
        }
        return this.formatEventResponse(event);
    }
    async markAsRead(eventId, userId) {
        const event = await this.prismaService.notificationEvent.findUnique({
            where: { id: eventId },
        });
        if (!event) {
            throw new common_1.NotFoundException('Notification event not found');
        }
        if (event.userId !== userId) {
            throw new common_1.BadRequestException('You do not have permission to update this notification');
        }
        const updatedEvent = await this.prismaService.notificationEvent.update({
            where: { id: eventId },
            data: {
                isRead: true,
                readAt: new Date(),
            },
        });
        return this.formatEventResponse(updatedEvent);
    }
    async markAllAsRead(userId) {
        const result = await this.prismaService.notificationEvent.updateMany({
            where: {
                userId,
                isRead: false,
            },
            data: {
                isRead: true,
                readAt: new Date(),
            },
        });
        return { updatedCount: result.count };
    }
    async deleteEvent(eventId, userId) {
        const event = await this.prismaService.notificationEvent.findUnique({
            where: { id: eventId },
        });
        if (!event) {
            throw new common_1.NotFoundException('Notification event not found');
        }
        if (event.userId !== userId) {
            throw new common_1.BadRequestException('You do not have permission to delete this notification');
        }
        await this.prismaService.notificationEvent.delete({
            where: { id: eventId },
        });
    }
    async deleteAllEvents(userId) {
        const result = await this.prismaService.notificationEvent.deleteMany({
            where: { userId },
        });
        return { deletedCount: result.count };
    }
    async getEventsByType(userId, eventType, pagination) {
        const skip = (pagination.page - 1) * pagination.limit;
        const [events, total] = await Promise.all([
            this.prismaService.notificationEvent.findMany({
                where: {
                    userId,
                    eventType: eventType,
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: pagination.limit,
            }),
            this.prismaService.notificationEvent.count({
                where: {
                    userId,
                    eventType: eventType,
                },
            }),
        ]);
        return {
            events: events.map((e) => this.formatEventResponse(e)),
            total,
        };
    }
    async cleanupOldNotifications(daysOld = 30) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysOld);
        const result = await this.prismaService.notificationEvent.deleteMany({
            where: {
                createdAt: {
                    lt: cutoffDate,
                },
            },
        });
        return { deletedCount: result.count };
    }
    formatEventResponse(event) {
        return {
            ...event,
            payload: event.payload ? JSON.parse(event.payload) : null,
        };
    }
};
exports.NotificationEventService = NotificationEventService;
exports.NotificationEventService = NotificationEventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationEventService);
//# sourceMappingURL=notification-event.service.js.map