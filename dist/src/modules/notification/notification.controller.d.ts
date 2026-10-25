import { NotificationService } from "./notification.service";
import { CreateNotificationDto } from "./dtos/create-notification.dto";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { NotificationEventService } from "./services/notification-event.service";
import { NotificationPreferenceService } from "./services/notification-preference.service";
import { NotificationDispatcherService } from "./services/notification-dispatcher.service";
import { UpdateNotificationPreferenceDto, UpdateUserLocationDto } from "./dtos/notification-event.dto";
import { SendLocationNotificationDto, LocationNotificationResponse } from "./dtos/send-location-notification.dto";
import { SMTPProvider } from "src/common/providres/smtp.provider";
export declare class NotificationController {
    private readonly notificationService;
    private readonly notificationEventService;
    private readonly notificationPreferenceService;
    private readonly notificationDispatcherService;
    private readonly smtpProvider;
    constructor(notificationService: NotificationService, notificationEventService: NotificationEventService, notificationPreferenceService: NotificationPreferenceService, notificationDispatcherService: NotificationDispatcherService, smtpProvider: SMTPProvider);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<void>;
    getNotificationEvents(request: any, pagination: PaginationDto, unreadOnly?: string): Promise<{
        events: any[];
        total: number;
        unreadCount: number;
    }>;
    getNotificationEvent(request: any, eventId: string): Promise<any>;
    markNotificationAsRead(request: any, eventId: string): Promise<any>;
    markAllNotificationsAsRead(request: any): Promise<{
        updatedCount: number;
    }>;
    deleteNotification(request: any, eventId: string): Promise<{
        success: boolean;
    }>;
    deleteAllNotifications(request: any): Promise<{
        deletedCount: number;
    }>;
    getPreferences(request: any): Promise<any>;
    updatePreferences(request: any, updateDto: UpdateNotificationPreferenceDto): Promise<any>;
    updateUserLocation(request: any, updateLocationDto: UpdateUserLocationDto): Promise<any>;
    getUserLocation(request: any): Promise<any>;
    getUnreadCount(request: any): Promise<{
        unreadCount: number;
    }>;
    sendLocationBasedNotification(request: any, sendLocationNotificationDto: SendLocationNotificationDto): Promise<LocationNotificationResponse>;
}
