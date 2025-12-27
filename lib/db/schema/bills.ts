import { nanoid } from "@/lib/utils/nanoid";
import { char, date, index, numeric, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

// --- ENUMS ---

export const billStatusEnum = pgEnum("bill_status", [
  "upcoming",
  "paid",
  "cancelled", // omit 'overdue' for MVP; can compute in queries
]);

// --- TABLES ---

export const bills = pgTable("bills", {
  // Primary Key
  id: varchar("id", { length: 20 }).primaryKey().$defaultFn(() => nanoid()),

  // Bill Details
  billName: text("bill_name").notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  currency: char("currency", { length: 3 }).notNull().default("GBP"),
  dueDate: date("due_date").notNull(),
  status: billStatusEnum("status").notNull().default("upcoming"),

  // Ownership & Responsibility
  organizationId: text("organization_id").notNull(),
  assignedUserId: text("assigned_user_id"), // must be validated in app code
  createdByUserId: text("created_by_user_id").notNull(),

  // Audit
  paidAt: timestamp("paid_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
}, (table) => [
  // Indexes for faster queries
  index("bills_org_idx").on(table.organizationId),
  index("bills_status_idx").on(table.status),
  index("bills_due_date_idx").on(table.dueDate),
  index("bills_org_status_due_idx").on(table.organizationId, table.status, table.dueDate),
]);
