import { UsefulNumberService } from './useful-number.service';
import { CreateUsefulNumberDto } from './dtos/create-useful-number.dto';
import { UpdateUsefulNumberDto } from './dtos/update-useful-number.dto';
export declare class UsefulNumberController {
    private readonly usefulNumberService;
    constructor(usefulNumberService: UsefulNumberService);
    createUsefulNumber(createUsefulNumberDto: CreateUsefulNumberDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        phone: string;
        category: import("../../../generated/prisma/enums").UsefulNumberCategory;
        icon: string | null;
        sortOrder: number;
        isActive: boolean;
        location: {
            latitude: number;
            longitude: number;
        } | null;
        geolocation: {
            type: string;
            coordinates: number[];
        } | null;
    }>;
    getAllUsefulNumbers(page?: number, limit?: number, isActive?: string, category?: string): Promise<{
        numbers: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            phone: string;
            category: import("../../../generated/prisma/enums").UsefulNumberCategory;
            icon: string | null;
            sortOrder: number;
            isActive: boolean;
            location: {
                latitude: number;
                longitude: number;
            } | null;
            geolocation: {
                type: string;
                coordinates: number[];
            } | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getGroupedUsefulNumbers(isActive?: string): Promise<{
        sections: {
            category: string;
            title: string;
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                phone: string;
                category: import("../../../generated/prisma/enums").UsefulNumberCategory;
                icon: string | null;
                sortOrder: number;
                isActive: boolean;
                location: {
                    latitude: number;
                    longitude: number;
                } | null;
                geolocation: {
                    type: string;
                    coordinates: number[];
                } | null;
            }[];
        }[];
    }>;
    searchUsefulNumbers(query: string, page?: number, limit?: number): Promise<{
        numbers: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            phone: string;
            category: import("../../../generated/prisma/enums").UsefulNumberCategory;
            icon: string | null;
            sortOrder: number;
            isActive: boolean;
            location: {
                latitude: number;
                longitude: number;
            } | null;
            geolocation: {
                type: string;
                coordinates: number[];
            } | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    searchNearbyUsefulNumbers(latitude: number, longitude: number, radiusInMeters?: number, page?: number, limit?: number): Promise<{
        success: boolean;
        numbers: any;
        pagination: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
        radiusInMeters: number;
        userLocation: {
            latitude: number;
            longitude: number;
        };
    }>;
    getUsefulNumberById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        phone: string;
        category: import("../../../generated/prisma/enums").UsefulNumberCategory;
        icon: string | null;
        sortOrder: number;
        isActive: boolean;
        location: {
            latitude: number;
            longitude: number;
        } | null;
        geolocation: {
            type: string;
            coordinates: number[];
        } | null;
    }>;
    updateUsefulNumber(id: string, updateUsefulNumberDto: UpdateUsefulNumberDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        phone: string;
        category: import("../../../generated/prisma/enums").UsefulNumberCategory;
        icon: string | null;
        sortOrder: number;
        isActive: boolean;
        location: {
            latitude: number;
            longitude: number;
        } | null;
        geolocation: {
            type: string;
            coordinates: number[];
        } | null;
    }>;
    deleteUsefulNumber(id: string): Promise<{
        message: string;
    }>;
    private parseBooleanQuery;
}
