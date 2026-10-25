"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentModule = void 0;
const common_1 = require("@nestjs/common");
const user_document_controller_1 = require("./user-document.controller");
const user_document_service_1 = require("./services/user-document.service");
const document_expiry_check_service_1 = require("./services/document-expiry-check.service");
const prisma_module_1 = require("../prisma/prisma.module");
const notification_module_1 = require("../notification/notification.module");
let UserDocumentModule = class UserDocumentModule {
};
exports.UserDocumentModule = UserDocumentModule;
exports.UserDocumentModule = UserDocumentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [user_document_controller_1.UserDocumentController],
        providers: [
            user_document_service_1.UserDocumentService,
            document_expiry_check_service_1.DocumentExpiryCheckService,
        ],
        exports: [
            user_document_service_1.UserDocumentService,
            document_expiry_check_service_1.DocumentExpiryCheckService,
        ],
    })
], UserDocumentModule);
//# sourceMappingURL=user-document.module.js.map