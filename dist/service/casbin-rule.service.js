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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CasbinRuleService = class CasbinRuleService {
    constructor(casbinRuleRepo) {
        this.casbinRuleRepo = casbinRuleRepo;
    }
    async updatePolicy(roleId, privileges) {
        const subId = `role:${roleId}`;
        const poicies = privileges.map(privilege => {
            return this.casbinRuleRepo.create({
                ptype: 'p',
                v1: subId,
                v2: `${subId}/${privilege.resource}`,
                v3: privilege.act
            });
        });
        await this.casbinRuleRepo.delete({
            v1: subId
        });
        await this.casbinRuleRepo.insert(poicies);
    }
};
CasbinRuleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CasbinRuleService);
exports.CasbinRuleService = CasbinRuleService;
//# sourceMappingURL=casbin-rule.service.js.map