import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ExchangeCodesResponse } from 'src/shared/typify';
import { exchangeUrls } from 'src/shared/config-constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getCodes() {
    const response = await firstValueFrom(this.httpService.get<ExchangeCodesResponse>(exchangeUrls.codes));

    return response.data.supported_codes;
  }
}
