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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.SUPER_DEVELOPER_EMAILS = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const email_service_1 = require("../email/email.service");
const verification_code_schema_1 = require("./schemas/verification-code.schema");
const uuid_1 = require("uuid");
exports.SUPER_DEVELOPER_EMAILS = [
    'muhammadlutfimuzaki2@gmail.com',
    'muhammadlutfimuzaki.devopssec@gmail.com',
];
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService, emailService, verificationCodeModel) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
        this.verificationCodeModel = verificationCodeModel;
    }
    async determineUserRole(user) {
        const email = user.email.toLowerCase();
        if (exports.SUPER_DEVELOPER_EMAILS.includes(email)) {
            if (user.role !== 'super_developer') {
                await this.usersService.changeRole(user.id, 'super_developer');
            }
            return 'super_developer';
        }
        return user.role;
    }
    generateVerificationCode() {
        return Math.floor(1000000 + Math.random() * 9000000).toString();
    }
    async sendLoginVerificationCode(email) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (user.lockUntil && user.lockUntil > new Date()) {
            const remainingTime = Math.ceil((user.lockUntil.getTime() - Date.now()) / 60000);
            throw new common_1.UnauthorizedException(`Account locked. Try again in ${remainingTime} minutes`);
        }
        await this.verificationCodeModel.deleteMany({ email, type: 'login' });
        const code = this.generateVerificationCode();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await this.verificationCodeModel.create({
            email,
            code,
            type: 'login',
            expiresAt,
        });
        const emailSent = await this.emailService.sendVerificationCode(email, code, user.name);
        if (!emailSent) {
            throw new common_1.BadRequestException('Failed to send verification email');
        }
        return {
            message: 'Verification code sent to your email',
            requiresVerification: true,
        };
    }
    async verifyCodeAndLogin(email, code) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const verificationCode = await this.verificationCodeModel.findOne({
            email,
            type: 'login',
            used: false,
        });
        if (!verificationCode) {
            throw new common_1.UnauthorizedException('No verification code found. Please request a new one.');
        }
        if (verificationCode.expiresAt < new Date()) {
            await this.verificationCodeModel.deleteOne({ _id: verificationCode._id });
            throw new common_1.UnauthorizedException('Verification code expired');
        }
        if (verificationCode.attempts >= 5) {
            await this.verificationCodeModel.deleteOne({ _id: verificationCode._id });
            throw new common_1.UnauthorizedException('Too many failed attempts. Please request a new code.');
        }
        if (verificationCode.code !== code) {
            await this.verificationCodeModel.updateOne({ _id: verificationCode._id }, { $inc: { attempts: 1 } });
            throw new common_1.UnauthorizedException('Invalid verification code');
        }
        await this.verificationCodeModel.updateOne({ _id: verificationCode._id }, { used: true });
        await this.usersService.resetLoginAttempts(user.id);
        await this.usersService.updateLastLogin(user.id);
        const role = await this.determineUserRole(user);
        const tokens = await this.generateTokens(user.id, user.email);
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
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.lockUntil && user.lockUntil > new Date()) {
            const remainingTime = Math.ceil((user.lockUntil.getTime() - Date.now()) / 60000);
            throw new common_1.UnauthorizedException(`Account locked. Try again in ${remainingTime} minutes`);
        }
        const isPasswordValid = await this.usersService.validatePassword(user.id, password);
        if (!isPasswordValid) {
            await this.usersService.incrementLoginAttempts(user.id);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    async login(email, password) {
        const user = await this.validateUser(email, password);
        const isDev = this.configService.get('NODE_ENV') === 'development';
        const emailUser = this.configService.get('EMAIL_USER');
        const emailPass = this.configService.get('EMAIL_PASS');
        const isEmailConfigured = emailUser && emailPass &&
            !emailUser.includes('your-email') &&
            !emailPass.includes('your-app-password');
        if (isDev && !isEmailConfigured) {
            await this.usersService.updateLastLogin(user.id);
            const role = await this.determineUserRole(user);
            const tokens = await this.generateTokens(user.id, user.email);
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
        await this.sendLoginVerificationCode(email);
        return {
            message: 'Credentials verified. Verification code sent to your email.',
            requiresVerification: true,
            email,
        };
    }
    async oauthLogin(profile) {
        let user = await this.usersService.findByEmail(profile.email);
        if (!user) {
            user = await this.usersService.createOAuthUser({
                name: profile.name,
                email: profile.email,
                provider: profile.provider,
                providerId: profile.providerId,
                avatar: profile.avatar,
            });
        }
        await this.usersService.updateLastLogin(user.id);
        const role = await this.determineUserRole(user);
        const tokens = await this.generateTokens(user.id, user.email);
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
    async register(email, password, name) {
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            throw new common_1.BadRequestException('Password must be at least 8 characters with uppercase, lowercase, number, and special character');
        }
        const user = await this.usersService.create({ email, password, name });
        await this.emailService.sendWelcomeEmail(email, name);
        return {
            message: 'Registration successful. Please login to continue.',
        };
    }
    async refreshTokens(refreshToken) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            });
            if (payload.type !== 'refresh') {
                throw new common_1.UnauthorizedException('Invalid token type');
            }
            const user = await this.usersService.findById(payload.sub);
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            const isValidRefreshToken = await this.usersService.validateRefreshToken(user.id, refreshToken);
            if (!isValidRefreshToken) {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const tokens = await this.generateTokens(user.id, user.email);
            await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);
            return tokens;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async logout(userId) {
        await this.usersService.updateRefreshToken(userId, null);
        return { message: 'Logged out successfully' };
    }
    async getProfile(userId) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin,
        };
    }
    async generateTokens(userId, email) {
        const jti = (0, uuid_1.v4)();
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                email,
                type: 'access',
            }, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
                expiresIn: this.configService.get('JWT_ACCESS_EXPIRATION') || '15m',
            }),
            this.jwtService.signAsync({
                sub: userId,
                email,
                jti,
                type: 'refresh',
            }, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRATION') || '7d',
            }),
        ]);
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, mongoose_1.InjectModel)(verification_code_schema_1.VerificationCode.name)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService,
        email_service_1.EmailService,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map