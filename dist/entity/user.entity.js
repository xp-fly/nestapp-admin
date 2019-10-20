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
const typeorm_1 = require("typeorm");
const base_abstract_entity_1 = require("../../../../src/entity/base.abstract.entity");
let User = class User extends base_abstract_entity_1.BaseAbstractEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '用户姓名',
        default: ''
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'user_group_id',
        default: 0,
        comment: '用户组 id'
    }),
    __metadata("design:type", Number)
], User.prototype, "userGroupId", void 0);
User = __decorate([
    typeorm_1.Column({
        name: 'user'
    })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map