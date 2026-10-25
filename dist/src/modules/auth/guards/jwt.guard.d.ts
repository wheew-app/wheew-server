import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/modules/user/user.service";
import { type ConfigType } from "@nestjs/config";
import jwtConfig from "src/config/jwt.config";
export declare class JwtGuard implements CanActivate {
    private readonly jwtService;
    private readonly reflector;
    private readonly userService;
    private readonly jwtConfigOptions;
    constructor(jwtService: JwtService, reflector: Reflector, userService: UserService, jwtConfigOptions: ConfigType<typeof jwtConfig>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
    private getUserData;
}
