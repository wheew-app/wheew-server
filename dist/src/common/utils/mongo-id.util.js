"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_ID_FIELD_NAMES = void 0;
exports.isValidMongoId = isValidMongoId;
exports.isMongoIdFieldName = isMongoIdFieldName;
exports.collectMongoIdValidationErrors = collectMongoIdValidationErrors;
exports.collectMongoIdValueValidationErrors = collectMongoIdValueValidationErrors;
const MONGO_ID_REGEX = /^[0-9a-fA-F]{24}$/;
exports.MONGO_ID_FIELD_NAMES = new Set([
    "id",
    "_id",
    "userId",
    "user_id",
    "blockedUserId",
    "blocked_user_id",
    "otherUserId",
    "raterId",
    "rater_id",
    "rateeId",
    "ratee_id",
    "senderId",
    "sender_id",
    "receiverId",
    "receiver_id",
    "roomId",
    "room_id",
    "chatRoomId",
    "chatRoom_id",
    "groupChatRoomId",
    "groupChatRoom_id",
    "memberId",
    "memberIds",
    "newMemberId",
    "newMemberIds",
    "messageId",
    "messageIds",
    "lastReadMessageId",
    "last_read_message_id",
    "presetMessageId",
    "senderKeyId",
    "receiverKeyId",
    "requestId",
    "ratingId",
    "ticketId",
    "documentId",
    "spotId",
    "parkingReportId",
    "parking_report_id",
    "handoffId",
    "sessionId",
    "areaId",
    "eventId",
    "deletedById",
    "createdById",
    "releaserId",
    "seekerId",
]);
function isValidMongoId(value) {
    return typeof value === "string" && MONGO_ID_REGEX.test(value);
}
function isMongoIdFieldName(field) {
    return exports.MONGO_ID_FIELD_NAMES.has(field);
}
function collectMongoIdValidationErrors(value, path = "") {
    const errors = [];
    validateObject(value, path, errors);
    return errors;
}
function collectMongoIdValueValidationErrors(field, value) {
    const errors = [];
    validateFieldValue(field, value, errors);
    return errors;
}
function validateObject(value, path, errors) {
    if (Array.isArray(value)) {
        value.forEach((item, index) => validateObject(item, `${path}[${index}]`, errors));
        return;
    }
    if (!isObject(value)) {
        return;
    }
    Object.entries(value).forEach(([key, item]) => {
        const fieldPath = path ? `${path}.${key}` : key;
        if (isMongoIdFieldName(key)) {
            validateFieldValue(fieldPath, item, errors);
            return;
        }
        validateObject(item, fieldPath, errors);
    });
}
function validateFieldValue(field, value, errors) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((item, index) => validateSingleId(`${field}[${index}]`, item, errors));
        return;
    }
    if (typeof value === "string" && isPluralField(field)) {
        parseStringList(value).forEach((item, index) => validateSingleId(`${field}[${index}]`, item, errors));
        return;
    }
    validateSingleId(field, value, errors);
}
function validateSingleId(field, value, errors) {
    if (!isValidMongoId(value)) {
        errors.push(`${field} must be a valid MongoDB ObjectId`);
    }
}
function parseStringList(value) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
        return [value];
    }
    if (trimmedValue.startsWith("[")) {
        try {
            const parsedValue = JSON.parse(trimmedValue);
            return Array.isArray(parsedValue) ? parsedValue : [value];
        }
        catch {
            return [value];
        }
    }
    return trimmedValue.split(",").map((item) => item.trim());
}
function isPluralField(field) {
    const fieldName = field.split(".").pop() ?? field;
    return fieldName.endsWith("Ids") || fieldName.endsWith("_ids");
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
//# sourceMappingURL=mongo-id.util.js.map