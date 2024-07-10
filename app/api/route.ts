import { NextResponse, type NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json("Hello!");
}

// export async function POST(request: NextRequest) {
//   const res = await request.json();
//   return Response.json({ res });
// }
