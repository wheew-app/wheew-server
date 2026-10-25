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
var UserDocumentController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const enums_1 = require("../../../generated/prisma/enums");
const user_document_service_1 = require("./services/user-document.service");
const document_expiry_check_service_1 = require("./services/document-expiry-check.service");
const user_document_dto_1 = require("./dtos/user-document.dto");
const apiResponseMessage_decorator_1 = require("../../common/decorators/apiResponseMessage.decorator");
const role_decorator_1 = require("../../common/decorators/role.decorator");
let UserDocumentController = UserDocumentController_1 = class UserDocumentController {
    userDocumentService;
    documentExpiryCheckService;
    logger = new common_1.Logger(UserDocumentController_1.name);
    constructor(userDocumentService, documentExpiryCheckService) {
        this.userDocumentService = userDocumentService;
        this.documentExpiryCheckService = documentExpiryCheckService;
    }
    toUserDocumentResponse(document) {
        return {
            id: document.id,
            unique_id: document.unique_id,
            document_type: document.document_type,
            document_url: document.document_url,
            expiry_date: document.expiry_date ? document.expiry_date.toISOString().split('T')[0] : null,
            is_verified: document.is_verified,
            isExpired: document.isExpired,
            daysUntilExpiry: document.daysUntilExpiry,
        };
    }
    rethrow(err, fallbackMessage) {
        if (err instanceof common_1.HttpException) {
            throw err;
        }
        throw new common_1.HttpException(err?.message || fallbackMessage, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async uploadDocument(request, file, uploadDto) {
        try {
            const payload = request['payload'];
            this.logger.log(`User ${payload.id} uploading ${uploadDto.document_type} document${file ? ` with file: ${file.filename}` : ''}`);
            const documentUrl = file
                ? `/uploads/documents/${file.filename}`
                : uploadDto.document_url;
            const fullUploadDto = {
                document_type: uploadDto.document_type,
                unique_id: uploadDto.unique_id,
                expiry_date: uploadDto.expiry_date,
                document_url: documentUrl,
            };
            const document = await this.userDocumentService.uploadDocument(payload.id, fullUploadDto);
            return this.toUserDocumentResponse(document);
        }
        catch (err) {
            this.logger.error(`Error uploading document: ${err.message}`);
            this.rethrow(err, 'Failed to upload document');
        }
    }
    async getUserDocuments(request) {
        try {
            const payload = request['payload'];
            this.logger.log(`Fetching documents for user ${payload.id}`);
            const documents = await this.userDocumentService.getUserDocuments(payload.id);
            const documentsDto = documents.map((doc) => this.toUserDocumentResponse(doc));
            return {
                documents: documentsDto,
            };
        }
        catch (err) {
            this.logger.error(`Error fetching documents: ${err.message}`);
            this.rethrow(err, 'Failed to fetch documents');
        }
    }
    async getDocumentById(request, documentId) {
        try {
            const payload = request['payload'];
            this.logger.log(`Fetching document ${documentId} for user ${payload.id}`);
            const document = await this.userDocumentService.getDocumentById(documentId, payload.id);
            return this.toUserDocumentResponse(document);
        }
        catch (err) {
            this.logger.error(`Error fetching document: ${err.message}`);
            this.rethrow(err, 'Failed to fetch document');
        }
    }
    async getDocumentByType(request, documentType) {
        try {
            const payload = request['payload'];
            this.logger.log(`Fetching ${documentType} document for user ${payload.id}`);
            const document = await this.userDocumentService.getDocumentByType(payload.id, documentType);
            return this.toUserDocumentResponse(document);
        }
        catch (err) {
            this.logger.error(`Error fetching document by type: ${err.message}`);
            this.rethrow(err, 'Document not found');
        }
    }
    async updateDocument(request, documentId, file, updateDto) {
        try {
            const payload = request['payload'];
            this.logger.log(`Updating document ${documentId} for user ${payload.id}`);
            let finalUpdateDto = {};
            if (file) {
                finalUpdateDto.document_url = `/uploads/documents/${file.filename}`;
                this.logger.log(`Document ${documentId} updated with new file: ${file.filename}`);
            }
            if (!file && updateDto.document_url !== undefined) {
                finalUpdateDto.document_url = updateDto.document_url;
            }
            if (updateDto.unique_id !== undefined) {
                finalUpdateDto.unique_id = updateDto.unique_id;
            }
            if (updateDto.expiry_date) {
                finalUpdateDto.expiry_date = updateDto.expiry_date;
            }
            if (updateDto.document_type) {
                finalUpdateDto.document_type = updateDto.document_type;
            }
            const document = await this.userDocumentService.updateDocument(documentId, payload.id, finalUpdateDto);
            return this.toUserDocumentResponse(document);
        }
        catch (err) {
            this.logger.error(`Error updating document: ${err.message}`);
            this.rethrow(err, 'Failed to update document');
        }
    }
    async deleteDocument(request, documentId) {
        try {
            const payload = request['payload'];
            this.logger.log(`Deleting document ${documentId} for user ${payload.id}`);
            await this.userDocumentService.deleteDocument(documentId, payload.id);
            return { message: 'Document deleted successfully' };
        }
        catch (err) {
            this.logger.error(`Error deleting document: ${err.message}`);
            this.rethrow(err, 'Failed to delete document');
        }
    }
    async getDocumentExpiryWarnings(request) {
        try {
            const payload = request['payload'];
            this.logger.log(`Fetching expiry warnings for user ${payload.id}`);
            const warnings = await this.userDocumentService.getDocumentExpiryWarnings(payload.id);
            const mapDocuments = (docs) => docs.map((doc) => this.toUserDocumentResponse(doc));
            return {
                expired: mapDocuments(warnings.expiredDocuments),
                expiring: mapDocuments(warnings.expiringDocuments),
                hasWarnings: warnings.expiredDocuments.length > 0 || warnings.expiringDocuments.length > 0,
            };
        }
        catch (err) {
            this.logger.error(`Error fetching expiry warnings: ${err.message}`);
            this.rethrow(err, 'Failed to fetch expiry warnings');
        }
    }
    async manualCheckExpiringDocuments() {
        try {
            this.logger.log('Manual document expiry check triggered');
            await this.documentExpiryCheckService.manualCheckExpiringDocuments();
            return {
                message: 'Document expiry check completed successfully. Notifications sent to affected users.',
            };
        }
        catch (err) {
            this.logger.error(`Error during manual expiry check: ${err.message}`);
            this.rethrow(err, 'Failed to run expiry check');
        }
    }
    async getAllUserDocumentsAdmin(request, userId) {
        try {
            const payload = request['payload'];
            this.logger.log(`Admin ${payload.id} fetching user documents${userId ? ` for user ${userId}` : ' (all users)'}`);
            const documents = await this.userDocumentService.getAllUserDocumentsForAdmin(userId);
            const documentsDto = documents.map((doc) => ({
                id: doc.id,
                user_id: doc.user_id,
                unique_id: doc.unique_id,
                document_type: doc.document_type,
                document_url: doc.document_url,
                expiry_date: doc.expiry_date ? doc.expiry_date.toISOString().split('T')[0] : null,
                is_verified: doc.is_verified,
                isExpired: doc.isExpired,
                daysUntilExpiry: doc.daysUntilExpiry,
                createdAt: doc.createdAt,
                updatedAt: doc.updatedAt,
                user: doc.user,
            }));
            return {
                documents: documentsDto,
                total: documentsDto.length,
            };
        }
        catch (err) {
            this.logger.error(`Error fetching user documents: ${err.message}`);
            this.rethrow(err, 'Failed to fetch user documents');
        }
    }
    async verifyDocument(documentId, is_verified) {
        if (is_verified === undefined) {
            throw new common_1.BadRequestException('is_verified body parameter is required');
        }
        return this.userDocumentService.verifyDocument(documentId, is_verified);
    }
};
exports.UserDocumentController = UserDocumentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 10 * 1024 * 1024 },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/documents',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const [fileName, ext] = file.originalname.split('.');
                cb(null, `doc_${uuid}.${ext}`);
            },
        }),
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document uploaded successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, user_document_dto_1.UploadUserDocumentFileDto]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Get)(),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Documents retrieved successfully'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "getUserDocuments", null);
__decorate([
    (0, common_1.Get)(':documentId'),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document retrieved successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('documentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "getDocumentById", null);
__decorate([
    (0, common_1.Get)('type/:documentType'),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document retrieved successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('documentType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "getDocumentByType", null);
__decorate([
    (0, common_1.Patch)(':documentId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 10 * 1024 * 1024 },
        fileFilter: (req, file, cb) => {
            cb(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/documents',
            filename: (req, file, cb) => {
                const uuid = (0, crypto_1.randomUUID)().toString();
                const [fileName, ext] = file.originalname.split('.');
                cb(null, `doc_${uuid}.${ext}`);
            },
        }),
    })),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document updated successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('documentId')),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, Object, user_document_dto_1.UpdateUserDocumentFileDto]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Delete)(':documentId'),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document deleted successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('documentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "deleteDocument", null);
__decorate([
    (0, common_1.Get)('warnings/expiry'),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Expiry warnings retrieved successfully'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "getDocumentExpiryWarnings", null);
__decorate([
    (0, common_1.Post)('check-expiry/manual'),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document expiry check completed successfully'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "manualCheckExpiringDocuments", null);
__decorate([
    (0, common_1.Get)('admin/documents'),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('User documents retrieved successfully'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "getAllUserDocumentsAdmin", null);
__decorate([
    (0, common_1.Patch)('admin/verify/:documentId'),
    (0, role_decorator_1.Roles)(enums_1.UserRole.ADMIN),
    (0, apiResponseMessage_decorator_1.ResponseMessage)('Document verification status updated successfully'),
    __param(0, (0, common_1.Param)('documentId')),
    __param(1, (0, common_1.Body)('is_verified')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], UserDocumentController.prototype, "verifyDocument", null);
exports.UserDocumentController = UserDocumentController = UserDocumentController_1 = __decorate([
    (0, common_1.Controller)('user-documents'),
    __metadata("design:paramtypes", [user_document_service_1.UserDocumentService,
        document_expiry_check_service_1.DocumentExpiryCheckService])
], UserDocumentController);
//# sourceMappingURL=user-document.controller.js.map