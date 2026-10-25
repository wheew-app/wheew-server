import { Gender, VehicleType } from "generated/prisma/enums";
export declare class CreateUserDto {
    readonly licence_id: string;
    readonly nick_name: string;
    readonly password: string;
    is_more_options_accepted: boolean;
    email: string;
    gender: Gender;
    birth_year: number;
    vehicle_type?: VehicleType;
    vehicle_model?: string;
    vehicle_color?: string;
    country?: string;
    city?: string;
}
