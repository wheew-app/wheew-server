"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const encoder_provider_1 = require("../../common/providres/encoder.provider");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
const prisma_module_1 = require("../prisma/prisma.module");
const qrCodeGenerator_provider_1 = require("./providers/qrCodeGenerator.provider");
const chat_module_1 = require("../chat/chat.module");
const rating_module_1 = require("../rating/rating.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => chat_module_1.ChatModule), rating_module_1.RatingModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, encoder_provider_1.EncoderProvider, smtp_provider_1.SMTPProvider, qrCodeGenerator_provider_1.QrCodeGeneratorProvider],
        exports: [user_service_1.UserService, encoder_provider_1.EncoderProvider, qrCodeGenerator_provider_1.QrCodeGeneratorProvider, chat_module_1.ChatModule]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map