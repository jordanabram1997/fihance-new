import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { bills } from "../schema/bills";
import { z } from "zod/v4";

const baseSchema = createSelectSchema(bills);

export const insertBillSchema = createInsertSchema(bills).omit({
    id: true,
    organizationId: true,
    paidAt: true,
    updatedAt: true,
})

export const insertBillParams = insertBillSchema;
export const updateBillSchema = baseSchema;
export const updateBillParams = baseSchema.omit({
    id: true,
    organizationId: true,
});

export const billIdSchema = baseSchema.pick({ id: true });

// Types for Bills - used to type API request params and within Components
export type Bill = typeof bills.$inferSelect;
export type NewBill = z.infer<typeof insertBillSchema>;
export type NewBillParams = z.infer<typeof insertBillParams>;
export type UpdateBillParams = z.infer<typeof updateBillParams>;
export type BillId = z.infer<typeof billIdSchema>["id"];

// this type infers the return from getOrders() - meaning it will include any joins
// export type CompleteBills = Awaited<ReturnType<typeof getBills>>["bills"][number];
 