import { Repository } from 'typeorm';
import { UserGroup } from '../entity/user-group.entity';
import { AddUserGroupDto } from '../dto/user-group/add-user-group.dto';
import { UpdateUserGroupDto } from '../dto/user-group/update-user-group.dto';
import { CasbinRuleService } from './casbin-rule.service';
export declare class UserGroupService {
    private userGroupRepo;
    private casbinRuleService;
    constructor(userGroupRepo: Repository<UserGroup>, casbinRuleService: CasbinRuleService);
    getList(param: any): Promise<[UserGroup[], number]>;
    add(body: AddUserGroupDto): Promise<UserGroup>;
    update(id: number, body: UpdateUserGroupDto): Promise<UserGroup>;
    findByName(name: any): Promise<UserGroup>;
}
