import { Controller, Get, Put, Patch, Delete, Body, Param, Query, UseGuards, Request, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from './user.schema';

// DTOs for request validation
class UpdateUserDto {
    name?: string;
    email?: string;
    phone?: string;
    role?: UserRole;
    isVerified?: boolean;
    isActive?: boolean;
}

class BanUserDto {
    reason?: string;
}

class ChangeRoleDto {
    role: UserRole;
}

@ApiTags('Users Management')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
    constructor(private usersService: UsersService) { }

    // Admin check helper
    private checkAdmin(req: any): void {
        if (req.user?.role !== UserRole.ADMIN) {
            throw new ForbiddenException('Admin access required');
        }
    }

    @Get()
    @ApiOperation({ summary: 'Get all users (Admin only)' })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'search', required: false, type: String })
    @ApiQuery({ name: 'role', required: false, enum: UserRole })
    @ApiQuery({ name: 'status', required: false, enum: ['verified', 'unverified', 'banned', 'active'] })
    @ApiResponse({ status: 200, description: 'List of users' })
    async findAll(
        @Request() req: any,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
        @Query('role') role?: UserRole,
        @Query('status') status?: 'verified' | 'unverified' | 'banned' | 'active',
    ) {
        this.checkAdmin(req);
        return this.usersService.findAll(
            parseInt(page || '1'),
            parseInt(limit || '10'),
            search,
            role,
            status,
        );
    }

    @Get('stats')
    @ApiOperation({ summary: 'Get user statistics (Admin only)' })
    @ApiResponse({ status: 200, description: 'User statistics' })
    async getStats(@Request() req: any) {
        this.checkAdmin(req);
        return this.usersService.getStats();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get single user (Admin only)' })
    @ApiResponse({ status: 200, description: 'User details' })
    async findOne(@Request() req: any, @Param('id') id: string) {
        this.checkAdmin(req);
        return this.usersService.findById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update user (Admin only)' })
    @ApiResponse({ status: 200, description: 'User updated' })
    async update(
        @Request() req: any,
        @Param('id') id: string,
        @Body() updateDto: UpdateUserDto,
    ) {
        this.checkAdmin(req);
        return this.usersService.updateUser(id, updateDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete user (Admin only)' })
    @ApiResponse({ status: 204, description: 'User deleted' })
    async delete(@Request() req: any, @Param('id') id: string) {
        this.checkAdmin(req);
        await this.usersService.deleteUser(id);
    }

    @Patch(':id/ban')
    @ApiOperation({ summary: 'Ban user (Admin only)' })
    @ApiResponse({ status: 200, description: 'User banned' })
    async banUser(
        @Request() req: any,
        @Param('id') id: string,
        @Body() banDto: BanUserDto,
    ) {
        this.checkAdmin(req);
        return this.usersService.banUser(id, banDto.reason);
    }

    @Patch(':id/unban')
    @ApiOperation({ summary: 'Unban user (Admin only)' })
    @ApiResponse({ status: 200, description: 'User unbanned' })
    async unbanUser(@Request() req: any, @Param('id') id: string) {
        this.checkAdmin(req);
        return this.usersService.unbanUser(id);
    }

    @Patch(':id/role')
    @ApiOperation({ summary: 'Change user role (Admin only)' })
    @ApiResponse({ status: 200, description: 'Role changed' })
    async changeRole(
        @Request() req: any,
        @Param('id') id: string,
        @Body() roleDto: ChangeRoleDto,
    ) {
        this.checkAdmin(req);
        return this.usersService.changeRole(id, roleDto.role);
    }

    @Patch(':id/verify')
    @ApiOperation({ summary: 'Verify user (Admin only)' })
    @ApiResponse({ status: 200, description: 'User verified' })
    async verifyUser(@Request() req: any, @Param('id') id: string) {
        this.checkAdmin(req);
        return this.usersService.verifyUser(id);
    }
}
