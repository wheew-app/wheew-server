import { BlocklistService } from './blocklist.service';
import { BlockUserDto } from './dtos/block-user.dto';
export declare class BlocklistController {
    private readonly blocklistService;
    constructor(blocklistService: BlocklistService);
    blockUser(request: Request, blockUserDto: BlockUserDto): Promise<{
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
    unblockUser(request: Request, blockedUserId: string): Promise<{
        message: string;
    }>;
    getBlockedUsers(request: Request, page?: number, limit?: number): Promise<{
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
    getBlockStatus(request: Request, userId: string): Promise<{
        blockedByMe: boolean;
        blockedMe: boolean;
    }>;
}
