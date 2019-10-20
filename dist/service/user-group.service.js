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
const limit_offset_1 = require("../../../../src/util/limit-offset");
const uuid = require("uuid");
const casbin_rule_service_1 = require("./casbin-rule.service");
let UserGroupService = class UserGroupService {
    constructor(userGroupRepo, casbinRuleService) {
        this.userGroupRepo = userGroupRepo;
        this.casbinRuleService = casbinRuleService;
    }
    getList(param) {
        const { offset, limit } = limit_offset_1.getOffsetLimit(param);
        return this.userGroupRepo.findAndCount({
            take: limit,
            skip: offset
        });
    }
    async add(body) {
        const userGroup = this.userGroupRepo.create(body);
        const find = await this.findByName(name);
        if (find) {
            throw new common_1.BadRequestException('用户组名称不能重复');
        }
        userGroup.uuid = uuid.v1();
        userGroup.privilege = JSON.stringify(body.privileges);
        await this.userGroupRepo.save(userGroup);
        await this.casbinRuleService.updatePolicy(userGroup.uuid, body.privileges);
        return userGroup;
    }
    async update(id, body) {
        const userGroup = this.userGroupRepo.create(body);
        const find = await this.findByName(body.name);
        if (find && find.id !== id) {
            throw new common_1.BadRequestException('用户组不能重复');
        }
        userGroup.privilege = JSON.stringify(body.privileges);
        userGroup.id = id;
        await this.userGroupRepo.save(userGroup);
        await this.casbinRuleService.updatePolicy(find.uuid, body.privileges);
        return userGroup;
    }
    findByName(name) {
        return this.userGroupRepo.findOne({
            where: {
                name
            }
        });
    }
};
UserGroupService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        casbin_rule_service_1.CasbinRuleService])
], UserGroupService);
exports.UserGroupService = UserGroupService;
//# sourceMappingURL=user-group.service.js.map