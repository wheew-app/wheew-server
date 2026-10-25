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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocklistService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BlocklistService = class BlocklistService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async blockUser(userId, blockUserDto) {
        if (userId === blockUserDto.blockedUserId) {
            throw new common_1.BadRequestException('You cannot block yourself');
        }
        const blockedUser = await this.prismaService.user.findUnique({
            where: { id: blockUserDto.blockedUserId },
        });
        if (!blockedUser) {
            throw new common_1.NotFoundException('User to block not found');
        }
        const existingBlock = await this.prismaService.blockList.findFirst({
            where: {
                user_id: userId,
                blocked_user_id: blockUserDto.blockedUserId,
            },
        });
        if (existingBlock) {
            throw new common_1.BadRequestException('User is already blocked');
        }
        return this.prismaService.blockList.create({
            data: {
                user_id: userId,
                blocked_user_id: blockUserDto.blockedUserId,
            },
            include: {
                blocked_user: {
                    select: {
                        id: true,
                        nick_name: true,
                        avatar: true,
                    },
                },
            },
        });
    }
    async unblockUser(userId, blockedUserId) {
        const blockEntry = await this.prismaService.blockList.findFirst({
            where: {
                user_id: userId,
                blocked_user_id: blockedUserId,
            },
        });
        if (!blockEntry) {
            throw new common_1.NotFoundException('Block entry not found');
        }
        await this.prismaService.blockList.delete({
            where: { id: blockEntry.id },
        });
        const messageRequest = await this.prismaService.messageRequest.findFirst({
            where: {
                senderId: blockedUserId,
                receiverId: userId,
            },
        });
        if (messageRequest) {
            await this.prismaService.messageRequest.update({
                where: { id: messageRequest.id },
                data: { status: "PENDING" },
            });
        }
        return { message: 'User unblocked successfully' };
    }
    async getBlockedUsers(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [blockedUsers, total] = await Promise.all([
            this.prismaService.blockList.findMany({
                where: { user_id: userId },
                include: {
                    blocked_user: {
                        select: {
                            id: true,
                            nick_name: true,
                            avatar: true,
                            email: true,
                        },
                    },
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.blockList.count({
                where: { user_id: userId },
            }),
        ]);
        return { blockedUsers, total, page, limit };
    }
    async isUserBlocked(userId, blockedUserId) {
        const blockEntry = await this.prismaService.blockList.findFirst({
            where: {
                user_id: userId,
                blocked_user_id: blockedUserId,
            },
        });
        return !!blockEntry;
    }
    async isBlockedByUser(userId, otherUserId) {
        const blockEntry = await this.prismaService.blockList.findFirst({
            where: {
                user_id: otherUserId,
                blocked_user_id: userId,
            },
        });
        return !!blockEntry;
    }
    async getBlockStatus(userId, otherUserId) {
        const [blockedByMe, blockedMe] = await Promise.all([
            this.isUserBlocked(userId, otherUserId),
            this.isBlockedByUser(userId, otherUserId),
        ]);
        return { blockedByMe, blockedMe };
    }
};
exports.BlocklistService = BlocklistService;
exports.BlocklistService = BlocklistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlocklistService);
//# sourceMappingURL=blocklist.service.js.map