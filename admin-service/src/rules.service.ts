import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RulesService {
  async createRule(
    userId: string,
    ruleData: {
      currencyA: string;
      currencyB: string;
      percentage: number;
      period?: number;
    },
  ) {
    return prisma.rule.create({
      data: {
        ...ruleData,
        userId,
      },
    });
  }

  async getRules(userId: string) {
    return prisma.rule.findMany({ where: { userId } });
  }

  async deleteRule(ruleId: string) {
    return prisma.rule.delete({ where: { id: ruleId } });
  }
}
