import { UserGroupService } from '../service/user-group.service';
import { AddUserGroupDto } from '../dto/user-group/add-user-group.dto';
import { UpdateUserGroupDto } from '../dto/user-group/update-user-group.dto';
export declare class UserGroupController {
    private userGroupService;
    constructor(userGroupService: UserGroupService);
    getList(query: any): Promise<[import("../entity/user-group.entity").UserGroup[], number]>;
    add(body: AddUserGroupDto): Promise<import("../entity/user-group.entity").UserGroup>;
    update(body: UpdateUserGroupDto): Promise<import("../entity/user-group.entity").UserGroup>;
}
