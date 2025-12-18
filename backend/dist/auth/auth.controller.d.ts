import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, RefreshTokenDto, VerifyCodeDto, ResendCodeDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private authService;
    private configService;
    constructor(authService: AuthService, configService: ConfigService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        requiresVerification: boolean;
        email: string;
    } | (import("./auth.service").AuthTokens & {
        user: any;
    })>;
    verifyCode(verifyDto: VerifyCodeDto): Promise<import("./auth.service").AuthTokens & {
        user: any;
    }>;
    resendCode(resendDto: ResendCodeDto): Promise<{
        message: string;
        requiresVerification: boolean;
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    refresh(refreshDto: RefreshTokenDto): Promise<import("./auth.service").AuthTokens>;
    logout(req: any): Promise<{
        message: string;
    }>;
    getProfile(req: any): Promise<any>;
    googleAuth(res: Response): void;
    googleCallback(code: string, res: Response): Promise<void>;
    githubAuth(res: Response): void;
    githubCallback(code: string, res: Response): Promise<void>;
    microsoftAuth(res: Response): void;
    microsoftCallback(code: string, res: Response): Promise<void>;
    facebookAuth(res: Response): void;
    facebookCallback(code: string, res: Response): Promise<void>;
    instagramAuth(res: Response): void;
    instagramCallback(code: string, res: Response): Promise<void>;
    private handleGoogleCallback;
    private handleGithubCallback;
    private handleMicrosoftCallback;
    private handleFacebookCallback;
    private handleInstagramCallback;
}
