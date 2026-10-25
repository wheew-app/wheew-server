export declare const MessageType: {
    readonly TEXT: "TEXT";
    readonly FILE: "FILE";
    readonly VOICE: "VOICE";
};
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
export declare const PresetMessageType: {
    readonly ALERT: "ALERT";
    readonly CLASSIC: "CLASSIC";
};
export type PresetMessageType = (typeof PresetMessageType)[keyof typeof PresetMessageType];
export declare const MessageRequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
};
export type MessageRequestStatus = (typeof MessageRequestStatus)[keyof typeof MessageRequestStatus];
export declare const UsefulNumberCategory: {
    readonly EMERGENCY_CONTACT: "EMERGENCY_CONTACT";
    readonly VEHICLE_ASSISTANCE: "VEHICLE_ASSISTANCE";
    readonly TRAFFIC_AND_PARKING: "TRAFFIC_AND_PARKING";
};
export type UsefulNumberCategory = (typeof UsefulNumberCategory)[keyof typeof UsefulNumberCategory];
export declare const TransactionType: {
    readonly EARNED: "EARNED";
    readonly CONSUMED: "CONSUMED";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const HandoffStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly ACCEPTED: "ACCEPTED";
    readonly FOUND: "FOUND";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
    readonly OCCUPIED: "OCCUPIED";
};
export type HandoffStatus = (typeof HandoffStatus)[keyof typeof HandoffStatus];
export declare const ParkingSearchStatus: {
    readonly IDLE: "IDLE";
    readonly SEARCHING: "SEARCHING";
    readonly PARKED: "PARKED";
};
export type ParkingSearchStatus = (typeof ParkingSearchStatus)[keyof typeof ParkingSearchStatus];
export declare const ParkingSaveSource: {
    readonly AUTO: "AUTO";
    readonly MANUAL: "MANUAL";
};
export type ParkingSaveSource = (typeof ParkingSaveSource)[keyof typeof ParkingSaveSource];
export declare const PaidParkingPromptStatus: {
    readonly PENDING: "PENDING";
    readonly ANSWERED: "ANSWERED";
    readonly DISMISSED: "DISMISSED";
};
export type PaidParkingPromptStatus = (typeof PaidParkingPromptStatus)[keyof typeof PaidParkingPromptStatus];
export declare const ParkingSessionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly LEFT: "LEFT";
};
export type ParkingSessionStatus = (typeof ParkingSessionStatus)[keyof typeof ParkingSessionStatus];
export declare const JobType: {
    readonly SendWelcomeEmail: "SendWelcomeEmail";
};
export type JobType = (typeof JobType)[keyof typeof JobType];
export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const PolicyType: {
    readonly PrivacyPolicy: "PrivacyPolicy";
    readonly Terms: "Terms";
    readonly More: "More";
};
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
export declare const GroupRole: {
    readonly GROUP_ADMIN: "GROUP_ADMIN";
    readonly GROUP_MEMBER: "GROUP_MEMBER";
};
export type GroupRole = (typeof GroupRole)[keyof typeof GroupRole];
export declare const RatingStatus: {
    readonly PUBLISHED: "PUBLISHED";
    readonly REJECTED: "REJECTED";
    readonly PENDING: "PENDING";
};
export type RatingStatus = (typeof RatingStatus)[keyof typeof RatingStatus];
export declare const AccountType: {
    readonly FREE: "FREE";
    readonly PREMIUM: "PREMIUM";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const AuthProvider: {
    readonly PASSWORD: "PASSWORD";
    readonly GOOGLE: "GOOGLE";
    readonly APPLE: "APPLE";
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const ParkingCost: {
    readonly FREE: "FREE";
    readonly PAID: "PAID";
};
export type ParkingCost = (typeof ParkingCost)[keyof typeof ParkingCost];
export declare const ParkingAreaType: {
    readonly ELECTRIC_CHARGING: "ELECTRIC_CHARGING";
    readonly DISABLED_FACILITY: "DISABLED_FACILITY";
};
export type ParkingAreaType = (typeof ParkingAreaType)[keyof typeof ParkingAreaType];
export declare const DisabledFacilityLocation: {
    readonly BACK: "BACK";
    readonly RIGHT: "RIGHT";
    readonly LEFT: "LEFT";
    readonly NONE: "NONE";
    readonly ALL: "ALL";
};
export type DisabledFacilityLocation = (typeof DisabledFacilityLocation)[keyof typeof DisabledFacilityLocation];
export declare const NotificationEventType: {
    readonly PARKING_AVAILABLE: "PARKING_AVAILABLE";
    readonly PARKING_NEARBY: "PARKING_NEARBY";
    readonly CHAT_MESSAGE: "CHAT_MESSAGE";
    readonly CHAT_DELIVERED: "CHAT_DELIVERED";
    readonly CHAT_READ: "CHAT_READ";
    readonly RATING_RECEIVED: "RATING_RECEIVED";
    readonly GROUP_CHAT_MESSAGE: "GROUP_CHAT_MESSAGE";
    readonly GROUP_CHAT_ADDED: "GROUP_CHAT_ADDED";
    readonly GROUP_CHAT_REMOVED: "GROUP_CHAT_REMOVED";
    readonly SYSTEM_NOTIFICATION: "SYSTEM_NOTIFICATION";
    readonly USER_MENTION: "USER_MENTION";
    readonly PARKING_EXPIRING_SOON: "PARKING_EXPIRING_SOON";
    readonly DOCUMENT_EXPIRING_SOON: "DOCUMENT_EXPIRING_SOON";
    readonly DOCUMENT_EXPIRED: "DOCUMENT_EXPIRED";
};
export type NotificationEventType = (typeof NotificationEventType)[keyof typeof NotificationEventType];
export declare const DocumentType: {
    readonly LICENSE: "LICENSE";
    readonly INSURANCE: "INSURANCE";
    readonly TAX: "TAX";
    readonly VEHICLE_OWNERSHIP: "VEHICLE_OWNERSHIP";
    readonly CAR_INSPECTION: "CAR_INSPECTION";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const VehicleType: {
    readonly CAR: "CAR";
    readonly MOTORCYCLE: "MOTORCYCLE";
    readonly VAN: "VAN";
    readonly SUV: "SUV";
    readonly TRUCK: "TRUCK";
    readonly CAMPER: "CAMPER";
    readonly SCOOTER: "SCOOTER";
    readonly PICKUP: "PICKUP";
    readonly MICRO_CAR: "MICRO_CAR";
    readonly CITY_CAR: "CITY_CAR";
    readonly E_SCOOTER: "E_SCOOTER";
    readonly OTHER: "OTHER";
};
export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType];
