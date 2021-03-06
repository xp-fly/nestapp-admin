import { BadRequestException, Injectable } from '@nestjs/common';
import { AddUserGroupDto } from '../dto/user-group/add-user-group.dto';
import * as uuid from 'uuid';
import { UpdateUserGroupDto } from '../dto/user-group/update-user-group.dto';
import { CasbinRuleService } from './casbin-rule.service';
import {getOffsetLimit} from 'nestapp';
import { InjectRepository } from '../decorator/database.decorator';
import { UserGroupRepository } from '../repository/user-group.repository';

@Injectable()
export class UserGroupService {
    constructor(
        @InjectRepository(UserGroupRepository)
        private userGroupRepo: UserGroupRepository,
        private casbinRuleService: CasbinRuleService,
    ) {
    }

    /**
     * 用户组列表
     * @param param
     */
    getList(param) {
        const { offset, limit } = getOffsetLimit(param);

        return this.userGroupRepo.findAndCount({
            take: limit,
            skip: offset,
        });
    }

    /**
     * 创建用户组
     * @param body
     */
    async add(body: AddUserGroupDto) {
        const userGroup = this.userGroupRepo.create(body);
        const find = await this.findByName(body.name);
        if (find) {
            throw new BadRequestException('用户组名称不能重复');
        }
        userGroup.uuid = uuid.v1();
        userGroup.privilege = JSON.stringify(body.privileges);
        await this.userGroupRepo.save(userGroup);
        await this.casbinRuleService.updatePolicy(userGroup.uuid, body.privileges);
        return userGroup;
    }

    /**
     * 更新用户组
     * @param id
     * @param body
     */
    async update(id: number, body: UpdateUserGroupDto) {
        const userGroup = this.userGroupRepo.create(body);
        const find = await this.findByName(body.name);
        if (find && find.id !== id) {
            throw new BadRequestException('用户组不能重复');
        }
        userGroup.privilege = JSON.stringify(body.privileges);
        userGroup.id = id;
        await this.userGroupRepo.save(userGroup);
        await this.casbinRuleService.updatePolicy(find.uuid, body.privileges);
        return userGroup;
    }

    /**
     * 根据名称查找
     * @param name
     */
    findByName(name) {
        return this.userGroupRepo.findOne({
            where: {
                name
            }
        });
    }

    /**
     * 删除用户组
     * @param id
     */
    delete(id: number) {
        return this.userGroupRepo.delete(id);
    }
}
