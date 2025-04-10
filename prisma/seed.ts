import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("admin123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@varshfoundation.org" },
    update: {},
    create: {
      email: "admin@varshfoundation.org",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });

  console.log({ admin });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
