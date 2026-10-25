import { PrismaService } from '../prisma/prisma.service';
import { CreateRatingDto } from './dtos/create-rating.dto';
import { UpdateRatingStatusDto } from './dtos/update-rating-status.dto';
import { RatingStatus } from 'generated/prisma/enums';
import { NotificationDispatcherService } from '../notification/services/notification-dispatcher.service';
export declare class RatingService {
    private readonly prismaService;
    private readonly notificationDispatcherService;
    private readonly logger;
    constructor(prismaService: PrismaService, notificationDispatcherService: NotificationDispatcherService);
    createRating(userId: string, createRatingDto: CreateRatingDto): Promise<{
        rater: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
        ratee: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: RatingStatus;
        rating: number;
        review: string | null;
        rater_id: string;
        ratee_id: string;
    }>;
    updateRatingStatus(ratingId: string, updateRatingStatusDto: UpdateRatingStatusDto): Promise<{
        rater: {
            id: string;
            nick_name: string;
        };
        ratee: {
            id: string;
            nick_name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: RatingStatus;
        rating: number;
        review: string | null;
        rater_id: string;
        ratee_id: string;
    }>;
    getRatingsForUser(userId: string, status?: RatingStatus, page?: number, limit?: number): Promise<{
        ratings: ({
            rater: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: RatingStatus;
            rating: number;
            review: string | null;
            rater_id: string;
            ratee_id: string;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    getAverageRatingForUser(userId: string): Promise<{
        userId: string;
        averageRating: number;
        totalRatings: number;
    }>;
    getRatingsByStatus(status: RatingStatus, page?: number, limit?: number): Promise<{
        ratings: ({
            rater: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
            ratee: {
                id: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: RatingStatus;
            rating: number;
            review: string | null;
            rater_id: string;
            ratee_id: string;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    deleteRating(ratingId: string): Promise<{
        message: string;
    }>;
    getRatingById(ratingId: string): Promise<{
        rater: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
        ratee: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: RatingStatus;
        rating: number;
        review: string | null;
        rater_id: string;
        ratee_id: string;
    }>;
    getMyRatingForUser(raterId: string, rateeId: string): Promise<{
        rater: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
        ratee: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: RatingStatus;
        rating: number;
        review: string | null;
        rater_id: string;
        ratee_id: string;
    }>;
    updateMyRatingForUser(raterId: string, rateeId: string, updateRatingDto: any): Promise<{
        rater: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
        ratee: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: RatingStatus;
        rating: number;
        review: string | null;
        rater_id: string;
        ratee_id: string;
    }>;
}
