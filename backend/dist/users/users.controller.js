"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const user_schema_1 = require("./user.schema");
class UpdateUserDto {
}
class BanUserDto {
}
class ChangeRoleDto {
}
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    checkAdmin(req) {
        if (req.user?.role !== user_schema_1.UserRole.ADMIN) {
            throw new common_1.ForbiddenException('Admin access required');
        }
    }
    async findAll(req, page, limit, search, role, status) {
        this.checkAdmin(req);
        return this.usersService.findAll(parseInt(page || '1'), parseInt(limit || '10'), search, role, status);
    }
    async getStats(req) {
        this.checkAdmin(req);
        return this.usersService.getStats();
    }
    async findOne(req, id) {
        this.checkAdmin(req);
        return this.usersService.findById(id);
    }
    async update(req, id, updateDto) {
        this.checkAdmin(req);
        return this.usersService.updateUser(id, updateDto);
    }
    async delete(req, id) {
        this.checkAdmin(req);
        await this.usersService.deleteUser(id);
    }
    async banUser(req, id, banDto) {
        this.checkAdmin(req);
        return this.usersService.banUser(id, banDto.reason);
    }
    async unbanUser(req, id) {
        this.checkAdmin(req);
        return this.usersService.unbanUser(id);
    }
    async changeRole(req, id, roleDto) {
        this.checkAdmin(req);
        return this.usersService.changeRole(id, roleDto.role);
    }
    async verifyUser(req, id) {
        this.checkAdmin(req);
        return this.usersService.verifyUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users (Admin only)' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, enum: user_schema_1.UserRole }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['verified', 'unverified', 'banned', 'active'] }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of users' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('role')),
    __param(5, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user statistics (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User statistics' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get single user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User details' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'User deleted' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id/ban'),
    (0, swagger_1.ApiOperation)({ summary: 'Ban user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User banned' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, BanUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "banUser", null);
__decorate([
    (0, common_1.Patch)(':id/unban'),
    (0, swagger_1.ApiOperation)({ summary: 'Unban user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User unbanned' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unbanUser", null);
__decorate([
    (0, common_1.Patch)(':id/role'),
    (0, swagger_1.ApiOperation)({ summary: 'Change user role (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Role changed' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ChangeRoleDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeRole", null);
__decorate([
    (0, common_1.Patch)(':id/verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify user (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User verified' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users Management'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map