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
exports.PointService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PointService = class PointService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createPoint(createPointDto) {
        return this.prismaService.point.create({
            data: {
                name: createPointDto.name,
                description: createPointDto.description,
                latitude: createPointDto.latitude,
                longitude: createPointDto.longitude,
            },
        });
    }
    async getAllPoints(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [points, total] = await Promise.all([
            this.prismaService.point.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.point.count(),
        ]);
        return { points, total, page, limit };
    }
    async getPointById(id) {
        const point = await this.prismaService.point.findUnique({
            where: { id },
        });
        if (!point) {
            throw new common_1.NotFoundException(`Point with ID ${id} not found`);
        }
        return point;
    }
    async updatePoint(id, updatePointDto) {
        const existingPoint = await this.prismaService.point.findUnique({
            where: { id },
        });
        if (!existingPoint) {
            throw new common_1.NotFoundException(`Point with ID ${id} not found`);
        }
        return this.prismaService.point.update({
            where: { id },
            data: updatePointDto,
        });
    }
    async deletePoint(id) {
        const existingPoint = await this.prismaService.point.findUnique({
            where: { id },
        });
        if (!existingPoint) {
            throw new common_1.NotFoundException(`Point with ID ${id} not found`);
        }
        await this.prismaService.point.delete({
            where: { id },
        });
        return { message: 'Point deleted successfully' };
    }
    async searchPointsByLocation(latitude, longitude, radiusKm = 10, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const points = await this.prismaService.point.findMany({
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        });
        const filteredPoints = points.filter((point) => {
            const distance = this.calculateDistance(latitude, longitude, point.latitude, point.longitude);
            return distance <= radiusKm;
        });
        const total = await this.prismaService.point.count();
        return { points: filteredPoints, total, page, limit, radiusKm };
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    async searchPointsByName(query, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [points, total] = await Promise.all([
            this.prismaService.point.findMany({
                where: {
                    OR: [
                        { name: { contains: query, mode: 'insensitive' } },
                        { description: { contains: query, mode: 'insensitive' } },
                    ],
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prismaService.point.count({
                where: {
                    OR: [
                        { name: { contains: query, mode: 'insensitive' } },
                        { description: { contains: query, mode: 'insensitive' } },
                    ],
                },
            }),
        ]);
        return { points, total, page, limit };
    }
};
exports.PointService = PointService;
exports.PointService = PointService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PointService);
//# sourceMappingURL=point.service.js.map