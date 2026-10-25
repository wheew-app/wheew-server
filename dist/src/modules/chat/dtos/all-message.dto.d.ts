import { PaginationResponseDto } from "src/common/dtos/pagination-response.dto";
import { SingleMessageDto } from "./single-message.dto";
export declare class AllMessageDto extends PaginationResponseDto {
    messages: SingleMessageDto[];
}
