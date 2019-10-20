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
const common_1 = require("@nestjs/common");
const user_group_service_1 = require("../service/user-group.service");
const add_user_group_dto_1 = require("../dto/user-group/add-user-group.dto");
const update_user_group_dto_1 = require("../dto/user-group/update-user-group.dto");
let UserGroupController = class UserGroupController {
    constructor(userGroupService) {
        this.userGroupService = userGroupService;
    }
    getList(query) {
        return this.userGroupService.getList(query);
    }
    add(body) {
        return this.userGroupService.add(body);
    }
    update(body) {
        return this.userGroupService.update(body.id, body);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "getList", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_group_dto_1.AddUserGroupDto]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "add", null);
__decorate([
    common_1.Put(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_group_dto_1.UpdateUserGroupDto]),
    __metadata("design:returntype", void 0)
], UserGroupController.prototype, "update", null);
UserGroupController = __decorate([
    common_1.Controller('userGroup'),
    __metadata("design:paramtypes", [user_group_service_1.UserGroupService])
], UserGroupController);
exports.UserGroupController = UserGroupController;
//# sourceMappingURL=user-group.controller.js.map