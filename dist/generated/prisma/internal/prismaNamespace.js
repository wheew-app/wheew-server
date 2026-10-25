"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportTicketScalarFieldEnum = exports.UserDocumentScalarFieldEnum = exports.UserLocationScalarFieldEnum = exports.NotificationPreferenceScalarFieldEnum = exports.NotificationEventScalarFieldEnum = exports.ParkingAreaRatingScalarFieldEnum = exports.ParkingAreaScalarFieldEnum = exports.ParkRelayReputationScalarFieldEnum = exports.PaidParkingPromptScalarFieldEnum = exports.ParkingSessionScalarFieldEnum = exports.SavedParkingLocationScalarFieldEnum = exports.ParkingSearchSessionScalarFieldEnum = exports.ParkingHandoffScalarFieldEnum = exports.ParkingNotificationCreditScalarFieldEnum = exports.ParkingSpotScalarFieldEnum = exports.ParkingReportScalarFieldEnum = exports.FaqScalarFieldEnum = exports.BlackListedWordScalarFieldEnum = exports.PointScalarFieldEnum = exports.UserDeviceKeyScalarFieldEnum = exports.SitePolicyScalarFieldEnum = exports.BlockListScalarFieldEnum = exports.UserRatingScalarFieldEnum = exports.UsefullNumberScalarFieldEnum = exports.MessageRequestScalarFieldEnum = exports.PresetMessageScalarFieldEnum = exports.ChatScalarFieldEnum = exports.GroupChatScalarFieldEnum = exports.GroupChatRoomMemberScalarFieldEnum = exports.GroupChatRoomScalarFieldEnum = exports.ChatRoomScalarFieldEnum = exports.UserScalarFieldEnum = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.QueryMode = exports.SortOrder = void 0;
const runtime = __importStar(require("@prisma/client/runtime/library"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.19.1",
    engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    ChatRoom: 'ChatRoom',
    GroupChatRoom: 'GroupChatRoom',
    GroupChatRoomMember: 'GroupChatRoomMember',
    GroupChat: 'GroupChat',
    Chat: 'Chat',
    PresetMessage: 'PresetMessage',
    MessageRequest: 'MessageRequest',
    UsefullNumber: 'UsefullNumber',
    UserRating: 'UserRating',
    BlockList: 'BlockList',
    SitePolicy: 'SitePolicy',
    UserDeviceKey: 'UserDeviceKey',
    Point: 'Point',
    BlackListedWord: 'BlackListedWord',
    Faq: 'Faq',
    ParkingReport: 'ParkingReport',
    ParkingSpot: 'ParkingSpot',
    ParkingNotificationCredit: 'ParkingNotificationCredit',
    ParkingHandoff: 'ParkingHandoff',
    ParkingSearchSession: 'ParkingSearchSession',
    SavedParkingLocation: 'SavedParkingLocation',
    ParkingSession: 'ParkingSession',
    PaidParkingPrompt: 'PaidParkingPrompt',
    ParkRelayReputation: 'ParkRelayReputation',
    ParkingArea: 'ParkingArea',
    ParkingAreaRating: 'ParkingAreaRating',
    NotificationEvent: 'NotificationEvent',
    NotificationPreference: 'NotificationPreference',
    UserLocation: 'UserLocation',
    UserDocument: 'UserDocument',
    SupportTicket: 'SupportTicket'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    avatar: 'avatar',
    fcm_token: 'fcm_token',
    email: 'email',
    name: 'name',
    licence_id: 'licence_id',
    nick_name: 'nick_name',
    password: 'password',
    auth_provider: 'auth_provider',
    firebase_uid: 'firebase_uid',
    google_sub: 'google_sub',
    apple_sub: 'apple_sub',
    is_more_options_accepted: 'is_more_options_accepted',
    designation: 'designation',
    gender: 'gender',
    birth_year: 'birth_year',
    is_blocked: 'is_blocked',
    is_deleted: 'is_deleted',
    email_verified: 'email_verified',
    license_no_verified: 'license_no_verified',
    account_type: 'account_type',
    qr_code: 'qr_code',
    vehicle_type: 'vehicle_type',
    vehicle_model: 'vehicle_model',
    vehicle_color: 'vehicle_color',
    is_vehicle_verified: 'is_vehicle_verified',
    is_vehicle_ownership_document_submitted: 'is_vehicle_ownership_document_submitted',
    country: 'country',
    city: 'city',
    otp: 'otp',
    otp_expires: 'otp_expires',
    otp_verification_token: 'otp_verification_token',
    role: 'role',
    parking_notifications_available: 'parking_notifications_available',
    parking_reports_submitted: 'parking_reports_submitted',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChatRoomScalarFieldEnum = {
    id: 'id',
    is_deleted: 'is_deleted',
    user1_id: 'user1_id',
    user2_id: 'user2_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GroupChatRoomScalarFieldEnum = {
    id: 'id',
    name: 'name',
    image: 'image',
    is_deleted: 'is_deleted',
    group_members_count: 'group_members_count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GroupChatRoomMemberScalarFieldEnum = {
    id: 'id',
    groupChatRoom_id: 'groupChatRoom_id',
    user_id: 'user_id',
    last_read_message_id: 'last_read_message_id',
    group_role: 'group_role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GroupChatScalarFieldEnum = {
    id: 'id',
    groupChatRoom_id: 'groupChatRoom_id',
    sender_id: 'sender_id',
    message: 'message',
    type: 'type',
    encryptionType: 'encryptionType',
    encryptionVersion: 'encryptionVersion',
    senderKeyId: 'senderKeyId',
    nonce: 'nonce',
    encryptedKeys: 'encryptedKeys',
    file_url: 'file_url',
    file_name: 'file_name',
    file_size: 'file_size',
    file_mime_type: 'file_mime_type',
    durationSeconds: 'durationSeconds',
    waveform: 'waveform',
    isDeletedForEveryone: 'isDeletedForEveryone',
    deletedAt: 'deletedAt',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChatScalarFieldEnum = {
    id: 'id',
    chatRoom_id: 'chatRoom_id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    message: 'message',
    type: 'type',
    encryptionType: 'encryptionType',
    encryptionVersion: 'encryptionVersion',
    senderKeyId: 'senderKeyId',
    receiverKeyId: 'receiverKeyId',
    nonce: 'nonce',
    is_read: 'is_read',
    is_delivered: 'is_delivered',
    file_url: 'file_url',
    file_name: 'file_name',
    file_size: 'file_size',
    file_mime_type: 'file_mime_type',
    durationSeconds: 'durationSeconds',
    waveform: 'waveform',
    isDeletedForEveryone: 'isDeletedForEveryone',
    deletedAt: 'deletedAt',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PresetMessageScalarFieldEnum = {
    id: 'id',
    message: 'message',
    message_it: 'message_it',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MessageRequestScalarFieldEnum = {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    roomId: 'roomId',
    firstMessage: 'firstMessage',
    presetMessageId: 'presetMessageId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UsefullNumberScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    phone: 'phone',
    category: 'category',
    icon: 'icon',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserRatingScalarFieldEnum = {
    id: 'id',
    rater_id: 'rater_id',
    ratee_id: 'ratee_id',
    rating: 'rating',
    review: 'review',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BlockListScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    blocked_user_id: 'blocked_user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SitePolicyScalarFieldEnum = {
    id: 'id',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserDeviceKeyScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    publicKey: 'publicKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PointScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BlackListedWordScalarFieldEnum = {
    id: 'id',
    word: 'word',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FaqScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkingReportScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    latitude: 'latitude',
    longitude: 'longitude',
    parking_cost: 'parking_cost',
    electric_charging: 'electric_charging',
    disabled_facility: 'disabled_facility',
    disabled_facility_location: 'disabled_facility_location',
    is_active: 'is_active',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    spotId: 'spotId',
    updatedAt: 'updatedAt'
};
exports.ParkingSpotScalarFieldEnum = {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    parking_cost: 'parking_cost',
    electric_charging: 'electric_charging',
    disabled_facility: 'disabled_facility',
    disabled_facility_location: 'disabled_facility_location',
    is_active: 'is_active',
    available: 'available',
    createdAt: 'createdAt'
};
exports.ParkingNotificationCreditScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    parking_report_id: 'parking_report_id',
    transaction_type: 'transaction_type',
    amount: 'amount',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkingHandoffScalarFieldEnum = {
    id: 'id',
    releaserId: 'releaserId',
    seekerId: 'seekerId',
    spotId: 'spotId',
    latitude: 'latitude',
    longitude: 'longitude',
    approxLatitude: 'approxLatitude',
    approxLongitude: 'approxLongitude',
    status: 'status',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    cancelledAt: 'cancelledAt',
    foundAt: 'foundAt',
    occupiedAt: 'occupiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkingSearchSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    accuracy: 'accuracy',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SavedParkingLocationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    spotId: 'spotId',
    latitude: 'latitude',
    longitude: 'longitude',
    accuracy: 'accuracy',
    confidence: 'confidence',
    source: 'source',
    note: 'note',
    photoUrl: 'photoUrl',
    isActive: 'isActive',
    parkingType: 'parkingType',
    paidExpiresAt: 'paidExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkingSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    spotId: 'spotId',
    latitude: 'latitude',
    longitude: 'longitude',
    costType: 'costType',
    durationMin: 'durationMin',
    expiresAt: 'expiresAt',
    expiryWarningSentAt: 'expiryWarningSentAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaidParkingPromptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    savedParkingLocationId: 'savedParkingLocationId',
    status: 'status',
    answeredAt: 'answeredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkRelayReputationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    successfulHandoffs: 'successfulHandoffs',
    occupiedReports: 'occupiedReports',
    cancelledHandoffs: 'cancelledHandoffs',
    expiredHandoffs: 'expiredHandoffs',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkingAreaScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    centerLat: 'centerLat',
    centerLng: 'centerLng',
    polygon: 'polygon',
    parkingCost: 'parkingCost',
    parkingFee: 'parkingFee',
    parkingAreaTypes: 'parkingAreaTypes',
    disabledFacilityLocation: 'disabledFacilityLocation',
    totalSpots: 'totalSpots',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rating: 'rating',
    reviewCount: 'reviewCount'
};
exports.ParkingAreaRatingScalarFieldEnum = {
    id: 'id',
    parkingAreaId: 'parkingAreaId',
    userId: 'userId',
    rating: 'rating',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationEventScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    title: 'title',
    message: 'message',
    payload: 'payload',
    isRead: 'isRead',
    sentAt: 'sentAt',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationPreferenceScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    parkingNotifications: 'parkingNotifications',
    chatNotifications: 'chatNotifications',
    ratingNotifications: 'ratingNotifications',
    groupChatNotifications: 'groupChatNotifications',
    systemNotifications: 'systemNotifications',
    notificationRadius: 'notificationRadius',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserLocationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    accuracy: 'accuracy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserDocumentScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    unique_id: 'unique_id',
    expiry_date: 'expiry_date',
    document_type: 'document_type',
    document_url: 'document_url',
    is_verified: 'is_verified',
    last_expiry_notified_days: 'last_expiry_notified_days',
    expired_notified_at: 'expired_notified_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SupportTicketScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    description: 'description',
    adminReply: 'adminReply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map