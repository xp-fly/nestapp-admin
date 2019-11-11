import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ConfigModule, ConfigService } from 'nestjs-configure';
import { resolve } from 'path';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configName, databaseConnectName } from './constant';
import {DatabaseModule, GrpcModule} from 'nestapp';
import { UserGroupController } from './controller/user-group.controller';
import { UserGroupService } from './service/user-group.service';
import { UserGroupRepository } from './repository/user-group.repository';
import { CasbinRuleRepository } from './repository/casbin-rule.repository';
import { PrivilegeRepository } from './repository/privilege.repository';
import { CasbinRuleService } from './service/casbin-rule.service';
import { ProtobufLoader } from './protobufs/protobuf-loader';

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
        // grpc 模块
        GrpcModule.init({
            configName,
            packages: ProtobufLoader.load(),
        }),
        TypeOrmModule.forFeature([
            UserRepository,
            UserGroupRepository,
            CasbinRuleRepository,
            PrivilegeRepository,
        ], databaseConnectName),
    ],
    controllers: [
        UserController,
        UserGroupController,

    ],
    providers: [
        UserService,
        UserGroupService,
        CasbinRuleService,
    ]
})
export default class AdminModule {
}
