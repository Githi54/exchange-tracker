import { NestFactory } from '@nestjs/core';
import { AppModule } from './rules/rules.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5700);
}
bootstrap();
