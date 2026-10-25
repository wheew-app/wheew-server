"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const notification_service_1 = require("./notification.service");
const notification_controller_1 = require("./notification.controller");
const firebase_provider_1 = require("./providers/firebase.provider");
const notification_event_service_1 = require("./services/notification-event.service");
const notification_preference_service_1 = require("./services/notification-preference.service");
const notification_dispatcher_service_1 = require("./services/notification-dispatcher.service");
const geolocation_service_1 = require("../../common/services/geolocation.service");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
const chat_module_1 = require("../chat/chat.module");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => chat_module_1.ChatModule)],
        controllers: [notification_controller_1.NotificationController],
        providers: [
            notification_service_1.NotificationService,
            notification_event_service_1.NotificationEventService,
            notification_preference_service_1.NotificationPreferenceService,
            notification_dispatcher_service_1.NotificationDispatcherService,
            geolocation_service_1.GeolocationService,
            firebase_provider_1.FireBaseClient,
            smtp_provider_1.SMTPProvider
        ],
        exports: [
            notification_service_1.NotificationService,
            notification_event_service_1.NotificationEventService,
            notification_preference_service_1.NotificationPreferenceService,
            notification_dispatcher_service_1.NotificationDispatcherService,
            geolocation_service_1.GeolocationService,
            smtp_provider_1.SMTPProvider,
            firebase_provider_1.FireBaseClient,
        ],
    })
], NotificationModule);
//# sourceMappingURL=notification.module.js.map