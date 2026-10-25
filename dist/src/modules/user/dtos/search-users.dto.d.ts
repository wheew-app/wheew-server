import { PaginationDto } from "src/common/dtos/pagination.dto";
declare enum SearchFor {
    GROUP = "group"
}
export declare class SearchUsersDto extends PaginationDto {
    query: string;
    for: SearchFor;
    roomId?: string;
}
export {};
