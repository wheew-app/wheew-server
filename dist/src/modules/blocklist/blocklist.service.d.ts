import { PrismaService } from '../prisma/prisma.service';
import { BlockUserDto } from './dtos/block-user.dto';
export declare class BlocklistService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    blockUser(userId: string, blockUserDto: BlockUserDto): Promise<{
        blocked_user: {
            id: string;
            nick_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        blocked_user_id: string;
    }>;
    unblockUser(userId: string, blockedUserId: string): Promise<{
        message: string;
    }>;
    getBlockedUsers(userId: string, page?: number, limit?: number): Promise<{
        blockedUsers: ({
            blocked_user: {
                id: string;
                email: string;
                nick_name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            blocked_user_id: string;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    isUserBlocked(userId: string, blockedUserId: string): Promise<boolean>;
    isBlockedByUser(userId: string, otherUserId: string): Promise<boolean>;
    getBlockStatus(userId: string, otherUserId: string): Promise<{
        blockedByMe: boolean;
        blockedMe: boolean;
    }>;
}
