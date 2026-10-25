import { ParkingCost, DisabledFacilityLocation } from 'src/common/enums';
export declare class CreateParkingReportDto {
    latitude?: number;
    longitude?: number;
    spotId?: string;
    parking_cost: ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location: DisabledFacilityLocation;
}
