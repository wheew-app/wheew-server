import { ParkingType, ParkingCost, DisabledFacilityLocation } from 'src/common/enums';
export declare class UpdateParkingReportDto {
    description?: string;
    latitude?: number;
    longitude?: number;
    parking_type?: ParkingType;
    parking_cost?: ParkingCost;
    electric_charging?: boolean;
    disabled_facility?: boolean;
    disabled_facility_location?: DisabledFacilityLocation;
    is_active?: boolean;
}
