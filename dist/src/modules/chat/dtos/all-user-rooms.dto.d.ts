import { RoomDto } from "./room.dto";
import { PaginationResponseDto } from "src/common/dtos/pagination-response.dto";
export declare class AllUserRoomsDto extends PaginationResponseDto {
    rooms: RoomDto[];
}
