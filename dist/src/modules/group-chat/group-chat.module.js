"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChatModule = void 0;
const common_1 = require("@nestjs/common");
const group_chat_controller_1 = require("./group-chat.controller");
const group_chat_service_1 = require("./group-chat.service");
const prisma_module_1 = require("../prisma/prisma.module");
const chat_module_1 = require("../chat/chat.module");
const notification_module_1 = require("../notification/notification.module");
let GroupChatModule = class GroupChatModule {
};
exports.GroupChatModule = GroupChatModule;
exports.GroupChatModule = GroupChatModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => chat_module_1.ChatModule), notification_module_1.NotificationModule],
        controllers: [group_chat_controller_1.GroupChatController],
        providers: [group_chat_service_1.GroupChatService],
        exports: [group_chat_service_1.GroupChatService],
    })
], GroupChatModule);
//# sourceMappingURL=group-chat.module.js.map