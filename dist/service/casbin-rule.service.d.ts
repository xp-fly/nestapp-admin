import { Repository } from 'typeorm';
import { CasbinRule } from '../entity/casbin-rule.entity';
import { PrivilegeResource } from '../entity/privilege.entity';
export declare class CasbinRuleService {
    private casbinRuleRepo;
    constructor(casbinRuleRepo: Repository<CasbinRule>);
    updatePolicy(roleId: string, privileges: PrivilegeResource[]): Promise<void>;
}
