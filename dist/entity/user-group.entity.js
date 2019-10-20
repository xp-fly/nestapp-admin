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
const base_abstract_entity_1 = require("src/entity/base.abstract.entity");
let UserGroup = class UserGroup extends base_abstract_entity_1.BaseAbstractEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '姓名',
        default: ''
    }),
    __metadata("design:type", String)
], UserGroup.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: 'uuid'
    }),
    __metadata("design:type", String)
], UserGroup.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        comment: '权限数据'
    }),
    __metadata("design:type", String)
], UserGroup.prototype, "privilege", void 0);
UserGroup = __decorate([
    typeorm_1.Entity({
        name: 'user_group'
    })
], UserGroup);
exports.UserGroup = UserGroup;
//# sourceMappingURL=user-group.entity.js.map