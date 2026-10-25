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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const user_service_1 = require("../../user/user.service");
const jwt_config_1 = __importDefault(require("../../../config/jwt.config"));
let JwtGuard = class JwtGuard {
    jwtService;
    reflector;
    userService;
    jwtConfigOptions;
    constructor(jwtService, reflector, userService, jwtConfigOptions) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.userService = userService;
        this.jwtConfigOptions = jwtConfigOptions;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.PUBLIC_KEY, [context.getHandler(), context.getClass()]);
        if (isPublic) {
            return true;
        }
        try {
            const token = this.extractToken(request);
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.jwtConfigOptions.jwt_secret
            });
            const user = await this.getUserData(payload.id);
            if (!user) {
                throw new common_1.BadRequestException("User data does not exist");
            }
            if (user.is_blocked) {
                throw new common_1.BadRequestException('Sorry, your are blocked by the admin.Kindly, Contact support.Thanks');
            }
            if (user.is_deleted) {
                throw new common_1.BadRequestException('Sorry, your account has been deleted. If you think this is a mistake, please contact support. Thanks');
            }
            request['payload'] = payload;
            return true;
        }
        catch (err) {
            throw new common_1.BadRequestException("Invalid token");
        }
    }
    extractToken(request) {
        if (!request.headers.authorization) {
            throw new common_1.BadRequestException("authorization header missing");
        }
        const [type, token] = request.headers.authorization?.split(" ") || [];
        if (type !== "Bearer")
            throw new common_1.UnauthorizedException("token type is not valid");
        if (!token) {
            throw new common_1.UnauthorizedException("token is missing");
        }
        return token;
    }
    async getUserData(userId) {
        const user = await this.userService.findUserById(userId);
        return user;
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        user_service_1.UserService, void 0])
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map