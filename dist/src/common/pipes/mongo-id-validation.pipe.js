"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoIdValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const mongo_id_util_1 = require("../utils/mongo-id.util");
let MongoIdValidationPipe = class MongoIdValidationPipe {
    transform(value, metadata) {
        if (value === undefined || value === null) {
            return value;
        }
        if (metadata.data && (0, mongo_id_util_1.isMongoIdFieldName)(metadata.data)) {
            this.throwIfInvalid((0, mongo_id_util_1.collectMongoIdValueValidationErrors)(metadata.data, value));
            return value;
        }
        if (metadata.type === "body" || metadata.type === "query" || metadata.type === "param") {
            this.throwIfInvalid((0, mongo_id_util_1.collectMongoIdValidationErrors)(value));
        }
        return value;
    }
    throwIfInvalid(errors) {
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors.length === 1 ? errors[0] : errors);
        }
    }
};
exports.MongoIdValidationPipe = MongoIdValidationPipe;
exports.MongoIdValidationPipe = MongoIdValidationPipe = __decorate([
    (0, common_1.Injectable)()
], MongoIdValidationPipe);
//# sourceMappingURL=mongo-id-validation.pipe.js.map