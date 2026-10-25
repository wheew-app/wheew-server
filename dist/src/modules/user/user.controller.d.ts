import { UserService } from "./user.service";
import { UserResponseDto } from "./dtos/user-response.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ChangePasswordDto } from "./dtos/change-password.dto";
import { SearchUsersDto } from "./dtos/search-users.dto";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { ResetPasswordDto } from "./dtos/reset-password.dto";
import { VerifyOtpDto } from "./dtos/verify-otp.dto";
import { ForgetPasswordDto } from "./dtos/forget-password.dto";
import { UserRole } from "generated/prisma/enums";
import { BlockUnblockDto } from "./dtos/block-unblock.dto";
import { TogggleBlockUserDto } from "./dtos/block-user.dto";
import { DeleteAccountDto } from "./dtos/delete-account.dto";
import { ScanQrCodeDto } from "./dtos/scan-qr-code.dto";
import { UpdateUserLocationDto } from "./dtos/update-user-location.dto";
import { VerifyLicenseDto } from "./dtos/verify-license.dto";
import { AddVehicleInfoDto } from "./dtos/add-vehicle-info.dto";
import { UpdateVehicleInfoDto } from "./dtos/update-vehicle-info.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    searchUsers(searchDto: SearchUsersDto, req: Request): Promise<UserResponseDto[] | {
        users: {
            age: number | null;
            isOnline: boolean;
            lastSeenAt: string | Date | null;
            existingRoom: {
                id: string;
                is_deleted: boolean;
                createdAt: Date;
                updatedAt: Date;
                user1_id: string;
                user2_id: string;
            } | undefined;
            isMessageRequestSent: boolean;
            messageRequest: {
                id: string;
                status: import("generated/prisma/enums").MessageRequestStatus;
                receiverId: string;
                roomId: string | null;
                firstMessage: string | null;
                presetMessageId: string | null;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            nick_name: string;
            vehicle_type: import("generated/prisma/enums").VehicleType | null;
            vehicle_model: string | null;
            vehicle_color: string | null;
            country: string | null;
            city: string | null;
            gender: import("generated/prisma/enums").Gender | null;
            birth_year: number | null;
            id: string;
            avatar: string | null;
            fcm_token: string | null;
            licence_id: string | null;
            auth_provider: import("generated/prisma/enums").AuthProvider;
            firebase_uid: string | null;
            google_sub: string | null;
            apple_sub: string | null;
            is_more_options_accepted: boolean;
            designation: string | null;
            is_blocked: boolean;
            is_deleted: boolean;
            email_verified: boolean;
            license_no_verified: boolean;
            account_type: import("generated/prisma/enums").AccountType;
            qr_code: string | null;
            is_vehicle_verified: boolean;
            is_vehicle_ownership_document_submitted: boolean;
            role: UserRole;
            parking_notifications_available: number;
            parking_reports_submitted: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        totalUsers: number;
    }>;
    getPreviouslyMessagedUsers(request: Request, paginationDto: PaginationDto): Promise<{
        previouslyMessagedUsers: {
            lastMessage: {
                message: string;
                createdAt: Date;
                is_read: boolean;
                is_mine: boolean;
            } | null;
            isBlockedByMe: boolean;
            isBLockedMe: boolean;
            isOnline: boolean;
            lastSeenAt: string | Date | null;
            nick_name: string;
            id: string;
            avatar: string | null;
            licence_id: string | null;
        }[];
        totalChatRooms: number;
    }>;
    updateUser(request: Request, updateUserDto: UpdateUserDto, file?: Express.Multer.File): Promise<UserResponseDto>;
    changePassword(request: Request, changePasswordDto: ChangePasswordDto): Promise<UserResponseDto>;
    forgetPassword(forgetPasswordDto: ForgetPasswordDto): Promise<{
        message: string;
    }>;
    verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        message: string;
        otp_verification_token: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    getAllUsers(paginationDto: PaginationDto): Promise<{
        users: {
            nick_name: string;
            name: string | null;
            vehicle_type: import("generated/prisma/enums").VehicleType | null;
            vehicle_model: string | null;
            vehicle_color: string | null;
            country: string | null;
            city: string | null;
            gender: import("generated/prisma/enums").Gender | null;
            birth_year: number | null;
            id: string;
            email: string;
            avatar: string | null;
            fcm_token: string | null;
            licence_id: string | null;
            auth_provider: import("generated/prisma/enums").AuthProvider;
            firebase_uid: string | null;
            google_sub: string | null;
            apple_sub: string | null;
            is_more_options_accepted: boolean;
            designation: string | null;
            is_blocked: boolean;
            is_deleted: boolean;
            email_verified: boolean;
            license_no_verified: boolean;
            account_type: import("generated/prisma/enums").AccountType;
            qr_code: string | null;
            is_vehicle_verified: boolean;
            is_vehicle_ownership_document_submitted: boolean;
            role: UserRole;
            parking_notifications_available: number;
            parking_reports_submitted: number;
            lastSeenAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        totalUsers: number;
    }>;
    blockUnblockAccount(blockUnblockDto: BlockUnblockDto): Promise<UserResponseDto>;
    blockUser(request: Request, toggleBlockuser: TogggleBlockUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        blocked_user_id: string;
    }>;
    getUserBlockList(request: Request, pagination: PaginationDto): Promise<{
        blockList: ({
            blocked_user: {
                nick_name: string;
                id: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            user_id: string;
            blocked_user_id: string;
        })[];
        totalBlockedUsers: number;
    }>;
    unBlockUser(request: Request, toggleBlockuser: TogggleBlockUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        user_id: string;
        blocked_user_id: string;
    }>;
    deleteAccount(request: Request, deleteAccountDto: DeleteAccountDto): Promise<{
        message: string;
    }>;
    helpSupport(): Promise<{
        message: string;
    }>;
    getQrCodeForUser(request: Request): Promise<{
        qr_code: string;
    }>;
    getQrCard(request: Request, res: any): Promise<void>;
    scanQrCode(request: Request, scanQrCodeDto: ScanQrCodeDto): Promise<{
        roomId: string;
        user: {
            nick_name: string;
            id: string;
            avatar: string | null;
            licence_id: string | null;
            is_blocked: boolean;
        };
        isExistingChat: boolean;
    } | {
        user: {
            nick_name: string;
            id: string;
            avatar: string | null;
            licence_id: string | null;
            is_blocked: boolean;
        };
        isExistingChat: boolean;
        roomId?: undefined;
    }>;
    getUsersPresence(userIds: string): Promise<{
        users: {
            userId: string;
            isOnline: boolean;
            lastSeenAt: string | Date | null;
        }[];
    }>;
    getUserProfile(userId: string): Promise<{
        age: number | null;
        rating: number;
        totalRating: number;
        totalRatings: number;
        nick_name: string;
        name: string | null;
        vehicle_type: import("generated/prisma/enums").VehicleType | null;
        vehicle_model: string | null;
        vehicle_color: string | null;
        country: string | null;
        city: string | null;
        gender: import("generated/prisma/enums").Gender | null;
        birth_year: number | null;
        id: string;
        email: string;
        avatar: string | null;
        fcm_token: string | null;
        licence_id: string | null;
        auth_provider: import("generated/prisma/enums").AuthProvider;
        firebase_uid: string | null;
        google_sub: string | null;
        apple_sub: string | null;
        is_more_options_accepted: boolean;
        designation: string | null;
        is_blocked: boolean;
        is_deleted: boolean;
        email_verified: boolean;
        license_no_verified: boolean;
        account_type: import("generated/prisma/enums").AccountType;
        qr_code: string | null;
        is_vehicle_verified: boolean;
        is_vehicle_ownership_document_submitted: boolean;
        role: UserRole;
        parking_notifications_available: number;
        parking_reports_submitted: number;
        lastSeenAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUserLocation(request: Request, updateUserLocationDto: UpdateUserLocationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        latitude: number;
        longitude: number;
        accuracy: number | null;
    }>;
    verifyUserLicense(request: Request, verifyLicenseDto: VerifyLicenseDto): Promise<UserResponseDto>;
    addVehicleInfo(addVehicleInfoDto: AddVehicleInfoDto, request: Request): Promise<UserResponseDto>;
    updateVehicleInfo(updateVehicleInfoDto: UpdateVehicleInfoDto, request: Request): Promise<UserResponseDto>;
}
