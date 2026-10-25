import { DisabledFacilityLocation, ParkingAreaType, ParkingCost } from 'src/common/enums';
export declare enum ParkingSearchStatusDto {
    IDLE = "IDLE",
    SEARCHING = "SEARCHING",
    PARKED = "PARKED"
}
export declare enum ParkingSaveSourceDto {
    AUTO = "AUTO",
    MANUAL = "MANUAL"
}
export declare class ParkingCoordinatesDto {
    latitude: number;
    longitude: number;
}
export declare class UpdateParkingModeDto extends ParkingCoordinatesDto {
    accuracy?: number;
    confidence?: number;
}
export declare class CreateParkingHandoffDto extends ParkingCoordinatesDto {
}
export declare class AcceptHandoffAndParkDto {
    note?: string;
    photoUrl?: string;
    accuracy?: number;
    confidence?: number;
}
export declare class SaveParkingLocationDto extends ParkingCoordinatesDto {
    name?: string;
    spotId?: string;
    accuracy?: number;
    confidence?: number;
    source?: ParkingSaveSourceDto;
    parkingType?: ParkingCost;
    durationMin?: number;
    expiresAt?: string;
    note?: string;
    photoUrl?: string;
}
export declare class CreateParkingSessionDto extends ParkingCoordinatesDto {
    spotId?: string;
    costType: ParkingCost;
    durationMin?: number;
    expiresAt?: string;
}
export declare class ParkedEventDto extends SaveParkingLocationDto {
    createPaidParkingPrompt?: boolean;
}
export declare class AnswerPaidParkingPromptDto {
    parkingType: ParkingCost;
    durationMin?: number;
    expiresAt?: string;
}
export declare class ParkingAreaPointDto extends ParkingCoordinatesDto {
}
export declare class CreateParkingAreaDto {
    name?: string;
    description?: string;
    centerLat: number;
    centerLng: number;
    polygon: ParkingAreaPointDto[];
    parkingCost: ParkingCost;
    parkingFee?: number;
    parkingAreaTypes?: ParkingAreaType[];
    disabledFacilityLocation?: DisabledFacilityLocation;
    totalSpots?: number;
    isActive?: boolean;
}
export declare class SubmitParkingAreaPointDto {
    name?: string;
    description?: string;
    centerLat: number;
    centerLng: number;
    parkingCost?: ParkingCost;
    parkingFee?: number;
    parkingAreaTypes?: ParkingAreaType[];
    disabledFacilityLocation?: DisabledFacilityLocation;
    totalSpots?: number;
}
export declare class SearchParkingAreaDto {
    query?: string;
    parkingCost?: ParkingCost;
    parkingAreaTypes?: ParkingAreaType[];
    disabledFacilityLocation?: DisabledFacilityLocation;
    isActive?: boolean;
    latitude?: number;
    longitude?: number;
    radiusMeters?: number;
    page?: number;
    limit?: number;
}
export declare class ViewportParkingAreaDto {
    north: number;
    south: number;
    east: number;
    west: number;
    parkingCost?: ParkingCost;
    parkingAreaTypes?: ParkingAreaType[];
    disabledFacilityLocation?: DisabledFacilityLocation;
    limit?: number;
}
export declare class UpdateParkingAreaDto {
    name?: string;
    description?: string;
    centerLat?: number;
    centerLng?: number;
    polygon?: ParkingAreaPointDto[];
    parkingCost?: ParkingCost;
    parkingFee?: number;
    parkingAreaTypes?: ParkingAreaType[];
    disabledFacilityLocation?: DisabledFacilityLocation;
    totalSpots?: number;
    isActive?: boolean;
}
export declare class CreateParkingAreaRatingDto {
    rating: number;
    review?: string;
}
export declare class UpdateParkingAreaRatingDto extends CreateParkingAreaRatingDto {
}
