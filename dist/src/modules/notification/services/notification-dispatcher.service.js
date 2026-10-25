"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NotificationDispatcherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDispatcherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const geolocation_service_1 = require("../../../common/services/geolocation.service");
const notification_event_service_1 = require("./notification-event.service");
const notification_preference_service_1 = require("./notification-preference.service");
const firebase_provider_1 = require("../providers/firebase.provider");
const notification_event_dto_1 = require("../dtos/notification-event.dto");
let NotificationDispatcherService = NotificationDispatcherService_1 = class NotificationDispatcherService {
    prismaService;
    geolocationService;
    notificationEventService;
    notificationPreferenceService;
    firebaseClient;
    socketRoomService;
    logger = new common_1.Logger(NotificationDispatcherService_1.name);
    constructor(prismaService, geolocationService, notificationEventService, notificationPreferenceService, firebaseClient, socketRoomService) {
        this.prismaService = prismaService;
        this.geolocationService = geolocationService;
        this.notificationEventService = notificationEventService;
        this.notificationPreferenceService = notificationPreferenceService;
        this.firebaseClient = firebaseClient;
        this.socketRoomService = socketRoomService;
    }
    async isUserOnline(userId) {
        if (!this.socketRoomService)
            return false;
        try {
            return await this.socketRoomService.isUserConnected(userId);
        }
        catch {
            return false;
        }
    }
    async dispatchParkingNotification(parkingReport) {
        try {
            this.logger.log(`Dispatching parking notification for report ${parkingReport.id}`);
            const usersInRadius = await this.geolocationService.findUsersWithinRadius(parkingReport.latitude, parkingReport.longitude, 200, parkingReport.user_id);
            this.logger.log(`Found ${usersInRadius.length} users within radius for parking ${parkingReport.id}`);
            for (const user of usersInRadius) {
                try {
                    const shouldNotify = await this.notificationPreferenceService.shouldNotifyForParking(user.id, await this.getDistanceForUser(user.id, parkingReport));
                    if (!shouldNotify || !user.fcm_token) {
                        this.logger.debug(`Skipping notification for user ${user.id}`);
                        continue;
                    }
                    const hasCredits = await this.checkParkingNotificationCredits(user.id);
                    if (!hasCredits) {
                        this.logger.debug(`User ${user.id} has no parking notification credits available`);
                        continue;
                    }
                    const creditConsumed = await this.consumeParkingNotificationCredit(user.id, parkingReport.id);
                    if (!creditConsumed) {
                        this.logger.warn(`Failed to consume credit for user ${user.id}, skipping notification`);
                        continue;
                    }
                    const title = 'Parking Available!';
                    const message = this.buildParkingNotificationMessage(parkingReport);
                    const payload = {
                        parkingReportId: parkingReport.id,
                        latitude: parkingReport.latitude,
                        longitude: parkingReport.longitude,
                        parkingCost: parkingReport.parking_cost,
                        hasCharging: parkingReport.electric_charging,
                        hasDisabledFacility: parkingReport.disabled_facility,
                        reporterName: parkingReport.user?.name || parkingReport.user?.nick_name,
                    };
                    await this.notificationEventService.createEvent({
                        userId: user.id,
                        eventType: notification_event_dto_1.NotificationEventTypeEnum.PARKING_AVAILABLE,
                        title,
                        message,
                        payload,
                    });
                    const isOnline = await this.isUserOnline(user.id);
                    if (!isOnline) {
                        await this.sendPushNotification(user.fcm_token, title, message);
                    }
                    else {
                        this.logger.debug(`Skipping push notification for online user ${user.id}`);
                    }
                    this.logger.log(`Sent parking notification to user ${user.id}`);
                }
                catch (err) {
                    this.logger.error(`Failed to send notification to user ${user.id}:`, err);
                }
            }
        }
        catch (err) {
            this.logger.error(`Error dispatching parking notifications for report ${parkingReport.id}:`, err);
        }
    }
    async dispatchParkingLeaveNotification(spot, leavingUser, referenceId) {
        try {
            this.logger.log(`Dispatching parking leave notification for spot ${spot.id}`);
            const usersInRadius = await this.geolocationService.findUsersWithinRadius(spot.latitude, spot.longitude, 200, leavingUser?.id);
            this.logger.log(`Found ${usersInRadius.length} users within 200m for leaving spot ${spot.id}`);
            const leaverName = leavingUser?.nick_name || leavingUser?.name || 'A user';
            for (const user of usersInRadius) {
                try {
                    const distance = await this.getDistanceForUser(user.id, spot);
                    const shouldNotify = await this.notificationPreferenceService.shouldNotifyForParking(user.id, distance);
                    if (!shouldNotify || !user.fcm_token) {
                        continue;
                    }
                    const hasCredits = await this.checkParkingNotificationCredits(user.id);
                    if (!hasCredits) {
                        this.logger.debug(`User ${user.id} has no credits for leave notification`);
                        continue;
                    }
                    const creditConsumed = await this.consumeParkingNotificationCredit(user.id, referenceId);
                    if (!creditConsumed) {
                        continue;
                    }
                    const title = 'Parking Spot Opening Up!';
                    const message = `${leaverName} is leaving a parking spot nearby`;
                    const payload = {
                        spotId: spot.id,
                        latitude: spot.latitude,
                        longitude: spot.longitude,
                        parkingCost: spot.parking_cost,
                        hasCharging: spot.electric_charging,
                        hasDisabledFacility: spot.disabled_facility,
                        leaverName,
                        type: 'PARKING_LEAVING',
                    };
                    await this.notificationEventService.createEvent({
                        userId: user.id,
                        eventType: notification_event_dto_1.NotificationEventTypeEnum.PARKING_NEARBY,
                        title,
                        message,
                        payload,
                    });
                    const isOnline = await this.isUserOnline(user.id);
                    if (!isOnline) {
                        await this.sendPushNotification(user.fcm_token, title, message);
                    }
                    else {
                        this.logger.debug(`Skipping push notification for online user ${user.id}`);
                    }
                    this.logger.log(`Sent parking leave notification to user ${user.id}`);
                }
                catch (err) {
                    this.logger.error(`Failed to send leave notification to user ${user.id}:`, err);
                }
            }
        }
        catch (err) {
            this.logger.error(`Error dispatching parking leave notifications for spot ${spot.id}:`, err);
        }
    }
    async dispatchChatNotification(chat, receiverId) {
        try {
            const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(receiverId, 'chat');
            if (!isEnabled) {
                return;
            }
            const receiver = await this.prismaService.user.findUnique({
                where: { id: receiverId },
            });
            if (!receiver || !receiver.fcm_token) {
                return;
            }
            const isEncrypted = Boolean(chat.encryptionType);
            const title = isEncrypted
                ? 'New message'
                : `Message from ${chat.sender?.nick_name || chat.sender?.name}`;
            const message = isEncrypted
                ? 'You received an encrypted message'
                : (chat.message || '').substring(0, 100);
            const isOnline = await this.isUserOnline(receiverId);
            if (isOnline) {
                this.logger.debug(`Skipping chat notification for online user ${receiverId}`);
                return;
            }
            await this.notificationEventService.createEvent({
                userId: receiverId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.CHAT_MESSAGE,
                title,
                message,
                payload: {
                    chatId: chat.id,
                    senderId: chat.sender_id,
                    senderName: chat.sender?.nick_name || chat.sender?.name,
                },
            });
            await this.sendPushNotification(receiver.fcm_token, title, message);
            this.logger.log(`Sent chat notification to user ${receiverId}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch chat notification:`, err);
        }
    }
    async dispatchRatingNotification(rating) {
        try {
            const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(rating.ratee_id, 'rating');
            if (!isEnabled) {
                return;
            }
            const rater = await this.prismaService.user.findUnique({
                where: { id: rating.rater_id },
            });
            const ratee = await this.prismaService.user.findUnique({
                where: { id: rating.ratee_id },
            });
            if (!ratee || !ratee.fcm_token) {
                return;
            }
            const title = 'New Rating Received!';
            const message = `${rater?.nick_name || rater?.name} gave you a ${rating.rating} star rating`;
            await this.notificationEventService.createEvent({
                userId: rating.ratee_id,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.RATING_RECEIVED,
                title,
                message,
                payload: {
                    ratingId: rating.id,
                    ratingScore: rating.rating,
                    raterName: rater?.nick_name || rater?.name,
                },
            });
            const isOnline = await this.isUserOnline(rating.ratee_id);
            if (!isOnline) {
                await this.sendPushNotification(ratee.fcm_token, title, message);
            }
            else {
                this.logger.debug(`Skipping push notification for online user ${rating.ratee_id}`);
            }
            this.logger.log(`Sent rating notification to user ${rating.ratee_id}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch rating notification:`, err);
        }
    }
    async dispatchGroupChatNotification(groupChat, groupChatRoom) {
        try {
            const members = await this.prismaService.groupChatRoomMember.findMany({
                where: {
                    groupChatRoom_id: groupChatRoom.id,
                    user_id: {
                        not: groupChat.sender_id,
                    },
                },
                include: {
                    user: true,
                },
            });
            for (const member of members) {
                try {
                    const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(member.user_id, 'groupChat');
                    if (!isEnabled || !member.user.fcm_token) {
                        continue;
                    }
                    const isEncrypted = Boolean(groupChat.encryptionType);
                    const title = `${groupChatRoom.name}`;
                    const message = isEncrypted
                        ? `${groupChat.sender?.nick_name || groupChat.sender?.name}: sent an encrypted message`
                        : `${groupChat.sender?.nick_name || groupChat.sender?.name}: ${groupChat.message.substring(0, 50)}`;
                    const isOnline = await this.isUserOnline(member.user_id);
                    if (isOnline) {
                        this.logger.debug(`Skipping group chat notification for online user ${member.user_id}`);
                        continue;
                    }
                    await this.notificationEventService.createEvent({
                        userId: member.user_id,
                        eventType: notification_event_dto_1.NotificationEventTypeEnum.GROUP_CHAT_MESSAGE,
                        title,
                        message,
                        payload: {
                            groupChatRoomId: groupChatRoom.id,
                            groupChatId: groupChat.id,
                            senderId: groupChat.sender_id,
                        },
                    });
                    await this.sendPushNotification(member.user.fcm_token, title, message);
                }
                catch (err) {
                    this.logger.error(`Failed to send group chat notification to user ${member.user_id}:`, err);
                }
            }
        }
        catch (err) {
            this.logger.error(`Failed to dispatch group chat notifications:`, err);
        }
    }
    async dispatchSystemNotification(userIds, title, message, payload) {
        try {
            for (const userId of userIds) {
                try {
                    const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(userId, 'system');
                    if (!isEnabled) {
                        continue;
                    }
                    const user = await this.prismaService.user.findUnique({
                        where: { id: userId },
                    });
                    if (!user || !user.fcm_token) {
                        continue;
                    }
                    await this.notificationEventService.createEvent({
                        userId,
                        eventType: notification_event_dto_1.NotificationEventTypeEnum.SYSTEM_NOTIFICATION,
                        title,
                        message,
                        payload,
                    });
                    const isOnline = await this.isUserOnline(userId);
                    if (!isOnline) {
                        await this.sendPushNotification(user.fcm_token, title, message);
                    }
                    else {
                        this.logger.debug(`Skipping push notification for online user ${userId}`);
                    }
                }
                catch (err) {
                    this.logger.error(`Failed to send system notification to user ${userId}:`, err);
                }
            }
        }
        catch (err) {
            this.logger.error(`Failed to dispatch system notifications:`, err);
        }
    }
    async dispatchLocationNotification(latitude, longitude, radiusKm, title, message, emailSubject, sendEmail = true, sendPushNotification = true, smtpProvider) {
        const radiusMeters = radiusKm * 1000;
        let notificationsSent = 0;
        let emailsSent = 0;
        let failedCount = 0;
        try {
            this.logger.log(`Dispatching location-based notification. Location: (${latitude}, ${longitude}), Radius: ${radiusKm}km`);
            const usersInRadius = await this.geolocationService.findUsersWithinRadius(latitude, longitude, radiusMeters);
            this.logger.log(`Found ${usersInRadius.length} users within ${radiusKm}km radius`);
            for (const user of usersInRadius) {
                try {
                    const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(user.id, 'system');
                    if (!isEnabled) {
                        this.logger.debug(`System notifications disabled for user ${user.id}`);
                        continue;
                    }
                    let sent = false;
                    if (sendPushNotification && user.fcm_token) {
                        const userIsOnline = await this.isUserOnline(user.id);
                        if (userIsOnline) {
                            this.logger.debug(`Skipping push notification for online user ${user.id}`);
                        }
                        else {
                            try {
                                await this.sendPushNotification(user.fcm_token, title, message);
                                notificationsSent++;
                                sent = true;
                                this.logger.debug(`Push notification sent to user ${user.id}`);
                            }
                            catch (err) {
                                this.logger.error(`Failed to send push notification to user ${user.id}:`, err);
                                failedCount++;
                            }
                        }
                    }
                    if (sendEmail && user.email && smtpProvider) {
                        try {
                            const locationNotificationTemplate = require('../../../common/templates/locationNotification.template').default;
                            const emailBody = locationNotificationTemplate({
                                userName: user.name || user.nick_name,
                                title,
                                message,
                                location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
                            });
                            await smtpProvider.sendMail(user.email, emailSubject || title, emailBody);
                            emailsSent++;
                            this.logger.debug(`Email sent to user ${user.id}`);
                        }
                        catch (err) {
                            this.logger.error(`Failed to send email to user ${user.id}:`, err);
                            failedCount++;
                        }
                    }
                    if (sent) {
                        try {
                            await this.notificationEventService.createEvent({
                                userId: user.id,
                                eventType: notification_event_dto_1.NotificationEventTypeEnum.SYSTEM_NOTIFICATION,
                                title,
                                message,
                                payload: {
                                    latitude,
                                    longitude,
                                    radiusKm,
                                    type: 'LOCATION_BASED',
                                },
                            });
                        }
                        catch (err) {
                            this.logger.error(`Failed to create notification event for user ${user.id}:`, err);
                        }
                    }
                }
                catch (err) {
                    this.logger.error(`Error processing notification for user ${user.id}:`, err);
                    failedCount++;
                }
            }
            this.logger.log(`Location-based notification dispatch completed. Sent: ${notificationsSent} push, ${emailsSent} emails, Failed: ${failedCount}`);
            return {
                totalUsersFound: usersInRadius.length,
                notificationsSent,
                emailsSent,
                failedCount,
            };
        }
        catch (err) {
            this.logger.error(`Error dispatching location-based notifications:`, err);
            throw err;
        }
    }
    async sendPushNotification(fcmToken, title, message) {
        try {
            await this.firebaseClient.sendPushNotification(fcmToken, title, message);
        }
        catch (err) {
            this.logger.error(`Failed to send push notification via FCM:`, err);
        }
    }
    buildParkingNotificationMessage(parkingReport) {
        const details = [];
        if (parkingReport.parking_cost === 'FREE') {
            details.push('🆓 Free');
        }
        else if (parkingReport.parking_cost === 'PAID') {
            details.push('💵 Paid');
        }
        if (parkingReport.electric_charging) {
            details.push('⚡ Charging');
        }
        if (parkingReport.disabled_facility) {
            details.push('♿ Accessible');
        }
        if (details.length > 0) {
            return `${details.join(' • ')}`;
        }
        return 'Parking spot available';
    }
    async getDistanceForUser(userId, location) {
        const userLocation = await this.geolocationService.getUserLocation(userId);
        if (!userLocation) {
            return Infinity;
        }
        return this.geolocationService.calculateDistance(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude);
    }
    async checkParkingNotificationCredits(userId) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
                select: {
                    parking_notifications_available: true,
                },
            });
            if (!user) {
                return false;
            }
            return user.parking_notifications_available > 0;
        }
        catch (err) {
            this.logger.error(`Error checking parking notification credits for user ${userId}:`, err);
            return false;
        }
    }
    async consumeParkingNotificationCredit(userId, parkingReportId) {
        try {
            const updatedUser = await this.prismaService.user.update({
                where: { id: userId },
                data: {
                    parking_notifications_available: { decrement: 1 },
                },
            });
            await this.prismaService.parkingNotificationCredit.create({
                data: {
                    user_id: userId,
                    parking_report_id: parkingReportId,
                    transaction_type: 'CONSUMED',
                    amount: -1,
                    balance: updatedUser.parking_notifications_available,
                },
            });
            this.logger.log(`Parking notification credit consumed for user ${userId}. Remaining balance: ${updatedUser.parking_notifications_available}`);
            return true;
        }
        catch (err) {
            this.logger.error(`Error consuming parking notification credit for user ${userId}: ${err.message}`);
            return false;
        }
    }
    async dispatchDocumentExpiryNotification(user, document, daysUntilExpiry) {
        try {
            this.logger.log(`Dispatching document expiry notification for user ${user.id}`);
            const isNotificationEnabled = await this.notificationPreferenceService.isNotificationEnabled(user.id, 'document');
            if (!isNotificationEnabled || !user.fcm_token) {
                this.logger.debug(`User ${user.id} has notifications disabled or no FCM token`);
                return;
            }
            const eventPayload = {
                documentId: document.id,
                documentType: document.document_type,
                expiryDate: document.expiry_date,
                daysUntilExpiry: daysUntilExpiry,
            };
            await this.notificationEventService.createEvent({
                userId: user.id,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.DOCUMENT_EXPIRING_SOON,
                title: `Your ${document.document_type} Document Expiring Soon`,
                message: `Your ${document.document_type} document will expire in ${daysUntilExpiry} days. Please renew it to avoid service interruption.`,
                payload: eventPayload,
            });
            const isOnline = await this.isUserOnline(user.id);
            if (!isOnline) {
                await this.firebaseClient.sendPushNotification(user.fcm_token, `${document.document_type} Document Expiring Soon`, `Your document expires in ${daysUntilExpiry} days. Please renew it now.`);
            }
            else {
                this.logger.debug(`Skipping push notification for online user ${user.id}`);
            }
            this.logger.log(`Document expiry notification sent to user ${user.id} for ${document.document_type}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch document expiry notification for user ${user.id}:`, err);
        }
    }
    async dispatchDocumentExpiredNotification(user, document) {
        try {
            this.logger.log(`Dispatching document expired notification for user ${user.id}`);
            const isNotificationEnabled = await this.notificationPreferenceService.isNotificationEnabled(user.id, 'document');
            if (!isNotificationEnabled || !user.fcm_token) {
                this.logger.debug(`User ${user.id} has notifications disabled or no FCM token`);
                return;
            }
            const eventPayload = {
                documentId: document.id,
                documentType: document.document_type,
                expiryDate: document.expiry_date,
            };
            await this.notificationEventService.createEvent({
                userId: user.id,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.DOCUMENT_EXPIRED,
                title: `Your ${document.document_type} Document Has Expired`,
                message: `Your ${document.document_type} document has expired. You must renew it immediately to continue using our services.`,
                payload: eventPayload,
            });
            const isOnline = await this.isUserOnline(user.id);
            if (!isOnline) {
                await this.firebaseClient.sendPushNotification(user.fcm_token, `⚠️ ${document.document_type} Document Expired`, 'Your document has expired. Please renew it immediately.');
            }
            else {
                this.logger.debug(`Skipping push notification for online user ${user.id}`);
            }
            this.logger.log(`Document expired notification sent to user ${user.id} for ${document.document_type}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch document expired notification for user ${user.id}:`, err);
        }
    }
    async dispatchAdminNotification(title, message, payload) {
        try {
            this.logger.log(`Dispatching admin notification: "${title}"`);
            const admins = await this.prismaService.user.findMany({
                where: {
                    role: 'ADMIN',
                    is_deleted: false,
                },
            });
            this.logger.log(`Found ${admins.length} admin users to notify`);
            for (const admin of admins) {
                try {
                    const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(admin.id, 'system');
                    if (!isEnabled) {
                        continue;
                    }
                    await this.notificationEventService.createEvent({
                        userId: admin.id,
                        eventType: notification_event_dto_1.NotificationEventTypeEnum.SYSTEM_NOTIFICATION,
                        title,
                        message,
                        payload,
                    });
                    if (admin.fcm_token) {
                        const isOnline = await this.isUserOnline(admin.id);
                        if (!isOnline) {
                            await this.sendPushNotification(admin.fcm_token, title, message);
                        }
                        else {
                            this.logger.debug(`Skipping push notification for online admin ${admin.id}`);
                        }
                    }
                }
                catch (err) {
                    this.logger.error(`Failed to send admin notification to admin user ${admin.id}:`, err);
                }
            }
        }
        catch (err) {
            this.logger.error('Failed to dispatch admin notification:', err);
        }
    }
    async dispatchGroupAddedNotification(groupChatRoomId, groupRoomName, userId) {
        try {
            this.logger.log(`Dispatching group added notification for user ${userId} and room ${groupChatRoomId}`);
            const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(userId, 'groupChat');
            if (!isEnabled) {
                return;
            }
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                return;
            }
            const title = 'Added to Group Chat';
            const message = `You have been added to the group chat "${groupRoomName}"`;
            await this.notificationEventService.createEvent({
                userId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.GROUP_CHAT_ADDED,
                title,
                message,
                payload: {
                    groupChatRoomId,
                    groupRoomName,
                },
            });
            if (user.fcm_token) {
                const isOnline = await this.isUserOnline(userId);
                if (!isOnline) {
                    await this.sendPushNotification(user.fcm_token, title, message);
                }
                else {
                    this.logger.debug(`Skipping push notification for online user ${userId}`);
                }
            }
            this.logger.log(`Sent group added notification to user ${userId}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch group added notification for user ${userId}:`, err);
        }
    }
    async dispatchGroupRemovedNotification(groupChatRoomId, groupRoomName, userId) {
        try {
            this.logger.log(`Dispatching group removed notification for user ${userId} and room ${groupChatRoomId}`);
            const isEnabled = await this.notificationPreferenceService.isNotificationEnabled(userId, 'groupChat');
            if (!isEnabled) {
                return;
            }
            const user = await this.prismaService.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                return;
            }
            const title = 'Removed from Group Chat';
            const message = `You have been removed from the group chat "${groupRoomName}"`;
            await this.notificationEventService.createEvent({
                userId,
                eventType: notification_event_dto_1.NotificationEventTypeEnum.GROUP_CHAT_REMOVED,
                title,
                message,
                payload: {
                    groupChatRoomId,
                    groupRoomName,
                },
            });
            if (user.fcm_token) {
                const isOnline = await this.isUserOnline(userId);
                if (!isOnline) {
                    await this.sendPushNotification(user.fcm_token, title, message);
                }
                else {
                    this.logger.debug(`Skipping push notification for online user ${userId}`);
                }
            }
            this.logger.log(`Sent group removed notification to user ${userId}`);
        }
        catch (err) {
            this.logger.error(`Failed to dispatch group removed notification for user ${userId}:`, err);
        }
    }
};
exports.NotificationDispatcherService = NotificationDispatcherService;
exports.NotificationDispatcherService = NotificationDispatcherService = NotificationDispatcherService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, common_1.Optional)()),
    __param(5, (0, common_1.Inject)('SOCKET_ROOM_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        geolocation_service_1.GeolocationService,
        notification_event_service_1.NotificationEventService,
        notification_preference_service_1.NotificationPreferenceService,
        firebase_provider_1.FireBaseClient, Object])
], NotificationDispatcherService);
//# sourceMappingURL=notification-dispatcher.service.js.map