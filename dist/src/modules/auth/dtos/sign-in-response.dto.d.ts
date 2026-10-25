export declare class SignInResponseDto {
    id: string;
    name: string;
    email: string;
    licence_id: string;
    nick_name: string;
    phone: string;
    email_verified: boolean;
    role: string;
    token: string;
    requiresOnboarding?: boolean;
    license_no_verified: boolean;
    is_vehicle_verified: boolean;
    is_vehicle_ownership_document_submitted: boolean;
    country?: string;
    city?: string;
    gender?: string;
    birth_year?: number;
}
