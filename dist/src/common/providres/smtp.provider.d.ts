import type { ConfigType } from "@nestjs/config";
import { MailerConfig } from "src/config/mailer.config";
export declare class SMTPProvider {
    private readonly mailerConfiguration;
    private transporter;
    constructor(mailerConfiguration: ConfigType<typeof MailerConfig>);
    sendMail(to: string, subject: string, body: string): Promise<void>;
}
