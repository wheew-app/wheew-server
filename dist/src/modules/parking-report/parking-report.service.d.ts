import { CreateParkingSpotDto } from './dtos/create-parking-spot.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParkingReportDto, UpdateParkingReportDto } from './dtos';
import { DisabledFacilityLocation } from 'generated/prisma/enums';
import { NotificationDispatcherService } from '../notification/services/notification-dispatcher.service';
import { GeolocationService } from '../../common/services/geolocation.service';
export declare class ParkingReportService {
    private readonly prismaService;
    private readonly notificationDispatcherService;
    private readonly geolocationService;
    private readonly EXPIRATION_TIME_MINUTES;
    private readonly DEFAULT_NEARBY_RADIUS_METERS;
    private readonly logger;
    constructor(prismaService: PrismaService, notificationDispatcherService: NotificationDispatcherService, geolocationService: GeolocationService);
    private getExpirationTime;
    private isReportExpired;
    getTimeRemaining(createdAt: Date): number;
    createParkingReport(userId: string, createParkingReportDto: CreateParkingReportDto): Promise<any>;
    private postCreateCreditAndNotify;
    private formatReportResponse;
    private filterActiveReports;
    getParkingReportById(id: string): Promise<any>;
    getAllParkingReports(page?: number, limit?: number, isActive?: boolean): Promise<{
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
    getNearbyParkingReports(latitude: number, longitude: number, radiusInKm?: number, page?: number, limit?: number): Promise<{
        reports: any[];
        total: number;
        page: number;
        limit: number;
    }>;
    createParkingSpot(userId: string, createParkingSpotDto: CreateParkingSpotDto): Promise<{
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        parking_cost: import("generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: DisabledFacilityLocation | null;
        is_active: boolean;
        available: boolean;
    }>;
    getAllParkingSpots(page?: number, limit?: number): Promise<{
        spots: {
            id: string;
            createdAt: Date;
            latitude: number;
            longitude: number;
            parking_cost: import("generated/prisma/enums").ParkingCost;
            electric_charging: boolean;
            disabled_facility: boolean;
            disabled_facility_location: DisabledFacilityLocation | null;
            is_active: boolean;
            available: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getParkingSpotById(id: string): Promise<{
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        parking_cost: import("generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: DisabledFacilityLocation | null;
        is_active: boolean;
        available: boolean;
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
                parking_cost: import("generated/prisma/enums").ParkingCost;
                electric_charging: boolean;
                disabled_facility: boolean;
                disabled_facility_location: DisabledFacilityLocation | null;
                is_active: boolean;
            };
            id: string;
            createdAt: Date;
            latitude: number;
            longitude: number;
            parking_cost: import("generated/prisma/enums").ParkingCost;
            electric_charging: boolean;
            disabled_facility: boolean;
            disabled_facility_location: DisabledFacilityLocation | null;
            is_active: boolean;
            available: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
        radiusInMeters: number;
    }>;
    leaveParkingSpot(userId: string, spotId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        spotId: string | null;
        expiresAt: Date | null;
        user_id: string;
        parking_cost: import("generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: DisabledFacilityLocation | null;
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
    reserveParkingSpot(userId: string, spotId: string): Promise<{
        spotId: string;
        latitude: number;
        longitude: number;
        available: boolean;
    }>;
    private awardLeaveCredit;
    updateParkingReport(id: string, userId: string, updateParkingReportDto: UpdateParkingReportDto): Promise<any>;
    deleteParkingReport(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        spotId: string | null;
        expiresAt: Date | null;
        user_id: string;
        parking_cost: import("generated/prisma/enums").ParkingCost;
        electric_charging: boolean;
        disabled_facility: boolean;
        disabled_facility_location: DisabledFacilityLocation | null;
        is_active: boolean;
    }>;
    deactivateParkingReport(id: string, userId: string): Promise<any>;
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
            transaction_type: import("generated/prisma/enums").TransactionType;
            amount: number;
            balance: number;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
