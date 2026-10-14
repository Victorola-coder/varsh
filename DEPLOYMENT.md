# Deploying VARSH Foundation

## Required environment variables

Copy `.env.example` to `.env` and fill it in. Nothing has a safe default.

| Variable | Notes |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string. |
| `JWT_SECRET_KEY` | Signs admin session cookies. Generate with `openssl rand -hex 32`. Rotating it logs every admin out. |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Read only by the seed and `scripts/create-admin.ts`. **Required** when seeding with `NODE_ENV=production` — the seed throws rather than fall back to the documented `admin123`. |

## First deploy

```bash
bun install
bun run db:push          # create the schema
bun run seed             # admin user + site content (idempotent)
bun run build
bun run start
```

`seed` is safe to re-run: singletons are upserted without overwriting, and
collections are only populated when their table is empty, so admin edits are
never clobbered.

## Before going live

- [ ] **Change the admin password.** The seed default is public knowledge.
- [ ] Set a fresh `JWT_SECRET_KEY` — do not reuse the development one.
- [ ] Fill in the contact phone and social URLs (Admin → Contact Details).
      They ship blank on purpose, because the committed values were a
      placeholder number and four `href="#"` links.
- [ ] Point `metadataBase` in `app/layout.tsx` at the real domain if it is not
      `varshfoundation.org`.

## Known limitations

**Uploads need a Vercel Blob store in production.** `app/api/admin/upload`
writes to Vercel Blob when `BLOB_READ_WRITE_TOKEN` is present, and falls back
to `public/uploads` otherwise. Vercel's filesystem is read-only at runtime, so
without the store uploads would appear to succeed and then vanish.

Create one in the Vercel dashboard (Storage -> Blob); the token is injected
into the project automatically. `next.config.js` already allows
`*.public.blob.vercel-storage.com` for `next/image`.

**Rate limiting is in-process.** `lib/rate-limit.ts` keeps counters in memory,
so the budget is per instance and does not hold across horizontal scaling.
Move it to Redis/Upstash if you run more than one instance.

**Donations are pledges, not payments.** There is no gateway connected.
`/api/donate` records an intent with `status: "pending"`; no money moves.

**The Orizon Postgres instance does not support TLS** (`sslmode=require` fails
with "server does not support TLS"), so credentials and data cross the network
in plaintext. Prefer a TLS-capable host for production traffic.

## Operations

- Change an admin password, or add an admin:
  `ADMIN_EMAIL=… ADMIN_PASSWORD=… bun run create-admin`
- Content edits in the admin invalidate the public cache immediately via
  `revalidateTag`, so no redeploy is needed to publish copy changes.
