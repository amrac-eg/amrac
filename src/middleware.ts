import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { Pages, Routes } from "./components/constants/enums";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    const pathname = request.nextUrl.pathname;

    // Redirect if there is no locale

    const isAuth = await getToken({ req: request });
    const isAuthPage = pathname.startsWith(`/${Routes.AUTH}`);
    const protectedRoutes = [Routes.ADMIN];
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(`/${route}`)
    );
    // if user not loggedin and try to acess protected route
    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(
        new URL(`/${Routes.AUTH}/${Pages.LOGIN}`, request.url)
      );
    }
    // if user loggedin and try to acess auth routes
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL(`/${Routes.ADMIN}`, request.url));
    }

    return response;
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|google8e7f23dceea156e6.html|uploads|favicon.png).*)",
  ],
};
