import { UserService } from '../service/user.service';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getList(): any[];
    add(body: AddUserDto): Promise<import("../entity/user.entity").User>;
    update(body: UpdateUserDto): void;
}
