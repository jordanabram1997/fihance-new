import { eq } from "drizzle-orm";
import { db } from "./db";
import { waitlist } from "./db/schema";

export async function getWaitlistEntry(email: string) {
  const result = await db
    .select()
    .from(waitlist)
    .where(eq(waitlist.email, email))
    .limit(1);
  
  return result[0] || null;
}

export async function joinWaitlist(email: string) {
  await db
    .insert(waitlist)
    .values({ email })
    .onConflictDoNothing();
}

export async function assertWaitlistApproved(email: string) {
  const entry = await getWaitlistEntry(email);

  if (!entry || !entry.approved) {
    throw new Error("WAITLIST_NOT_APPROVED");
  }
}

export async function approveWaitlistEmail(email: string) {
  await db
    .update(waitlist)
    .set({
      approved: true,
      approvedAt: new Date(),
    })
    .where(eq(waitlist.email, email));
}

