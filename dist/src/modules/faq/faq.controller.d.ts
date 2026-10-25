import { PaginationDto } from "src/common/dtos/pagination.dto";
import { CreateFaqDto } from "./dtos/create-faq.dto";
import { FaqResponseDto, PaginatedFaqResponseDto } from "./dtos/faq-response.dto";
import { UpdateFaqDto } from "./dtos/update-faq.dto";
import { FaqService } from "./faq.service";
export declare class FaqController {
    private readonly faqService;
    constructor(faqService: FaqService);
    createFaq(createFaqDto: CreateFaqDto): Promise<FaqResponseDto>;
    getFaqs(paginationDto: PaginationDto): Promise<PaginatedFaqResponseDto>;
    getFaqById(faqId: string): Promise<FaqResponseDto>;
    updateFaq(faqId: string, updateFaqDto: UpdateFaqDto): Promise<FaqResponseDto>;
    deleteFaq(faqId: string): Promise<{
        message: string;
    }>;
}
