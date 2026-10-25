"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpSupportModule = void 0;
const common_1 = require("@nestjs/common");
const help_support_controller_1 = require("./help-support.controller");
const help_support_service_1 = require("./help-support.service");
const prisma_module_1 = require("../prisma/prisma.module");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
let HelpSupportModule = class HelpSupportModule {
};
exports.HelpSupportModule = HelpSupportModule;
exports.HelpSupportModule = HelpSupportModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [help_support_controller_1.HelpSupportController],
        providers: [help_support_service_1.HelpSupportService, smtp_provider_1.SMTPProvider],
        exports: [help_support_service_1.HelpSupportService],
    })
], HelpSupportModule);
//# sourceMappingURL=help-support.module.js.map