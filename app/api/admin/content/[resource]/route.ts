import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getResource } from "@/lib/resources";

type Ctx = { params: { resource: string } };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const resource = getResource(params.resource);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }

  const items = await resource.model.findMany({
    orderBy: [{ order: "asc" }, { updatedAt: "desc" }],
  });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const resource = getResource(params.resource);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }

  const parsed = resource.schema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const created = await resource.model.create({ data: parsed.data });
    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    if (err?.code === "P2002") {
      return NextResponse.json(
        { error: "A record with that unique value already exists" },
        { status: 409 }
      );
    }
    console.error(`Create ${params.resource} failed:`, err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
