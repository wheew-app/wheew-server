import { PrismaService } from '../prisma/prisma.service';
import { CreatePointDto } from './dtos/create-point.dto';
import { UpdatePointDto } from './dtos/update-point.dto';
export declare class PointService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    private calculateDistance;
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
}
