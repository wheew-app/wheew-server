import { PrismaService } from '../../prisma/prisma.service';
import { UpdateNotificationPreferenceDto } from '../dtos/notification-event.dto';
export declare class NotificationPreferenceService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getPreferences(userId: string): Promise<any>;
    createDefaultPreferences(userId: string): Promise<any>;
    updatePreferences(userId: string, updatePreferenceDto: UpdateNotificationPreferenceDto): Promise<any>;
    isNotificationEnabled(userId: string, notificationType: string): Promise<boolean>;
    shouldNotifyForParking(userId: string, distance: number): Promise<boolean>;
    getNotificationRadius(userId: string): Promise<number>;
    setNotificationRadius(userId: string, radius: number): Promise<any>;
    disableAllNotifications(userId: string): Promise<any>;
    enableAllNotifications(userId: string): Promise<any>;
    getUsersWithParkingNotificationsEnabled(): Promise<string[]>;
}
