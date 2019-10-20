import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot()
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ]
})
export default class AdminModule {
}
