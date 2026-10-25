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
exports.UsefulNumberController = void 0;
const common_1 = require("@nestjs/common");
const useful_number_service_1 = require("./useful-number.service");
const create_useful_number_dto_1 = require("./dtos/create-useful-number.dto");
const update_useful_number_dto_1 = require("./dtos/update-useful-number.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
let UsefulNumberController = class UsefulNumberController {
    usefulNumberService;
    constructor(usefulNumberService) {
        this.usefulNumberService = usefulNumberService;
    }
    async createUsefulNumber(createUsefulNumberDto) {
        return this.usefulNumberService.createUsefulNumber(createUsefulNumberDto);
    }
    async getAllUsefulNumbers(page = 1, limit = 10, isActive, category) {
        return this.usefulNumberService.getAllUsefulNumbers(Number(page), Number(limit), this.parseBooleanQuery(isActive), category);
    }
    async getGroupedUsefulNumbers(isActive) {
        return this.usefulNumberService.getGroupedUsefulNumbers(this.parseBooleanQuery(isActive) ?? true);
    }
    async searchUsefulNumbers(query, page = 1, limit = 10) {
        return this.usefulNumberService.searchUsefulNumbers(query, page, limit);
    }
    async searchNearbyUsefulNumbers(latitude, longitude, radiusInMeters = 10000, page = 1, limit = 10) {
        return this.usefulNumberService.searchNearbyUsefulNumbers(parseFloat(latitude.toString()), parseFloat(longitude.toString()), parseFloat(radiusInMeters.toString()), page, limit);
    }
    async getUsefulNumberById(id) {
        return this.usefulNumberService.getUsefulNumberById(id);
    }
    async updateUsefulNumber(id, updateUsefulNumberDto) {
        return this.usefulNumberService.updateUsefulNumber(id, updateUsefulNumberDto);
    }
    async deleteUsefulNumber(id) {
        return this.usefulNumberService.deleteUsefulNumber(id);
    }
    parseBooleanQuery(value) {
        if (value === undefined || value === null || value === '') {
            return undefined;
        }
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        return undefined;
    }
};
exports.UsefulNumberController = UsefulNumberController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful number created successfully'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_useful_number_dto_1.CreateUsefulNumberDto]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "createUsefulNumber", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful numbers fetched successfully'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('isActive')),
    __param(3, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "getAllUsefulNumbers", null);
__decorate([
    (0, common_1.Get)('grouped'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Grouped useful numbers fetched successfully'),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "getGroupedUsefulNumbers", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful numbers searched successfully'),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "searchUsefulNumbers", null);
__decorate([
    (0, common_1.Get)('nearby'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Nearby useful numbers fetched successfully'),
    __param(0, (0, common_1.Query)('latitude')),
    __param(1, (0, common_1.Query)('longitude')),
    __param(2, (0, common_1.Query)('radiusInMeters')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "searchNearbyUsefulNumbers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful number fetched successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "getUsefulNumberById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful number updated successfully'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_useful_number_dto_1.UpdateUsefulNumberDto]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "updateUsefulNumber", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Useful number deleted successfully'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsefulNumberController.prototype, "deleteUsefulNumber", null);
exports.UsefulNumberController = UsefulNumberController = __decorate([
    (0, common_1.Controller)('useful-number'),
    __metadata("design:paramtypes", [useful_number_service_1.UsefulNumberService])
], UsefulNumberController);
//# sourceMappingURL=useful-number.controller.js.map