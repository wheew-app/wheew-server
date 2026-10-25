import { Gender, VehicleType } from "generated/prisma/enums";
export declare class GoogleSigninDto {
    idToken: string;
    fcm_token?: string;
    licence_id?: string;
    nick_name?: string;
    designation?: string;
    gender?: Gender;
    birth_year?: number;
    is_more_options_accepted?: boolean;
    vehicle_type?: VehicleType;
    vehicle_model?: string;
    vehicle_color?: string;
    country?: string;
    city?: string;
}
