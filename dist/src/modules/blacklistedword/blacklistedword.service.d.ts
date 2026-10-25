import { PrismaService } from "../prisma/prisma.service";
import { CreateBlacklistedwordDto } from "./dtos/create-blacklistedword.dto";
import { UpdateBlacklistedwordDto } from "./dtos/update-blacklistedword.dto";
import { PaginationDto } from "src/common/dtos/pagination.dto";
export declare class BlacklistedwordService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addBlacklistedWord(createBlacklistedwordDto: CreateBlacklistedwordDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        word: string;
    }>;
    updateBlacklistedWord(wordId: string, updateBlacklistedwordDto: UpdateBlacklistedwordDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        word: string;
    }>;
    getBlacklistedWords(paginationDto: PaginationDto): Promise<{
        words: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            word: string;
        }[];
        totalWords: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getBlacklistedWordById(wordId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        word: string;
    }>;
    deleteBlacklistedWord(wordId: string): Promise<{
        message: string;
    }>;
    getAllBlacklistedWordsAsArray(): Promise<string[]>;
    isWordBlacklisted(word: string): Promise<boolean>;
}
