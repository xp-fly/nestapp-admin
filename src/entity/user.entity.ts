import { Column, Entity } from 'typeorm';
import { BaseAbstractEntity } from '../base/base.abstract.entity';

@Entity({
    name: 'user'
})
export class User extends BaseAbstractEntity {
    @Column({
        type: 'varchar',
        comment: '用户姓名',
        default: ''
    })
    username: string;

    @Column({
        type: 'int',
        name: 'user_group_id',
        default: 0,
        comment: '用户组 id'
    })
    userGroupId: number;
}
