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
exports.PrivacyPolicyController = void 0;
const common_1 = require("@nestjs/common");
const create_update_policy_dto_1 = require("./dtos/create-update-policy.dto");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const enums_1 = require("../../../generated/prisma/enums");
const privacypolicy_service_1 = require("./privacypolicy.service");
const get_site_policy_dto_1 = require("./dtos/get-site-policy.dto");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const class_transformer_1 = require("class-transformer");
const policy_response_dto_1 = require("./dtos/policy-response.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
let PrivacyPolicyController = class PrivacyPolicyController {
    privacyPolicyService;
    constructor(privacyPolicyService) {
        this.privacyPolicyService = privacyPolicyService;
    }
    async createUpdatePolicy(createUpdatePolicyDto) {
        const updatedPolicy = await this.privacyPolicyService.updateCreatePolicy(createUpdatePolicyDto);
        return updatedPolicy;
    }
    async getSitePolicy(getPolicyDto) {
        const result = await this.privacyPolicyService.getSitePolicy(getPolicyDto.type);
        return (0, class_transformer_1.plainToInstance)(policy_response_dto_1.PolicyResponseDto, result, {
            excludeExtraneousValues: true
        });
    }
};
exports.PrivacyPolicyController = PrivacyPolicyController;
__decorate([
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, common_1.Post)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Policy created successfully"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_update_policy_dto_1.CreateUpdatePolicyDto]),
    __metadata("design:returntype", Promise)
], PrivacyPolicyController.prototype, "createUpdatePolicy", null);
__decorate([
    (0, common_1.Get)(":type"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Policy fetched successfully"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_site_policy_dto_1.GetSitePolicyDto]),
    __metadata("design:returntype", Promise)
], PrivacyPolicyController.prototype, "getSitePolicy", null);
exports.PrivacyPolicyController = PrivacyPolicyController = __decorate([
    (0, common_1.Controller)({
        path: "site-policy"
    }),
    __metadata("design:paramtypes", [privacypolicy_service_1.PrivacyPolicyService])
], PrivacyPolicyController);
//# sourceMappingURL=privacypolicy.controller.js.map