import { PrismaService } from '../../prisma/prisma.service';
import { GeolocationService } from '../../../common/services/geolocation.service';
import { NotificationEventService } from './notification-event.service';
import { NotificationPreferenceService } from './notification-preference.service';
import { FireBaseClient } from '../providers/firebase.provider';
export declare class NotificationDispatcherService {
    private readonly prismaService;
    private readonly geolocationService;
    private readonly notificationEventService;
    private readonly notificationPreferenceService;
    private readonly firebaseClient;
    private readonly socketRoomService?;
    private readonly logger;
    constructor(prismaService: PrismaService, geolocationService: GeolocationService, notificationEventService: NotificationEventService, notificationPreferenceService: NotificationPreferenceService, firebaseClient: FireBaseClient, socketRoomService?: any | undefined);
    private isUserOnline;
    dispatchParkingNotification(parkingReport: any): Promise<void>;
    dispatchParkingLeaveNotification(spot: any, leavingUser: {
        id: string;
        name: string | null;
        nick_name: string;
    } | null, referenceId: string): Promise<void>;
    dispatchChatNotification(chat: any, receiverId: string): Promise<void>;
    dispatchRatingNotification(rating: any): Promise<void>;
    dispatchGroupChatNotification(groupChat: any, groupChatRoom: any): Promise<void>;
    dispatchSystemNotification(userIds: string[], title: string, message: string, payload?: any): Promise<void>;
    dispatchLocationNotification(latitude: number, longitude: number, radiusKm: number, title: string, message: string, emailSubject?: string, sendEmail?: boolean, sendPushNotification?: boolean, smtpProvider?: any): Promise<{
        totalUsersFound: number;
        notificationsSent: number;
        emailsSent: number;
        failedCount: number;
    }>;
    private sendPushNotification;
    private buildParkingNotificationMessage;
    private getDistanceForUser;
    private checkParkingNotificationCredits;
    private consumeParkingNotificationCredit;
    dispatchDocumentExpiryNotification(user: any, document: any, daysUntilExpiry: number): Promise<void>;
    dispatchDocumentExpiredNotification(user: any, document: any): Promise<void>;
    dispatchAdminNotification(title: string, message: string, payload?: any): Promise<void>;
    dispatchGroupAddedNotification(groupChatRoomId: string, groupRoomName: string, userId: string): Promise<void>;
    dispatchGroupRemovedNotification(groupChatRoomId: string, groupRoomName: string, userId: string): Promise<void>;
}
