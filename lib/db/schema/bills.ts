import { nanoid } from "@/lib/utils/nanoid";
import { char, date, index, numeric, pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";


export const billStatusEnum = pgEnum("bill_status", [
    "upcoming",
    "paid",
    "overdue",
    "cancelled",
]);

export const recurrenceFrequencyEnum = pgEnum(
    "recurrence_frequency",
    ["daily", "weekly", "monthly", "yearly"]
);


export const bills = pgTable("bills", {
    id: varchar("id", { length: 20 }).primaryKey().$defaultFn(() => nanoid()),
    // Bill Details 
    billName: text("bill_name").notNull(),
    amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
    currency: char("currency", { length: 3 }).default("GBP"),
    dueDate: date("due_date").notNull(),
    status: billStatusEnum("status").notNull(),
    
    // // Recurrence
    // recurrenceFrequency: recurrenceFrequencyEnum("recurrence_frequency"),
    // recurrenceInterval: integer("recurrence_interval").default(1),

    // Ownership
    organizationId: uuid("organization_id").notNull(),
    
    // // Responsibility (optional)
    // assignedUserId: uuid("assigned_user_id"),
    
    // // Audit
    // paidAt: timestamp("paid_at"),
    // createdByUserId: uuid("created_by_user_id").notNull(),
    // createdAt: timestamp("created_at").defaultNow(),
    // updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),

}, (table) => [
    // index("bills_userId_idx").on(table.userId),
    index("bills_org_idx").on(table.organizationId),    
    index("bills_status_idx").on(table.status),
    index("bills_due_date_idx").on(table.dueDate),
]);