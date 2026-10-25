"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const encoder_provider_1 = require("../../common/providres/encoder.provider");
const jwt_1 = require("@nestjs/jwt");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
const jwt_config_1 = __importDefault(require("../../config/jwt.config"));
const jwt_guard_1 = require("./guards/jwt.guard");
const core_1 = require("@nestjs/core");
const roles_guards_1 = require("../../common/guards/roles.guards");
const prisma_module_1 = require("../prisma/prisma.module");
const user_module_1 = require("../user/user.module");
const rating_module_1 = require("../rating/rating.module");
const user_document_module_1 = require("../user-document/user-document.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.registerAsync({
                global: true,
                inject: [jwt_config_1.default.KEY],
                useFactory: (jwtConfiguration) => ({
                    secret: jwtConfiguration.jwt_secret,
                    signOptions: { expiresIn: jwtConfiguration.expires_in || '90d' }
                }),
            }), prisma_module_1.PrismaModule, user_module_1.UserModule, rating_module_1.RatingModule, user_document_module_1.UserDocumentModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, encoder_provider_1.EncoderProvider, smtp_provider_1.SMTPProvider,
            { provide: core_1.APP_GUARD, useClass: jwt_guard_1.JwtGuard },
            { provide: core_1.APP_GUARD, useClass: roles_guards_1.RolesGuard },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map