import { SignJWT } from "jose";
import * as dotenv from "dotenv";

dotenv.config();

async function generateToken() {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not set in environment variables");
  }

  const key = new TextEncoder().encode(secretKey);

  const token = await new SignJWT({
    userId: "test-user-id",
    role: "ADMIN",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);

  console.log("Generated JWT Token:");
  console.log(token);
}

generateToken().catch(console.error);
