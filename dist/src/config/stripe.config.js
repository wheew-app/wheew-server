"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeConfig = void 0;
const config_1 = require("@nestjs/config");
const StripeConfig = () => ({
    stripe_key: process.env.STRIPE_KEY,
    webhook_key: process.env.STRIPE_WEBHOOK
});
exports.StripeConfig = StripeConfig;
exports.default = (0, config_1.registerAs)("stripe", exports.StripeConfig);
//# sourceMappingURL=stripe.config.js.map