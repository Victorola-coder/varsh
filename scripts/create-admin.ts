/**
 * Create (or update) an admin user.
 *
 * Usage:
 *   npx tsx scripts/create-admin.ts <email> <password> [name] [SUPERADMIN]
 *
 * Or via env vars:
 *   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=secret npx tsx scripts/create-admin.ts
 *
 * Re-running with the same email updates that user's password/role (upsert),
 * so it is safe to run more than once.
 */
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "../app/generated/prisma";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const [, , argEmail, argPassword, argName, argRole] = process.argv;

  const email = argEmail ?? process.env.ADMIN_EMAIL;
  const password = argPassword ?? process.env.ADMIN_PASSWORD;
  const name = argName ?? process.env.ADMIN_NAME ?? "Administrator";
  const role: Role = argRole === "SUPERADMIN" ? Role.SUPERADMIN : Role.ADMIN;

  if (!email || !password) {
    throw new Error(
      "Email and password are required. " +
        "Pass them as arguments or set ADMIN_EMAIL / ADMIN_PASSWORD."
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword, role, name },
    create: { email, password: hashedPassword, role, name },
  });

  console.log(`✓ Admin user ready: ${user.email} (role: ${user.role})`);
}

main()
  .catch((err) => {
    console.error("Failed to create admin user:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
