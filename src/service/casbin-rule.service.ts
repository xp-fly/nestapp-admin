import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CasbinRule } from '../entity/casbin-rule.entity';
import { PrivilegeResource } from '../entity/privilege.entity';
import { InjectRepository } from '../decorator/database.decorator';
import { CasbinRuleRepository } from '../repository/casbin-rule.repository';

@Injectable()
export class CasbinRuleService {
    constructor(
        @InjectRepository(CasbinRuleRepository)
        private casbinRuleRepo: CasbinRuleRepository
    ) {
    }

    /**
     * 更新用户组的权限策略
     * @param roleId
     * @param privileges
     */
    async updatePolicy(roleId: string, privileges: PrivilegeResource[]) {
        const subId = `role:${roleId}`;
        const poicies = privileges.map(privilege => {
            return this.casbinRuleRepo.create({
                ptype: 'p',
                v1: subId,
                v2: `${subId}/${privilege.resource}`,
                v3: privilege.act
            });
        });

        await this.casbinRuleRepo.delete({
            v1: subId
        });
        if (poicies.length) {
            await this.casbinRuleRepo.insert(poicies);
        }
    }
}
