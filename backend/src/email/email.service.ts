import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

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

export type EmailTemplateType =
    | 'verification'
    | 'welcome'
    | 'passwordReset'
    | 'passwordChanged'
    | 'loginAlert'
    | 'accountLocked'
    | 'newsletter'
    | 'notification';

@Injectable()
export class EmailService {
    private transporter: Transporter;
    private readonly logger = new Logger(EmailService.name);
    private readonly fromAddress: string;
    private readonly fromName = 'Lutfi-Lab.ID';

    constructor(private configService: ConfigService) {
        this.fromAddress = this.configService.get<string>('EMAIL_USER') || 'noreply@lutfi-lab.id';
        this.initializeTransporter();
    }

    private initializeTransporter(): void {
        const emailHost = this.configService.get<string>('EMAIL_HOST') || 'smtp.gmail.com';
        const emailPort = this.configService.get<number>('EMAIL_PORT') || 587;
        const emailSecure = this.configService.get<boolean>('EMAIL_SECURE') || false;
        const emailUser = this.configService.get<string>('EMAIL_USER');
        const emailPass = this.configService.get<string>('EMAIL_PASS');

        // Check if using Gmail service (simplified config)
        const useGmail = emailHost.includes('gmail');

        if (useGmail) {
            this.transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: emailUser,
                    pass: emailPass,
                },
            });
        } else {
            // Generic SMTP configuration
            this.transporter = nodemailer.createTransport({
                host: emailHost,
                port: emailPort,
                secure: emailSecure,
                auth: {
                    user: emailUser,
                    pass: emailPass,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
        }

        // Verify connection
        this.transporter.verify()
            .then(() => this.logger.log('✅ SMTP Email transporter connected successfully'))
            .catch((err) => this.logger.error('❌ SMTP connection failed:', err.message));
    }

    // ==========================================
    // CORE EMAIL SENDING
    // ==========================================

    async sendEmail(options: EmailOptions): Promise<boolean> {
        try {
            const info = await this.transporter.sendMail({
                from: `"${this.fromName}" <${this.fromAddress}>`,
                to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
                cc: options.cc,
                bcc: options.bcc,
                subject: options.subject,
                html: options.html,
                text: options.text || this.stripHtml(options.html),
                attachments: options.attachments,
            });

            this.logger.log(`📧 Email sent successfully to ${options.to} - MessageId: ${info.messageId}`);
            return true;
        } catch (error) {
            this.logger.error(`❌ Failed to send email to ${options.to}:`, error.message);
            return false;
        }
    }

    async sendBulkEmails(emailList: EmailOptions[]): Promise<{ success: number; failed: number }> {
        let success = 0;
        let failed = 0;

        for (const email of emailList) {
            const result = await this.sendEmail(email);
            if (result) success++;
            else failed++;
        }

        this.logger.log(`📊 Bulk email complete: ${success} sent, ${failed} failed`);
        return { success, failed };
    }

    // ==========================================
    // TRANSACTIONAL EMAIL TEMPLATES
    // ==========================================

    private getBaseTemplate(content: string, title: string): string {
        return `
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>${title}</title>
            <!--[if mso]>
            <noscript>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
            </noscript>
            <![endif]-->
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
                table { border-collapse: collapse; }
                img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
            </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%); min-height: 100vh;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="min-height: 100vh;">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <!-- Main Container -->
                        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: rgba(15, 15, 35, 0.98); border-radius: 24px; border: 1px solid rgba(99, 102, 241, 0.3); box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(99, 102, 241, 0.15);">
                            
                            <!-- Header with Logo -->
                            <tr>
                                <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center">
                                                <!-- Logo Icon -->
                                                <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%); border-radius: 20px; box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);">
                                                    <table role="presentation" width="80" height="80" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td align="center" valign="middle" style="font-size: 36px;">🔐</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <!-- Brand Name -->
                                                <h1 style="margin: 0; font-size: 32px; font-weight: 800;">
                                                    <span style="background: linear-gradient(135deg, #6366f1, #a855f7, #d946ef); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Lutfi-Lab</span><span style="color: #ffffff;">.ID</span>
                                                </h1>
                                                <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Platform Teknologi & Keamanan Siber</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            ${content}
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px 40px 40px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
                                    <!-- Social Links -->
                                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto 20px;">
                                        <tr>
                                            <td style="padding: 0 8px;">
                                                <a href="#" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; text-align: center; line-height: 36px; text-decoration: none;">💼</a>
                                            </td>
                                            <td style="padding: 0 8px;">
                                                <a href="#" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; text-align: center; line-height: 36px; text-decoration: none;">📧</a>
                                            </td>
                                            <td style="padding: 0 8px;">
                                                <a href="#" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; text-align: center; line-height: 36px; text-decoration: none;">🌐</a>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.4); font-size: 12px;">
                                        © ${new Date().getFullYear()} Lutfi-Lab.ID. All rights reserved.
                                    </p>
                                    <p style="margin: 0; color: rgba(255, 255, 255, 0.3); font-size: 11px;">
                                        Developed by <strong style="color: rgba(99, 102, 241, 0.8);">Muhammad Lutfi Muzaki</strong>
                                    </p>
                                </td>
                            </tr>
                        </table>
                        
                        <!-- Unsubscribe -->
                        <p style="margin: 20px 0 0; color: rgba(255, 255, 255, 0.3); font-size: 11px;">
                            Anda menerima email ini karena terdaftar di Lutfi-Lab.ID
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `;
    }

    // ==========================================
    // 1. VERIFICATION CODE EMAIL
    // ==========================================
    async sendVerificationCode(email: string, code: string, name?: string): Promise<boolean> {
        const content = `
            <tr>
                <td style="padding: 40px;">
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        🔐 Kode Verifikasi Login
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 15px; text-align: center; line-height: 1.7;">
                        Halo${name ? ` <strong>${name}</strong>` : ''}! Gunakan kode berikut untuk menyelesaikan proses login Anda:
                    </p>
                    
                    <!-- Code Box -->
                    <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)); border: 2px solid rgba(99, 102, 241, 0.4); border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 30px;">
                        <div style="font-size: 48px; font-weight: 800; color: #ffffff; letter-spacing: 12px; font-family: 'Courier New', monospace; text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);">
                            ${code}
                        </div>
                    </div>
                    
                    <!-- Timer Warning -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(245, 158, 11, 0.1); border-radius: 12px; padding: 15px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <tr>
                            <td style="padding: 15px; text-align: center;">
                                <span style="font-size: 20px;">⏱️</span>
                                <span style="color: #f59e0b; font-size: 14px; font-weight: 600; margin-left: 8px;">Kode berlaku selama 5 menit</span>
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; text-align: center;">
                        Jika Anda tidak meminta kode ini, abaikan email ini dan pastikan akun Anda aman.
                    </p>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: `🔐 Kode Verifikasi: ${code} - Lutfi-Lab.ID`,
            html: this.getBaseTemplate(content, 'Kode Verifikasi - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // 2. WELCOME EMAIL
    // ==========================================
    async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
        const content = `
            <tr>
                <td style="padding: 40px;">
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 28px; font-weight: 700; text-align: center;">
                        🎉 Selamat Datang, ${name}!
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 16px; text-align: center; line-height: 1.7;">
                        Akun Anda telah berhasil dibuat. Selamat menjelajahi platform Teknologi & Keamanan Siber terdepan!
                    </p>
                    
                    <!-- Features Grid -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="50%" style="padding: 10px;">
                                <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                                    <div style="font-size: 32px; margin-bottom: 10px;">🛡️</div>
                                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">Keamanan Terjamin</div>
                                </div>
                            </td>
                            <td width="50%" style="padding: 10px;">
                                <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                                    <div style="font-size: 32px; margin-bottom: 10px;">⚡</div>
                                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">Performa Cepat</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%" style="padding: 10px;">
                                <div style="background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                                    <div style="font-size: 32px; margin-bottom: 10px;">📚</div>
                                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">Fitur Lengkap</div>
                                </div>
                            </td>
                            <td width="50%" style="padding: 10px;">
                                <div style="background: rgba(217, 70, 239, 0.1); border: 1px solid rgba(217, 70, 239, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                                    <div style="font-size: 32px; margin-bottom: 10px;">🎯</div>
                                    <div style="color: #ffffff; font-size: 14px; font-weight: 600;">Dukungan 24/7</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- CTA Button -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                            <td align="center">
                                <a href="${this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334'}/dashboard" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-size: 16px; font-weight: 700; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);">
                                    Mulai Sekarang →
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: `🎉 Selamat Datang di Lutfi-Lab.ID, ${name}!`,
            html: this.getBaseTemplate(content, 'Selamat Datang - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // 3. PASSWORD RESET EMAIL
    // ==========================================
    async sendPasswordResetEmail(email: string, resetToken: string, name?: string): Promise<boolean> {
        const resetUrl = `${this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334'}/reset-password?token=${resetToken}`;

        const content = `
            <tr>
                <td style="padding: 40px;">
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        🔑 Reset Password
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 15px; text-align: center; line-height: 1.7;">
                        Halo${name ? ` ${name}` : ''}! Kami menerima permintaan untuk reset password akun Anda.
                    </p>
                    
                    <!-- CTA Button -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                        <tr>
                            <td align="center">
                                <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #ef4444, #f97316); color: #ffffff; text-decoration: none; padding: 18px 50px; border-radius: 12px; font-size: 16px; font-weight: 700; box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);">
                                    🔑 Reset Password Sekarang
                                </a>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Warning -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(239, 68, 68, 0.1); border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                        <tr>
                            <td style="padding: 15px; text-align: center;">
                                <span style="font-size: 16px;">⚠️</span>
                                <span style="color: #ef4444; font-size: 13px; margin-left: 8px;">Link berlaku selama 1 jam</span>
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; text-align: center;">
                        Jika Anda tidak meminta reset password, abaikan email ini. Akun Anda tetap aman.
                    </p>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: '🔑 Reset Password - Lutfi-Lab.ID',
            html: this.getBaseTemplate(content, 'Reset Password - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // 4. PASSWORD CHANGED NOTIFICATION
    // ==========================================
    async sendPasswordChangedEmail(email: string, name?: string): Promise<boolean> {
        const content = `
            <tr>
                <td style="padding: 40px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="display: inline-block; width: 80px; height: 80px; background: linear-gradient(135deg, #22c55e, #16a34a); border-radius: 50%; line-height: 80px; font-size: 40px;">✓</div>
                    </div>
                    
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        Password Berhasil Diubah
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 15px; text-align: center; line-height: 1.7;">
                        Halo${name ? ` ${name}` : ''}! Password akun Lutfi-Lab.ID Anda telah berhasil diperbarui.
                    </p>
                    
                    <!-- Info Box -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(34, 197, 94, 0.1); border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <tr>
                            <td style="padding: 20px;">
                                <p style="margin: 0 0 10px; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                                    📅 <strong>Waktu:</strong> ${new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}
                                </p>
                                <p style="margin: 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                                    🔒 <strong>Status:</strong> Perubahan berhasil diterapkan
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; text-align: center;">
                        Jika Anda tidak melakukan perubahan ini, segera hubungi kami.
                    </p>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: '✅ Password Berhasil Diubah - Lutfi-Lab.ID',
            html: this.getBaseTemplate(content, 'Password Diubah - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // 5. LOGIN ALERT EMAIL
    // ==========================================
    async sendLoginAlertEmail(email: string, loginData: { ip: string; device: string; location?: string; time: Date }, name?: string): Promise<boolean> {
        const content = `
            <tr>
                <td style="padding: 40px;">
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        🔔 Login Baru Terdeteksi
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 15px; text-align: center; line-height: 1.7;">
                        Halo${name ? ` ${name}` : ''}! Kami mendeteksi login baru ke akun Anda.
                    </p>
                    
                    <!-- Login Details -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(99, 102, 241, 0.1); border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <tr>
                            <td style="padding: 25px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding: 8px 0;">
                                            <span style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">🕐 Waktu</span><br>
                                            <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${loginData.time.toLocaleString('id-ID')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0;">
                                            <span style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">📱 Perangkat</span><br>
                                            <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${loginData.device}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0;">
                                            <span style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">🌐 IP Address</span><br>
                                            <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${loginData.ip}</span>
                                        </td>
                                    </tr>
                                    ${loginData.location ? `
                                    <tr>
                                        <td style="padding: 8px 0;">
                                            <span style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">📍 Lokasi</span><br>
                                            <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${loginData.location}</span>
                                        </td>
                                    </tr>
                                    ` : ''}
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; text-align: center;">
                        Jika ini bukan Anda, segera ubah password dan amankan akun Anda.
                    </p>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: '🔔 Login Baru Terdeteksi - Lutfi-Lab.ID',
            html: this.getBaseTemplate(content, 'Login Alert - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // 6. ACCOUNT LOCKED EMAIL
    // ==========================================
    async sendAccountLockedEmail(email: string, unlockTime: Date, name?: string): Promise<boolean> {
        const content = `
            <tr>
                <td style="padding: 40px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="display: inline-block; width: 80px; height: 80px; background: linear-gradient(135deg, #ef4444, #dc2626); border-radius: 50%; line-height: 80px; font-size: 40px;">🔒</div>
                    </div>
                    
                    <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        Akun Dikunci Sementara
                    </h2>
                    <p style="margin: 0 0 30px; color: rgba(255, 255, 255, 0.7); font-size: 15px; text-align: center; line-height: 1.7;">
                        Halo${name ? ` ${name}` : ''}! Akun Anda telah dikunci sementara karena terlalu banyak percobaan login yang gagal.
                    </p>
                    
                    <!-- Warning Box -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(239, 68, 68, 0.1); border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                        <tr>
                            <td style="padding: 25px; text-align: center;">
                                <p style="margin: 0 0 10px; color: #ffffff; font-size: 16px; font-weight: 600;">
                                    ⏰ Akun akan terbuka pada:
                                </p>
                                <p style="margin: 0; color: #f59e0b; font-size: 20px; font-weight: 700;">
                                    ${unlockTime.toLocaleString('id-ID')}
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 13px; text-align: center;">
                        Jika Anda tidak mencoba login, kemungkinan ada orang lain yang mencoba mengakses akun Anda. Pertimbangkan untuk mengubah password setelah akun terbuka.
                    </p>
                </td>
            </tr>
        `;

        return this.sendEmail({
            to: email,
            subject: '🔒 Akun Dikunci Sementara - Lutfi-Lab.ID',
            html: this.getBaseTemplate(content, 'Akun Dikunci - Lutfi-Lab.ID'),
        });
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    private stripHtml(html: string): string {
        return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    }

    async verifyConnection(): Promise<boolean> {
        try {
            await this.transporter.verify();
            return true;
        } catch {
            return false;
        }
    }
}
