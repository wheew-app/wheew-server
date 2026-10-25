"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIdProvider = void 0;
const node_crypto_1 = require("node:crypto");
class UUIdProvider {
    getUUid() {
        return (0, node_crypto_1.randomUUID)().toString();
    }
}
exports.UUIdProvider = UUIdProvider;
//# sourceMappingURL=uuid.provider.js.map