import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { resolve } from 'path';
import { DatabaseModule } from './shared/database/database.module';

@Module({
    imports: [
        // 加载配置
        ConfigModule.load(resolve(__dirname, 'bootstrap.yml'), 'admin'),
        // 数据库模块
        DatabaseModule.init('admin'),
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
