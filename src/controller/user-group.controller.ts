import { Body, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UserGroupService } from '../service/user-group.service';
import { AddUserGroupDto } from '../dto/user-group/add-user-group.dto';
import { UpdateUserGroupDto } from '../dto/user-group/update-user-group.dto';
import { Controller } from '../decorator/controller.decorator';
import { DeleteUserGroupDto } from '../dto/user-group/delete-user-group.dto';

@Controller('userGroup')
export class UserGroupController {
    constructor(private userGroupService: UserGroupService) {
    }

    /**
     * 获取列表
     * @param query
     */
    @Get()
    async getList(@Query() query) {
        const [rows, count] = await this.userGroupService.getList(query);
        return {
            count,
            rows,
        };
    }

    /**
     * 增加用户组
     * @param body
     */
    @Post()
    add(@Body() body: AddUserGroupDto) {
        return this.userGroupService.add(body);
    }

    /**
     * 更新用户组
     * @param body
     */
    @Put()
    update(@Body() body: UpdateUserGroupDto) {
        return this.userGroupService.update(body.id, body);
    }

    /**
     * 删除用户组
     * @param body
     */
    @Delete()
    delete(@Body() body: DeleteUserGroupDto) {
        return this.userGroupService.delete(body.id);
    }
}
