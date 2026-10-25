"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleType = exports.DocumentType = exports.NotificationEventType = exports.DisabledFacilityLocation = exports.ParkingAreaType = exports.ParkingCost = exports.AuthProvider = exports.AccountType = exports.RatingStatus = exports.GroupRole = exports.PolicyType = exports.Gender = exports.UserRole = exports.JobType = exports.ParkingSessionStatus = exports.PaidParkingPromptStatus = exports.ParkingSaveSource = exports.ParkingSearchStatus = exports.HandoffStatus = exports.TransactionType = exports.UsefulNumberCategory = exports.MessageRequestStatus = exports.PresetMessageType = exports.MessageType = void 0;
exports.MessageType = {
    TEXT: 'TEXT',
    FILE: 'FILE',
    VOICE: 'VOICE'
};
exports.PresetMessageType = {
    ALERT: 'ALERT',
    CLASSIC: 'CLASSIC'
};
exports.MessageRequestStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED'
};
exports.UsefulNumberCategory = {
    EMERGENCY_CONTACT: 'EMERGENCY_CONTACT',
    VEHICLE_ASSISTANCE: 'VEHICLE_ASSISTANCE',
    TRAFFIC_AND_PARKING: 'TRAFFIC_AND_PARKING'
};
exports.TransactionType = {
    EARNED: 'EARNED',
    CONSUMED: 'CONSUMED'
};
exports.HandoffStatus = {
    AVAILABLE: 'AVAILABLE',
    ACCEPTED: 'ACCEPTED',
    FOUND: 'FOUND',
    CANCELLED: 'CANCELLED',
    EXPIRED: 'EXPIRED',
    OCCUPIED: 'OCCUPIED'
};
exports.ParkingSearchStatus = {
    IDLE: 'IDLE',
    SEARCHING: 'SEARCHING',
    PARKED: 'PARKED'
};
exports.ParkingSaveSource = {
    AUTO: 'AUTO',
    MANUAL: 'MANUAL'
};
exports.PaidParkingPromptStatus = {
    PENDING: 'PENDING',
    ANSWERED: 'ANSWERED',
    DISMISSED: 'DISMISSED'
};
exports.ParkingSessionStatus = {
    ACTIVE: 'ACTIVE',
    EXPIRED: 'EXPIRED',
    LEFT: 'LEFT'
};
exports.JobType = {
    SendWelcomeEmail: 'SendWelcomeEmail'
};
exports.UserRole = {
    USER: 'USER',
    ADMIN: 'ADMIN'
};
exports.Gender = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};
exports.PolicyType = {
    PrivacyPolicy: 'PrivacyPolicy',
    Terms: 'Terms',
    More: 'More'
};
exports.GroupRole = {
    GROUP_ADMIN: 'GROUP_ADMIN',
    GROUP_MEMBER: 'GROUP_MEMBER'
};
exports.RatingStatus = {
    PUBLISHED: 'PUBLISHED',
    REJECTED: 'REJECTED',
    PENDING: 'PENDING'
};
exports.AccountType = {
    FREE: 'FREE',
    PREMIUM: 'PREMIUM'
};
exports.AuthProvider = {
    PASSWORD: 'PASSWORD',
    GOOGLE: 'GOOGLE',
    APPLE: 'APPLE'
};
exports.ParkingCost = {
    FREE: 'FREE',
    PAID: 'PAID'
};
exports.ParkingAreaType = {
    ELECTRIC_CHARGING: 'ELECTRIC_CHARGING',
    DISABLED_FACILITY: 'DISABLED_FACILITY'
};
exports.DisabledFacilityLocation = {
    BACK: 'BACK',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    NONE: 'NONE',
    ALL: 'ALL'
};
exports.NotificationEventType = {
    PARKING_AVAILABLE: 'PARKING_AVAILABLE',
    PARKING_NEARBY: 'PARKING_NEARBY',
    CHAT_MESSAGE: 'CHAT_MESSAGE',
    CHAT_DELIVERED: 'CHAT_DELIVERED',
    CHAT_READ: 'CHAT_READ',
    RATING_RECEIVED: 'RATING_RECEIVED',
    GROUP_CHAT_MESSAGE: 'GROUP_CHAT_MESSAGE',
    GROUP_CHAT_ADDED: 'GROUP_CHAT_ADDED',
    GROUP_CHAT_REMOVED: 'GROUP_CHAT_REMOVED',
    SYSTEM_NOTIFICATION: 'SYSTEM_NOTIFICATION',
    USER_MENTION: 'USER_MENTION',
    PARKING_EXPIRING_SOON: 'PARKING_EXPIRING_SOON',
    DOCUMENT_EXPIRING_SOON: 'DOCUMENT_EXPIRING_SOON',
    DOCUMENT_EXPIRED: 'DOCUMENT_EXPIRED'
};
exports.DocumentType = {
    LICENSE: 'LICENSE',
    INSURANCE: 'INSURANCE',
    TAX: 'TAX',
    VEHICLE_OWNERSHIP: 'VEHICLE_OWNERSHIP',
    CAR_INSPECTION: 'CAR_INSPECTION'
};
exports.VehicleType = {
    CAR: 'CAR',
    MOTORCYCLE: 'MOTORCYCLE',
    VAN: 'VAN',
    SUV: 'SUV',
    TRUCK: 'TRUCK',
    CAMPER: 'CAMPER',
    SCOOTER: 'SCOOTER',
    PICKUP: 'PICKUP',
    MICRO_CAR: 'MICRO_CAR',
    CITY_CAR: 'CITY_CAR',
    E_SCOOTER: 'E_SCOOTER',
    OTHER: 'OTHER'
};
//# sourceMappingURL=enums.js.map