import { UsersService } from './users.service';
import { UserRole } from './user.schema';
declare class UpdateUserDto {
    name?: string;
    email?: string;
    phone?: string;
    role?: UserRole;
    isVerified?: boolean;
    isActive?: boolean;
}
declare class BanUserDto {
    reason?: string;
}
declare class ChangeRoleDto {
    role: UserRole;
}
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    private checkAdmin;
    findAll(req: any, page?: string, limit?: string, search?: string, role?: UserRole, status?: 'verified' | 'unverified' | 'banned' | 'active'): Promise<import("./users.service").UserListResult>;
    getStats(req: any): Promise<import("./users.service").UserStats>;
    findOne(req: any, id: string): Promise<import("./user.schema").UserDocument | null>;
    update(req: any, id: string, updateDto: UpdateUserDto): Promise<import("./user.schema").UserDocument>;
    delete(req: any, id: string): Promise<void>;
    banUser(req: any, id: string, banDto: BanUserDto): Promise<import("./user.schema").UserDocument>;
    unbanUser(req: any, id: string): Promise<import("./user.schema").UserDocument>;
    changeRole(req: any, id: string, roleDto: ChangeRoleDto): Promise<import("./user.schema").UserDocument>;
    verifyUser(req: any, id: string): Promise<import("./user.schema").UserDocument>;
}
export {};
