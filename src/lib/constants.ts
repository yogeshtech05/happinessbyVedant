export const DEFAULT_TIME_SLOTS = [
  { id: "morning", label: "Morning Slot (9:00 AM - 12:00 PM)" },
  { id: "afternoon", label: "Afternoon Slot (1:00 PM - 4:00 PM)" },
  { id: "evening", label: "Evening Slot (5:00 PM - 8:00 PM)" },
  { id: "midnight", label: "Midnight Special Slot (11:55 PM - 12:15 AM)" },
] as const;

export const PROMO_CODES: Record<string, number> = {
  GAURI100: 500,
  WELCOME50: 300,
} as const;

export const CURRENCY = {
  code: "INR",
  symbol: "₹",
  locale: "en-IN",
} as const;
