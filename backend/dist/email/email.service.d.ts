import { ConfigService } from '@nestjs/config';
export interface EmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
    attachments?: any[];
    cc?: string | string[];
    bcc?: string | string[];
}
export interface TransactionalEmailData {
    recipientName: string;
    recipientEmail: string;
}
export type EmailTemplateType = 'verification' | 'welcome' | 'passwordReset' | 'passwordChanged' | 'loginAlert' | 'accountLocked' | 'newsletter' | 'notification';
export declare class EmailService {
    private configService;
    private transporter;
    private readonly logger;
    private readonly fromAddress;
    private readonly fromName;
    constructor(configService: ConfigService);
    private initializeTransporter;
    sendEmail(options: EmailOptions): Promise<boolean>;
    sendBulkEmails(emailList: EmailOptions[]): Promise<{
        success: number;
        failed: number;
    }>;
    private getBaseTemplate;
    sendVerificationCode(email: string, code: string, name?: string): Promise<boolean>;
    sendWelcomeEmail(email: string, name: string): Promise<boolean>;
    sendPasswordResetEmail(email: string, resetToken: string, name?: string): Promise<boolean>;
    sendPasswordChangedEmail(email: string, name?: string): Promise<boolean>;
    sendLoginAlertEmail(email: string, loginData: {
        ip: string;
        device: string;
        location?: string;
        time: Date;
    }, name?: string): Promise<boolean>;
    sendAccountLockedEmail(email: string, unlockTime: Date, name?: string): Promise<boolean>;
    private stripHtml;
    verifyConnection(): Promise<boolean>;
}
