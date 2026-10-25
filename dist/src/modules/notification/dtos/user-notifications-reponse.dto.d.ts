import { NotificationResponseDto } from "./notifications-response.dto";
import { PaginationResponseDto } from "src/common/dtos/pagination-response.dto";
export declare class UserNotificationsResponseDto extends PaginationResponseDto {
    notifications: NotificationResponseDto[];
}
