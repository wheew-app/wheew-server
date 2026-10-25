import { Gender, VehicleType } from "generated/prisma/enums";
export declare class RegisterUserDto {
    licence_id: string;
    email: string;
    nick_name: string;
    password: string;
    confirmPassword: string;
    designation: string;
    gender: Gender;
    birth_year: number;
    is_more_options_accepted: boolean;
    vehicle_type?: VehicleType;
    vehicle_model?: string;
    vehicle_color?: string;
    country?: string;
    city?: string;
}
