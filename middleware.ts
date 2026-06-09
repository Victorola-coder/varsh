import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login page must stay public, otherwise protecting it loops forever.
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("session-token");

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const payload = await verifyToken(token.value);
    if (
      !payload ||
      (payload.role !== "ADMIN" && payload.role !== "SUPERADMIN")
    ) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
