import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { RulesModule } from './rules/rules.module';

@Module({
  imports: [UserModule, RulesModule],
})
export class AppModule {}
