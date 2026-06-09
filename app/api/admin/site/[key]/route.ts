import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { singletonSchemas } from "@/lib/content-schemas";

type Ctx = { params: { key: string } };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  if (!singletonSchemas[params.key]) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }

  const row = await prisma.siteContent.findUnique({
    where: { key: params.key },
  });
  return NextResponse.json(row?.value ?? null);
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const schema = singletonSchemas[params.key];
  if (!schema) {
    return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const row = await prisma.siteContent.upsert({
    where: { key: params.key },
    update: { value: parsed.data },
    create: { key: params.key, value: parsed.data },
  });
  return NextResponse.json(row.value);
}
