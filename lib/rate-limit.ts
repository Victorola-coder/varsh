import { NextResponse } from "next/server";

/**
 * Minimal fixed-window rate limiter for the public POST endpoints
 * (contact, feedback, newsletter, donate), which were previously wide open:
 * anyone could fill the admin's submission tables with unlimited junk.
 *
 * Deliberately in-process and dependency-free. That means the budget is per
 * server instance, so it does NOT hold across a horizontally scaled or
 * serverless deployment — if this runs on more than one instance, move the
 * counter to Redis/Upstash. It still stops the common case: one source
 * hammering one box.
 */
type Entry = { count: number; resetAt: number };

const buckets = new Map<string, Entry>();

// Keep the map from growing without bound on a long-lived server.
const PRUNE_EVERY = 5000;
let writes = 0;

function prune(now: number) {
  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) buckets.delete(key);
  }
}

/** Best-effort client IP, honouring the proxy headers a host sets. */
export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimit(
  req: Request,
  name: string,
  { limit = 5, windowMs = 60_000 } = {}
): { ok: true } | { ok: false; response: NextResponse } {
  const now = Date.now();
  if (++writes % PRUNE_EVERY === 0) prune(now);

  const key = `${name}:${clientIp(req)}`;
  const entry = buckets.get(key);

  if (!entry || entry.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  entry.count += 1;
  if (entry.count > limit) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Too many requests — please try again shortly." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      ),
    };
  }

  return { ok: true };
}
