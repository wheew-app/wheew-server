"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTPProvider = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailer_config_1 = __importDefault(require("../../config/mailer.config"));
let SMTPProvider = class SMTPProvider {
    mailerConfiguration;
    transporter;
    constructor(mailerConfiguration) {
        this.mailerConfiguration = mailerConfiguration;
        console.log(mailerConfiguration);
        try {
            this.transporter = nodemailer_1.default.createTransport({
                host: this.mailerConfiguration.host,
                port: parseInt(this.mailerConfiguration.port),
                secure: true,
                auth: {
                    user: this.mailerConfiguration.user,
                    pass: this.mailerConfiguration.password
                }
            });
            console.log("SMTP transporter initialized successfully.");
        }
        catch (err) {
            console.log("SMTP transporter initialization failed!");
        }
    }
    async sendMail(to, subject, body) {
        if (!this.transporter) {
            throw new Error("transporter does not initialized yet!");
        }
        try {
            const res = await this.transporter.sendMail({
                from: "noreply@platechat.app",
                to,
                subject,
                html: body
            });
            console.log(res);
        }
        catch (err) {
            console.log(err);
            console.log("sending failed... ");
        }
    }
};
exports.SMTPProvider = SMTPProvider;
exports.SMTPProvider = SMTPProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(mailer_config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], SMTPProvider);
//# sourceMappingURL=smtp.provider.js.map