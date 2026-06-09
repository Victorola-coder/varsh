import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getSubmission } from "@/lib/resources";

type Ctx = { params: { type: string } };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { response } = await requireAdmin();
  if (response) return response;

  const submission = getSubmission(params.type);
  if (!submission) {
    return NextResponse.json({ error: "Unknown submission type" }, { status: 404 });
  }

  const items = await submission.model.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}
