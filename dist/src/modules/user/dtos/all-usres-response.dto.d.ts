import { UserResponseDto } from "./user-response.dto";
import { PaginationResponseDto } from "src/common/dtos/pagination-response.dto";
export declare class AllUsersResponseDto extends PaginationResponseDto {
    users: Array<UserResponseDto>;
    page: number;
    limit: number;
    pages: number;
}
