import { AuthService } from "./auth.service";
import { SigninDto } from "./dtos/signin.dto";
import { RegisterUserDto } from "./dtos/register-user.dto";
import { SignInResponseDto } from "./dtos/sign-in-response.dto";
import { UserResponseDto } from "../user/dtos/user-response.dto";
import { GoogleSigninDto } from "./dtos/google-signin.dto";
import { CheckAuthAvailabilityDto } from "./dtos/check-auth-availability.dto";
import { AppleSigninDto } from "./dtos/apple-signin.dto";
import { GoogleAuthStatusDto } from "./dtos/google-auth-status.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signinUser(signinDto: SigninDto): Promise<SignInResponseDto>;
    registerUser(registerDto: RegisterUserDto): Promise<SignInResponseDto>;
    googleSignin(googleSigninDto: GoogleSigninDto): Promise<SignInResponseDto>;
    getGoogleAuthStatus(googleAuthStatusDto: GoogleAuthStatusDto): Promise<{
        registered: boolean;
        requiresOnboarding: boolean;
        provider: string;
        email: string;
        name: any;
        picture: string | null;
        missingFields: string[];
    }>;
    appleSignin(appleSigninDto: AppleSigninDto): Promise<SignInResponseDto>;
    checkAvailability(checkAvailabilityDto: CheckAuthAvailabilityDto): Promise<{
        available: boolean;
        nick_name: {
            value: string;
            available: boolean;
            is_taken: boolean;
        } | null;
        licence_id: {
            value: string;
            available: boolean;
            associated_accounts: number;
            max_accounts: number;
        } | null;
    }>;
    getAuthenticatedUser(request: Request): Promise<UserResponseDto>;
}
