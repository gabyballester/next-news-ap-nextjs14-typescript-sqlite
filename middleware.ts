import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect();
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
