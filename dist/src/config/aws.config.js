"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsConfigData = void 0;
const config_1 = require("@nestjs/config");
exports.awsConfigData = (() => ({
    access_key: process.env.AWS_ACCESS_KEY_ID,
    secret_key: process.env.AWS_SECRET_ACCESS_KEY,
    bucket_name: process.env.S3_BUCKET_NAME,
    region: process.env.AWS_REGION
}));
exports.default = (0, config_1.registerAs)("aws", exports.awsConfigData);
//# sourceMappingURL=aws.config.js.map