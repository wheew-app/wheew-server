import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class UserQueryDto extends PaginationDto {
    email_verified: boolean;
    query: string;
    email: string;
    createdAt: Date;
    role: string;
}
