export declare class AuthMeDocumentDto {
    document_type: string;
    daysUntilExpiry: number;
}
export declare class UserResponseDto {
    id: string;
    avatar: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    is_more_options_accepted: boolean;
    licence_id: string;
    nick_name: string;
    license_no_verified: boolean;
    is_blocked: boolean;
    designation: string;
    dob: string;
    email_verified: boolean;
    is_deleted: boolean;
    rating?: number;
    totalRating?: number;
    totalRatings?: number;
    subscription_end_at: Date;
    is_subscription_active: boolean;
    total_created_sessions: number;
    total_cancelled_sessions: number;
    vehicle_type: string;
    vehicle_model: string;
    vehicle_color: string;
    is_vehicle_verified: boolean;
    is_vehicle_ownership_document_submitted: boolean;
    country?: string;
    city?: string;
    gender?: string;
    birth_year?: number;
    age?: number | null;
    isOnline?: boolean;
    lastSeenAt?: Date | string | null;
    documents?: AuthMeDocumentDto[];
}
