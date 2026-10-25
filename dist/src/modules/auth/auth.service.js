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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const encoder_provider_1 = require("../../common/providres/encoder.provider");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("../../../generated/prisma/client");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
const jwt_config_1 = __importDefault(require("../../config/jwt.config"));
const firebase_config_1 = __importDefault(require("../../config/firebase.config"));
const apple_config_1 = __importDefault(require("../../config/apple.config"));
const emailVerification_template_1 = __importDefault(require("../../common/templates/emailVerification.template"));
const welcomeEmail_template_1 = __importDefault(require("../../common/templates/welcomeEmail.template"));
const rating_service_1 = require("../rating/rating.service");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const crypto = __importStar(require("crypto"));
const user_document_service_1 = require("../user-document/services/user-document.service");
let AuthService = AuthService_1 = class AuthService {
    userService;
    encoder;
    prismaService;
    jwtService;
    jwtConfigOptions;
    firebaseConfig;
    appleConfig;
    smtpProvider;
    ratingService;
    userDocumentService;
    logger = new common_1.Logger(AuthService_1.name);
    maxAccountsPerLicenceId = 3;
    appleKeysCache;
    constructor(userService, encoder, prismaService, jwtService, jwtConfigOptions, firebaseConfig, appleConfig, smtpProvider, ratingService, userDocumentService) {
        this.userService = userService;
        this.encoder = encoder;
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.jwtConfigOptions = jwtConfigOptions;
        this.firebaseConfig = firebaseConfig;
        this.appleConfig = appleConfig;
        this.smtpProvider = smtpProvider;
        this.ratingService = ratingService;
        this.userDocumentService = userDocumentService;
    }
    async signin(signInDto) {
        const user = await this.userService.findUserByIdentifier(signInDto.identifier);
        if (!user) {
            throw new common_1.NotFoundException("No account found with this identifier!");
        }
        if (user.is_blocked) {
            throw new common_1.BadRequestException("Your account has been blocked. Please contact support for assistance.");
        }
        if (user.is_deleted) {
            throw new common_1.BadRequestException("Your account has been deleted. If you think this is a mistake, please contact support.");
        }
        if (!user.password) {
            throw new common_1.BadRequestException(`This account uses ${this.formatAuthProvider(user.auth_provider)} sign in. Please sign in with ${this.formatAuthProvider(user.auth_provider)}.`);
        }
        if (!(await this.comparePassword(signInDto.password, user.password))) {
            throw new common_1.BadRequestException("Invalid credentials!");
        }
        const token = await this.signJwtToken(user);
        this.logger.log(`${user.nick_name ?? user.name} logged in.`);
        if (signInDto.fcm_token) {
            await this.prismaService.user.update({
                where: { id: user.id },
                data: {
                    fcm_token: signInDto.fcm_token
                }
            });
        }
        return { ...user, token };
    }
    async signJwtToken(user) {
        const payload = {
            id: user.id,
            role: user.role,
            ...(user.role === client_1.UserRole.ADMIN
                ? { email: user.email, name: user.name }
                : { licence_id: user.licence_id, nick_name: user.nick_name })
        };
        return await this.jwtService.signAsync(payload, {
            expiresIn: this.jwtConfigOptions.expires_in || "90d",
            secret: this.jwtConfigOptions.jwt_secret
        });
    }
    async registerUser(registerUserDto) {
        await this.assertNickNameAvailable(registerUserDto.nick_name);
        const existingEmail = await this.prismaService.user.findUnique({
            where: { email: registerUserDto.email }
        });
        if (existingEmail) {
            throw new common_1.ConflictException('This email is already associated with an email. Kindly try another email.');
        }
        await this.assertLicenceIdAvailable(registerUserDto.licence_id);
        if (registerUserDto.password !== registerUserDto.confirmPassword) {
            throw new common_1.BadRequestException("Password and confirm password do not match");
        }
        const { confirmPassword, ...userData } = registerUserDto;
        const user = await this.userService.addUser(userData);
        try {
            await this.smtpProvider.sendMail(user.email, "Welcome to PLATEChatter", (0, welcomeEmail_template_1.default)({ name: user.name || user.nick_name || "User" }));
        }
        catch (err) {
            console.log(err);
        }
        const token = await this.signJwtToken(user);
        return { ...user, token };
    }
    async googleSignin(googleSigninDto) {
        const decodedToken = await this.verifyFirebaseGoogleToken(googleSigninDto.idToken);
        const email = decodedToken.email?.trim().toLowerCase();
        if (!email) {
            throw new common_1.BadRequestException("Google account email is required.");
        }
        if (decodedToken.email_verified === false) {
            throw new common_1.BadRequestException("Google account email must be verified.");
        }
        const googleSub = this.getGoogleSubject(decodedToken);
        const existingUser = await this.findGoogleUser(decodedToken.uid, googleSub, email);
        if (existingUser) {
            this.ensureUserCanAuthenticate(existingUser);
            const user = await this.prismaService.user.update({
                where: { id: existingUser.id },
                data: {
                    firebase_uid: existingUser.firebase_uid ?? decodedToken.uid,
                    google_sub: existingUser.google_sub ?? googleSub,
                    email_verified: decodedToken.email_verified ?? existingUser.email_verified,
                    ...(googleSigninDto.fcm_token ? { fcm_token: googleSigninDto.fcm_token } : {}),
                    ...(existingUser.password ? {} : { auth_provider: client_1.AuthProvider.GOOGLE }),
                },
            });
            const token = await this.signJwtToken(user);
            this.logger.log(`${user.nick_name ?? user.name ?? user.email} signed in with Google.`);
            return { ...user, token, requiresOnboarding: false };
        }
        this.assertGoogleOnboardingFields(googleSigninDto);
        await this.assertLicenceIdAvailable(googleSigninDto.licence_id);
        const nickName = await this.resolveGoogleNickName(googleSigninDto.nick_name, email, decodedToken.name);
        const user = await this.prismaService.user.create({
            data: {
                email,
                name: decodedToken.name,
                avatar: decodedToken.picture,
                nick_name: nickName,
                licence_id: googleSigninDto.licence_id,
                designation: googleSigninDto.designation,
                gender: googleSigninDto.gender,
                birth_year: googleSigninDto.birth_year,
                is_more_options_accepted: googleSigninDto.is_more_options_accepted ?? false,
                vehicle_type: googleSigninDto.vehicle_type,
                vehicle_model: googleSigninDto.vehicle_model,
                vehicle_color: googleSigninDto.vehicle_color,
                country: googleSigninDto.country,
                city: googleSigninDto.city,
                fcm_token: googleSigninDto.fcm_token,
                auth_provider: client_1.AuthProvider.GOOGLE,
                firebase_uid: decodedToken.uid,
                google_sub: googleSub,
                email_verified: decodedToken.email_verified ?? true,
            },
        });
        this.smtpProvider.sendMail(user.email, "Welcome to PLATEChatter", (0, welcomeEmail_template_1.default)({ name: user.name || user.nick_name || "User" })).then(() => {
            this.logger.log(`Welcome email sent to ${user.email}`);
        });
        const token = await this.signJwtToken(user);
        return { ...user, token, requiresOnboarding: true };
    }
    async getGoogleAuthStatus(googleAuthStatusDto) {
        const decodedToken = await this.verifyFirebaseGoogleToken(googleAuthStatusDto.idToken);
        const email = decodedToken.email?.trim().toLowerCase();
        if (!email) {
            throw new common_1.BadRequestException("Google account email is required.");
        }
        if (decodedToken.email_verified === false) {
            throw new common_1.BadRequestException("Google account email must be verified.");
        }
        const googleSub = this.getGoogleSubject(decodedToken);
        const existingUser = await this.findGoogleUser(decodedToken.uid, googleSub, email);
        if (existingUser) {
            this.ensureUserCanAuthenticate(existingUser);
        }
        return {
            registered: Boolean(existingUser),
            requiresOnboarding: !existingUser,
            provider: "GOOGLE",
            email,
            name: decodedToken.name ?? null,
            picture: decodedToken.picture ?? null,
            missingFields: existingUser ? [] : ["nick_name", "licence_id", "gender", "birth_year"],
        };
    }
    async appleSignin(appleSigninDto) {
        const decodedToken = await this.verifyAppleIdentityToken(appleSigninDto.identityToken, appleSigninDto.nonce);
        const email = decodedToken.email?.trim().toLowerCase();
        if (email && !this.isAppleEmailVerified(decodedToken.email_verified)) {
            throw new common_1.BadRequestException("Apple account email must be verified.");
        }
        const existingUser = await this.prismaService.user.findFirst({
            where: {
                OR: [
                    { apple_sub: decodedToken.sub },
                    ...(email ? [{ email }] : []),
                ],
            },
        });
        if (existingUser) {
            this.ensureUserCanAuthenticate(existingUser);
            const user = await this.prismaService.user.update({
                where: { id: existingUser.id },
                data: {
                    apple_sub: existingUser.apple_sub ?? decodedToken.sub,
                    email_verified: email ? this.isAppleEmailVerified(decodedToken.email_verified) : existingUser.email_verified,
                    ...(appleSigninDto.fcm_token ? { fcm_token: appleSigninDto.fcm_token } : {}),
                    ...(existingUser.password ? {} : { auth_provider: client_1.AuthProvider.APPLE }),
                },
            });
            const token = await this.signJwtToken(user);
            this.logger.log(`${user.nick_name ?? user.name ?? user.email} signed in with Apple.`);
            return { ...user, token, requiresOnboarding: false };
        }
        if (!email) {
            throw new common_1.BadRequestException("Apple account email is required for first sign in.");
        }
        this.assertAppleOnboardingFields(appleSigninDto);
        await this.assertLicenceIdAvailable(appleSigninDto.licence_id);
        const nickName = await this.resolveGoogleNickName(appleSigninDto.nick_name, email, appleSigninDto.name);
        const user = await this.prismaService.user.create({
            data: {
                email,
                name: appleSigninDto.name,
                nick_name: nickName,
                licence_id: appleSigninDto.licence_id,
                designation: appleSigninDto.designation,
                gender: appleSigninDto.gender,
                birth_year: appleSigninDto.birth_year,
                is_more_options_accepted: appleSigninDto.is_more_options_accepted ?? false,
                vehicle_type: appleSigninDto.vehicle_type,
                vehicle_model: appleSigninDto.vehicle_model,
                vehicle_color: appleSigninDto.vehicle_color,
                country: appleSigninDto.country,
                city: appleSigninDto.city,
                fcm_token: appleSigninDto.fcm_token,
                auth_provider: client_1.AuthProvider.APPLE,
                apple_sub: decodedToken.sub,
                email_verified: this.isAppleEmailVerified(decodedToken.email_verified),
            },
        });
        this.smtpProvider.sendMail(user.email, "Welcome to PLATEChatter", (0, welcomeEmail_template_1.default)({ name: user.name || user.nick_name || "User" })).then(() => {
            this.logger.log(`Welcome email sent to ${user.email}`);
        });
        const token = await this.signJwtToken(user);
        return { ...user, token, requiresOnboarding: true };
    }
    async checkAvailability(checkAvailabilityDto) {
        const licenceId = checkAvailabilityDto.licence_id ?? checkAvailabilityDto.license_id;
        if (!checkAvailabilityDto.nick_name && !licenceId) {
            throw new common_1.BadRequestException("At least one of nick_name or licence_id is required.");
        }
        const [nickNameAvailability, licenceIdAvailability] = await Promise.all([
            checkAvailabilityDto.nick_name ? this.getNickNameAvailability(checkAvailabilityDto.nick_name) : null,
            licenceId ? this.getLicenceIdAvailability(licenceId) : null,
        ]);
        const availabilityResults = [nickNameAvailability, licenceIdAvailability].filter((availability) => availability !== null);
        return {
            available: availabilityResults.every((availability) => availability.available),
            nick_name: nickNameAvailability,
            licence_id: licenceIdAvailability,
        };
    }
    async comparePassword(password, hash) {
        const res = await this.encoder.compare(password, hash);
        return res;
    }
    ensureUserCanAuthenticate(user) {
        if (user.is_blocked) {
            throw new common_1.BadRequestException("Your account has been blocked. Please contact support for assistance.");
        }
        if (user.is_deleted) {
            throw new common_1.BadRequestException("Your account has been deleted. If you think this is a mistake, please contact support.");
        }
    }
    async findGoogleUser(firebaseUid, googleSub, email) {
        return this.prismaService.user.findFirst({
            where: {
                OR: [
                    { firebase_uid: firebaseUid },
                    ...(googleSub ? [{ google_sub: googleSub }] : []),
                    { email },
                ],
            },
        });
    }
    assertGoogleOnboardingFields(googleSigninDto) {
        const missingFields = [
            !googleSigninDto.nick_name ? "nick_name" : null,
            !googleSigninDto.licence_id ? "licence_id" : null,
            !googleSigninDto.gender ? "gender" : null,
            !googleSigninDto.birth_year ? "birth_year" : null,
        ].filter((field) => Boolean(field));
        if (missingFields.length > 0) {
            throw new common_1.BadRequestException({
                message: "Google account requires onboarding before registration.",
                requiresOnboarding: true,
                missingFields,
            });
        }
    }
    assertAppleOnboardingFields(appleSigninDto) {
        const missingFields = [
            !appleSigninDto.gender ? "gender" : null,
            !appleSigninDto.birth_year ? "birth_year" : null,
        ].filter((field) => Boolean(field));
        if (missingFields.length > 0) {
            throw new common_1.BadRequestException({
                message: "Apple account requires onboarding before registration.",
                requiresOnboarding: true,
                missingFields,
            });
        }
    }
    formatAuthProvider(authProvider) {
        switch (authProvider) {
            case client_1.AuthProvider.GOOGLE:
                return "Google";
            case client_1.AuthProvider.APPLE:
                return "Apple";
            default:
                return "social";
        }
    }
    async assertNickNameAvailable(nickName) {
        const availability = await this.getNickNameAvailability(nickName);
        if (!availability.available) {
            throw new common_1.ConflictException("Nick name already taken.Try another one.");
        }
    }
    async assertLicenceIdAvailable(licenceId) {
        if (!licenceId) {
            return;
        }
        const availability = await this.getLicenceIdAvailability(licenceId);
        if (!availability.available) {
            throw new common_1.ConflictException("This licence ID is already associated with 3 accounts.");
        }
    }
    async getNickNameAvailability(nickName) {
        const existingNickName = await this.prismaService.user.findFirst({
            where: {
                nick_name: {
                    equals: nickName,
                    mode: "insensitive",
                },
            },
            select: { id: true },
        });
        return {
            value: nickName,
            available: !existingNickName,
            is_taken: Boolean(existingNickName),
        };
    }
    async getLicenceIdAvailability(licenceId) {
        const associatedAccounts = await this.prismaService.user.count({
            where: {
                licence_id: {
                    equals: licenceId,
                    mode: "insensitive",
                },
            },
        });
        return {
            value: licenceId,
            available: associatedAccounts < this.maxAccountsPerLicenceId,
            associated_accounts: associatedAccounts,
            max_accounts: this.maxAccountsPerLicenceId,
        };
    }
    async verifyAppleIdentityToken(identityToken, nonce) {
        if (this.appleConfig.clientIds.length === 0) {
            throw new common_1.InternalServerErrorException("Apple login is not configured. Set APPLE_CLIENT_ID, APPLE_BUNDLE_ID, APPLE_SERVICE_ID, or APPLE_CLIENT_IDS.");
        }
        const tokenParts = identityToken.split(".");
        if (tokenParts.length !== 3) {
            throw new common_1.UnauthorizedException("Invalid Apple identity token.");
        }
        const [encodedHeader, encodedPayload, encodedSignature] = tokenParts;
        const header = this.decodeJwtPart(encodedHeader);
        const payload = this.decodeJwtPart(encodedPayload);
        if (header.alg !== "RS256" || !header.kid) {
            throw new common_1.UnauthorizedException("Invalid Apple identity token header.");
        }
        const publicKey = await this.getApplePublicKey(header.kid);
        const isSignatureValid = crypto.verify("RSA-SHA256", Buffer.from(`${encodedHeader}.${encodedPayload}`), crypto.createPublicKey({ key: publicKey, format: "jwk" }), this.base64UrlToBuffer(encodedSignature));
        if (!isSignatureValid) {
            throw new common_1.UnauthorizedException("Invalid Apple identity token signature.");
        }
        if (payload.iss !== "https://appleid.apple.com") {
            throw new common_1.UnauthorizedException("Invalid Apple identity token issuer.");
        }
        if (!this.isExpectedAppleAudience(payload.aud)) {
            throw new common_1.UnauthorizedException("Invalid Apple identity token audience.");
        }
        if (!payload.exp || payload.exp * 1000 <= Date.now()) {
            throw new common_1.UnauthorizedException("Apple identity token has expired.");
        }
        if (!payload.sub) {
            throw new common_1.UnauthorizedException("Apple identity token subject is missing.");
        }
        if (nonce && payload.nonce !== nonce) {
            throw new common_1.UnauthorizedException("Invalid Apple identity token nonce.");
        }
        return payload;
    }
    async getApplePublicKey(kid) {
        const keys = await this.getApplePublicKeys();
        const key = keys.find((appleKey) => appleKey.kid === kid);
        if (!key) {
            throw new common_1.UnauthorizedException("Apple identity token key is not recognized.");
        }
        return key;
    }
    async getApplePublicKeys() {
        if (this.appleKeysCache && this.appleKeysCache.expiresAt > Date.now()) {
            return this.appleKeysCache.keys;
        }
        let response;
        try {
            response = await fetch(this.appleConfig.keysUrl);
        }
        catch (error) {
            this.logger.error("Failed to fetch Apple public keys", error);
            throw new common_1.InternalServerErrorException("Unable to verify Apple identity token.");
        }
        if (!response.ok) {
            throw new common_1.InternalServerErrorException("Unable to fetch Apple public keys.");
        }
        const body = await response.json();
        const keys = body.keys ?? [];
        if (keys.length === 0) {
            throw new common_1.InternalServerErrorException("Apple public keys response was empty.");
        }
        this.appleKeysCache = {
            keys,
            expiresAt: Date.now() + 60 * 60 * 1000,
        };
        return keys;
    }
    decodeJwtPart(part) {
        try {
            return JSON.parse(this.base64UrlToBuffer(part).toString("utf8"));
        }
        catch {
            throw new common_1.UnauthorizedException("Invalid Apple identity token.");
        }
    }
    base64UrlToBuffer(value) {
        const paddedValue = value.padEnd(value.length + (4 - value.length % 4) % 4, "=");
        return Buffer.from(paddedValue.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    }
    isExpectedAppleAudience(audience) {
        if (!audience) {
            return false;
        }
        const audiences = Array.isArray(audience) ? audience : [audience];
        return audiences.some((item) => this.appleConfig.clientIds.includes(item));
    }
    isAppleEmailVerified(emailVerified) {
        return emailVerified === true || emailVerified === "true";
    }
    async verifyFirebaseGoogleToken(idToken) {
        let decodedToken;
        try {
            decodedToken = await (0, auth_1.getAuth)(this.getFirebaseApp()).verifyIdToken(idToken);
        }
        catch (error) {
            this.logger.warn(`Invalid Google sign-in token: ${error instanceof Error ? error.message : String(error)}`);
            throw new common_1.UnauthorizedException("Invalid Google sign-in token.");
        }
        const provider = decodedToken.firebase?.sign_in_provider;
        const googleIdentities = decodedToken.firebase?.identities?.["google.com"];
        if (provider !== "google.com" && (!Array.isArray(googleIdentities) || googleIdentities.length === 0)) {
            throw new common_1.BadRequestException("Token was not issued from a Google sign-in.");
        }
        return decodedToken;
    }
    getFirebaseApp() {
        const existingApps = (0, app_1.getApps)();
        if (existingApps.length > 0) {
            return existingApps[0];
        }
        if (this.firebaseConfig.serviceAccountJson) {
            const serviceAccount = JSON.parse(this.firebaseConfig.serviceAccountJson);
            return (0, app_1.initializeApp)({ credential: (0, app_1.cert)(serviceAccount) });
        }
        if (this.firebaseConfig.serviceAccountPath) {
            const absolutePath = path.resolve(process.cwd(), this.firebaseConfig.serviceAccountPath);
            if (!fs.existsSync(absolutePath)) {
                throw new Error(`Firebase service account file not found at: ${absolutePath}`);
            }
            return (0, app_1.initializeApp)({ credential: (0, app_1.cert)(absolutePath) });
        }
        if (this.firebaseConfig.firebase_secrets) {
            try {
                const serviceAccount = JSON.parse(this.firebaseConfig.firebase_secrets);
                return (0, app_1.initializeApp)({ credential: (0, app_1.cert)(serviceAccount) });
            }
            catch {
                const legacyPath = path.resolve(process.cwd(), "src/modules/notification/providers/softball-american.json");
                if (!fs.existsSync(legacyPath)) {
                    throw new Error("Legacy Firebase configuration file not found");
                }
                return (0, app_1.initializeApp)({ credential: (0, app_1.cert)(legacyPath) });
            }
        }
        return (0, app_1.initializeApp)();
    }
    getGoogleSubject(decodedToken) {
        const googleIdentities = decodedToken.firebase?.identities?.["google.com"];
        return Array.isArray(googleIdentities) ? googleIdentities[0] : undefined;
    }
    async resolveGoogleNickName(requestedNickName, email, name) {
        if (requestedNickName) {
            await this.assertNickNameAvailable(requestedNickName);
            return requestedNickName;
        }
        const baseNickName = this.normalizeNickName(name || email.split("@")[0]);
        for (let attempt = 0; attempt < 10; attempt++) {
            const candidate = attempt === 0
                ? baseNickName
                : `${baseNickName.slice(0, 24)}${Math.floor(100000 + Math.random() * 900000)}`;
            const existingNickName = await this.prismaService.user.findUnique({
                where: { nick_name: candidate },
            });
            if (!existingNickName) {
                return candidate;
            }
        }
        return `${baseNickName.slice(0, 20)}${Date.now().toString().slice(-8)}`;
    }
    normalizeNickName(value) {
        const normalized = value
            .toLowerCase()
            .replace(/[^a-z0-9_]+/g, "_")
            .replace(/^_+|_+$/g, "")
            .slice(0, 30);
        return normalized.length >= 3 ? normalized : `user_${normalized || "google"}`;
    }
    async getAuthenticatedUser(userId) {
        const [userDetails, ratingInfo, documents] = await Promise.all([
            this.userService.findUserById(userId),
            this.ratingService.getAverageRatingForUser(userId),
            this.userDocumentService.getUserDocumentExpirySummaries(userId),
        ]);
        return {
            ...userDetails,
            rating: ratingInfo.averageRating,
            totalRating: ratingInfo.totalRatings,
            totalRatings: ratingInfo.totalRatings,
            documents,
        };
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
        this.smtpProvider.sendMail(email, "OTP for email veirification", (0, emailVerification_template_1.default)({ otp }));
        return { message: "OTP sent successfully" };
    }
    async resendEmailVerificationCode(email) {
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException("user not found");
        }
        await this.sendEmailVerificationCode(user.id, user.name || "User", user.email);
        return { message: "email verification code resent successfully" };
    }
    async sendEmailVerificationCode(userId, name, email) {
        const code = this.generateEmailVerificationCode();
        const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
        this.prismaService.user.update({ where: { id: userId }, data: { otp: code, otp_expires: expirationTime } });
        const emailTemplate = ({ name, verificationCode: code, verificationCodeExpire: 10 });
        this.smtpProvider.sendMail(email, "Email Verification code", (0, emailVerification_template_1.default)({ name, otp: code }));
    }
    generateEmailVerificationCode() {
        return Math.round(100000 + Math.random() * 900000).toString();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __param(5, (0, common_1.Inject)(firebase_config_1.default.KEY)),
    __param(6, (0, common_1.Inject)(apple_config_1.default.KEY)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        encoder_provider_1.EncoderProvider,
        prisma_service_1.PrismaService,
        jwt_1.JwtService, void 0, void 0, void 0, smtp_provider_1.SMTPProvider,
        rating_service_1.RatingService,
        user_document_service_1.UserDocumentService])
], AuthService);
//# sourceMappingURL=auth.service.js.map