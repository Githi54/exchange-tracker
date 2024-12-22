import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExchangeResponse, ExchangeSuccessResponse } from './typify';

@Injectable()
export class CheckResultInterceptor<T extends ExchangeSuccessResponse>
  implements NestInterceptor
{
  intercept(
    _: ExecutionContext,
    next: CallHandler,
  ): Observable<ExchangeResponse<T>> {
    return next.handle().pipe(
      map((response: ExchangeResponse<T>) => {
        if (response.result === 'error') {
          throw new BadRequestException(
            `API response is not successful: ${response['error-type']}`,
          );
        }
        return response;
      }),
    );
  }
}
