import { PrismaService } from "../prisma/prisma.service";
import { CreateNotificationDto } from "./dtos/create-notification.dto";
import { FireBaseClient } from "./providers/firebase.provider";
export declare class NotificationService {
    private readonly prismaService;
    private readonly firebaseClient;
    constructor(prismaService: PrismaService, firebaseClient: FireBaseClient);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<void>;
}
