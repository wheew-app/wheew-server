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
var FireBaseClient_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireBaseClient = void 0;
const common_1 = require("@nestjs/common");
const firebase_config_1 = __importDefault(require("../../../config/firebase.config"));
const app_1 = require("firebase-admin/app");
const messaging_1 = require("firebase-admin/messaging");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let FireBaseClient = FireBaseClient_1 = class FireBaseClient {
    firebaseConfig;
    logger = new common_1.Logger(FireBaseClient_1.name);
    app;
    constructor(firebaseConfig) {
        this.firebaseConfig = firebaseConfig;
        try {
            this.initializeFirebaseApp();
        }
        catch (err) {
            this.logger.error('Failed to initialize Firebase app', err);
        }
    }
    async sendPushNotification(tokens, title, body) {
        try {
            if (!this.app) {
                throw new Error("Firebase client is not configured correctly");
            }
            if (!tokens || (Array.isArray(tokens) && tokens.length <= 0)) {
                throw new Error("FCM token is invalid or empty");
            }
            if (!title || !body) {
                throw new Error("Notification title and body are required");
            }
            const messaging = (0, messaging_1.getMessaging)(this.app);
            if (Array.isArray(tokens)) {
                const result = await messaging.sendEachForMulticast({
                    tokens,
                    notification: {
                        title,
                        body
                    },
                });
                this.logger.log(`Sent multicast notification. Success: ${result.successCount}, Failure: ${result.failureCount}`);
                return result;
            }
            else {
                const result = await messaging.send({
                    token: tokens,
                    notification: {
                        title,
                        body
                    }
                });
                this.logger.log(`Sent notification successfully: ${result}`);
                return result;
            }
        }
        catch (err) {
            this.logger.error("Failed to send push notification", err);
            throw err;
        }
    }
    initializeFirebaseApp() {
        try {
            const existingApps = (0, app_1.getApps)();
            if (existingApps.length > 0) {
                this.app = existingApps[0];
                this.logger.log('Using existing Firebase app');
                return;
            }
            let credential;
            if (this.firebaseConfig.serviceAccountJson) {
                this.logger.log('Initializing Firebase with JSON string configuration');
                const serviceAccount = JSON.parse(this.firebaseConfig.serviceAccountJson);
                credential = (0, app_1.cert)(serviceAccount);
            }
            else if (this.firebaseConfig.serviceAccountPath) {
                this.logger.log('Initializing Firebase with file path configuration');
                const absolutePath = path.resolve(process.cwd(), this.firebaseConfig.serviceAccountPath);
                if (!fs.existsSync(absolutePath)) {
                    throw new Error(`Firebase service account file not found at: ${absolutePath}`);
                }
                credential = (0, app_1.cert)(absolutePath);
            }
            else if (this.firebaseConfig.firebase_secrets) {
                this.logger.warn('Using legacy firebase_secrets configuration. Consider migrating to serviceAccountPath or serviceAccountJson');
                const legacyPath = path.resolve(process.cwd(), "src/modules/notification/providers/softball-american.json");
                if (fs.existsSync(legacyPath)) {
                    credential = (0, app_1.cert)(legacyPath);
                }
                else {
                    throw new Error('Legacy Firebase configuration file not found');
                }
            }
            else {
                this.logger.log('No explicit Firebase configuration found. Attempting to use application default credentials');
                this.app = (0, app_1.initializeApp)();
                this.logger.log('Firebase initialized with application default credentials');
                return;
            }
            this.app = (0, app_1.initializeApp)({ credential });
            this.logger.log('Firebase app initialized successfully');
            if (this.firebaseConfig.projectId && this.app.options.projectId !== this.firebaseConfig.projectId) {
                this.logger.warn(`Project ID mismatch. Expected: ${this.firebaseConfig.projectId}, Got: ${this.app.options.projectId}`);
            }
        }
        catch (err) {
            this.logger.error("Failed to initialize Firebase app", err);
            throw err;
        }
    }
    isInitialized() {
        return !!this.app;
    }
};
exports.FireBaseClient = FireBaseClient;
exports.FireBaseClient = FireBaseClient = FireBaseClient_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(firebase_config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], FireBaseClient);
//# sourceMappingURL=firebase.provider.js.map