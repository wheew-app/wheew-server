import { PrismaService } from '../../modules/prisma/prisma.service';
export declare class GeolocationService {
    private readonly prismaService;
    private readonly EARTH_RADIUS_METERS;
    constructor(prismaService: PrismaService);
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
    findUsersWithinRadius(centerLat: number, centerLon: number, radiusMeters: number, excludeUserId?: string): Promise<Array<{
        id: string;
        name: string;
        nick_name: string;
        email: string;
        fcm_token: string | null;
        distance: number;
    }>>;
    updateUserLocation(userId: string, latitude: number, longitude: number, accuracy?: number): Promise<any>;
    getUserLocation(userId: string): Promise<any>;
    isUserWithinRadius(userId: string, centerLat: number, centerLon: number, radiusMeters: number): Promise<boolean>;
    getNearestParkingSpots(userId: string, limit?: number): Promise<any[]>;
    validateCoordinates(latitude: number, longitude: number): boolean;
    decimalToDMS(coordinate: number): string;
}
