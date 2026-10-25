import { Gender, VehicleType } from "generated/prisma/enums";
export declare class UpdateUserDto {
    nick_name?: string;
    name?: string;
    vehicle_type?: VehicleType;
    vehicle_model?: string;
    vehicle_color?: string;
    country?: string;
    city?: string;
    gender?: Gender;
    birth_year?: number;
}
