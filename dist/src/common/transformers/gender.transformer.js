"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformGender = void 0;
const transformGender = ({ value }) => {
    if (typeof value !== "string") {
        return value;
    }
    return value.trim().toUpperCase().replace(/[\s-]+/g, "_");
};
exports.transformGender = transformGender;
//# sourceMappingURL=gender.transformer.js.map