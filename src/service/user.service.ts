import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { UserRepository } from '../repository/user.repository';
import { InjectRepository } from '../decorator/database.decorator';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepo: UserRepository
    ) {
    }

    getList() {
        return this.userRepo.find();
    }

    /**
     * 创建用户
     * @param body
     */
    async add(body: AddUserDto) {
        const user = this.userRepo.create(body);
        return await this.userRepo.save(user);
    }

    /**
     * 修改用户
     * @param id
     * @param body
     */
    async update(id: number, body: UpdateUserDto) {
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new HttpException('user not exist', 10000);
        }
        await this.userRepo.update(id, body);
    }
}
