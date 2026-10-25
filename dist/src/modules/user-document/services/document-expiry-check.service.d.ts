import { UserDocumentService } from './user-document.service';
import { PrismaService } from '../../prisma/prisma.service';
import { NotificationDispatcherService } from '../../notification/services/notification-dispatcher.service';
export declare class DocumentExpiryCheckService {
    private readonly userDocumentService;
    private readonly prismaService;
    private readonly notificationDispatcher;
    private readonly logger;
    private readonly THRESHOLDS;
    constructor(userDocumentService: UserDocumentService, prismaService: PrismaService, notificationDispatcher: NotificationDispatcherService);
    runDailyExpiryChecks(): Promise<void>;
    checkExpiringDocuments(): Promise<void>;
    checkExpiredDocuments(): Promise<void>;
    manualCheckExpiringDocuments(): Promise<void>;
    private calculateDaysUntilExpiry;
}
