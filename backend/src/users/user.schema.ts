import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
    SUPER_DEVELOPER = 'super_developer',
}

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ select: false })
    password: string;

    @Prop()
    refreshToken: string;

    @Prop()
    refreshTokenExpiry: Date;

    @Prop({ default: 0 })
    loginAttempts: number;

    @Prop()
    lockUntil: Date;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: false })
    isVerified: boolean;

    @Prop({ default: false })
    isBanned: boolean;

    @Prop({ type: String, enum: UserRole, default: UserRole.USER })
    role: UserRole;

    @Prop()
    lastLogin: Date;

    // OAuth fields
    @Prop()
    provider: string; // 'google', 'github', 'microsoft', 'facebook', 'instagram'

    @Prop()
    providerId: string;

    @Prop()
    avatar: string;

    @Prop()
    phone: string;

    @Prop()
    banReason: string;

    @Prop()
    bannedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Indexes
UserSchema.index({ email: 1 });
UserSchema.index({ provider: 1, providerId: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ isBanned: 1 });
