import { Injectable } from '@nestjs/common';
import { prisma } from 'src/utils/prisma';

@Injectable()
export class RulesService {
  async createRule(
    userId: string,
    ruleData: {
      currencyA: string;
      currencyB: string;
      percentage: number;
      period?: number;
      isPopular?: boolean;
    },
  ) {
    return prisma.rule.create({
      data: {
        ...ruleData,
        userId,
      },
    });
  }

  async getAllRules() {
    return prisma.rule.findMany();
  }

  async getUserRules(userId: string) {
    return prisma.rule.findMany({ where: { userId } });
  }

  async deleteRule(ruleId: string) {
    return prisma.rule.delete({ where: { id: ruleId } });
  }
}
