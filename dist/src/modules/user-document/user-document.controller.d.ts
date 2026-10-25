import { UserDocumentService } from './services/user-document.service';
import { DocumentExpiryCheckService } from './services/document-expiry-check.service';
import { UploadUserDocumentFileDto, UpdateUserDocumentFileDto, UserDocumentResponseDto, UserDocumentsListDto, DocumentExpiryWarningsDto } from './dtos/user-document.dto';
export declare class UserDocumentController {
    private readonly userDocumentService;
    private readonly documentExpiryCheckService;
    private readonly logger;
    constructor(userDocumentService: UserDocumentService, documentExpiryCheckService: DocumentExpiryCheckService);
    private toUserDocumentResponse;
    private rethrow;
    uploadDocument(request: Request, file: Express.Multer.File | undefined, uploadDto: UploadUserDocumentFileDto): Promise<UserDocumentResponseDto>;
    getUserDocuments(request: Request): Promise<UserDocumentsListDto>;
    getDocumentById(request: Request, documentId: string): Promise<UserDocumentResponseDto>;
    getDocumentByType(request: Request, documentType: string): Promise<UserDocumentResponseDto>;
    updateDocument(request: Request, documentId: string, file: Express.Multer.File | undefined, updateDto: UpdateUserDocumentFileDto): Promise<UserDocumentResponseDto>;
    deleteDocument(request: Request, documentId: string): Promise<{
        message: string;
    }>;
    getDocumentExpiryWarnings(request: Request): Promise<DocumentExpiryWarningsDto>;
    manualCheckExpiringDocuments(): Promise<{
        message: string;
    }>;
    getAllUserDocumentsAdmin(request: Request, userId?: string): Promise<{
        documents: any[];
        total: number;
    }>;
    verifyDocument(documentId: string, is_verified: boolean): Promise<{
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
}
