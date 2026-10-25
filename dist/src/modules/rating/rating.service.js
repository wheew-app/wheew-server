"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RatingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../../generated/prisma/enums");
const notification_dispatcher_service_1 = require("../notification/services/notification-dispatcher.service");
let RatingService = RatingService_1 = class RatingService {
    prismaService;
    notificationDispatcherService;
    logger = new common_1.Logger(RatingService_1.name);
    constructor(prismaService, notificationDispatcherService) {
        this.prismaService = prismaService;
        this.notificationDispatcherService = notificationDispatcherService;
    }
    async createRating(userId, createRatingDto) {
        if (userId === createRatingDto.ratee_id) {
            throw new common_1.BadRequestException('You cannot rate yourself');
        }
        const ratee = await this.prismaService.user.findUnique({
            where: { id: createRatingDto.ratee_id },
        });
        if (!ratee) {
            throw new common_1.NotFoundException('User to rate not found');
        }
        const existingRating = await this.prismaService.userRating.findFirst({
            where: {
                rater_id: userId,
                ratee_id: createRatingDto.ratee_id,
            },
        });
        if (existingRating) {
            throw new common_1.BadRequestException('You have already rated this user');
        }
        if (createRatingDto.rating < 1 || createRatingDto.rating > 5) {
            throw new common_1.BadRequestException('Rating must be between 1 and 5');
        }
        const rating = await this.prismaService.userRating.create({
            data: {
                rater_id: userId,
                ratee_id: createRatingDto.ratee_id,
                rating: createRatingDto.rating,
                review: createRatingDto.review,
                status: enums_1.RatingStatus.PUBLISHED,
            },
            include: {
                rater: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
                ratee: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const raterName = rating.rater?.nick_name || 'A user';
        const rateeName = rating.ratee?.nick_name || 'another user';
        this.notificationDispatcherService.dispatchAdminNotification('New Rating Pending Mod', `${raterName} submitted a ${rating.rating}-star rating for ${rateeName} and needs moderation.`, { ratingId: rating.id }).catch((err) => {
            this.logger.error(`Failed to notify admins of new rating: ${err.message}`);
        });
        return rating;
    }
    async updateRatingStatus(ratingId, updateRatingStatusDto) {
        const rating = await this.prismaService.userRating.findUnique({
            where: { id: ratingId },
        });
        if (!rating) {
            throw new common_1.NotFoundException('Rating not found');
        }
        const updatedRating = await this.prismaService.userRating.update({
            where: { id: ratingId },
            data: {
                status: updateRatingStatusDto.status,
            },
            include: {
                rater: {
                    select: {
                        id: true,
                        nick_name: true,
                    },
                },
                ratee: {
                    select: {
                        id: true,
                        nick_name: true,
                    },
                },
            },
        });
        if (updateRatingStatusDto.status === enums_1.RatingStatus.PUBLISHED) {
            this.notificationDispatcherService.dispatchRatingNotification(updatedRating).catch((err) => {
                this.logger.error(`Failed to dispatch rating notification: ${err.message}`);
            });
        }
        return updatedRating;
    }
    async getRatingsForUser(userId, status, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const where = { ratee_id: userId };
        if (status) {
            where.status = status;
        }
        const [ratings, total] = await Promise.all([
            this.prismaService.userRating.findMany({
                where,
                include: {
                    rater: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prismaService.userRating.count({ where }),
        ]);
        return { ratings, total, page, limit };
    }
    async getAverageRatingForUser(userId) {
        const ratings = await this.prismaService.userRating.findMany({
            where: {
                ratee_id: userId,
                status: 'PUBLISHED',
            },
            select: {
                rating: true,
            },
        });
        if (ratings.length === 0) {
            return { userId, averageRating: 0, totalRatings: 0 };
        }
        const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
        return {
            userId,
            averageRating: Math.round(averageRating * 10) / 10,
            totalRatings: ratings.length,
        };
    }
    async getRatingsByStatus(status, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [ratings, total] = await Promise.all([
            this.prismaService.userRating.findMany({
                where: { status },
                include: {
                    rater: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                    ratee: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prismaService.userRating.count({ where: { status } }),
        ]);
        return { ratings, total, page, limit };
    }
    async deleteRating(ratingId) {
        const rating = await this.prismaService.userRating.findUnique({
            where: { id: ratingId },
        });
        if (!rating) {
            throw new common_1.NotFoundException('Rating not found');
        }
        await this.prismaService.userRating.delete({
            where: { id: ratingId },
        });
        return { message: 'Rating deleted successfully' };
    }
    async getRatingById(ratingId) {
        const rating = await this.prismaService.userRating.findUnique({
            where: { id: ratingId },
            include: {
                rater: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
                ratee: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        if (!rating) {
            throw new common_1.NotFoundException('Rating not found');
        }
        return rating;
    }
    async getMyRatingForUser(raterId, rateeId) {
        if (raterId === rateeId) {
            throw new common_1.BadRequestException('You cannot rate yourself');
        }
        const rating = await this.prismaService.userRating.findFirst({
            where: {
                rater_id: raterId,
                ratee_id: rateeId,
            },
            include: {
                rater: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
                ratee: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        if (!rating) {
            throw new common_1.NotFoundException("rating not found");
        }
        return rating;
    }
    async updateMyRatingForUser(raterId, rateeId, updateRatingDto) {
        if (raterId === rateeId) {
            throw new common_1.BadRequestException('You cannot rate yourself');
        }
        const ratee = await this.prismaService.user.findUnique({
            where: { id: rateeId },
        });
        if (!ratee) {
            throw new common_1.NotFoundException('User to rate not found');
        }
        if (updateRatingDto.rating < 1 || updateRatingDto.rating > 5) {
            throw new common_1.BadRequestException('Rating must be between 1 and 5');
        }
        const existingRating = await this.prismaService.userRating.findFirst({
            where: {
                rater_id: raterId,
                ratee_id: rateeId,
            },
        });
        if (!existingRating) {
            throw new common_1.NotFoundException('You have not rated this user yet');
        }
        const updatedRating = await this.prismaService.userRating.update({
            where: { id: existingRating.id },
            data: {
                rating: updateRatingDto.rating,
                review: updateRatingDto.review,
                status: enums_1.RatingStatus.PENDING
            },
            include: {
                rater: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
                ratee: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
        const raterName = updatedRating.rater?.nick_name || 'A user';
        const rateeName = updatedRating.ratee?.nick_name || 'another user';
        this.notificationDispatcherService.dispatchAdminNotification('Updated Rating Pending Mod', `${raterName} updated their rating for ${rateeName} to ${updatedRating.rating} stars, which needs moderation.`, { ratingId: updatedRating.id }).catch((err) => {
            this.logger.error(`Failed to notify admins of updated rating: ${err.message}`);
        });
        return updatedRating;
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = RatingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_dispatcher_service_1.NotificationDispatcherService])
], RatingService);
//# sourceMappingURL=rating.service.js.map