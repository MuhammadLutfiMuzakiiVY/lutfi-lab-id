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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationCodeSchema = exports.VerificationCode = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let VerificationCode = class VerificationCode {
};
exports.VerificationCode = VerificationCode;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VerificationCode.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VerificationCode.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VerificationCode.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], VerificationCode.prototype, "expiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], VerificationCode.prototype, "used", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], VerificationCode.prototype, "attempts", void 0);
exports.VerificationCode = VerificationCode = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VerificationCode);
exports.VerificationCodeSchema = mongoose_1.SchemaFactory.createForClass(VerificationCode);
exports.VerificationCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
exports.VerificationCodeSchema.index({ email: 1, type: 1 });
//# sourceMappingURL=verification-code.schema.js.map