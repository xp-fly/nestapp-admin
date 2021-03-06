import { Body, Get, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { Controller } from '../decorator/controller.decorator';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {
    }

    @Get()
    async getList() {
        return this.userService.getList();
    }

    @Post()
    add(@Body() body: AddUserDto) {
        return this.userService.add(body);
    }

    @Put()
    update(@Body() body: UpdateUserDto) {
        return this.userService.update(body.id, body);
    }
}
