"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerConfig = void 0;
const config_1 = require("@nestjs/config");
const MailerConfig = () => ({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    user: process.env.MAILER_MAIL,
    password: process.env.MAILER_PASSWORD,
    service: process.env.MAILER_SERVICE
});
exports.MailerConfig = MailerConfig;
exports.default = (0, config_1.registerAs)("mailer", exports.MailerConfig);
//# sourceMappingURL=mailer.config.js.map