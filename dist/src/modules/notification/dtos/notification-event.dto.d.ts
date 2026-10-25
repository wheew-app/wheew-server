export declare enum NotificationEventTypeEnum {
    PARKING_AVAILABLE = "PARKING_AVAILABLE",
    PARKING_NEARBY = "PARKING_NEARBY",
    CHAT_MESSAGE = "CHAT_MESSAGE",
    CHAT_DELIVERED = "CHAT_DELIVERED",
    CHAT_READ = "CHAT_READ",
    RATING_RECEIVED = "RATING_RECEIVED",
    GROUP_CHAT_MESSAGE = "GROUP_CHAT_MESSAGE",
    GROUP_CHAT_ADDED = "GROUP_CHAT_ADDED",
    GROUP_CHAT_REMOVED = "GROUP_CHAT_REMOVED",
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION",
    USER_MENTION = "USER_MENTION",
    PARKING_EXPIRING_SOON = "PARKING_EXPIRING_SOON",
    DOCUMENT_EXPIRING_SOON = "DOCUMENT_EXPIRING_SOON",
    DOCUMENT_EXPIRED = "DOCUMENT_EXPIRED"
}
export declare class CreateNotificationEventDto {
    userId: string;
    eventType: NotificationEventTypeEnum;
    title: string;
    message: string;
    payload?: Record<string, any>;
}
export declare class UpdateNotificationPreferenceDto {
    parkingNotifications?: boolean;
    chatNotifications?: boolean;
    ratingNotifications?: boolean;
    groupChatNotifications?: boolean;
    systemNotifications?: boolean;
    notificationRadius?: number;
}
export declare class UpdateUserLocationDto {
    latitude: number;
    longitude: number;
    accuracy?: number;
}
