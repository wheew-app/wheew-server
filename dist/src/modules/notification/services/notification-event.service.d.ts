import { PrismaService } from '../../prisma/prisma.service';
import { CreateNotificationEventDto, NotificationEventTypeEnum } from '../dtos/notification-event.dto';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
export declare class NotificationEventService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createEvent(createNotificationEventDto: CreateNotificationEventDto): Promise<any>;
    bulkCreateEvents(userIds: string[], eventType: NotificationEventTypeEnum, title: string, message: string, payload?: Record<string, any>): Promise<any[]>;
    getEventsByUser(userId: string, pagination: PaginationDto, unreadOnly?: boolean): Promise<{
        events: any[];
        total: number;
        unreadCount: number;
    }>;
    getEventById(eventId: string): Promise<any>;
    markAsRead(eventId: string, userId: string): Promise<any>;
    markAllAsRead(userId: string): Promise<{
        updatedCount: number;
    }>;
    deleteEvent(eventId: string, userId: string): Promise<void>;
    deleteAllEvents(userId: string): Promise<{
        deletedCount: number;
    }>;
    getEventsByType(userId: string, eventType: NotificationEventTypeEnum, pagination: PaginationDto): Promise<{
        events: any[];
        total: number;
    }>;
    cleanupOldNotifications(daysOld?: number): Promise<{
        deletedCount: number;
    }>;
    private formatEventResponse;
}
