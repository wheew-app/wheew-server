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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const chat_module_1 = require("./modules/chat/chat.module");
const group_chat_module_1 = require("./modules/group-chat/group-chat.module");
const preset_message_module_1 = require("./modules/preset-message/preset-message.module");
const useful_number_module_1 = require("./modules/useful-number/useful-number.module");
const blocklist_module_1 = require("./modules/blocklist/blocklist.module");
const point_module_1 = require("./modules/point/point.module");
const rating_module_1 = require("./modules/rating/rating.module");
const parking_report_module_1 = require("./modules/parking-report/parking-report.module");
const user_document_module_1 = require("./modules/user-document/user-document.module");
const park_relay_module_1 = require("./modules/park-relay/park-relay.module");
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
const privacy_policy_module_1 = require("./modules/privacy_policy/privacy_policy.module");
const notification_module_1 = require("./modules/notification/notification.module");
const blacklistedword_module_1 = require("./modules/blacklistedword/blacklistedword.module");
const mailer_config_1 = __importDefault(require("./config/mailer.config"));
const firebase_config_1 = __importDefault(require("./config/firebase.config"));
const apple_config_1 = __importDefault(require("./config/apple.config"));
const faq_module_1 = require("./modules/faq/faq.module");
const help_support_module_1 = require("./modules/help-support/help-support.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [jwt_config_1.default, mailer_config_1.default, firebase_config_1.default, apple_config_1.default] }),
            schedule_1.ScheduleModule.forRoot(),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            chat_module_1.ChatModule,
            group_chat_module_1.GroupChatModule,
            preset_message_module_1.PresetMessageModule,
            useful_number_module_1.UsefulNumberModule,
            blocklist_module_1.BlocklistModule,
            point_module_1.PointModule,
            rating_module_1.RatingModule,
            parking_report_module_1.ParkingReportModule,
            privacy_policy_module_1.PrivacyPolicyModule,
            notification_module_1.NotificationModule,
            blacklistedword_module_1.BlacklistedwordModule,
            user_document_module_1.UserDocumentModule,
            faq_module_1.FaqModule,
            help_support_module_1.HelpSupportModule,
            park_relay_module_1.ParkRelayModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService],
        exports: [config_1.ConfigService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map