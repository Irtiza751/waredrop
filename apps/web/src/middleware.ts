import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = ["/sign-in", "/sign-up"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("sessionid")?.value;

  // if the cookie exist, don't let the user go to the auth pages.
  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  console.log({ path });
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
