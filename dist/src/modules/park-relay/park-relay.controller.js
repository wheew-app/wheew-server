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
exports.ParkRelayController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../common/decorators");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const enums_1 = require("../../../generated/prisma/enums");
const park_relay_service_1 = require("./park-relay.service");
const park_relay_dto_1 = require("./dtos/park-relay.dto");
let ParkRelayController = class ParkRelayController {
    parkRelayService;
    constructor(parkRelayService) {
        this.parkRelayService = parkRelayService;
    }
    async startSearching(userId, dto) {
        return this.parkRelayService.startSearching(userId, dto);
    }
    async markParked(userId, dto) {
        return this.parkRelayService.markParked(userId, dto);
    }
    async setIdle(userId) {
        return this.parkRelayService.setIdle(userId);
    }
    async getMyParkingMode(userId) {
        return this.parkRelayService.getMyParkingMode(userId);
    }
    async createHandoff(userId, dto) {
        return this.parkRelayService.createHandoff(userId, dto);
    }
    async acceptHandoff(userId, handoffId) {
        return this.parkRelayService.acceptHandoff(userId, handoffId);
    }
    async cancelHandoff(userId, handoffId) {
        return this.parkRelayService.cancelHandoff(userId, handoffId);
    }
    async markHandoffOccupied(userId, handoffId) {
        return this.parkRelayService.markHandoffOccupied(userId, handoffId);
    }
    async acceptHandoffAndPark(userId, handoffId, dto) {
        return this.parkRelayService.acceptHandoffAndPark(userId, handoffId, dto);
    }
    async markHandoffFound(userId, handoffId) {
        return this.parkRelayService.markHandoffFound(userId, handoffId);
    }
    async getNearbyHandoffs(userId, latitude, longitude, radiusMeters) {
        return this.parkRelayService.getNearbyHandoffs(userId, Number(latitude), Number(longitude), radiusMeters ? Number(radiusMeters) : undefined);
    }
    async getHandoffById(userId, handoffId, latitude, longitude) {
        return this.parkRelayService.getHandoffById(handoffId, userId, latitude !== undefined ? Number(latitude) : undefined, longitude !== undefined ? Number(longitude) : undefined);
    }
    async saveParkingLocation(userId, dto) {
        return this.parkRelayService.saveParkingLocation(userId, dto);
    }
    async processParkedEvent(userId, dto) {
        return this.parkRelayService.processParkedEvent(userId, dto);
    }
    async getSavedParkingLocation(userId) {
        return this.parkRelayService.getSavedParkingLocation(userId);
    }
    async getSavedParkingHistory(userId, page = 1, limit = 20) {
        return this.parkRelayService.getSavedParkingHistory(userId, page, limit);
    }
    async getPendingPaidParkingPrompt(userId) {
        return this.parkRelayService.getPendingPaidParkingPrompt(userId);
    }
    async answerPaidParkingPrompt(userId, promptId, dto) {
        return this.parkRelayService.answerPaidParkingPrompt(userId, promptId, dto);
    }
    async dismissPaidParkingPrompt(userId, promptId) {
        return this.parkRelayService.dismissPaidParkingPrompt(userId, promptId);
    }
    async getAllSavedParkingLocations(page = 1, limit = 20) {
        return this.parkRelayService.getAllSavedParkingLocations(page, limit);
    }
    async deleteSavedParkingLocation(userId) {
        return this.parkRelayService.deleteSavedParkingLocation(userId);
    }
    async createParkingSession(userId, dto) {
        return this.parkRelayService.createParkingSession(userId, dto);
    }
    async getActiveParkingSession(userId) {
        return this.parkRelayService.getActiveParkingSession(userId);
    }
    async leaveParkingSession(userId, sessionId) {
        return this.parkRelayService.leaveParkingSession(userId, sessionId);
    }
    async dispatchParkingExpiryWarnings() {
        return this.parkRelayService.dispatchParkingExpiryWarnings();
    }
    async getNearbyParkingAreas(latitude, longitude, radiusMeters) {
        return this.parkRelayService.getNearbyParkingAreas(Number(latitude), Number(longitude), radiusMeters ? Number(radiusMeters) : undefined);
    }
    async getParkingAreasInViewport(query) {
        return this.parkRelayService.getParkingAreasInViewport(query);
    }
    async searchParkingAreas(query) {
        return this.parkRelayService.searchParkingAreas(query);
    }
    async submitParkingAreaPoint(userId, dto) {
        return this.parkRelayService.submitParkingAreaPoint(userId, dto);
    }
    async createParkingArea(adminId, dto) {
        return this.parkRelayService.createParkingArea(adminId, dto);
    }
    async getParkingAreas(page = 1, limit = 20, isActive) {
        const parsedIsActive = isActive === undefined ? undefined : isActive === 'true';
        return this.parkRelayService.getParkingAreas(page, limit, parsedIsActive);
    }
    async updateParkingArea(areaId, dto) {
        return this.parkRelayService.updateParkingArea(areaId, dto);
    }
    async deleteParkingArea(areaId) {
        return this.parkRelayService.deleteParkingArea(areaId);
    }
    async createParkingAreaRating(userId, areaId, dto) {
        return this.parkRelayService.createParkingAreaRating(userId, areaId, dto);
    }
    async updateMyParkingAreaRating(userId, areaId, dto) {
        return this.parkRelayService.updateMyParkingAreaRating(userId, areaId, dto);
    }
    async getMyParkingAreaRating(userId, areaId) {
        return this.parkRelayService.getMyParkingAreaRating(userId, areaId);
    }
    async getParkingAreaRatings(areaId, page = 1, limit = 10) {
        return this.parkRelayService.getParkingAreaRatings(areaId, page, limit);
    }
    async getParkingAreaRatingSummary(areaId) {
        return this.parkRelayService.getParkingAreaRatingSummary(areaId);
    }
};
exports.ParkRelayController = ParkRelayController;
__decorate([
    (0, common_1.Post)('parking-mode/searching'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking search mode started successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.UpdateParkingModeDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "startSearching", null);
__decorate([
    (0, common_1.Post)('parking-mode/parked'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking mode updated to parked successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.UpdateParkingModeDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "markParked", null);
__decorate([
    (0, common_1.Post)('parking-mode/idle'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking mode updated to idle successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "setIdle", null);
__decorate([
    (0, common_1.Get)('parking-mode/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking mode fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getMyParkingMode", null);
__decorate([
    (0, common_1.Post)('handoffs'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.CreateParkingHandoffDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "createHandoff", null);
__decorate([
    (0, common_1.Post)('handoffs/:id/accept'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff accepted successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "acceptHandoff", null);
__decorate([
    (0, common_1.Post)('handoffs/:id/cancel'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff cancelled successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "cancelHandoff", null);
__decorate([
    (0, common_1.Post)('handoffs/:id/occupied'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff marked occupied successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "markHandoffOccupied", null);
__decorate([
    (0, common_1.Post)('handoffs/:id/accept-and-park'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff accepted and parking location saved successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, park_relay_dto_1.AcceptHandoffAndParkDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "acceptHandoffAndPark", null);
__decorate([
    (0, common_1.Post)('handoffs/:id/found'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff marked found successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "markHandoffFound", null);
__decorate([
    (0, common_1.Get)('handoffs/nearby'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Nearby parking handoffs fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Query)('latitude')),
    __param(2, (0, common_1.Query)('longitude')),
    __param(3, (0, common_1.Query)('radiusMeters')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getNearbyHandoffs", null);
__decorate([
    (0, common_1.Get)('handoffs/:id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking handoff fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('latitude')),
    __param(3, (0, common_1.Query)('longitude')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getHandoffById", null);
__decorate([
    (0, common_1.Post)('saved-parking'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking location saved successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.SaveParkingLocationDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "saveParkingLocation", null);
__decorate([
    (0, common_1.Post)('parked-event'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parked event processed successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.ParkedEventDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "processParkedEvent", null);
__decorate([
    (0, common_1.Get)('saved-parking/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Saved parking location fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getSavedParkingLocation", null);
__decorate([
    (0, common_1.Get)('saved-parking/history'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Saved parking history fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getSavedParkingHistory", null);
__decorate([
    (0, common_1.Get)('paid-parking-prompt/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Pending paid parking prompt fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getPendingPaidParkingPrompt", null);
__decorate([
    (0, common_1.Post)('paid-parking-prompt/:id/answer'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Paid parking prompt answered successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, park_relay_dto_1.AnswerPaidParkingPromptDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "answerPaidParkingPrompt", null);
__decorate([
    (0, common_1.Post)('paid-parking-prompt/:id/dismiss'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Paid parking prompt dismissed successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "dismissPaidParkingPrompt", null);
__decorate([
    (0, common_1.Get)('admin/saved-parking'),
    (0, common_1.HttpCode)(200),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Saved parking locations fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getAllSavedParkingLocations", null);
__decorate([
    (0, common_1.Delete)('saved-parking/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Saved parking location deleted successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "deleteSavedParkingLocation", null);
__decorate([
    (0, common_1.Post)('parking-sessions'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking session created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.CreateParkingSessionDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "createParkingSession", null);
__decorate([
    (0, common_1.Get)('parking-sessions/me/active'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Active parking session fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getActiveParkingSession", null);
__decorate([
    (0, common_1.Post)('parking-sessions/:id/leave'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking session left successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "leaveParkingSession", null);
__decorate([
    (0, common_1.Post)('parking-sessions/dispatch-expiry-warnings'),
    (0, common_1.HttpCode)(200),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking expiry warnings dispatched successfully'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "dispatchParkingExpiryWarnings", null);
__decorate([
    (0, common_1.Get)('parking-areas/nearby'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Nearby parking areas fetched successfully'),
    __param(0, (0, common_1.Query)('latitude')),
    __param(1, (0, common_1.Query)('longitude')),
    __param(2, (0, common_1.Query)('radiusMeters')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getNearbyParkingAreas", null);
__decorate([
    (0, common_1.Get)('parking-areas/viewport'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking areas in map viewport fetched successfully'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [park_relay_dto_1.ViewportParkingAreaDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getParkingAreasInViewport", null);
__decorate([
    (0, common_1.Get)('parking-areas/search'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking areas searched successfully'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [park_relay_dto_1.SearchParkingAreaDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "searchParkingAreas", null);
__decorate([
    (0, common_1.Post)('parking-areas'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area submitted successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.SubmitParkingAreaPointDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "submitParkingAreaPoint", null);
__decorate([
    (0, common_1.Post)('admin/parking-areas'),
    (0, common_1.HttpCode)(201),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.CreateParkingAreaDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "createParkingArea", null);
__decorate([
    (0, common_1.Get)('admin/parking-areas'),
    (0, common_1.HttpCode)(200),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking areas fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getParkingAreas", null);
__decorate([
    (0, common_1.Patch)('admin/parking-areas/:id'),
    (0, common_1.HttpCode)(200),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, park_relay_dto_1.UpdateParkingAreaDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "updateParkingArea", null);
__decorate([
    (0, common_1.Delete)('admin/parking-areas/:id'),
    (0, common_1.HttpCode)(200),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "deleteParkingArea", null);
__decorate([
    (0, common_1.Post)('parking-areas/:id/ratings'),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area rating created successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, park_relay_dto_1.CreateParkingAreaRatingDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "createParkingAreaRating", null);
__decorate([
    (0, common_1.Patch)('parking-areas/:id/ratings/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area rating updated successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, park_relay_dto_1.UpdateParkingAreaRatingDto]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "updateMyParkingAreaRating", null);
__decorate([
    (0, common_1.Get)('parking-areas/:id/ratings/me'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('My parking area rating fetched successfully'),
    __param(0, (0, decorators_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getMyParkingAreaRating", null);
__decorate([
    (0, common_1.Get)('parking-areas/:id/ratings'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area ratings fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getParkingAreaRatings", null);
__decorate([
    (0, common_1.Get)('parking-areas/:id/rating-summary'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Parking area rating summary fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkRelayController.prototype, "getParkingAreaRatingSummary", null);
exports.ParkRelayController = ParkRelayController = __decorate([
    (0, common_1.Controller)('park-relay'),
    __metadata("design:paramtypes", [park_relay_service_1.ParkRelayService])
], ParkRelayController);
//# sourceMappingURL=park-relay.controller.js.map