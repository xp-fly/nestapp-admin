import { EntityRepository, Repository } from 'typeorm';
import { CasbinRule } from '../entity/casbin-rule.entity';

@EntityRepository(CasbinRule)
export class CasbinRuleRepository extends Repository<CasbinRule> {

}
