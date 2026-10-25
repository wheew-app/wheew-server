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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpSupportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const smtp_provider_1 = require("../../common/providres/smtp.provider");
let HelpSupportService = class HelpSupportService {
    prismaService;
    smtpProvider;
    constructor(prismaService, smtpProvider) {
        this.prismaService = prismaService;
        this.smtpProvider = smtpProvider;
    }
    async createTicket(userId, dto) {
        return this.prismaService.supportTicket.create({
            data: {
                userId,
                subject: dto.subject,
                description: dto.description,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        email: true,
                    },
                },
            },
        });
    }
    async getAllTickets() {
        return this.prismaService.supportTicket.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async replyToTicket(ticketId, dto) {
        const ticket = await this.prismaService.supportTicket.findUnique({
            where: { id: ticketId },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        email: true,
                    },
                },
            },
        });
        if (!ticket) {
            throw new common_1.NotFoundException("Support ticket not found");
        }
        const updatedTicket = await this.prismaService.supportTicket.update({
            where: { id: ticketId },
            data: {
                adminReply: dto.reply,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        nick_name: true,
                        email: true,
                    },
                },
            },
        });
        if (ticket.user && ticket.user.email) {
            const emailBody = `
                <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
                    <h2>Support Ticket Response</h2>
                    <p>Hello <strong>${ticket.user.nick_name || "User"}</strong>,</p>
                    <p>We have responded to your support ticket regarding: <em>"${ticket.subject}"</em>.</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Your Message:</strong></p>
                    <blockquote style="background: #f9f9f9; border-left: 5px solid #ccc; padding: 10px; margin: 0 0 20px 0;">
                        ${ticket.description}
                    </blockquote>
                    <p><strong>Admin Response:</strong></p>
                    <blockquote style="background: #f0f8ff; border-left: 5px solid #008080; padding: 10px; margin: 0 0 20px 0;">
                        ${dto.reply}
                    </blockquote>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p>Best regards,<br/>Support Team</p>
                </div>
            `;
            await this.smtpProvider.sendMail(ticket.user.email, `Support Ticket Response: ${ticket.subject}`, emailBody);
        }
        return updatedTicket;
    }
};
exports.HelpSupportService = HelpSupportService;
exports.HelpSupportService = HelpSupportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        smtp_provider_1.SMTPProvider])
], HelpSupportService);
//# sourceMappingURL=help-support.service.js.map