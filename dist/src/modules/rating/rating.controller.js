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
exports.RatingController = void 0;
const common_1 = require("@nestjs/common");
const rating_service_1 = require("./rating.service");
const create_rating_dto_1 = require("./dtos/create-rating.dto");
const update_rating_status_dto_1 = require("./dtos/update-rating-status.dto");
const update_rating_dto_1 = require("./dtos/update-rating.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const enums_1 = require("../../../generated/prisma/enums");
let RatingController = class RatingController {
    ratingService;
    constructor(ratingService) {
        this.ratingService = ratingService;
    }
    async createRating(request, createRatingDto) {
        const payload = request['payload'];
        return this.ratingService.createRating(payload.id, createRatingDto);
    }
    async getMyRatingForUser(request, rateeId) {
        const payload = request['payload'];
        return this.ratingService.getMyRatingForUser(payload.id, rateeId);
    }
    async updateMyRatingForUser(request, rateeId, updateRatingDto) {
        const payload = request['payload'];
        return this.ratingService.updateMyRatingForUser(payload.id, rateeId, updateRatingDto);
    }
    async updateRatingStatus(ratingId, updateRatingStatusDto) {
        return this.ratingService.updateRatingStatus(ratingId, updateRatingStatusDto);
    }
    async getRatingsForUser(userId, status, page = 1, limit = 10) {
        return this.ratingService.getRatingsForUser(userId, status, page, limit);
    }
    async getAverageRatingForUser(userId) {
        return this.ratingService.getAverageRatingForUser(userId);
    }
    async getRatingsByStatus(status, page = 1, limit = 10) {
        return this.ratingService.getRatingsByStatus(status, page, limit);
    }
    async deleteRating(ratingId) {
        return this.ratingService.deleteRating(ratingId);
    }
    async getRatingById(ratingId) {
        return this.ratingService.getRatingById(ratingId);
    }
};
exports.RatingController = RatingController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Rating created successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, create_rating_dto_1.CreateRatingDto]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "createRating", null);
__decorate([
    (0, common_1.Get)('my-rating/:rateeId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User rating fetched successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('rateeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "getMyRatingForUser", null);
__decorate([
    (0, common_1.Patch)('my-rating/:rateeId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Rating updated successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('rateeId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, update_rating_dto_1.UpdateRatingDto]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "updateMyRatingForUser", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Rating status updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rating_status_dto_1.UpdateRatingStatusDto]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "updateRatingStatus", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User ratings fetched successfully'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "getRatingsForUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/average'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Average rating fetched successfully'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "getAverageRatingForUser", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Ratings by status fetched successfully'),
    __param(0, (0, common_1.Param)('status')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "getRatingsByStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Rating deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "deleteRating", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Rating fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingController.prototype, "getRatingById", null);
exports.RatingController = RatingController = __decorate([
    (0, common_1.Controller)('ratings'),
    __metadata("design:paramtypes", [rating_service_1.RatingService])
], RatingController);
//# sourceMappingURL=rating.controller.js.map