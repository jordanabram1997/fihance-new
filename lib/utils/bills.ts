/**
 * Bill status enum values and their display labels
 */
export const BILL_STATUS_OPTIONS = [
  { value: "upcoming", label: "Upcoming" },
  { value: "paid", label: "Paid" },
  { value: "overdue", label: "Overdue" },
  { value: "cancelled", label: "Cancelled" },
] as const;

/**
 * Recurrence frequency enum values and their display labels
 */
export const RECURRENCE_FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
] as const;

/**
 * Get the display label for a bill status value
 */
export function getBillStatusLabel(status: string): string {
  return BILL_STATUS_OPTIONS.find((option) => option.value === status)?.label ?? status;
}

/**
 * Get the display label for a recurrence frequency value
 */
export function getRecurrenceFrequencyLabel(frequency: string): string {
  return RECURRENCE_FREQUENCY_OPTIONS.find((option) => option.value === frequency)?.label ?? frequency;
}

