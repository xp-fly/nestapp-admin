import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    add(body: AddUserDto): Promise<User>;
    update(id: number, body: UpdateUserDto): void;
}
