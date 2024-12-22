const baseExchangeUrl = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}`;

export const exchangeUrls = {
  codes: `${baseExchangeUrl}/codes`,
};
