import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { VerificationCode, VerificationCodeDocument } from './schemas/verification-code.schema';
import { v4 as uuidv4 } from 'uuid';

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

// Developer emails that get SUPER_DEVELOPER role automatically
export const SUPER_DEVELOPER_EMAILS = [
    'muhammadlutfimuzaki2@gmail.com',
    'muhammadlutfimuzaki.devopssec@gmail.com',
];

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

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private emailService: EmailService,
        @InjectModel(VerificationCode.name) private verificationCodeModel: Model<VerificationCodeDocument>,
    ) { }

    // Determine and update user role based on email
    private async determineUserRole(user: any): Promise<string> {
        const email = user.email.toLowerCase();

        // Check if this is a super developer email
        if (SUPER_DEVELOPER_EMAILS.includes(email)) {
            // Update role to super_developer if not already
            if (user.role !== 'super_developer') {
                await this.usersService.changeRole(user.id, 'super_developer' as any);
            }
            return 'super_developer';
        }

        return user.role;
    }

    // Generate 7-digit verification code
    private generateVerificationCode(): string {
        return Math.floor(1000000 + Math.random() * 9000000).toString();
    }

    // Send verification code to email
    async sendLoginVerificationCode(email: string): Promise<{ message: string; requiresVerification: boolean }> {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // Check if account is locked
        if (user.lockUntil && user.lockUntil > new Date()) {
            const remainingTime = Math.ceil((user.lockUntil.getTime() - Date.now()) / 60000);
            throw new UnauthorizedException(`Account locked. Try again in ${remainingTime} minutes`);
        }

        // Delete any existing codes for this email
        await this.verificationCodeModel.deleteMany({ email, type: 'login' });

        // Generate new code
        const code = this.generateVerificationCode();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        // Save code to database
        await this.verificationCodeModel.create({
            email,
            code,
            type: 'login',
            expiresAt,
        });

        // Send email
        const emailSent = await this.emailService.sendVerificationCode(email, code, user.name);

        if (!emailSent) {
            throw new BadRequestException('Failed to send verification email');
        }

        return {
            message: 'Verification code sent to your email',
            requiresVerification: true,
        };
    }

    // Verify code and login
    async verifyCodeAndLogin(email: string, code: string): Promise<AuthTokens & { user: any }> {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // Find the verification code
        const verificationCode = await this.verificationCodeModel.findOne({
            email,
            type: 'login',
            used: false,
        });

        if (!verificationCode) {
            throw new UnauthorizedException('No verification code found. Please request a new one.');
        }

        // Check if expired
        if (verificationCode.expiresAt < new Date()) {
            await this.verificationCodeModel.deleteOne({ _id: verificationCode._id });
            throw new UnauthorizedException('Verification code expired');
        }

        // Check attempts
        if (verificationCode.attempts >= 5) {
            await this.verificationCodeModel.deleteOne({ _id: verificationCode._id });
            throw new UnauthorizedException('Too many failed attempts. Please request a new code.');
        }

        // Verify code
        if (verificationCode.code !== code) {
            await this.verificationCodeModel.updateOne(
                { _id: verificationCode._id },
                { $inc: { attempts: 1 } }
            );
            throw new UnauthorizedException('Invalid verification code');
        }

        // Mark code as used
        await this.verificationCodeModel.updateOne(
            { _id: verificationCode._id },
            { used: true }
        );

        // Reset login attempts
        await this.usersService.resetLoginAttempts(user.id);

        // Update last login
        await this.usersService.updateLastLogin(user.id);

        // Determine and update user role
        const role = await this.determineUserRole(user);

        // Generate tokens
        const tokens = await this.generateTokens(user.id, user.email);

        // Save refresh token
        await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: role,
            },
        };
    }

    // Validate user credentials (step 1 - before sending code)
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Check if account is locked
        if (user.lockUntil && user.lockUntil > new Date()) {
            const remainingTime = Math.ceil((user.lockUntil.getTime() - Date.now()) / 60000);
            throw new UnauthorizedException(`Account locked. Try again in ${remainingTime} minutes`);
        }

        const isPasswordValid = await this.usersService.validatePassword(user.id, password);
        if (!isPasswordValid) {
            await this.usersService.incrementLoginAttempts(user.id);
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

    // Login step 1: Validate credentials and send verification code
    async login(email: string, password: string): Promise<{ message: string; requiresVerification: boolean; email: string } | (AuthTokens & { user: any })> {
        // Validate credentials first
        const user = await this.validateUser(email, password);

        // Check if in development mode and email is not configured
        const isDev = this.configService.get<string>('NODE_ENV') === 'development';
        const emailUser = this.configService.get<string>('EMAIL_USER');
        const emailPass = this.configService.get<string>('EMAIL_PASS');
        const isEmailConfigured = emailUser && emailPass &&
            !emailUser.includes('your-email') &&
            !emailPass.includes('your-app-password');

        // DEV MODE: Skip email verification if SMTP not configured
        if (isDev && !isEmailConfigured) {
            // Update last login
            await this.usersService.updateLastLogin(user.id);

            // Determine and update user role
            const role = await this.determineUserRole(user);

            // Generate tokens directly
            const tokens = await this.generateTokens(user.id, user.email);

            // Save refresh token
            await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

            return {
                ...tokens,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: role,
                },
            };
        }

        // Production mode: Send verification code
        await this.sendLoginVerificationCode(email);

        return {
            message: 'Credentials verified. Verification code sent to your email.',
            requiresVerification: true,
            email,
        };
    }

    // OAuth login - no verification code needed for OAuth
    async oauthLogin(profile: OAuthProfile): Promise<AuthTokens & { user: any }> {
        let user = await this.usersService.findByEmail(profile.email);

        if (!user) {
            // Create new user from OAuth
            user = await this.usersService.createOAuthUser({
                name: profile.name,
                email: profile.email,
                provider: profile.provider,
                providerId: profile.providerId,
                avatar: profile.avatar,
            });
        }

        // Update last login
        await this.usersService.updateLastLogin(user.id);

        // Determine and update user role
        const role = await this.determineUserRole(user);

        // Generate tokens
        const tokens = await this.generateTokens(user.id, user.email);

        // Save refresh token
        await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

        return {
            ...tokens,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: role,
                avatar: user.avatar,
            },
        };
    }

    // Register new user
    async register(email: string, password: string, name: string): Promise<{ message: string }> {
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        // Validate password strength
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            throw new BadRequestException(
                'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
            );
        }

        // Create user
        const user = await this.usersService.create({ email, password, name });

        // Send welcome email
        await this.emailService.sendWelcomeEmail(email, name);

        return {
            message: 'Registration successful. Please login to continue.',
        };
    }

    // Refresh tokens
    async refreshTokens(refreshToken: string): Promise<AuthTokens> {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            });

            if (payload.type !== 'refresh') {
                throw new UnauthorizedException('Invalid token type');
            }

            const user = await this.usersService.findById(payload.sub);
            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            const isValidRefreshToken = await this.usersService.validateRefreshToken(user.id, refreshToken);
            if (!isValidRefreshToken) {
                throw new UnauthorizedException('Invalid refresh token');
            }

            // Generate new tokens
            const tokens = await this.generateTokens(user.id, user.email);

            // Update refresh token in database
            await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

            return tokens;
        } catch (error) {
            throw new UnauthorizedException('Invalid refresh token');
        }
    }

    // Logout
    async logout(userId: string): Promise<{ message: string }> {
        await this.usersService.updateRefreshToken(userId, null);
        return { message: 'Logged out successfully' };
    }

    // Get profile
    async getProfile(userId: string): Promise<any> {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: (user as any).avatar,
            createdAt: (user as any).createdAt,
            lastLogin: user.lastLogin,
        };
    }

    // Generate JWT tokens
    private async generateTokens(userId: string, email: string): Promise<AuthTokens> {
        const jti = uuidv4();

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                    type: 'access',
                },
                {
                    secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                    expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRATION') || '15m',
                }
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                    jti,
                    type: 'refresh',
                },
                {
                    secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                    expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION') || '7d',
                }
            ),
        ]);

        return { accessToken, refreshToken };
    }
}
