import { PrismaService } from "../prisma/prisma.service";
import { SMTPProvider } from "src/common/providres/smtp.provider";
import { CreateSupportTicketDto } from "./dtos/create-support-ticket.dto";
import { ReplySupportTicketDto } from "./dtos/reply-support-ticket.dto";
export declare class HelpSupportService {
    private readonly prismaService;
    private readonly smtpProvider;
    constructor(prismaService: PrismaService, smtpProvider: SMTPProvider);
    createTicket(userId: string, dto: CreateSupportTicketDto): Promise<{
        user: {
            id: string;
            email: string;
            nick_name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        description: string;
        subject: string;
        adminReply: string | null;
    }>;
    getAllTickets(): Promise<({
        user: {
            id: string;
            email: string;
            nick_name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        description: string;
        subject: string;
        adminReply: string | null;
    })[]>;
    replyToTicket(ticketId: string, dto: ReplySupportTicketDto): Promise<{
        user: {
            id: string;
            email: string;
            nick_name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        description: string;
        subject: string;
        adminReply: string | null;
    }>;
}
