import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { RulesModule } from './rules.module';

@Module({
  imports: [UserModule, RulesModule],
})
export class AppModule {}
