/**
 * Maps ISO 4217 currency codes to their symbols
 */
const CURRENCY_SYMBOLS: Record<string, string> = {
  GBP: "£",
  USD: "$",
  EUR: "€",
  JPY: "¥",
  CNY: "¥",
  INR: "₹",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  NZD: "NZ$",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  RUB: "₽",
  TRY: "₺",
  BRL: "R$",
  MXN: "$",
  ZAR: "R",
  KRW: "₩",
  SGD: "S$",
  HKD: "HK$",
  AED: "د.إ",
  SAR: "﷼",
  ILS: "₪",
  THB: "฿",
  PHP: "₱",
  IDR: "Rp",
  MYR: "RM",
  VND: "₫",
};

/**
 * Gets the currency symbol for a given currency code
 * @param currencyCode - ISO 4217 currency code (e.g., "GBP", "USD")
 * @param fallback - Fallback symbol to use if currency code is not found (default: "£")
 * @returns The currency symbol
 */
export function getCurrencySymbol(
  currencyCode: string | null | undefined,
  fallback: string = "£"
): string {
  if (!currencyCode) {
    return fallback;
  }

  return CURRENCY_SYMBOLS[currencyCode.toUpperCase()] ?? fallback;
}

