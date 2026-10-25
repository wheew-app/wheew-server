"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalHttpExceptionHandler = void 0;
const common_1 = require("@nestjs/common");
let GlobalHttpExceptionHandler = class GlobalHttpExceptionHandler {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus() || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const url = request.url;
        const exceptionResponse = exception.getResponse() || { message: 'Internal server error!' };
        response.status(status)
            .json({
            success: false,
            message: exceptionResponse['message'],
            url,
            statusCode: status
        });
    }
};
exports.GlobalHttpExceptionHandler = GlobalHttpExceptionHandler;
exports.GlobalHttpExceptionHandler = GlobalHttpExceptionHandler = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], GlobalHttpExceptionHandler);
//# sourceMappingURL=GlobalHttpExceptionHandler.js.map