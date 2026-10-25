"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WsExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
let WsExceptionsFilter = WsExceptionsFilter_1 = class WsExceptionsFilter extends websockets_1.BaseWsExceptionFilter {
    logger = new common_1.Logger(WsExceptionsFilter_1.name);
    catch(exception, host) {
        try {
            const client = host.switchToWs().getClient();
            const error = exception instanceof websockets_1.WsException ? exception.getError() : exception;
            this.logger.error(`WebSocket Exception: ${JSON.stringify(error?.message || error || exception)}`);
            if (client && typeof client.emit === 'function') {
                client.emit('error', {
                    status: 'error',
                    message: exception?.message || 'Internal websocket error'
                });
            }
        }
        catch (filterError) {
            this.logger.error('Error in WsExceptionsFilter catch block:', filterError);
        }
    }
};
exports.WsExceptionsFilter = WsExceptionsFilter;
exports.WsExceptionsFilter = WsExceptionsFilter = WsExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], WsExceptionsFilter);
//# sourceMappingURL=WsExceptionHandler.js.map