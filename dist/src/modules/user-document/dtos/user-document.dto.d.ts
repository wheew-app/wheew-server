export declare enum DocumentTypeEnum {
    LICENSE = "LICENSE",
    INSURANCE = "INSURANCE",
    TAX = "TAX",
    VEHICLE_OWNERSHIP = "VEHICLE_OWNERSHIP",
    CAR_INSPECTION = "CAR_INSPECTION"
}
export declare class UploadUserDocumentDto {
    document_type?: DocumentTypeEnum;
    unique_id?: string;
    expiry_date?: string;
    document_url?: string;
}
export declare class UploadUserDocumentFileDto {
    document_type?: DocumentTypeEnum;
    unique_id?: string;
    expiry_date?: string;
    document_url?: string;
}
export declare class UpdateUserDocumentDto {
    unique_id?: string;
    document_url?: string;
    document_type?: DocumentTypeEnum;
    expiry_date?: string;
}
export declare class UpdateUserDocumentFileDto {
    unique_id?: string;
    expiry_date?: string;
    document_type?: DocumentTypeEnum;
    document_url?: string;
}
export declare class UserDocumentResponseDto {
    id: string;
    unique_id: string | null;
    document_type: string | null;
    document_url: string | null;
    expiry_date: string | null;
    is_verified: boolean;
    isExpired: boolean;
    daysUntilExpiry: number;
}
export declare class UserDocumentsListDto {
    documents: UserDocumentResponseDto[];
}
export declare class DocumentExpiryWarningsDto {
    expired: UserDocumentResponseDto[];
    expiring: UserDocumentResponseDto[];
    hasWarnings: boolean;
}
