export interface ExchangeErrorResponse {
  result: 'error';
  'error-type': string;
}

export interface ExchangeSuccessResponse {
  result: 'success';
  [key: string]: unknown;
}

export type ExchangeResponse<T extends ExchangeSuccessResponse> =
  | ExchangeErrorResponse
  | T;

export interface ExchangeCodesResponse extends ExchangeSuccessResponse {
  supported_codes: [[string]];
}
