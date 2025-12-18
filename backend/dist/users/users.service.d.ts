import { Model } from 'mongoose';
import { UserDocument, UserRole } from './user.schema';
interface CreateUserDto {
    email: string;
    password: string;
    name: string;
}
interface CreateOAuthUserDto {
    email: string;
    name: string;
    provider: string;
    providerId: string;
    avatar?: string;
}
interface UpdateUserDto {
    name?: string;
    email?: string;
    phone?: string;
    role?: UserRole;
    isVerified?: boolean;
    isActive?: boolean;
}
export interface UserListResult {
    users: UserDocument[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface UserStats {
    total: number;
    verified: number;
    unverified: number;
    banned: number;
    admins: number;
    activeToday: number;
}
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(page?: number, limit?: number, search?: string, role?: UserRole, status?: 'verified' | 'unverified' | 'banned' | 'active'): Promise<UserListResult>;
    updateUser(id: string, updateDto: UpdateUserDto): Promise<UserDocument>;
    deleteUser(id: string): Promise<void>;
    banUser(id: string, reason?: string): Promise<UserDocument>;
    unbanUser(id: string): Promise<UserDocument>;
    changeRole(id: string, role: UserRole): Promise<UserDocument>;
    verifyUser(id: string): Promise<UserDocument>;
    getStats(): Promise<UserStats>;
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    createOAuthUser(createUserDto: CreateOAuthUserDto): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument | null>;
    findByProvider(provider: string, providerId: string): Promise<UserDocument | null>;
    validatePassword(userId: string, password: string): Promise<boolean>;
    updateRefreshToken(userId: string, refreshToken: string | null): Promise<void>;
    validateRefreshToken(userId: string, refreshToken: string): Promise<boolean>;
    incrementLoginAttempts(userId: string): Promise<void>;
    resetLoginAttempts(userId: string): Promise<void>;
    updateLastLogin(userId: string): Promise<void>;
}
export {};
