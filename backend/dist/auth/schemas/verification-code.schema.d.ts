import { Document } from 'mongoose';
export type VerificationCodeDocument = VerificationCode & Document;
export declare class VerificationCode {
    email: string;
    code: string;
    type: string;
    expiresAt: Date;
    used: boolean;
    attempts: number;
}
export declare const VerificationCodeSchema: import("mongoose").Schema<VerificationCode, import("mongoose").Model<VerificationCode, any, any, any, Document<unknown, any, VerificationCode, any, {}> & VerificationCode & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, VerificationCode, Document<unknown, {}, import("mongoose").FlatRecord<VerificationCode>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<VerificationCode> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
