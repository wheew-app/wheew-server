export declare class FaqResponseDto {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PaginatedFaqResponseDto {
    faqs: FaqResponseDto[];
    totalFaqs: number;
    page: number;
    limit: number;
    totalPages: number;
}
