"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const config_1 = require("@nestjs/config");
const AppConfig = () => ({
    domain: process.env.BASE_PATH
});
exports.AppConfig = AppConfig;
exports.default = (0, config_1.registerAs)("app", exports.AppConfig);
//# sourceMappingURL=app.config.js.map