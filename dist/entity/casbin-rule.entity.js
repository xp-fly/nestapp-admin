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
const base_abstract_entity_1 = require("../../../../src/entity/base.abstract.entity");
const typeorm_1 = require("typeorm");
let CasbinRule = class CasbinRule extends base_abstract_entity_1.BaseAbstractEntity {
};
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '规则类型',
        default: ''
    }),
    __metadata("design:type", String)
], CasbinRule.prototype, "ptype", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '实体'
    }),
    __metadata("design:type", String)
], CasbinRule.prototype, "v1", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '资源'
    }),
    __metadata("design:type", String)
], CasbinRule.prototype, "v2", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        comment: '资源'
    }),
    __metadata("design:type", String)
], CasbinRule.prototype, "v3", void 0);
CasbinRule = __decorate([
    typeorm_1.Entity({
        name: 'casbin_rule'
    })
], CasbinRule);
exports.CasbinRule = CasbinRule;
//# sourceMappingURL=casbin-rule.entity.js.map