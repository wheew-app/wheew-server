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
exports.AllUsersResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const user_response_dto_1 = require("./user-response.dto");
const class_validator_1 = require("class-validator");
const pagination_response_dto_1 = require("../../../common/dtos/pagination-response.dto");
class AllUsersResponseDto extends pagination_response_dto_1.PaginationResponseDto {
    users;
    page;
    limit;
    pages;
}
exports.AllUsersResponseDto = AllUsersResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => user_response_dto_1.UserResponseDto),
    __metadata("design:type", Array)
], AllUsersResponseDto.prototype, "users", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], AllUsersResponseDto.prototype, "page", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], AllUsersResponseDto.prototype, "limit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], AllUsersResponseDto.prototype, "pages", void 0);
//# sourceMappingURL=all-usres-response.dto.js.map