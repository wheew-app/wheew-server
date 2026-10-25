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
var DocumentExpiryCheckService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentExpiryCheckService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const user_document_service_1 = require("./user-document.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const notification_dispatcher_service_1 = require("../../notification/services/notification-dispatcher.service");
let DocumentExpiryCheckService = DocumentExpiryCheckService_1 = class DocumentExpiryCheckService {
    userDocumentService;
    prismaService;
    notificationDispatcher;
    logger = new common_1.Logger(DocumentExpiryCheckService_1.name);
    THRESHOLDS = [...user_document_service_1.UserDocumentService.EXPIRY_NOTIFICATION_THRESHOLDS].sort((a, b) => a - b);
    constructor(userDocumentService, prismaService, notificationDispatcher) {
        this.userDocumentService = userDocumentService;
        this.prismaService = prismaService;
        this.notificationDispatcher = notificationDispatcher;
    }
    async runDailyExpiryChecks() {
        await this.checkExpiringDocuments();
        await this.checkExpiredDocuments();
    }
    async checkExpiringDocuments() {
        try {
            this.logger.log('Starting document expiry check...');
            const maxThreshold = this.THRESHOLDS[this.THRESHOLDS.length - 1];
            const expiringDocuments = await this.userDocumentService.getAllExpiringDocuments(maxThreshold);
            this.logger.log(`Found ${expiringDocuments.length} documents expiring within ${maxThreshold} days`);
            for (const doc of expiringDocuments) {
                try {
                    if (!doc.expiry_date) {
                        this.logger.warn(`Skipping document ${doc.id} because it has no expiry date`);
                        continue;
                    }
                    const daysUntilExpiry = this.calculateDaysUntilExpiry(doc.expiry_date);
                    const lastNotifiedDays = doc.last_expiry_notified_days;
                    const thresholdToNotify = this.THRESHOLDS.find((threshold) => daysUntilExpiry <= threshold &&
                        (lastNotifiedDays === null || lastNotifiedDays === undefined || lastNotifiedDays > threshold));
                    if (thresholdToNotify === undefined) {
                        continue;
                    }
                    if (!doc.user.fcm_token) {
                        continue;
                    }
                    await this.notificationDispatcher.dispatchDocumentExpiryNotification(doc.user, doc, daysUntilExpiry);
                    await this.prismaService.userDocument.update({
                        where: { id: doc.id },
                        data: { last_expiry_notified_days: thresholdToNotify },
                    });
                    this.logger.debug(`Sent ${thresholdToNotify}-day expiry notification for ${doc.document_type} document to user ${doc.user.id} (actual days left: ${daysUntilExpiry})`);
                }
                catch (err) {
                    this.logger.error(`Failed to send notification for document ${doc.id}:`, err);
                }
            }
            this.logger.log('Document expiry check completed');
        }
        catch (err) {
            this.logger.error('Error during document expiry check:', err);
        }
    }
    async checkExpiredDocuments() {
        try {
            this.logger.log('Starting expired document check...');
            const expiredDocuments = await this.userDocumentService.getAllExpiredDocuments();
            this.logger.log(`Found ${expiredDocuments.length} expired documents pending notification`);
            for (const doc of expiredDocuments) {
                try {
                    if (!doc.user.fcm_token) {
                        continue;
                    }
                    await this.notificationDispatcher.dispatchDocumentExpiredNotification(doc.user, doc);
                    await this.prismaService.userDocument.update({
                        where: { id: doc.id },
                        data: { expired_notified_at: new Date() },
                    });
                    this.logger.debug(`Sent expired notification for ${doc.document_type} document to user ${doc.user.id}`);
                }
                catch (err) {
                    this.logger.error(`Failed to send expired notification for document ${doc.id}:`, err);
                }
            }
            this.logger.log('Expired document check completed');
        }
        catch (err) {
            this.logger.error('Error during expired document check:', err);
        }
    }
    async manualCheckExpiringDocuments() {
        this.logger.log('Manual trigger: checking expiring documents...');
        await this.checkExpiringDocuments();
    }
    calculateDaysUntilExpiry(expiryDate) {
        if (!expiryDate) {
            return -1;
        }
        const now = new Date();
        const diffTime = expiryDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
};
exports.DocumentExpiryCheckService = DocumentExpiryCheckService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_9AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentExpiryCheckService.prototype, "runDailyExpiryChecks", null);
exports.DocumentExpiryCheckService = DocumentExpiryCheckService = DocumentExpiryCheckService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_document_service_1.UserDocumentService,
        prisma_service_1.PrismaService,
        notification_dispatcher_service_1.NotificationDispatcherService])
], DocumentExpiryCheckService);
//# sourceMappingURL=document-expiry-check.service.js.map