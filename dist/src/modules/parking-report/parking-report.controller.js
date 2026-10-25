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
exports.ParkingReportController = void 0;
const common_1 = require("@nestjs/common");
const parking_report_service_1 = require("./parking-report.service");
const dtos_1 = require("./dtos");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const decorators_1 = require("../../common/decorators");
const create_parking_spot_dto_1 = require("./dtos/create-parking-spot.dto");
let ParkingReportController = class ParkingReportController {
    parkingReportService;
    constructor(parkingReportService) {
        this.parkingReportService = parkingReportService;
    }
    async createParkingReport(userId, createParkingReportDto) {
        return this.parkingReportService.createParkingReport(userId, createParkingReportDto);
    }
    async createParkingSpot(userId, createParkingSpotDto) {
        return this.parkingReportService.createParkingSpot(userId, createParkingSpotDto);
    }
    async getAllParkingSpots(page = 1, limit = 10) {
        return this.parkingReportService.getAllParkingSpots(page, limit);
    }
    async getNearbyParkingSpots(latitude, longitude, radiusInMeters = 200, page = 1, limit = 50) {
        return this.parkingReportService.getNearbyParkingSpots(latitude, longitude, radiusInMeters, page, limit);
    }
    async leaveParkingSpot(userId, leaveParkingSpotDto) {
        return this.parkingReportService.leaveParkingSpot(userId, leaveParkingSpotDto.spotId);
    }
    async reserveParkingSpot(userId, reserveParkingSpotDto) {
        return this.parkingReportService.reserveParkingSpot(userId, reserveParkingSpotDto.spotId);
    }
    async getParkingSpotById(id) {
        return this.parkingReportService.getParkingSpotById(id);
    }
    async getAllParkingReports(page = 1, limit = 10, isActive = true) {
        return this.parkingReportService.getAllParkingReports(page, limit, isActive);
    }
    async getNearbyParkingReports(latitude, longitude, radius = 5, page = 1, limit = 10) {
        return this.parkingReportService.getNearbyParkingReports(latitude, longitude, radius, page, limit);
    }
    async getParkingReportsByUserId(userId, page = 1, limit = 10) {
        return this.parkingReportService.getParkingReportsByUserId(userId, page, limit);
    }
    async getParkingReportById(id) {
        return this.parkingReportService.getParkingReportById(id);
    }
    async updateParkingReport(id, userId, updateParkingReportDto) {
        return this.parkingReportService.updateParkingReport(id, userId, updateParkingReportDto);
    }
    async deactivateParkingReport(id, userId) {
        return this.parkingReportService.deactivateParkingReport(id, userId);
    }
    async deleteParkingReport(id, userId) {
        return this.parkingReportService.deleteParkingReport(id, userId);
    }
    async getUserParkingCredits(userId) {
        return this.parkingReportService.getUserParkingCredits(userId);
    }
    async getUserParkingCreditHistory(userId, page = 1, limit = 10) {
        return this.parkingReportService.getUserParkingCreditHistory(userId, page, limit);
    }
};
exports.ParkingReportController = ParkingReportController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking report created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.CreateParkingReportDto]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "createParkingReport", null);
__decorate([
    (0, common_1.Post)('spot'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking spot created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_parking_spot_dto_1.CreateParkingSpotDto]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "createParkingSpot", null);
__decorate([
    (0, common_1.Get)('spot'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking spots fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getAllParkingSpots", null);
__decorate([
    (0, common_1.Get)('spot/nearby'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Nearby parking spots fetched successfully'),
    __param(0, (0, common_1.Query)('latitude')),
    __param(1, (0, common_1.Query)('longitude')),
    __param(2, (0, common_1.Query)('radiusInMeters')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getNearbyParkingSpots", null);
__decorate([
    (0, common_1.Post)('spot/leave'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking leave notification sent successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.LeaveParkingSpotDto]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "leaveParkingSpot", null);
__decorate([
    (0, common_1.Post)('spot/reserve'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking spot reserved successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.ReserveParkingSpotDto]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "reserveParkingSpot", null);
__decorate([
    (0, common_1.Get)('spot/:id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking spot fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getParkingSpotById", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking reports fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Boolean]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getAllParkingReports", null);
__decorate([
    (0, common_1.Get)('nearby'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Nearby parking reports fetched successfully'),
    __param(0, (0, common_1.Query)('latitude')),
    __param(1, (0, common_1.Query)('longitude')),
    __param(2, (0, common_1.Query)('radius')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getNearbyParkingReports", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User parking reports fetched successfully'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getParkingReportsByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking report fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getParkingReportById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking report updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dtos_1.UpdateParkingReportDto]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "updateParkingReport", null);
__decorate([
    (0, common_1.Put)(':id/deactivate'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking report deactivated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "deactivateParkingReport", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking report deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "deleteParkingReport", null);
__decorate([
    (0, common_1.Get)('credit/status'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User parking notification credits fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getUserParkingCredits", null);
__decorate([
    (0, common_1.Get)('credit/history'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User parking notification credit history fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkingReportController.prototype, "getUserParkingCreditHistory", null);
exports.ParkingReportController = ParkingReportController = __decorate([
    (0, common_1.Controller)('parking-report'),
    __metadata("design:paramtypes", [parking_report_service_1.ParkingReportService])
], ParkingReportController);
//# sourceMappingURL=parking-report.controller.js.map