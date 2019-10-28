import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { resolve } from 'path';
import { UserRepository } from './repository/user.pository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configName, databaseConnectName } from './constant';
import {DatabaseModule} from 'nestapp';

@Module({
    imports: [
        // 加载配置
        ConfigModule.load(resolve(__dirname, 'bootstrap.yml'), 'admin'),
        // 数据库模块
        DatabaseModule.init({
            configName,
            connectName: databaseConnectName,
            entitiesPath: resolve(__dirname, './**/**.entity{.ts,.js}')
        }),
        TypeOrmModule.forFeature([UserRepository], databaseConnectName)
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
