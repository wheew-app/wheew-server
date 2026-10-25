"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const encoder_provider_1 = require("../../common/providres/encoder.provider");
const client_1 = require("../../../generated/prisma/client");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
const fs = __importStar(require("fs"));
const chat_service_1 = require("../chat/chat.service");
const emailVerification_template_1 = __importDefault(require("../../common/templates/emailVerification.template"));
const qrCodeGenerator_provider_1 = require("./providers/qrCodeGenerator.provider");
const rating_service_1 = require("../rating/rating.service");
const socket_room_service_1 = require("../chat/services/socket-room.service");
let UserService = class UserService {
    prismaService;
    encoder;
    smtpProvider;
    chatService;
    qrCodeGenerator;
    ratingService;
    socketRoomService;
    constructor(prismaService, encoder, smtpProvider, chatService, qrCodeGenerator, ratingService, socketRoomService) {
        this.prismaService = prismaService;
        this.encoder = encoder;
        this.smtpProvider = smtpProvider;
        this.chatService = chatService;
        this.qrCodeGenerator = qrCodeGenerator;
        this.ratingService = ratingService;
        this.socketRoomService = socketRoomService;
    }
    async addUser(createUserDto) {
        const hashedPassword = await this.encoder.hashPassword(createUserDto.password, 10);
        const user = await this.prismaService.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
                is_more_options_accepted: createUserDto.is_more_options_accepted
            }
        });
        return user;
    }
    async getAllUsers(page, limit) {
        const skip = (page - 1) * limit;
        const totalUsers = await this.prismaService.user.count({ where: { role: client_1.UserRole.USER } });
        const users = await this.prismaService.user.findMany({ where: { role: client_1.UserRole.USER }, skip, take: limit, omit: { password: true, otp: true, otp_expires: true, otp_verification_token: true }, orderBy: { createdAt: "desc" } });
        return { users, totalUsers };
    }
    async findUserById(userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        return user;
    }
    async updateLastSeenAt(userId, lastSeenAt = new Date()) {
        return this.prismaService.user.update({
            where: { id: userId },
            data: { lastSeenAt },
            select: { id: true, lastSeenAt: true },
        });
    }
    async findUserByIdentifier(identifier) {
        const user = await this.prismaService.user.findFirst({
            where: {
                licence_id: identifier,
                is_deleted: false
            }
        });
        if (!user) {
            const userByNickName = await this.prismaService.user.findFirst({
                where: {
                    OR: [
                        { nick_name: identifier },
                        { email: identifier }
                    ]
                }
            });
            return userByNickName;
        }
        return user;
    }
    async findAdminByEmail(email) {
        const user = await this.prismaService.user.findFirst({
            where: {
                email,
                role: client_1.UserRole.ADMIN
            }
        });
        return user;
    }
    async searchUsers(userId, query, page, limit) {
        const declinedRequests = await this.prismaService.messageRequest.findMany({
            where: {
                senderId: userId,
                status: 'DECLINED',
            },
            select: {
                receiverId: true,
            },
        });
        const declinedReceiverIds = declinedRequests.map((request) => request.receiverId);
        const totalUsers = await this.prismaService.user.count({
            where: {
                NOT: { is_blocked: true },
                role: { not: client_1.UserRole.ADMIN },
                blockListsBy: {
                    none: {
                        user_id: userId
                    }
                },
                blockLists: {
                    none: {
                        blocked_user_id: userId
                    }
                },
                id: {
                    notIn: [userId, ...declinedReceiverIds],
                },
                OR: [
                    { nick_name: { contains: query, mode: "insensitive" } },
                    { licence_id: { contains: query, mode: "insensitive" } }
                ],
            },
        });
        const users = await this.prismaService.user.findMany({
            where: {
                NOT: { is_blocked: true },
                blockListsBy: {
                    none: {
                        user_id: userId
                    }
                },
                blockLists: {
                    none: {
                        blocked_user_id: userId
                    }
                },
                id: {
                    notIn: [userId, ...declinedReceiverIds],
                },
                OR: [
                    { nick_name: { contains: query, mode: "insensitive" } },
                    { licence_id: { contains: query, mode: "insensitive" } }
                ],
            },
            take: limit,
            skip: (page - 1) * limit,
            omit: { password: true, otp: true, otp_expires: true, otp_verification_token: true, name: true, email: true }
        });
        const receiverIds = users.map((user) => user.id);
        const sentMessageRequests = await this.prismaService.messageRequest.findMany({
            where: {
                senderId: userId,
                receiverId: { in: receiverIds },
            },
            orderBy: { createdAt: 'desc' },
        });
        const messageRequestByReceiverId = new Map(sentMessageRequests.map((request) => [request.receiverId, request]));
        const presenceByUserId = this.socketRoomService.getPresenceMap(users);
        const mappedUsers = users.map(async (user) => {
            const existingRoom = await this.chatService.getChatRoomIfExist(userId, user.id);
            const messageRequest = messageRequestByReceiverId.get(user.id) ?? null;
            const presence = presenceByUserId.get(user.id);
            return {
                ...user,
                age: this.calculateAge(user.birth_year),
                isOnline: presence?.isOnline ?? false,
                lastSeenAt: presence?.lastSeenAt ?? user.lastSeenAt ?? null,
                existingRoom,
                isMessageRequestSent: Boolean(messageRequest),
                messageRequest: messageRequest ? {
                    id: messageRequest.id,
                    status: messageRequest.status,
                    receiverId: messageRequest.receiverId,
                    roomId: messageRequest.roomId,
                    firstMessage: messageRequest.firstMessage,
                    presetMessageId: messageRequest.presetMessageId,
                    createdAt: messageRequest.createdAt,
                    updatedAt: messageRequest.updatedAt,
                } : null,
            };
        });
        const awaitedusers = await Promise.all(mappedUsers);
        return { users: awaitedusers, totalUsers };
    }
    async getPreviouslyMessagedUsers(userId, page, limit) {
        const skip = (page - 1) * limit;
        const totalChatRooms = await this.prismaService.chatRoom.count({
            where: {
                OR: [
                    { user1_id: userId },
                    { user2_id: userId }
                ]
            }
        });
        const chatRooms = await this.prismaService.chatRoom.findMany({
            where: {
                OR: [
                    { user1_id: userId },
                    { user2_id: userId }
                ]
            },
            include: {
                user1: {
                    select: {
                        id: true,
                        nick_name: true,
                        licence_id: true,
                        avatar: true,
                        lastSeenAt: true
                    }
                },
                user2: {
                    select: {
                        id: true,
                        nick_name: true,
                        licence_id: true,
                        avatar: true,
                        lastSeenAt: true
                    }
                },
                chats: {
                    orderBy: { createdAt: "desc" },
                    take: 1,
                    select: {
                        message: true,
                        createdAt: true,
                        is_read: true,
                        sender_id: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            },
            skip,
            take: limit
        });
        const previouslyMessagedUsers = await Promise.all(chatRooms.map(async (room) => {
            const otherUser = room.user1_id === userId ? room.user2 : room.user1;
            const lastMessage = room.chats[0];
            const blockStatus = await this.checkBlockStatus(userId, otherUser.id);
            const isBlockedByMe = blockStatus?.user_id === userId;
            const isBLockedMe = blockStatus?.blocked_user_id === otherUser.id;
            return {
                ...otherUser,
                ...this.buildPresenceFields(otherUser),
                lastMessage: lastMessage ? {
                    message: lastMessage.message,
                    createdAt: lastMessage.createdAt,
                    is_read: lastMessage.is_read,
                    is_mine: lastMessage.sender_id === userId
                } : null,
                isBlockedByMe,
                isBLockedMe
            };
        }));
        return { previouslyMessagedUsers, totalChatRooms };
    }
    async getUsersPresence(userIds) {
        const uniqueUserIds = [...new Set(userIds.filter(Boolean))];
        const users = await this.prismaService.user.findMany({
            where: { id: { in: uniqueUserIds } },
            select: { id: true, lastSeenAt: true },
        });
        const presenceByUserId = this.socketRoomService.getPresenceMap(users);
        return {
            users: uniqueUserIds.map((userId) => {
                const presence = presenceByUserId.get(userId);
                return presence ?? { userId, isOnline: false, lastSeenAt: null };
            }),
        };
    }
    async updateUser(userId, updateUserDto, file) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (file) {
            if (user.avatar) {
                this.deletePreviousAvatar(user.avatar);
            }
        }
        const updatedData = {
            nick_name: updateUserDto.nick_name ?? user.nick_name,
            name: updateUserDto.name ?? user.name,
            avatar: (file && file.path) ?? user.avatar,
            gender: updateUserDto.gender !== undefined ? updateUserDto.gender : user.gender,
            birth_year: updateUserDto.birth_year !== undefined ? updateUserDto.birth_year : user.birth_year,
            vehicle_type: updateUserDto.vehicle_type !== undefined ? updateUserDto.vehicle_type : user.vehicle_type,
            vehicle_model: updateUserDto.vehicle_model !== undefined ? updateUserDto.vehicle_model : user.vehicle_model,
            vehicle_color: updateUserDto.vehicle_color !== undefined ? updateUserDto.vehicle_color : user.vehicle_color,
            country: updateUserDto.country !== undefined ? updateUserDto.country : user.country,
            city: updateUserDto.city !== undefined ? updateUserDto.city : user.city,
        };
        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: updatedData
        });
        return updatedUser;
    }
    async deletePreviousAvatar(avatar) {
        try {
            if (avatar) {
                fs.unlinkSync(avatar);
                console.log("Old avatar deleted successfully");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async changePassword(userId, changePasswordDto) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.password) {
            throw new common_1.BadRequestException("This account does not have a password. Please use social sign in.");
        }
        if (changePasswordDto.newPassword !== changePasswordDto.confirmPassword) {
            throw new common_1.BadRequestException("New password and confirm password do not match");
        }
        const passwordMatched = await this.encoder.compare(changePasswordDto.currentPassword, user.password);
        if (!passwordMatched) {
            throw new common_1.BadRequestException("Incorrect current password");
        }
        const samePasswordCheck = await this.encoder.compare(changePasswordDto.newPassword, user.password);
        if (samePasswordCheck) {
            throw new common_1.BadRequestException("You recently used this password");
        }
        const hashedPassword = await this.encoder.hashPassword(changePasswordDto.newPassword, 10);
        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: { password: hashedPassword }
        });
        return updatedUser;
    }
    async forgetPassword(email) {
        const user = await this.prismaService.user.findFirst({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        await this.prismaService.user.update({
            where: { id: user.id },
            data: { otp, otp_expires: otpExpires }
        });
        try {
            await this.smtpProvider.sendMail(email, "OTP for password reset", (0, emailVerification_template_1.default)({ name: user.nick_name, otp }));
        }
        catch (err) {
            console.log(err);
        }
        return { message: "OTP sent successfully" };
    }
    async verifyOtp(email, otp) {
        const user = await this.prismaService.user.findFirst({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user.otp && user.otp !== otp) {
            throw new common_1.BadRequestException("Invalid OTP");
        }
        if (user.otp_expires && user.otp_expires < new Date()) {
            throw new common_1.BadRequestException("OTP expired");
        }
        const otpVerificationToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        await this.prismaService.user.update({
            where: { id: user.id },
            data: { otp: null, otp_expires: null, otp_verification_token: otpVerificationToken }
        });
        return { message: "OTP verified successfully", otp_verification_token: otpVerificationToken };
    }
    async resetPassword(email, password, token) {
        const user = await this.prismaService.user.findFirst({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user.otp_verification_token && user.otp_verification_token !== token) {
            throw new common_1.BadRequestException("Invalid token");
        }
        const hashedPassword = await this.encoder.hashPassword(password, 10);
        await this.prismaService.user.update({
            where: { id: user.id },
            data: { password: hashedPassword, otp_verification_token: null }
        });
        return { message: "Password reset successfully" };
    }
    async sendOtpToEmail(email) {
        const user = await this.prismaService.user.findFirst({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        await this.prismaService.user.update({
            where: { id: user.id },
            data: { otp, otp_expires: otpExpires }
        });
        this.smtpProvider.sendMail(email, "OTP for password reset", (0, emailVerification_template_1.default)({ otp }));
        return { message: "OTP sent successfully" };
    }
    async blockUnblockAccountByAdmin(userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.BadRequestException("User not found!");
        }
        const updatedUser = await this.prismaService.user.update({ where: { id: user.id }, data: { is_blocked: !user.is_blocked } });
        return updatedUser;
    }
    async blockUser(blockedUserId, userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user.id === blockedUserId) {
            throw new common_1.BadRequestException("You cannot block yourself");
        }
        const isBlocked = await this.checkBlockStatus(user.id, blockedUserId);
        if (isBlocked) {
            throw new common_1.BadRequestException("You have already blocked this user");
        }
        const blockList = await this.prismaService.blockList.create({
            data: {
                user_id: user.id,
                blocked_user_id: blockedUserId
            }
        });
        return blockList;
    }
    async unblockUser(blockedUserId, userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const blockList = await this.prismaService.blockList.findUnique({
            where: {
                user_id_blocked_user_id: {
                    user_id: user.id,
                    blocked_user_id: blockedUserId
                }
            }
        });
        if (!blockList) {
            throw new common_1.BadRequestException("You have not blocked this user");
        }
        await this.prismaService.blockList.delete({
            where: {
                user_id_blocked_user_id: {
                    user_id: user.id,
                    blocked_user_id: blockedUserId
                }
            }
        });
        return blockList;
    }
    async getBlockedUsers(userId, pagination) {
        const { page, limit } = pagination;
        const skip = (page - 1) * limit;
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const blockList = await this.prismaService.blockList.findMany({
            skip,
            take: limit,
            where: {
                user_id: user.id
            },
            include: {
                blocked_user: { select: { id: true, nick_name: true, avatar: true } },
            }
        });
        const totalBlockedUsers = await this.prismaService.blockList.count({
            where: {
                user_id: user.id
            }
        });
        return {
            blockList,
            totalBlockedUsers
        };
    }
    async checkBlockStatus(userId, blockedUserId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const blockList = await this.prismaService.blockList.findUnique({
            where: {
                user_id_blocked_user_id: {
                    user_id: user.id,
                    blocked_user_id: blockedUserId
                }
            }
        });
        return blockList;
    }
    async deleteAccount(userId, password) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.password) {
            throw new common_1.BadRequestException("This account does not have a password. Please use social sign in.");
        }
        const passwordMatched = await this.encoder.compare(password, user.password);
        if (!passwordMatched) {
            throw new common_1.BadRequestException("Invalid password");
        }
        return await this.prismaService.user.update({
            where: { id: userId },
            data: { is_deleted: true }
        });
    }
    async helpAndSupport() {
        return "support@platechat.app";
    }
    async findUserByEmail(email) {
        const user = await this.prismaService.user.findFirst({ where: { email: email } });
        return user;
    }
    async generateUserLink(userId) {
        return userId;
    }
    async generateQrCodeForUser(userId) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user.qr_code) {
            return user.qr_code;
        }
        const link = await this.generateUserLink(userId);
        const qrcode = await this.qrCodeGenerator.generateQrCode(link);
        await this.prismaService.user.update({
            where: { id: userId },
            data: { qr_code: qrcode }
        });
        return qrcode;
    }
    async getUserInfoFromQrCode(currentUserId, qrData) {
        const scannedUserId = qrData.trim();
        if (currentUserId === scannedUserId) {
            throw new common_1.BadRequestException("You cannot start a chat with yourself");
        }
        const scannedUser = await this.prismaService.user.findUnique({
            where: { id: scannedUserId },
            select: {
                id: true,
                nick_name: true,
                avatar: true,
                licence_id: true,
                is_blocked: true
            }
        });
        if (!scannedUser) {
            throw new common_1.NotFoundException("User not found");
        }
        const rating = await this.ratingService.getAverageRatingForUser(scannedUserId);
        Object.assign(scannedUser, {
            rating: rating.averageRating,
            totalRating: rating.totalRatings,
            totalRatings: rating.totalRatings
        });
        if (scannedUser.is_blocked) {
            throw new common_1.BadRequestException("This user account has been blocked");
        }
        const existingRoom = await this.chatService.getChatRoomIfExist(currentUserId, scannedUserId);
        if (existingRoom) {
            return {
                roomId: existingRoom.id,
                user: scannedUser,
                isExistingChat: true
            };
        }
        return {
            user: scannedUser,
            isExistingChat: false
        };
    }
    async getUserProfile(userId) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            omit: { password: true, otp: true, otp_expires: true, otp_verification_token: true }
        });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const ratingData = await this.ratingService.getAverageRatingForUser(userId);
        return {
            ...user,
            age: this.calculateAge(user.birth_year),
            rating: ratingData.averageRating,
            totalRating: ratingData.totalRatings,
            totalRatings: ratingData.totalRatings
        };
    }
    async getUsersForAddingToGroup(groupChatRoomId, userId, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const [users, total] = await Promise.all([
            this.prismaService.user.findMany({
                where: {
                    NOT: {
                        groupChatRooms: {
                            some: {
                                groupChatRoom_id: groupChatRoomId,
                            },
                        },
                    },
                },
                select: {
                    id: true,
                    nick_name: true,
                    avatar: true,
                    gender: true,
                    birth_year: true,
                    lastSeenAt: true,
                },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.user.count({
                where: {
                    NOT: {
                        groupChatRooms: {
                            some: {
                                groupChatRoom_id: groupChatRoomId,
                            },
                        },
                    },
                },
            }),
        ]);
        return {
            users: users.map((user) => ({
                ...user,
                age: this.calculateAge(user.birth_year),
                ...this.buildPresenceFields(user),
            })),
            total,
        };
    }
    async searchUsersToAddToGroup(groupChatRoomId, userId, query, paginationDto) {
        const membership = await this.prismaService.groupChatRoomMember.findFirst({
            where: {
                groupChatRoom_id: groupChatRoomId,
                user_id: userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('You are not a member of this group');
        }
        const skip = (paginationDto.page - 1) * paginationDto.limit;
        const searchUserWhere = {
            role: client_1.UserRole.USER,
            NOT: {
                groupChatRooms: {
                    some: {
                        groupChatRoom_id: groupChatRoomId,
                    },
                },
            },
            OR: [
                { nick_name: { contains: query, mode: 'insensitive' } },
                { email: { contains: query, mode: 'insensitive' } },
            ],
        };
        const [users, total] = await Promise.all([
            this.prismaService.user.findMany({
                where: searchUserWhere,
                select: {
                    id: true,
                    nick_name: true,
                    avatar: true,
                    gender: true,
                    birth_year: true,
                },
                skip,
                take: paginationDto.limit,
            }),
            this.prismaService.user.count({
                where: searchUserWhere
            }),
        ]);
        return {
            users: users.map((user) => ({
                ...user,
                age: this.calculateAge(user.birth_year),
            })),
            total,
        };
    }
    async updateUserLocation(userId, latitude, longitude, accuracy) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const existingLocation = await this.prismaService.userLocation.findUnique({
            where: { userId }
        });
        if (existingLocation) {
            return await this.prismaService.userLocation.update({
                where: { userId },
                data: {
                    latitude,
                    longitude,
                    accuracy
                }
            });
        }
        else {
            return await this.prismaService.userLocation.create({
                data: {
                    userId,
                    latitude,
                    longitude,
                    accuracy
                }
            });
        }
    }
    async verifyUserLicense(userId, plateNo) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.licence_id) {
            throw new common_1.BadRequestException("No license ID is registered for this user");
        }
        console.log(plateNo, user.licence_id);
        if (user.licence_id.trim().toLowerCase() !== plateNo.trim().toLowerCase()) {
            throw new common_1.BadRequestException("License plate number does not match your registered license ID");
        }
        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: { license_no_verified: true },
        });
        return updatedUser;
    }
    async addVehicleInfo(userId, addVehicleInfoDto) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                vehicle_type: addVehicleInfoDto.vehicle_type,
                vehicle_model: addVehicleInfoDto.vehicle_model,
                vehicle_color: addVehicleInfoDto.vehicle_color,
            },
        });
        return updatedUser;
    }
    async updateVehicleInfo(userId, updateVehicleInfoDto) {
        const user = await this.prismaService.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const updatedData = {};
        if (updateVehicleInfoDto.vehicle_type !== undefined) {
            updatedData.vehicle_type = updateVehicleInfoDto.vehicle_type;
        }
        if (updateVehicleInfoDto.vehicle_model !== undefined) {
            updatedData.vehicle_model = updateVehicleInfoDto.vehicle_model;
        }
        if (updateVehicleInfoDto.vehicle_color !== undefined) {
            updatedData.vehicle_color = updateVehicleInfoDto.vehicle_color;
        }
        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: updatedData,
        });
        return updatedUser;
    }
    buildPresenceFields(user) {
        const presence = this.socketRoomService.getPresence(user.id, user.lastSeenAt);
        return {
            isOnline: presence.isOnline,
            lastSeenAt: presence.lastSeenAt,
        };
    }
    calculateAge(birthYear) {
        if (!birthYear) {
            return null;
        }
        const currentYear = new Date().getFullYear();
        if (birthYear < 1000 || birthYear > currentYear) {
            return null;
        }
        return currentYear - birthYear;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(6, (0, common_1.Inject)('SOCKET_ROOM_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        encoder_provider_1.EncoderProvider,
        smtp_provider_1.SMTPProvider,
        chat_service_1.ChatService,
        qrCodeGenerator_provider_1.QrCodeGeneratorProvider,
        rating_service_1.RatingService,
        socket_room_service_1.SocketRoomService])
], UserService);
//# sourceMappingURL=user.service.js.map