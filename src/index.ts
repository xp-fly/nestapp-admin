import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { resolve } from 'path';
import { DatabaseModule } from './shared/database/database.module';
import { UserRepository } from './repository/user.pository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        // 加载配置
        ConfigModule.load(resolve(__dirname, 'bootstrap.yml'), 'admin'),
        // 数据库模块
        DatabaseModule.init('admin'),
        TypeOrmModule.forFeature([UserRepository])
    ],
    controllers: [
        // UserController
    ],
    providers: [
        // UserService
    ]
})
export default class AdminModule {
}
