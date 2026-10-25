import { VehicleType } from "generated/prisma/enums";
export declare class AddVehicleInfoDto {
    readonly vehicle_type: VehicleType;
    readonly vehicle_model: string;
    readonly vehicle_color: string;
}
