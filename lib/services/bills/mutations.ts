import { handleErrors } from "@/lib/actions/utils";
import { db } from "@/lib/db";
import { bills } from "@/lib/db/schema/bills";
import { BillId, billIdSchema, NewBillParams, UpdateBillParams, updateBillSchema } from "@/lib/db/zod/bills";
import { getUserAuth } from "@/lib/integrations/auth/utils";
import { and, eq } from "drizzle-orm";

export const createBill = async(bill: NewBillParams) => {
    const { session } = await getUserAuth()
    
    if (!session?.activeOrganizationId) {
        throw new Error("No active organization found. Please select an organization.");
    }
    
    try {
        const result = await db.insert(bills).values({ ...bill, organizationId: session.activeOrganizationId }).returning();
        return { bill: result[0] };
    } catch (e) {
        throw new Error(handleErrors(e));
    }
}

export const updateBill = async(id: BillId, bill: UpdateBillParams) => {
    const { session } = await getUserAuth()
    if (!session?.activeOrganizationId) {
        throw new Error("No active organization found. Please select an organization.");
    }
    // Parse the incoming id and bill to ensure they are valid
    const parsedBillId = billIdSchema.parse({ id: id });
    const parsedBill = updateBillSchema.parse(bill);
    
    // Ensure the bill belongs to the user's organization
    const result = await db.update(bills)
        .set(parsedBill)
        .where(and(
            eq(bills.id, parsedBillId.id),
            eq(bills.organizationId, session.activeOrganizationId)
        ))
        .returning();
    
    if (result.length === 0) {
        throw new Error("Bill not found or you don't have permission to update it.");
    }
    
    return { bill: result[0] };
}   

export const deleteBill = async(id: BillId) => {
    // Parse the incoming id to ensure it is a valid BillId
    const parsedBillId = billIdSchema.parse({ id: id });

    const result = await db.delete(bills).where(eq(bills.id, parsedBillId.id)).returning();

    return { bill: result[0] ?? null };
}