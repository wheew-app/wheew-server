import { ParkingReportService } from './parking-report.service';
import { CreateParkingReportDto, UpdateParkingReportDto, LeaveParkingSpotDto, ReserveParkingSpotDto } from './dtos';
import { CreateParkingSpotDto } from './dtos/create-parking-spot.dto';
export declare class ParkingReportController {
    private readonly parkingReportService;
    constructor(parkingReportService: ParkingReportService);
    createParkingReport(userId: string, createParkingReportDto: CreateParkingReportDto): Promise<any>;
    createParkingSpot(userId: string, createParkingSpotDto: CreateParkingSpotDto): Promise<{
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        parking_cost: import("../../../generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
        is_active: boolean;
        available: boolean;
    }>;
    getAllParkingSpots(page?: number, limit?: number): Promise<{
        spots: {
            id: string;
            createdAt: Date;
            latitude: number;
            longitude: number;
            parking_cost: import("../../../generated/prisma/enums").ParkingCost;
            electric_charging: boolean;
            disabled_facility: boolean;
            disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
            is_active: boolean;
            available: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getNearbyParkingSpots(latitude: number, longitude: number, radiusInMeters?: number, page?: number, limit?: number): Promise<{
        spots: {
            distanceMeters: number;
            activeReport: {
                user: {
                    id: string;
                    nick_name: string;
                    avatar: string | null;
                    name: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                latitude: number;
                longitude: number;
                spotId: string | null;
                expiresAt: Date | null;
                user_id: string;
                parking_cost: import("../../../generated/prisma/enums").ParkingCost;
                electric_charging: boolean;
                disabled_facility: boolean;
                disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
                is_active: boolean;
            };
            id: string;
            createdAt: Date;
            latitude: number;
            longitude: number;
            parking_cost: import("../../../generated/prisma/enums").ParkingCost;
            electric_charging: boolean;
            disabled_facility: boolean;
            disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
            is_active: boolean;
            available: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
        radiusInMeters: number;
    }>;
    leaveParkingSpot(userId: string, leaveParkingSpotDto: LeaveParkingSpotDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        spotId: string | null;
        expiresAt: Date | null;
        user_id: string;
        parking_cost: import("../../../generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
        is_active: boolean;
    } | {
        spotId: string;
        latitude: number;
        longitude: number;
        available: boolean;
        leaveReportId: string;
        creditAwarded: boolean;
        parking_notifications_available: number;
    }>;
    reserveParkingSpot(userId: string, reserveParkingSpotDto: ReserveParkingSpotDto): Promise<{
        spotId: string;
        latitude: number;
        longitude: number;
        available: boolean;
    }>;
    getParkingSpotById(id: string): Promise<{
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        parking_cost: import("../../../generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
        is_active: boolean;
        available: boolean;
    }>;
    getAllParkingReports(page?: number, limit?: number, isActive?: boolean): Promise<{
        reports: any[];
        total: number;
        page: number;
        limit: number;
    }>;
    getNearbyParkingReports(latitude: number, longitude: number, radius?: number, page?: number, limit?: number): Promise<{
        reports: any[];
        total: number;
        page: number;
        limit: number;
    }>;
    getParkingReportsByUserId(userId: string, page?: number, limit?: number): Promise<{
        reports: any[];
        total: number;
        page: number;
        limit: number;
    }>;
    getParkingReportById(id: string): Promise<any>;
    updateParkingReport(id: string, userId: string, updateParkingReportDto: UpdateParkingReportDto): Promise<any>;
    deactivateParkingReport(id: string, userId: string): Promise<any>;
    deleteParkingReport(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        spotId: string | null;
        expiresAt: Date | null;
        user_id: string;
        parking_cost: import("../../../generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: import("../../../generated/prisma/enums").DisabledFacilityLocation | null;
        is_active: boolean;
    }>;
    getUserParkingCredits(userId: string): Promise<{
        parking_notifications_available: number;
        parking_reports_submitted: number;
        notifications_received: number;
    }>;
    getUserParkingCreditHistory(userId: string, page?: number, limit?: number): Promise<{
        transactions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            parking_report_id: string;
            transaction_type: import("../../../generated/prisma/enums").TransactionType;
            amount: number;
            balance: number;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
