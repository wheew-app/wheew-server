export declare const MessageType: {
    readonly TEXT: "TEXT";
};
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const PolicyType: {
    readonly PrivacyPolicy: "PrivacyPolicy";
    readonly Terms: "Terms";
    readonly More: "More";
};
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
