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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const signin_dto_1 = require("./dtos/signin.dto");
const register_user_dto_1 = require("./dtos/register-user.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const class_transformer_1 = require("class-transformer");
const sign_in_response_dto_1 = require("./dtos/sign-in-response.dto");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const user_response_dto_1 = require("../user/dtos/user-response.dto");
const enums_1 = require("../../../generated/prisma/enums");
const google_signin_dto_1 = require("./dtos/google-signin.dto");
const check_auth_availability_dto_1 = require("./dtos/check-auth-availability.dto");
const apple_signin_dto_1 = require("./dtos/apple-signin.dto");
const google_auth_status_dto_1 = require("./dtos/google-auth-status.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async signinUser(signinDto) {
        const user = await this.authService.signin(signinDto);
        if (user.role === enums_1.UserRole.USER) {
            return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            });
        }
        return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
    async registerUser(registerDto) {
        const user = await this.authService.registerUser(registerDto);
        if (user.role === enums_1.UserRole.USER) {
            return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            });
        }
        return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
    async googleSignin(googleSigninDto) {
        const user = await this.authService.googleSignin(googleSigninDto);
        if (user.role === enums_1.UserRole.USER) {
            return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            });
        }
        return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
    async getGoogleAuthStatus(googleAuthStatusDto) {
        return this.authService.getGoogleAuthStatus(googleAuthStatusDto);
    }
    async appleSignin(appleSigninDto) {
        const user = await this.authService.appleSignin(appleSigninDto);
        if (user.role === enums_1.UserRole.USER) {
            return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            });
        }
        return (0, class_transformer_1.plainToInstance)(sign_in_response_dto_1.SignInResponseDto, user, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
    async checkAvailability(checkAvailabilityDto) {
        return this.authService.checkAvailability(checkAvailabilityDto);
    }
    async getAuthenticatedUser(request) {
        const tokenpayload = request["payload"];
        const userDetails = await this.authService.getAuthenticatedUser(tokenpayload.id);
        if (userDetails?.role === enums_1.UserRole.USER) {
            return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, userDetails, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            });
        }
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, userDetails, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signin"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("user signed in"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signinUser", null);
__decorate([
    (0, common_1.Post)("register"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User registered successfully"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)("google"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User signed in with Google successfully"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_signin_dto_1.GoogleSigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleSignin", null);
__decorate([
    (0, common_1.Post)("google/status"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Google account registration status checked successfully"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_auth_status_dto_1.GoogleAuthStatusDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getGoogleAuthStatus", null);
__decorate([
    (0, common_1.Post)("apple"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User signed in with Apple successfully"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apple_signin_dto_1.AppleSigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "appleSignin", null);
__decorate([
    (0, common_1.Get)("availability"),
    (0, public_decorator_1.Public)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Auth fields availability checked successfully"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_auth_availability_dto_1.CheckAuthAvailabilityDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkAvailability", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User details fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAuthenticatedUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)({
        path: "auth"
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map