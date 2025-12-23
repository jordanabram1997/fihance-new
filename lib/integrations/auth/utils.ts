import { auth } from "@/lib/integrations/auth/auth";
import { headers } from "next/headers";

/**
 * Get authenticated user session, throwing an error if not authenticated
 * Use this in services that require authentication
 */
export const getUserAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return { session: session?.session };
};