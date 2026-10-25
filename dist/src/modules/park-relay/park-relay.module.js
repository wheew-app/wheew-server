"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkRelayModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const notification_module_1 = require("../notification/notification.module");
const chat_module_1 = require("../chat/chat.module");
const park_relay_controller_1 = require("./park-relay.controller");
const park_relay_service_1 = require("./park-relay.service");
let ParkRelayModule = class ParkRelayModule {
};
exports.ParkRelayModule = ParkRelayModule;
exports.ParkRelayModule = ParkRelayModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, notification_module_1.NotificationModule, chat_module_1.ChatModule],
        controllers: [park_relay_controller_1.ParkRelayController],
        providers: [park_relay_service_1.ParkRelayService],
        exports: [park_relay_service_1.ParkRelayService],
    })
], ParkRelayModule);
//# sourceMappingURL=park-relay.module.js.map