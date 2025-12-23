import { db } from "@/lib/db";
import { bills } from "@/lib/db/schema/bills";
import { BillId, billIdSchema } from "@/lib/db/zod/bills";
import { eq } from "drizzle-orm";

export const getAllBills = async () => {
    const b = await db.select().from(bills);

    return { bills: b};
}

export const getBillById = async(id: BillId) => {

    // Parse the incoming id to ensure it is a valid BillId
    const parsedBillId = billIdSchema.parse({ id: id });

    // Get the bill from the database
    const b = await db.select().from(bills).where(eq(bills.id, parsedBillId.id));

    // Return the bill
    return { bill: b};
}