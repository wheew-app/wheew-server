export declare enum UsefulNumberCategoryDto {
    EMERGENCY_CONTACT = "EMERGENCY_CONTACT",
    VEHICLE_ASSISTANCE = "VEHICLE_ASSISTANCE",
    TRAFFIC_AND_PARKING = "TRAFFIC_AND_PARKING"
}
export declare class CreateUsefulNumberDto {
    title: string;
    description?: string;
    phone: string;
    category?: UsefulNumberCategoryDto;
    icon?: string;
    sortOrder?: number;
    isActive?: boolean;
    latitude?: number;
    longitude?: number;
}
