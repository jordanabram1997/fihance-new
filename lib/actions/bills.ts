"use server";

import { BillId, billIdSchema, insertBillParams, NewBillParams, updateBillParams, UpdateBillParams } from "../db/zod/bills";
import { getUserAuth } from "../integrations/auth/utils";
import { createBill, deleteBill, updateBill } from "../services/bills/mutations";
import { handleErrors } from "./utils";

export const createBillAction = async (data: NewBillParams) => {
  const { session } = await getUserAuth();
  if (!session?.activeOrganizationId) return { error: "Organization not found", data: null };

  try {
    const payload = insertBillParams.parse(data);

    const bill  = await createBill(payload);

    return bill;

  } catch (e) {
    return handleErrors(e);
  }
}

export const updateBillAction = async (id: BillId, data: UpdateBillParams) => {
  const { session } = await getUserAuth();
  if (!session?.userId) return { error: "User Not Authorised", data: null };

  try {
    const payload = updateBillParams.parse(data);
    const parsedId = billIdSchema.parse({ id: id });

    const { bill } = await updateBill(parsedId.id, payload);

    return bill;

  } catch (e) {
    return handleErrors(e);
  }
}

export const deleteBillAction = async (id: BillId) => {
  try {
    const parsedId = billIdSchema.parse({ id: id });

    const { bill } = await deleteBill(parsedId.id);

    return bill;
  } catch (e) {
    return handleErrors(e);
  }
}