import { Injectable } from '@nestjs/common';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { UserRepository } from '../repository/user.pository';
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

    update(id: number, body: UpdateUserDto) {

    }
}
