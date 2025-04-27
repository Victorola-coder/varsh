// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { createSession } from "@/lib/jwt";
// import { validateEnv } from "@/lib/env";

// validateEnv();

// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json();

//     const user = await prisma.user.findUnique({
//       where: { email },
//       select: {
//         id: true,
//         email: true,
//         password: true,
//         role: true,
//         name: true,
//       },
//     });

//     if (!user) {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       );
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);

//     if (!isValidPassword) {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       );
//     }

//     if (user.role !== "ADMIN" && user.role !== "SUPERADMIN") {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//     }

//     await createSession(user.id, user.role);

//     const { password: _, ...userWithoutPassword } = user;
//     return NextResponse.json(userWithoutPassword);
//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {}
