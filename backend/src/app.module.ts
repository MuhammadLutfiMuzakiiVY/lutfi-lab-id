import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
    imports: [
        // Config
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        // Database
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
                autoIndex: false, // Disable auto-indexing in production for security
            }),
            inject: [ConfigService],
        }),

        // Rate Limiting
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ([{
                ttl: configService.get<number>('RATE_LIMIT_TTL') || 60000,
                limit: configService.get<number>('RATE_LIMIT_MAX') || 100,
            }]),
            inject: [ConfigService],
        }),

        // Feature Modules
        AuthModule,
        UsersModule,
        EmailModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class AppModule { }
