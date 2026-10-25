"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const config_1 = require("@nestjs/config");
const jwtConfig = () => ({
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
});
exports.jwtConfig = jwtConfig;
exports.default = (0, config_1.registerAs)("jwt", exports.jwtConfig);
//# sourceMappingURL=jwt.config.js.map