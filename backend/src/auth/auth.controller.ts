import { Controller, Post, Body, Get, UseGuards, Request, HttpCode, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, RefreshTokenDto, VerifyCodeDto, ResendCodeDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private configService: ConfigService,
    ) { }

    @Post('login')
    @Throttle({ default: { limit: 5, ttl: 60000 } })
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Login - Step 1: Validate credentials and send verification code' })
    @ApiResponse({ status: 200, description: 'Verification code sent' })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto.email, loginDto.password);
    }

    @Post('verify-code')
    @Throttle({ default: { limit: 5, ttl: 60000 } })
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Login - Step 2: Verify code and get tokens' })
    @ApiResponse({ status: 200, description: 'Login successful' })
    @ApiResponse({ status: 401, description: 'Invalid verification code' })
    async verifyCode(@Body() verifyDto: VerifyCodeDto) {
        return this.authService.verifyCodeAndLogin(verifyDto.email, verifyDto.code);
    }

    @Post('resend-code')
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Resend verification code' })
    @ApiResponse({ status: 200, description: 'New code sent' })
    async resendCode(@Body() resendDto: ResendCodeDto) {
        return this.authService.sendLoginVerificationCode(resendDto.email);
    }

    @Post('register')
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    @ApiOperation({ summary: 'Register new user' })
    @ApiResponse({ status: 201, description: 'User registered successfully' })
    @ApiResponse({ status: 409, description: 'Email already exists' })
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto.email, registerDto.password, registerDto.name);
    }

    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Refresh access token' })
    @ApiResponse({ status: 200, description: 'Tokens refreshed' })
    async refresh(@Body() refreshDto: RefreshTokenDto) {
        return this.authService.refreshTokens(refreshDto.refreshToken);
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Logout user' })
    async logout(@Request() req: any) {
        return this.authService.logout(req.user.sub);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user profile' })
    async getProfile(@Request() req: any) {
        return this.authService.getProfile(req.user.sub);
    }

    // ==========================================
    // OAuth Routes
    // ==========================================

    @Get('google')
    @ApiOperation({ summary: 'Initiate Google OAuth login' })
    googleAuth(@Res() res: Response) {
        const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID') || '';
        const redirectUri = this.configService.get<string>('GOOGLE_CALLBACK_URL') || '';
        const scope = 'email profile';

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `response_type=code&` +
            `scope=${encodeURIComponent(scope)}&` +
            `access_type=offline`;

        res.redirect(authUrl);
    }

    @Get('google/callback')
    @ApiOperation({ summary: 'Google OAuth callback' })
    async googleCallback(@Query('code') code: string, @Res() res: Response) {
        try {
            // Exchange code for tokens and get user info
            const result = await this.handleGoogleCallback(code);
            // Redirect to frontend with tokens
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN');
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        } catch (error) {
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN');
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }

    @Get('github')
    @ApiOperation({ summary: 'Initiate GitHub OAuth login' })
    githubAuth(@Res() res: Response) {
        const clientId = this.configService.get<string>('GITHUB_CLIENT_ID') || '';
        const redirectUri = this.configService.get<string>('GITHUB_CALLBACK_URL') || '';
        const scope = 'user:email';

        const authUrl = `https://github.com/login/oauth/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}`;

        res.redirect(authUrl);
    }

    @Get('github/callback')
    @ApiOperation({ summary: 'GitHub OAuth callback' })
    async githubCallback(@Query('code') code: string, @Res() res: Response) {
        try {
            const result = await this.handleGithubCallback(code);
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        } catch (error) {
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }

    @Get('microsoft')
    @ApiOperation({ summary: 'Initiate Microsoft OAuth login' })
    microsoftAuth(@Res() res: Response) {
        const clientId = this.configService.get<string>('MICROSOFT_CLIENT_ID') || '';
        const redirectUri = this.configService.get<string>('MICROSOFT_CALLBACK_URL') || '';
        const scope = 'openid email profile';

        const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `response_type=code&` +
            `scope=${encodeURIComponent(scope)}`;

        res.redirect(authUrl);
    }

    @Get('microsoft/callback')
    @ApiOperation({ summary: 'Microsoft OAuth callback' })
    async microsoftCallback(@Query('code') code: string, @Res() res: Response) {
        try {
            const result = await this.handleMicrosoftCallback(code);
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        } catch (error) {
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }

    @Get('facebook')
    @ApiOperation({ summary: 'Initiate Facebook OAuth login' })
    facebookAuth(@Res() res: Response) {
        const clientId = this.configService.get<string>('FACEBOOK_CLIENT_ID') || '';
        const redirectUri = this.configService.get<string>('FACEBOOK_CALLBACK_URL') || '';
        const scope = 'email,public_profile';

        const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}`;

        res.redirect(authUrl);
    }

    @Get('facebook/callback')
    @ApiOperation({ summary: 'Facebook OAuth callback' })
    async facebookCallback(@Query('code') code: string, @Res() res: Response) {
        try {
            const result = await this.handleFacebookCallback(code);
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        } catch (error) {
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }

    @Get('instagram')
    @ApiOperation({ summary: 'Initiate Instagram OAuth login' })
    instagramAuth(@Res() res: Response) {
        const clientId = this.configService.get<string>('INSTAGRAM_CLIENT_ID') || '';
        const redirectUri = this.configService.get<string>('INSTAGRAM_CALLBACK_URL') || '';
        const scope = 'user_profile,user_media';

        const authUrl = `https://api.instagram.com/oauth/authorize?` +
            `client_id=${clientId}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `scope=${encodeURIComponent(scope)}&` +
            `response_type=code`;

        res.redirect(authUrl);
    }

    @Get('instagram/callback')
    @ApiOperation({ summary: 'Instagram OAuth callback' })
    async instagramCallback(@Query('code') code: string, @Res() res: Response) {
        try {
            const result = await this.handleInstagramCallback(code);
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/oauth-callback?token=${result.accessToken}&refresh=${result.refreshToken}`);
        } catch (error) {
            const frontendUrl = this.configService.get<string>('CORS_ORIGIN') || 'http://localhost:52334';
            res.redirect(`${frontendUrl}/login?error=oauth_failed`);
        }
    }

    // ==========================================
    // OAuth Handlers (simplified - exchange code for user info)
    // ==========================================

    private async handleGoogleCallback(code: string) {
        const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID') || '';
        const clientSecret = this.configService.get<string>('GOOGLE_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get<string>('GOOGLE_CALLBACK_URL') || '';

        // Exchange code for tokens
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
        const tokens = await tokenResponse.json() as any;

        // Get user info
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json() as any;

        return this.authService.oauthLogin({
            provider: 'google',
            providerId: user.id,
            email: user.email,
            name: user.name,
            avatar: user.picture,
        });
    }

    private async handleGithubCallback(code: string) {
        const clientId = this.configService.get<string>('GITHUB_CLIENT_ID') || '';
        const clientSecret = this.configService.get<string>('GITHUB_CLIENT_SECRET') || '';

        // Exchange code for access token
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
        const tokens = await tokenResponse.json() as any;

        // Get user info
        const userResponse = await fetch('https://api.github.com/user', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json() as any;

        // Get email (might be private)
        const emailResponse = await fetch('https://api.github.com/user/emails', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const emails = await emailResponse.json() as any[];
        const primaryEmail = emails.find((e: any) => e.primary)?.email || user.email;

        return this.authService.oauthLogin({
            provider: 'github',
            providerId: user.id.toString(),
            email: primaryEmail,
            name: user.name || user.login,
            avatar: user.avatar_url,
        });
    }

    private async handleMicrosoftCallback(code: string) {
        const clientId = this.configService.get<string>('MICROSOFT_CLIENT_ID') || '';
        const clientSecret = this.configService.get<string>('MICROSOFT_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get<string>('MICROSOFT_CALLBACK_URL') || '';

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
        const tokens = await tokenResponse.json() as any;

        const userResponse = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userResponse.json() as any;

        return this.authService.oauthLogin({
            provider: 'microsoft',
            providerId: user.id,
            email: user.mail || user.userPrincipalName,
            name: user.displayName,
        });
    }

    private async handleFacebookCallback(code: string) {
        const clientId = this.configService.get<string>('FACEBOOK_CLIENT_ID') || '';
        const clientSecret = this.configService.get<string>('FACEBOOK_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get<string>('FACEBOOK_CALLBACK_URL') || '';

        const tokenResponse = await fetch(
            `https://graph.facebook.com/v18.0/oauth/access_token?` +
            `client_id=${clientId}&` +
            `client_secret=${clientSecret}&` +
            `redirect_uri=${encodeURIComponent(redirectUri)}&` +
            `code=${code}`
        );
        const tokens = await tokenResponse.json() as any;

        const userResponse = await fetch(
            `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokens.access_token}`
        );
        const user = await userResponse.json() as any;

        return this.authService.oauthLogin({
            provider: 'facebook',
            providerId: user.id,
            email: user.email,
            name: user.name,
            avatar: user.picture?.data?.url,
        });
    }

    private async handleInstagramCallback(code: string) {
        const clientId = this.configService.get<string>('INSTAGRAM_CLIENT_ID') || '';
        const clientSecret = this.configService.get<string>('INSTAGRAM_CLIENT_SECRET') || '';
        const redirectUri = this.configService.get<string>('INSTAGRAM_CALLBACK_URL') || '';

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
        const tokens = await tokenResponse.json() as any;

        const userResponse = await fetch(
            `https://graph.instagram.com/me?fields=id,username&access_token=${tokens.access_token}`
        );
        const user = await userResponse.json() as any;

        // Instagram doesn't provide email, so we create a placeholder
        return this.authService.oauthLogin({
            provider: 'instagram',
            providerId: user.id,
            email: `${user.username}@instagram.placeholder`,
            name: user.username,
        });
    }
}
