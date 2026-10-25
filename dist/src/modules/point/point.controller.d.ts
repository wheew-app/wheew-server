import { PointService } from './point.service';
import { CreatePointDto } from './dtos/create-point.dto';
import { UpdatePointDto } from './dtos/update-point.dto';
export declare class PointController {
    private readonly pointService;
    constructor(pointService: PointService);
    createPoint(createPointDto: CreatePointDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        description: string | null;
    }>;
    getAllPoints(page?: number, limit?: number): Promise<{
        points: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            description: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    searchPointsByName(query: string, page?: number, limit?: number): Promise<{
        points: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            description: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    searchPointsByLocation(latitude: number, longitude: number, radiusKm?: number, page?: number, limit?: number): Promise<{
        points: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            description: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        radiusKm: number;
    }>;
    getPointById(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        description: string | null;
    }>;
    updatePoint(id: string, updatePointDto: UpdatePointDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        description: string | null;
    }>;
    deletePoint(id: string): Promise<{
        message: string;
    }>;
}
