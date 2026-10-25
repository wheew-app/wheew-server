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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointController = void 0;
const common_1 = require("@nestjs/common");
const point_service_1 = require("./point.service");
const create_point_dto_1 = require("./dtos/create-point.dto");
const update_point_dto_1 = require("./dtos/update-point.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
let PointController = class PointController {
    pointService;
    constructor(pointService) {
        this.pointService = pointService;
    }
    async createPoint(createPointDto) {
        return this.pointService.createPoint(createPointDto);
    }
    async getAllPoints(page = 1, limit = 10) {
        return this.pointService.getAllPoints(page, limit);
    }
    async searchPointsByName(query, page = 1, limit = 10) {
        return this.pointService.searchPointsByName(query, page, limit);
    }
    async searchPointsByLocation(latitude, longitude, radiusKm = 10, page = 1, limit = 10) {
        return this.pointService.searchPointsByLocation(latitude, longitude, radiusKm, page, limit);
    }
    async getPointById(id) {
        return this.pointService.getPointById(id);
    }
    async updatePoint(id, updatePointDto) {
        return this.pointService.updatePoint(id, updatePointDto);
    }
    async deletePoint(id) {
        return this.pointService.deletePoint(id);
    }
};
exports.PointController = PointController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Point created successfully'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_point_dto_1.CreatePointDto]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "createPoint", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Points fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "getAllPoints", null);
__decorate([
    (0, common_1.Get)('search/name'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Points searched by name successfully'),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "searchPointsByName", null);
__decorate([
    (0, common_1.Get)('search/location'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Points searched by location successfully'),
    __param(0, (0, common_1.Query)('latitude')),
    __param(1, (0, common_1.Query)('longitude')),
    __param(2, (0, common_1.Query)('radius')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "searchPointsByLocation", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Point fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "getPointById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Point updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_point_dto_1.UpdatePointDto]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "updatePoint", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Point deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PointController.prototype, "deletePoint", null);
exports.PointController = PointController = __decorate([
    (0, common_1.Controller)('point'),
    __metadata("design:paramtypes", [point_service_1.PointService])
], PointController);
//# sourceMappingURL=point.controller.js.map