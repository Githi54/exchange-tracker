import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { CheckResultInterceptor } from '../shared/interceptors';

@Controller('/exchange')
@UseInterceptors(CheckResultInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/codes')
  async getCodes() {
    return this.appService.getCodes();
  }
}
