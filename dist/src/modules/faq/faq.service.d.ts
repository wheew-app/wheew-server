import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { CreateFaqDto } from "./dtos/create-faq.dto";
import { UpdateFaqDto } from "./dtos/update-faq.dto";
export declare class FaqService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createFaq(createFaqDto: CreateFaqDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
    }>;
    getFaqs(paginationDto: PaginationDto): Promise<{
        faqs: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
        }[];
        totalFaqs: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getFaqById(faqId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
    }>;
    updateFaq(faqId: string, updateFaqDto: UpdateFaqDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
    }>;
    deleteFaq(faqId: string): Promise<{
        message: string;
    }>;
}
