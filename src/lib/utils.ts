import { CURRENCY } from "./constants";

/**
 * Formats a numeric price into Indian Rupee (₹) format.
 * Example: 2499 -> "₹2,499"
 */
export function formatPrice(amount: number): string {
  return `${CURRENCY.symbol}${amount.toLocaleString(CURRENCY.locale)}`;
}

/**
 * Combines CSS class names filtering out falsey values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
