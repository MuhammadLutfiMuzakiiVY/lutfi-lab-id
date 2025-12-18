import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, Matches, IsOptional } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'Password123!' })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class VerifyCodeDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: '1234567' })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{7}$/, { message: 'Code must be 7 digits' })
    code: string;
}

export class RegisterDto {
    @ApiProperty({ example: 'Muhammad Lutfi' })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'Password123!' })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
        { message: 'Password must contain uppercase, lowercase, number, and special character' }
    )
    password: string;
}

export class RefreshTokenDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    refreshToken: string;
}

export class OAuthCallbackDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    state?: string;
}

export class ResendCodeDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
