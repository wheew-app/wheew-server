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
exports.QrCodeGeneratorProvider = void 0;
const common_1 = require("@nestjs/common");
const qrcode_1 = __importDefault(require("qrcode"));
let QrCodeGeneratorProvider = class QrCodeGeneratorProvider {
    async generateQrCode(data) {
        const qrCodeData = qrcode_1.default.toDataURL(data, { width: 200, margin: 2 });
        return qrCodeData;
    }
};
exports.QrCodeGeneratorProvider = QrCodeGeneratorProvider;
exports.QrCodeGeneratorProvider = QrCodeGeneratorProvider = __decorate([
    (0, common_1.Injectable)()
], QrCodeGeneratorProvider);
//# sourceMappingURL=qrCodeGenerator.provider.js.map