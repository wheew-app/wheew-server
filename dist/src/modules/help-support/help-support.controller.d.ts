import { HelpSupportService } from "./help-support.service";
import { CreateSupportTicketDto } from "./dtos/create-support-ticket.dto";
import { ReplySupportTicketDto } from "./dtos/reply-support-ticket.dto";
export declare class HelpSupportController {
    private readonly helpSupportService;
    constructor(helpSupportService: HelpSupportService);
    createTicket(userId: string, createDto: CreateSupportTicketDto): Promise<{
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
    replyToTicket(ticketId: string, replyDto: ReplySupportTicketDto): Promise<{
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
