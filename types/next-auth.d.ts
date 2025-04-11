import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "USER" | "ADMIN" | "SUPERADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role?: "USER" | "ADMIN" | "SUPERADMIN";
  }
}
