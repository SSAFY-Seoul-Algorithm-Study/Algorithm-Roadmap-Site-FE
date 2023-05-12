import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {

  const session = await getToken({req, secret, raw: true});
  const { pathname } = req.nextUrl;

  if(session && (pathname.startsWith("/login") || pathname.startsWith("/signup"))) {

    return NextResponse.redirect(new URL("/", req.url));
  }
  else if(!session && (pathname.startsWith("/daily-problem") || pathname.startsWith("/algorithm-roadmap"))) {

    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// export { default } from "next-auth/middleware";
// export const config = { matcher: ["/daily-problem"] }