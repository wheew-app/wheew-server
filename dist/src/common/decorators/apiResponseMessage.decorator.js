"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessage = exports.ApiResponseMessageKey = void 0;
const common_1 = require("@nestjs/common");
exports.ApiResponseMessageKey = 'apiResponseMessage';
const ResponseMessage = (message) => (0, common_1.SetMetadata)(exports.ApiResponseMessageKey, message);
exports.ResponseMessage = ResponseMessage;
//# sourceMappingURL=apiResponseMessage.decorator.js.map