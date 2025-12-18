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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const config_1 = require("@nestjs/config");
let AuthController = class AuthController {
    constructor(authService, configService) {
        this.authService = authService;
        this.configService = configService;
    }
    async login(loginDto) {
        return this.authService.login(loginDto.email, loginDto.password);
    }
    async verifyCode(verifyDto) {
        return this.authService.verifyCodeAndLogin(verifyDto.email, verifyDto.code);
    }
    async resendCode(resendDto) {
        return this.authService.sendLoginVerificationCode(resendDto.email);
    }
    async register(registerDto) {
        return this.authService.register(registerDto.email, registerDto.password, registerDto.name);
    }
    async refresh(refreshDto) {
        return this.authService.refreshTokens(refreshDto.refreshToken);
    }
    async logout(req) {
        return this.authService.logout(req.user.sub);
    }
    async getProfile(req) {
        return this.authService.getProfile(req.user.sub);
    }
    googleAuth(res) {
        const clientId = this.configService.get('GOOGLE_CLIENT_ID') || '';
        const redirectUri = this.configService.get('GOOGLE_CALLBACK_URL') || '';
        const scope = 'email profile';
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `response_type=code&` +
            `scope=${encodeURIComponent(scope)}&` +
            `access_type=offline`;
        res.redirect(authUrl);
    }
    async googleCallback(code, res) {
        try {
            const result = await this.handleGoogleCallback(code);
            const frontendUrl = this.configService.get('CORS_ORIGIN');
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        }
        catch (error) {
            const frontendUrl = this.configService.get('CORS_ORIGIN');
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }
    githubAuth(res) {
        const clientId = this.configService.get('GITHUB_CLIENT_ID') || '';
        const redirectUri = this.configService.get('GITHUB_CALLBACK_URL') || '';
        const scope = 'user:email';
        const authUrl = `https://github.com/login/oauth/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}`;
        res.redirect(authUrl);
    }
    async githubCallback(code, res) {
        try {
            const result = await this.handleGithubCallback(code);
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        }
        catch (error) {
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }
    microsoftAuth(res) {
        const clientId = this.configService.get('MICROSOFT_CLIENT_ID') || '';
        const redirectUri = this.configService.get('MICROSOFT_CALLBACK_URL') || '';
        const scope = 'openid email profile';
        const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `response_type=code&` +
            `scope=${encodeURIComponent(scope)}`;
        res.redirect(authUrl);
    }
    async microsoftCallback(code, res) {
        try {
            const result = await this.handleMicrosoftCallback(code);
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        }
        catch (error) {
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }
    facebookAuth(res) {
        const clientId = this.configService.get('FACEBOOK_CLIENT_ID') || '';
        const redirectUri = this.configService.get('FACEBOOK_CALLBACK_URL') || '';
        const scope = 'email,public_profile';
        const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}`;
        res.redirect(authUrl);
    }
    async facebookCallback(code, res) {
        try {
            const result = await this.handleFacebookCallback(code);
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        }
        catch (error) {
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }
    instagramAuth(res) {
        const clientId = this.configService.get('INSTAGRAM_CLIENT_ID') || '';
        const redirectUri = this.configService.get('INSTAGRAM_CALLBACK_URL') || '';
        const scope = 'user_profile,user_media';
        const authUrl = `https://api.instagram.com/oauth/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}&` +
            `response_type=code`;
        res.redirect(authUrl);
    }
    async instagramCallback(code, res) {
        try {
            const result = await this.handleInstagramCallback(code);
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        }
        catch (error) {
            const frontendUrl = this.configService.get('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }
    async handleGoogleCallback(code) {
        const clientId = this.configService.get('GOOGLE_CLIENT_ID') || '';
        const clientSecret = this.configService.get('GOOGLE_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get('GOOGLE_CALLBACK_URL') || '';
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            }),
        });
        const tokens = await tokenResponse.json();
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json();
        return this.authService.oauthLogin({
            provider: 'google',
            providerId: user.id,
            email: user.email,
            name: user.name,
            avatar: user.picture,
        });
    }
    async handleGithubCallback(code) {
        const clientId = this.configService.get('GITHUB_CLIENT_ID') || '';
        const clientSecret = this.configService.get('GITHUB_CLIENT_SECRET') || '';
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });
        const tokens = await tokenResponse.json();
        const userResponse = await fetch('https://api.github.com/user', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json();
        const emailResponse = await fetch('https://api.github.com/user/emails', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const emails = await emailResponse.json();
        const primaryEmail = emails.find((e) => e.primary)?.email || user.email;
        return this.authService.oauthLogin({
            provider: 'github',
            providerId: user.id.toString(),
            email: primaryEmail,
            name: user.name || user.login,
            avatar: user.avatar_url,
        });
    }
    async handleMicrosoftCallback(code) {
        const clientId = this.configService.get('MICROSOFT_CLIENT_ID') || '';
        const clientSecret = this.configService.get('MICROSOFT_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get('MICROSOFT_CALLBACK_URL') || '';
        const tokenResponse = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            }),
        });
        const tokens = await tokenResponse.json();
        const userResponse = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json();
        return this.authService.oauthLogin({
            provider: 'microsoft',
            providerId: user.id,
            email: user.mail || user.userPrincipalName,
            name: user.displayName,
        });
    }
    async handleFacebookCallback(code) {
        const clientId = this.configService.get('FACEBOOK_CLIENT_ID') || '';
        const clientSecret = this.configService.get('FACEBOOK_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get('FACEBOOK_CALLBACK_URL') || '';
        const tokenResponse = await fetch(`https://graph.facebook.com/v18.0/oauth/access_token?` +
            `client_id=${clientId}&` +
            `client_secret=${clientSecret}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `code=${code}`);
        const tokens = await tokenResponse.json();
        const userResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokens.access_token}`);
        const user = await userResponse.json();
        return this.authService.oauthLogin({
            provider: 'facebook',
            providerId: user.id,
            email: user.email,
            name: user.name,
            avatar: user.picture?.data?.url,
        });
    }
    async handleInstagramCallback(code) {
        const clientId = this.configService.get('INSTAGRAM_CLIENT_ID') || '';
        const clientSecret = this.configService.get('INSTAGRAM_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get('INSTAGRAM_CALLBACK_URL') || '';
        const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
                code,
            }),
        });
        const tokens = await tokenResponse.json();
        const userResponse = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${tokens.access_token}`);
        const user = await userResponse.json();
        return this.authService.oauthLogin({
            provider: 'instagram',
            providerId: user.id,
            email: `${user.username}@instagram.placeholder`,
            name: user.username,
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60000 } }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login - Step 1: Validate credentials and send verification code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Verification code sent' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verify-code'),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60000 } }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login - Step 2: Verify code and get tokens' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid verification code' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyCodeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyCode", null);
__decorate([
    (0, common_1.Post)('resend-code'),
    (0, throttler_1.Throttle)({ default: { limit: 3, ttl: 60000 } }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Resend verification code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New code sent' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResendCodeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendCode", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, throttler_1.Throttle)({ default: { limit: 3, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({ summary: 'Register new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User registered successfully' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tokens refreshed' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Google OAuth login' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Google OAuth callback' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleCallback", null);
__decorate([
    (0, common_1.Get)('github'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate GitHub OAuth login' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "githubAuth", null);
__decorate([
    (0, common_1.Get)('github/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'GitHub OAuth callback' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "githubCallback", null);
__decorate([
    (0, common_1.Get)('microsoft'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Microsoft OAuth login' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "microsoftAuth", null);
__decorate([
    (0, common_1.Get)('microsoft/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Microsoft OAuth callback' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "microsoftCallback", null);
__decorate([
    (0, common_1.Get)('facebook'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Facebook OAuth login' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookAuth", null);
__decorate([
    (0, common_1.Get)('facebook/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Facebook OAuth callback' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookCallback", null);
__decorate([
    (0, common_1.Get)('instagram'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Instagram OAuth login' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "instagramAuth", null);
__decorate([
    (0, common_1.Get)('instagram/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Instagram OAuth callback' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "instagramCallback", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map