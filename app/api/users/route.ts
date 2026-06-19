// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const user = await prisma.user.create({
//       data: {
//         name: body.name,
//         email: body.email,
//         password: body.password,
//       },
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         user,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create user",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users",
      },
      { status: 500 }
    );
  }
}