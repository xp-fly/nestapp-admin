import { EntityRepository, Repository } from 'typeorm';
import { UserGroup } from '../entity/user-group.entity';

@EntityRepository(UserGroup)
export class UserGroupRepository extends Repository<UserGroup> {

}
