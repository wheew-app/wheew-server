"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsFcmToken = IsFcmToken;
const class_validator_1 = require("class-validator");
const MIN_FCM_TOKEN_LENGTH = 20;
const MAX_FCM_TOKEN_LENGTH = 4096;
function IsFcmToken(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isFcmToken',
            target: object.constructor,
            propertyName,
            options: {
                message: '$property must be a valid FCM registration token: no whitespace, 20-4096 characters.',
                ...validationOptions,
            },
            validator: {
                validate(value) {
                    if (typeof value !== 'string') {
                        return false;
                    }
                    return (value.length >= MIN_FCM_TOKEN_LENGTH &&
                        value.length <= MAX_FCM_TOKEN_LENGTH &&
                        !/\s/.test(value));
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid FCM registration token: no whitespace, 20-4096 characters.`;
                },
            },
        });
    };
}
//# sourceMappingURL=is-fcm-token.validator.js.map