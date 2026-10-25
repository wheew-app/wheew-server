import { PrismaService } from '../../prisma/prisma.service';
import { UploadUserDocumentDto, UpdateUserDocumentDto } from '../dtos/user-document.dto';
import { NotificationDispatcherService } from '../../notification/services/notification-dispatcher.service';
export declare class UserDocumentService {
    private readonly prismaService;
    private readonly notificationDispatcherService;
    private readonly logger;
    private readonly EXPIRY_WARNING_DAYS;
    static readonly EXPIRY_NOTIFICATION_THRESHOLDS: number[];
    constructor(prismaService: PrismaService, notificationDispatcherService: NotificationDispatcherService);
    uploadDocument(userId: string, uploadDto: UploadUserDocumentDto): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }>;
    getUserDocuments(userId: string): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }[]>;
    getUserDocumentExpirySummaries(userId: string): Promise<{
        document_type: import("../../../../generated/prisma/enums").DocumentType | null;
        daysUntilExpiry: number;
    }[]>;
    getDocumentById(documentId: string, userId: string): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }>;
    getDocumentByType(userId: string, documentType: string): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }>;
    updateDocument(documentId: string, userId: string, updateDto: UpdateUserDocumentDto): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }>;
    deleteDocument(documentId: string, userId: string): Promise<{
        message: string;
    }>;
    getDocumentExpiryWarnings(userId: string): Promise<{
        expiredDocuments: {
            id: any;
            user_id: any;
            unique_id: any;
            document_type: any;
            document_url: any;
            expiry_date: any;
            is_verified: any;
            isExpired: boolean;
            daysUntilExpiry: number;
            createdAt: any;
            updatedAt: any;
        }[];
        expiringDocuments: {
            id: any;
            user_id: any;
            unique_id: any;
            document_type: any;
            document_url: any;
            expiry_date: any;
            is_verified: any;
            isExpired: boolean;
            daysUntilExpiry: number;
            createdAt: any;
            updatedAt: any;
        }[];
    }>;
    getAllExpiringDocuments(daysThreshold?: number): Promise<({
        user: {
            id: string;
            email: string;
            nick_name: string;
            fcm_token: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        document_type: import("../../../../generated/prisma/enums").DocumentType | null;
        unique_id: string | null;
        expiry_date: Date | null;
        document_url: string | null;
        is_verified: boolean;
        last_expiry_notified_days: number | null;
        expired_notified_at: Date | null;
    })[]>;
    getAllExpiredDocuments(): Promise<({
        user: {
            id: string;
            email: string;
            nick_name: string;
            fcm_token: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        document_type: import("../../../../generated/prisma/enums").DocumentType | null;
        unique_id: string | null;
        expiry_date: Date | null;
        document_url: string | null;
        is_verified: boolean;
        last_expiry_notified_days: number | null;
        expired_notified_at: Date | null;
    })[]>;
    getAllUserDocumentsForAdmin(userId?: string): Promise<{
        id: string;
        user_id: string;
        unique_id: string | null;
        document_type: import("../../../../generated/prisma/enums").DocumentType | null;
        document_url: string | null;
        expiry_date: Date | null;
        is_verified: boolean;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: string;
            email: string;
            nick_name: string;
        };
    }[]>;
    private resolveExpiryDate;
    private getDaysUntilExpiry;
    private isDocumentExpired;
    verifyDocument(documentId: string, isVerified: boolean): Promise<{
        id: any;
        user_id: any;
        unique_id: any;
        document_type: any;
        document_url: any;
        expiry_date: any;
        is_verified: any;
        isExpired: boolean;
        daysUntilExpiry: number;
        createdAt: any;
        updatedAt: any;
    }>;
    private formatDocumentResponse;
}
