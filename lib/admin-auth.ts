import { NextResponse } from "next/server";
import { getSession } from "./jwt";

/**
 * Guard for admin API routes. Returns `{ response }` with a 401 when the
 * caller isn't an admin — return it immediately. Otherwise `session` is set.
 *
 *   const { session, response } = await requireAdmin();
 *   if (response) return response;
 */
export async function requireAdmin() {
  const session = await getSession();

  if (!session || (session.role !== "ADMIN" && session.role !== "SUPERADMIN")) {
    return {
      session: null,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return { session, response: null };
}
