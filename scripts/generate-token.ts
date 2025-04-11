import { SignJWT } from "jose";

async function generateToken() {
  const secretKey = "your_secure_jwt_secret_key_min_32_chars_long";
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
