import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VerificationCodeDocument = VerificationCode & Document;

@Schema({ timestamps: true })
export class VerificationCode {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    type: string; // 'login' | 'register' | 'reset_password'

    @Prop({ required: true })
    expiresAt: Date;

    @Prop({ default: false })
    used: boolean;

    @Prop({ default: 0 })
    attempts: number;
}

export const VerificationCodeSchema = SchemaFactory.createForClass(VerificationCode);

// Index for auto-deletion of expired codes
VerificationCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
VerificationCodeSchema.index({ email: 1, type: 1 });
