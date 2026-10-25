export declare class SendLocationNotificationDto {
    latitude: number;
    longitude: number;
    radiusInKm: number;
    title: string;
    message: string;
    emailSubject?: string;
    sendEmail: boolean;
    sendPushNotification: boolean;
}
export declare class LocationNotificationResponse {
    success: boolean;
    totalUsersFound: number;
    notificationsSent: number;
    emailsSent: number;
    failedCount: number;
    message: string;
}
