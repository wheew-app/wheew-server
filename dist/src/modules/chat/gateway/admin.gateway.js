"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
let AdminGateway = class AdminGateway {
    handleDisconnect(client) {
        throw new Error("Method not implemented.");
    }
    handleConnection(client, ...args) {
        throw new Error("Method not implemented.");
    }
    afterInit(server) {
        throw new Error("Method not implemented.");
    }
};
exports.AdminGateway = AdminGateway;
exports.AdminGateway = AdminGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: "/admin", cors: "*" }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    })),
    (0, common_1.Injectable)()
], AdminGateway);
//# sourceMappingURL=admin.gateway.js.map