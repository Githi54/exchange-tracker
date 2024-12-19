import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Get()
  async getAllRules() {
    return this.rulesService.getAllRules();
  }

  @Post()
  async createRule(
    @Body()
    ruleData: {
      userId: string;
      currencyA: string;
      currencyB: string;
      percentage: number;
      period?: number;
    },
  ) {
    return this.rulesService.createRule(ruleData.userId, ruleData);
  }

  @Get(':userId')
  async getUserRules(@Param('userId') userId: string) {
    return this.rulesService.getUserRules(userId);
  }

  @Delete(':ruleId')
  async deleteRule(@Param('ruleId') ruleId: string) {
    return this.rulesService.deleteRule(ruleId);
  }
}
