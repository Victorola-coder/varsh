import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getEnvVar } from "./env";

const key = new TextEncoder().encode(getEnvVar("JWT_SECRET_KEY"));

export async function createSession(
  userId: string,
  role: "USER" | "ADMIN" | "SUPERADMIN"
) {
  const token = await new SignJWT({ userId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);

  const cookieStore = await cookies();
  cookieStore.set("session-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session-token");

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(token.value, key);
    return verified.payload as {
      userId: string;
      role: "USER" | "ADMIN" | "SUPERADMIN";
    };
  } catch (err) {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session-token");
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, key);
    return verified.payload as {
      userId: string;
      role: "USER" | "ADMIN" | "SUPERADMIN";
    };
  } catch (err) {
    return null;
  }
}
