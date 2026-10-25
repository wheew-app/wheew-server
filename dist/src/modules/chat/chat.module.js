"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_controller_1 = require("./chat.controller");
const chat_service_1 = require("./chat.service");
const chat_gateway_1 = require("./gateway/chat.gateway");
const user_module_1 = require("../user/user.module");
const prisma_module_1 = require("../prisma/prisma.module");
const group_chat_module_1 = require("../group-chat/group-chat.module");
const rating_module_1 = require("../rating/rating.module");
const socket_room_service_1 = require("./services/socket-room.service");
const notification_module_1 = require("../notification/notification.module");
let ChatModule = class ChatModule {
    onModuleInit() {
    }
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => user_module_1.UserModule), prisma_module_1.PrismaModule, group_chat_module_1.GroupChatModule, rating_module_1.RatingModule, (0, common_1.forwardRef)(() => notification_module_1.NotificationModule)],
        controllers: [chat_controller_1.ChatController],
        providers: [
            chat_service_1.ChatService,
            chat_gateway_1.SocketGateway,
            socket_room_service_1.SocketRoomService,
            {
                provide: 'SOCKET_ROOM_SERVICE',
                useExisting: socket_room_service_1.SocketRoomService,
            }
        ],
        exports: [chat_service_1.ChatService, chat_gateway_1.SocketGateway, socket_room_service_1.SocketRoomService, 'SOCKET_ROOM_SERVICE']
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map