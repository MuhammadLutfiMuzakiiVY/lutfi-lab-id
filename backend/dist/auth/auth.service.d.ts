import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { VerificationCodeDocument } from './schemas/verification-code.schema';
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export declare const SUPER_DEVELOPER_EMAILS: string[];
export interface OAuthProfile {
    provider: string;
    providerId: string;
    email: string;
    name: string;
    avatar?: string;
}
export interface TokenPayload {
    sub: string;
    email: string;
    role: string;
    type: 'access' | 'refresh';
    jti: string;
    iat?: number;
    exp?: number;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    private emailService;
    private verificationCodeModel;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, emailService: EmailService, verificationCodeModel: Model<VerificationCodeDocument>);
    private determineUserRole;
    private generateVerificationCode;
    sendLoginVerificationCode(email: string): Promise<{
        message: string;
        requiresVerification: boolean;
    }>;
    verifyCodeAndLogin(email: string, code: string): Promise<AuthTokens & {
        user: any;
    }>;
    validateUser(email: string, password: string): Promise<any>;
    login(email: string, password: string): Promise<{
        message: string;
        requiresVerification: boolean;
        email: string;
    } | (AuthTokens & {
        user: any;
    })>;
    oauthLogin(profile: OAuthProfile): Promise<AuthTokens & {
        user: any;
    }>;
    register(email: string, password: string, name: string): Promise<{
        message: string;
    }>;
    refreshTokens(refreshToken: string): Promise<AuthTokens>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    getProfile(userId: string): Promise<any>;
    private generateTokens;
}
