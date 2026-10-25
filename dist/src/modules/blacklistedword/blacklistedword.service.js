"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlacklistedwordService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BlacklistedwordService = class BlacklistedwordService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async addBlacklistedWord(createBlacklistedwordDto) {
        const existingWord = await this.prismaService.blackListedWord.findUnique({
            where: { word: createBlacklistedwordDto.word.toLowerCase() }
        });
        if (existingWord) {
            throw new common_1.BadRequestException('This word is already blacklisted');
        }
        const blacklistedWord = await this.prismaService.blackListedWord.create({
            data: {
                word: createBlacklistedwordDto.word.toLowerCase()
            }
        });
        return blacklistedWord;
    }
    async updateBlacklistedWord(wordId, updateBlacklistedwordDto) {
        const existingWord = await this.prismaService.blackListedWord.findUnique({
            where: { id: wordId }
        });
        if (!existingWord) {
            throw new common_1.NotFoundException('Blacklisted word not found');
        }
        if (updateBlacklistedwordDto.word && updateBlacklistedwordDto.word.toLowerCase() !== existingWord.word) {
            const wordExists = await this.prismaService.blackListedWord.findUnique({
                where: { word: updateBlacklistedwordDto.word.toLowerCase() }
            });
            if (wordExists) {
                throw new common_1.BadRequestException('This word is already blacklisted');
            }
        }
        const updatedWord = await this.prismaService.blackListedWord.update({
            where: { id: wordId },
            data: {
                word: updateBlacklistedwordDto.word.toLowerCase()
            }
        });
        return updatedWord;
    }
    async getBlacklistedWords(paginationDto) {
        const page = paginationDto.page || 1;
        const limit = paginationDto.limit || 10;
        const skip = (page - 1) * limit;
        const totalWords = await this.prismaService.blackListedWord.count();
        const words = await this.prismaService.blackListedWord.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' }
        });
        return {
            words,
            totalWords,
            page,
            limit,
            totalPages: Math.ceil(totalWords / limit)
        };
    }
    async getBlacklistedWordById(wordId) {
        const word = await this.prismaService.blackListedWord.findUnique({
            where: { id: wordId }
        });
        if (!word) {
            throw new common_1.NotFoundException('Blacklisted word not found');
        }
        return word;
    }
    async deleteBlacklistedWord(wordId) {
        const existingWord = await this.prismaService.blackListedWord.findUnique({
            where: { id: wordId }
        });
        if (!existingWord) {
            throw new common_1.NotFoundException('Blacklisted word not found');
        }
        await this.prismaService.blackListedWord.delete({
            where: { id: wordId }
        });
        return { message: 'Blacklisted word deleted successfully' };
    }
    async getAllBlacklistedWordsAsArray() {
        const words = await this.prismaService.blackListedWord.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return words.map(item => item.word);
    }
    async isWordBlacklisted(word) {
        const blacklistedWord = await this.prismaService.blackListedWord.findUnique({
            where: { word: word.toLowerCase() }
        });
        return !!blacklistedWord;
    }
};
exports.BlacklistedwordService = BlacklistedwordService;
exports.BlacklistedwordService = BlacklistedwordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlacklistedwordService);
//# sourceMappingURL=blacklistedword.service.js.map