export declare class LoginDto {
    email: string;
    password: string;
}
export declare class VerifyCodeDto {
    email: string;
    code: string;
}
export declare class RegisterDto {
    name: string;
    email: string;
    password: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class OAuthCallbackDto {
    code: string;
    state?: string;
}
export declare class ResendCodeDto {
    email: string;
}
