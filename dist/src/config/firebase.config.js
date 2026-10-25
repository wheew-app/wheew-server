"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = void 0;
const config_1 = require("@nestjs/config");
const firebaseConfig = () => ({
    serviceAccountPath: process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
    serviceAccountJson: process.env.FIREBASE_SERVICE_ACCOUNT_JSON,
    projectId: process.env.FIREBASE_PROJECT_ID,
    firebase_secrets: process.env.FIREBASE_SECRETS
});
exports.firebaseConfig = firebaseConfig;
exports.default = (0, config_1.registerAs)("firebase", exports.firebaseConfig);
//# sourceMappingURL=firebase.config.js.map