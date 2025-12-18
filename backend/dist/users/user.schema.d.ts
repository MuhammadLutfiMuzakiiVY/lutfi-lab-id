import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
    SUPER_DEVELOPER = "super_developer"
}
export declare class User {
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    refreshTokenExpiry: Date;
    loginAttempts: number;
    lockUntil: Date;
    isActive: boolean;
    isVerified: boolean;
    isBanned: boolean;
    role: UserRole;
    lastLogin: Date;
    provider: string;
    providerId: string;
    avatar: string;
    phone: string;
    banReason: string;
    bannedAt: Date;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any, {}> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
