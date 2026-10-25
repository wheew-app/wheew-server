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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const class_transformer_1 = require("class-transformer");
const user_response_dto_1 = require("./dtos/user-response.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const change_password_dto_1 = require("./dtos/change-password.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const search_users_dto_1 = require("./dtos/search-users.dto");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
const reset_password_dto_1 = require("./dtos/reset-password.dto");
const verify_otp_dto_1 = require("./dtos/verify-otp.dto");
const forget_password_dto_1 = require("./dtos/forget-password.dto");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const enums_1 = require("../../../generated/prisma/enums");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const block_unblock_dto_1 = require("./dtos/block-unblock.dto");
const block_user_dto_1 = require("./dtos/block-user.dto");
const delete_account_dto_1 = require("./dtos/delete-account.dto");
const scan_qr_code_dto_1 = require("./dtos/scan-qr-code.dto");
const update_user_location_dto_1 = require("./dtos/update-user-location.dto");
const verify_license_dto_1 = require("./dtos/verify-license.dto");
const add_vehicle_info_dto_1 = require("./dtos/add-vehicle-info.dto");
const update_vehicle_info_dto_1 = require("./dtos/update-vehicle-info.dto");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async searchUsers(searchDto, req) {
        const tokenPayload = req['payload'];
        if (searchDto.for === "group" || searchDto.roomId) {
            const paginationDto = new pagination_dto_1.PaginationDto();
            paginationDto.page = searchDto.page;
            paginationDto.limit = searchDto.limit;
            const users = await this.userService.searchUsersToAddToGroup(searchDto.roomId, tokenPayload.id, searchDto.query, paginationDto);
            return users.users.map(user => (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, user, {
                excludeExtraneousValues: true,
                groups: [enums_1.UserRole.USER]
            }));
        }
        const users = await this.userService.searchUsers(tokenPayload.id, searchDto.query, searchDto.page, searchDto.limit);
        return users;
    }
    async getPreviouslyMessagedUsers(request, paginationDto) {
        const tokenPayload = request['payload'];
        const users = await this.userService.getPreviouslyMessagedUsers(tokenPayload.id, paginationDto.page, paginationDto.limit);
        return users;
    }
    async updateUser(request, updateUserDto, file) {
        const tokenPayload = request['payload'];
        console.log(updateUserDto);
        const updatedResult = await this.userService.updateUser(tokenPayload.id, updateUserDto, file);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, updatedResult, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER]
        });
    }
    async changePassword(request, changePasswordDto) {
        const tokenPayload = request['payload'];
        const changePasswordResult = await this.userService.changePassword(tokenPayload.id, changePasswordDto);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, changePasswordResult, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER]
        });
    }
    async forgetPassword(forgetPasswordDto) {
        const forgetPasswordResult = await this.userService.forgetPassword(forgetPasswordDto.email);
        return forgetPasswordResult;
    }
    async verifyOtp(verifyOtpDto) {
        const verifiedResult = await this.userService.verifyOtp(verifyOtpDto.email, verifyOtpDto.otp);
        return verifiedResult;
    }
    async resetPassword(resetPasswordDto) {
        const resetPasswordResult = await this.userService.resetPassword(resetPasswordDto.email, resetPasswordDto.password, resetPasswordDto.token);
        return resetPasswordResult;
    }
    async getAllUsers(paginationDto) {
        const allUsers = await this.userService.getAllUsers(paginationDto.page, paginationDto.limit);
        return allUsers;
    }
    async blockUnblockAccount(blockUnblockDto) {
        const updatedUser = await this.userService.blockUnblockAccountByAdmin(blockUnblockDto.userId);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, updatedUser, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN]
        });
    }
    async blockUser(request, toggleBlockuser) {
        const payload = request['payload'];
        const updatedUser = await this.userService.blockUser(toggleBlockuser.userId, payload.id);
        return updatedUser;
    }
    async getUserBlockList(request, pagination) {
        const payload = request['payload'];
        const blockList = await this.userService.getBlockedUsers(payload.id, pagination);
        return blockList;
    }
    async unBlockUser(request, toggleBlockuser) {
        const payload = request['payload'];
        const updatedUser = await this.userService.unblockUser(toggleBlockuser.userId, payload.id);
        return updatedUser;
    }
    async deleteAccount(request, deleteAccountDto) {
        const payload = request['payload'];
        await this.userService.deleteAccount(payload.id, deleteAccountDto.password);
        return { message: "Account deleted successfully" };
    }
    async helpSupport() {
        const helpMessage = await this.userService.helpAndSupport();
        return { message: helpMessage };
    }
    async getQrCodeForUser(request) {
        const payload = request['payload'];
        const qrcode = await this.userService.generateQrCodeForUser(payload.id);
        return { qr_code: qrcode };
    }
    async getQrCard(request, res) {
        const payload = request['payload'];
        const user = await this.userService.findUserById(payload.id);
        if (!user) {
            res.status(444).send("User not found");
            return;
        }
        const qrcode = await this.userService.generateQrCodeForUser(payload.id);
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>PLATEChatter QR Card - ${user.nick_name}</title>
            <style>
                body {
                    font-family: 'Outfit', 'Inter', sans-serif;
                    background-color: #f3f4f6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    text-align: center;
                    width: 320px;
                    border: 1px solid #f3f4f6;
                    position: relative;
                }
                .logo-container {
                    margin-bottom: 25px;
                }
                .logo {
                    font-size: 24px;
                    font-weight: 800;
                    color: #4F46E5;
                    letter-spacing: -0.05em;
                }
                .logo span {
                    color: #111827;
                }
                .qr-image {
                    width: 200px;
                    height: 200px;
                    margin: 0 auto 25px auto;
                    display: block;
                    border: 1px solid #f3f4f6;
                    border-radius: 12px;
                    padding: 10px;
                    background: #fff;
                }
                .username {
                    font-size: 20px;
                    font-weight: 700;
                    color: #111827;
                    margin: 0 0 5px 0;
                }
                .license-plate {
                    font-size: 14px;
                    color: #6b7280;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }
                .print-btn {
                    margin-top: 30px;
                    background-color: #4F46E5;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .print-btn:hover {
                    background-color: #4338CA;
                }
                @media print {
                    body {
                        background-color: white;
                    }
                    .card {
                        box-shadow: none;
                        border: none;
                    }
                    .print-btn {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="logo-container">
                    <div class="logo">WHEEW</span></div>
                </div>
                <img class="qr-image" src="${qrcode}" alt="QR Code" />
                <div class="username">@${user.nick_name}</div>
                <div class="license-plate">Plate: ${user.licence_id || 'N/A'}</div>
            </div>
        </body>
        </html>
        `;
        res.setHeader('Content-Type', 'text/html');
        res.send(htmlContent);
    }
    async scanQrCode(request, scanQrCodeDto) {
        const payload = request['payload'];
        const userInfo = await this.userService.getUserInfoFromQrCode(payload.id, scanQrCodeDto.qrData);
        return userInfo;
    }
    async getUsersPresence(userIds) {
        const parsedUserIds = (userIds || "")
            .split(",")
            .map((userId) => userId.trim())
            .filter(Boolean);
        return this.userService.getUsersPresence(parsedUserIds);
    }
    async getUserProfile(userId) {
        const userProfile = await this.userService.getUserProfile(userId);
        return userProfile;
    }
    async updateUserLocation(request, updateUserLocationDto) {
        const tokenPayload = request['payload'];
        const updatedLocation = await this.userService.updateUserLocation(tokenPayload.id, updateUserLocationDto.latitude, updateUserLocationDto.longitude, updateUserLocationDto.accuracy);
        return updatedLocation;
    }
    async verifyUserLicense(request, verifyLicenseDto) {
        const tokenPayload = request['payload'];
        const updatedUser = await this.userService.verifyUserLicense(tokenPayload.id, verifyLicenseDto.plate_no);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, updatedUser, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER],
        });
    }
    async addVehicleInfo(addVehicleInfoDto, request) {
        const tokenPayload = request['payload'];
        const updatedUser = await this.userService.addVehicleInfo(tokenPayload.id, addVehicleInfoDto);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, updatedUser, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER],
        });
    }
    async updateVehicleInfo(updateVehicleInfoDto, request) {
        const tokenPayload = request['payload'];
        const updatedUser = await this.userService.updateVehicleInfo(tokenPayload.id, updateVehicleInfoDto);
        return (0, class_transformer_1.plainToInstance)(user_response_dto_1.UserResponseDto, updatedUser, {
            excludeExtraneousValues: true,
            groups: [enums_1.UserRole.ADMIN, enums_1.UserRole.USER],
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)("search"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Users found successfully"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_users_dto_1.SearchUsersDto, Request]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchUsers", null);
__decorate([
    (0, common_1.Get)("previously-messaged"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Previously messaged users fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPreviouslyMessagedUsers", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("avatar", {
        limits: { files: 1 },
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads/users",
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const [_, ext] = file.originalname.split(".");
                cb(null, `avatar_${uuid}.${ext}`);
            }
        })
    })),
    (0, common_1.Patch)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User updated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)("change-password"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Password updated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)("forget-password"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("OTP sent successfully"),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forget_password_dto_1.ForgetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)("verify-otp"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("OTP verified successfully"),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)("reset-password"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Password reset successfully"),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Users fetched successfully"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Patch)("toggole-block"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User block status updated"),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [block_unblock_dto_1.BlockUnblockDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "blockUnblockAccount", null);
__decorate([
    (0, common_1.Patch)("block"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, block_user_dto_1.TogggleBlockUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "blockUser", null);
__decorate([
    (0, common_1.Get)("block-list"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserBlockList", null);
__decorate([
    (0, common_1.Patch)("unblock"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, block_user_dto_1.TogggleBlockUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "unBlockUser", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, delete_account_dto_1.DeleteAccountDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Get)("help-support"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "helpSupport", null);
__decorate([
    (0, common_1.Get)("generate-code"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getQrCodeForUser", null);
__decorate([
    (0, common_1.Get)("qr-card"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getQrCard", null);
__decorate([
    (0, common_1.Post)("scan-qr-code"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User info fetched successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, scan_qr_code_dto_1.ScanQrCodeDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "scanQrCode", null);
__decorate([
    (0, common_1.Get)("presence"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User presence fetched successfully"),
    __param(0, (0, common_1.Query)("userIds")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersPresence", null);
__decorate([
    (0, common_1.Get)(":id/profile"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User profile fetched successfully"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Post)("location"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("User location updated successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, update_user_location_dto_1.UpdateUserLocationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserLocation", null);
__decorate([
    (0, common_1.Post)("verify-license"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("License verified successfully"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, verify_license_dto_1.VerifyLicenseDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyUserLicense", null);
__decorate([
    (0, common_1.Post)("vehicle"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Vehicle information added successfully"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_vehicle_info_dto_1.AddVehicleInfoDto,
        Request]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addVehicleInfo", null);
__decorate([
    (0, common_1.Patch)("vehicle"),
    (0, apiResponseMessage_decorator_1.ResponseMessage)("Vehicle information updated successfully"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_vehicle_info_dto_1.UpdateVehicleInfoDto,
        Request]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateVehicleInfo", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)({
        path: "users",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map