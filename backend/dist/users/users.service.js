"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const argon2 = __importStar(require("argon2"));
const user_schema_1 = require("./user.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll(page = 1, limit = 10, search, role, status) {
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }
        if (role) {
            query.role = role;
        }
        if (status === 'verified')
            query.isVerified = true;
        if (status === 'unverified')
            query.isVerified = false;
        if (status === 'banned')
            query.isBanned = true;
        if (status === 'active')
            query.isActive = true;
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
    async updateUser(id, updateDto) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (updateDto.email && updateDto.email !== user.email) {
            const existingUser = await this.userModel.findOne({ email: updateDto.email });
            if (existingUser) {
                throw new common_1.BadRequestException('Email already in use');
            }
        }
        Object.assign(user, updateDto);
        return user.save();
    }
    async deleteUser(id) {
        const result = await this.userModel.findByIdAndDelete(id);
        if (!result) {
            throw new common_1.NotFoundException('User not found');
        }
    }
    async banUser(id, reason) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.isBanned = true;
        user.isActive = false;
        user.banReason = reason || 'No reason provided';
        user.bannedAt = new Date();
        return user.save();
    }
    async unbanUser(id) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.isBanned = false;
        user.isActive = true;
        user.banReason = null;
        user.bannedAt = null;
        return user.save();
    }
    async changeRole(id, role) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.role = role;
        return user.save();
    }
    async verifyUser(id) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.isVerified = true;
        return user.save();
    }
    async getStats() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const [total, verified, unverified, banned, admins, activeToday] = await Promise.all([
            this.userModel.countDocuments(),
            this.userModel.countDocuments({ isVerified: true }),
            this.userModel.countDocuments({ isVerified: false }),
            this.userModel.countDocuments({ isBanned: true }),
            this.userModel.countDocuments({ role: user_schema_1.UserRole.ADMIN }),
            this.userModel.countDocuments({ lastLogin: { $gte: today } }),
        ]);
        return { total, verified, unverified, banned, admins, activeToday };
    }
    async create(createUserDto) {
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
    async createOAuthUser(createUserDto) {
        const user = new this.userModel({
            name: createUserDto.name,
            email: createUserDto.email,
            password: null,
            provider: createUserDto.provider,
            providerId: createUserDto.providerId,
            avatar: createUserDto.avatar,
            isActive: true,
            isVerified: true,
        });
        return user.save();
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async findById(id) {
        return this.userModel.findById(id).exec();
    }
    async findByProvider(provider, providerId) {
        return this.userModel.findOne({ provider, providerId }).exec();
    }
    async validatePassword(userId, password) {
        const user = await this.userModel.findById(userId).select('+password').exec();
        if (!user || !user.password)
            return false;
        return argon2.verify(user.password, password);
    }
    async updateRefreshToken(userId, refreshToken) {
        const update = { refreshToken };
        if (refreshToken) {
            update.refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        }
        else {
            update.refreshTokenExpiry = null;
        }
        await this.userModel.findByIdAndUpdate(userId, update).exec();
    }
    async validateRefreshToken(userId, refreshToken) {
        const user = await this.userModel.findById(userId).exec();
        if (!user || !user.refreshToken || !user.refreshTokenExpiry)
            return false;
        if (user.refreshTokenExpiry < new Date())
            return false;
        return user.refreshToken === refreshToken;
    }
    async incrementLoginAttempts(userId) {
        const user = await this.userModel.findById(userId).exec();
        if (!user)
            return;
        const updates = { $inc: { loginAttempts: 1 } };
        if (user.loginAttempts + 1 >= 5) {
            updates.lockUntil = new Date(Date.now() + 15 * 60 * 1000);
        }
        await this.userModel.findByIdAndUpdate(userId, updates).exec();
    }
    async resetLoginAttempts(userId) {
        await this.userModel.findByIdAndUpdate(userId, {
            loginAttempts: 0,
            lockUntil: null,
        }).exec();
    }
    async updateLastLogin(userId) {
        await this.userModel.findByIdAndUpdate(userId, {
            lastLogin: new Date(),
        }).exec();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map