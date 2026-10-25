"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appleConfig = void 0;
const config_1 = require("@nestjs/config");
const splitCsv = (value) => value
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];
const appleConfig = () => {
    const clientIds = [
        process.env.APPLE_CLIENT_ID,
        process.env.APPLE_BUNDLE_ID,
        process.env.APPLE_SERVICE_ID,
        ...splitCsv(process.env.APPLE_CLIENT_IDS),
    ].filter(Boolean);
    return {
        clientIds: [...new Set(clientIds)],
        keysUrl: process.env.APPLE_KEYS_URL || "https://appleid.apple.com/auth/keys",
    };
};
exports.appleConfig = appleConfig;
exports.default = (0, config_1.registerAs)("apple", exports.appleConfig);
//# sourceMappingURL=apple.config.js.map