import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User, UserDocument, UserRole } from './user.schema';

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

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    // ==========================================
    // User Management Methods
    // ==========================================

    async findAll(
        page: number = 1,
        limit: number = 10,
        search?: string,
        role?: UserRole,
        status?: 'verified' | 'unverified' | 'banned' | 'active',
    ): Promise<UserListResult> {
        const query: any = {};

        // Search by name or email
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }

        // Filter by role
        if (role) {
            query.role = role;
        }

        // Filter by status
        if (status === 'verified') query.isVerified = true;
        if (status === 'unverified') query.isVerified = false;
        if (status === 'banned') query.isBanned = true;
        if (status === 'active') query.isActive = true;

        const total = await this.userModel.countDocuments(query);
        const totalPages = Math.ceil(total / limit);
        const skip = (page - 1) * limit;

        const users = await this.userModel
            .find(query)
            .select('-password -refreshToken -refreshTokenExpiry')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();

        return { users, total, page, limit, totalPages };
    }

    async updateUser(id: string, updateDto: UpdateUserDto): Promise<UserDocument> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Check if email already exists (if changing email)
        if (updateDto.email && updateDto.email !== user.email) {
            const existingUser = await this.userModel.findOne({ email: updateDto.email });
            if (existingUser) {
                throw new BadRequestException('Email already in use');
            }
        }

        Object.assign(user, updateDto);
        return user.save();
    }

    async deleteUser(id: string): Promise<void> {
        const result = await this.userModel.findByIdAndDelete(id);
        if (!result) {
            throw new NotFoundException('User not found');
        }
    }

    async banUser(id: string, reason?: string): Promise<UserDocument> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.isBanned = true;
        user.isActive = false;
        user.banReason = reason || 'No reason provided';
        user.bannedAt = new Date();

        return user.save();
    }

    async unbanUser(id: string): Promise<UserDocument> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.isBanned = false;
        user.isActive = true;
        user.banReason = null as any;
        user.bannedAt = null as any;

        return user.save();
    }

    async changeRole(id: string, role: UserRole): Promise<UserDocument> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.role = role;
        return user.save();
    }

    async verifyUser(id: string): Promise<UserDocument> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.isVerified = true;
        return user.save();
    }

    async getStats(): Promise<UserStats> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [total, verified, unverified, banned, admins, activeToday] = await Promise.all([
            this.userModel.countDocuments(),
            this.userModel.countDocuments({ isVerified: true }),
            this.userModel.countDocuments({ isVerified: false }),
            this.userModel.countDocuments({ isBanned: true }),
            this.userModel.countDocuments({ role: UserRole.ADMIN }),
            this.userModel.countDocuments({ lastLogin: { $gte: today } }),
        ]);

        return { total, verified, unverified, banned, admins, activeToday };
    }

    // ==========================================
    // Existing Methods
    // ==========================================

    async create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const hashedPassword = await argon2.hash(createUserDto.password, {
            type: argon2.argon2id,
            memoryCost: 65536,
            timeCost: 3,
            parallelism: 4,
        });

        const user = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });

        return user.save();
    }

    async createOAuthUser(createUserDto: CreateOAuthUserDto): Promise<UserDocument> {
        const user = new this.userModel({
            name: createUserDto.name,
            email: createUserDto.email,
            password: null,
            provider: createUserDto.provider,
            providerId: createUserDto.providerId,
            avatar: createUserDto.avatar,
            isActive: true,
            isVerified: true, // OAuth users are auto-verified
        });

        return user.save();
    }

    async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findById(id: string): Promise<UserDocument | null> {
        return this.userModel.findById(id).exec();
    }

    async findByProvider(provider: string, providerId: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ provider, providerId }).exec();
    }

    async validatePassword(userId: string, password: string): Promise<boolean> {
        const user = await this.userModel.findById(userId).select('+password').exec();
        if (!user || !user.password) return false;
        return argon2.verify(user.password, password);
    }

    async updateRefreshToken(userId: string, refreshToken: string | null): Promise<void> {
        const update: any = { refreshToken };
        if (refreshToken) {
            update.refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        } else {
            update.refreshTokenExpiry = null;
        }
        await this.userModel.findByIdAndUpdate(userId, update).exec();
    }

    async validateRefreshToken(userId: string, refreshToken: string): Promise<boolean> {
        const user = await this.userModel.findById(userId).exec();
        if (!user || !user.refreshToken || !user.refreshTokenExpiry) return false;
        if (user.refreshTokenExpiry < new Date()) return false;
        return user.refreshToken === refreshToken;
    }

    async incrementLoginAttempts(userId: string): Promise<void> {
        const user = await this.userModel.findById(userId).exec();
        if (!user) return;

        const updates: any = { $inc: { loginAttempts: 1 } };

        if (user.loginAttempts + 1 >= 5) {
            updates.lockUntil = new Date(Date.now() + 15 * 60 * 1000);
        }

        await this.userModel.findByIdAndUpdate(userId, updates).exec();
    }

    async resetLoginAttempts(userId: string): Promise<void> {
        await this.userModel.findByIdAndUpdate(userId, {
            loginAttempts: 0,
            lockUntil: null,
        }).exec();
    }

    async updateLastLogin(userId: string): Promise<void> {
        await this.userModel.findByIdAndUpdate(userId, {
            lastLogin: new Date(),
        }).exec();
    }
}
