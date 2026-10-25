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
exports.EncoderProvider = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
let EncoderProvider = class EncoderProvider {
    async hashPassword(password, salt) {
        return await bcrypt_1.default.hash(password, salt);
    }
    async compare(password, hashed) {
        return await bcrypt_1.default.compare(password, hashed);
    }
};
exports.EncoderProvider = EncoderProvider;
exports.EncoderProvider = EncoderProvider = __decorate([
    (0, common_1.Injectable)({})
], EncoderProvider);
//# sourceMappingURL=encoder.provider.js.map