import { ParkingCost, DisabledFacilityLocation } from 'src/common/enums';
export declare class CreateParkingSpotDto {
    latitude: number;
    longitude: number;
    parking_cost?: ParkingCost;
    electric_charging: boolean;
    disabled_facility: boolean;
    disabled_facility_location: DisabledFacilityLocation;
}
