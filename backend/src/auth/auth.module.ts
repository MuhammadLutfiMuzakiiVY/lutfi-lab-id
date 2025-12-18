import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { EmailModule } from '../email/email.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { VerificationCode, VerificationCodeSchema } from './schemas/verification-code.schema';

@Module({
    imports: [
        UsersModule,
        EmailModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_ACCESS_SECRET'),
                signOptions: {
                    expiresIn: configService.get<string>('JWT_ACCESS_EXPIRATION') || '15m',
                },
            }),
            inject: [ConfigService],
        }),
        MongooseModule.forFeature([
            { name: VerificationCode.name, schema: VerificationCodeSchema },
        ]),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
