import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getResource } from "@/lib/resources";

type Ctx = { params: { resource: string; id: string } };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const resource = getResource(params.resource);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }

  const item = await resource.model.findUnique({ where: { id: params.id } });
  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(item);
}

export async function PUT(req: NextRequest, { params }: Ctx) {
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
    const updated = await resource.model.update({
      where: { id: params.id },
      data: parsed.data,
    });
    return NextResponse.json(updated);
  } catch (err: any) {
    if (err?.code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    if (err?.code === "P2002") {
      return NextResponse.json(
        { error: "A record with that unique value already exists" },
        { status: 409 }
      );
    }
    console.error(`Update ${params.resource} failed:`, err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const resource = getResource(params.resource);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource" }, { status: 404 });
  }

  try {
    await resource.model.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err?.code === "P2025") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    console.error(`Delete ${params.resource} failed:`, err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
