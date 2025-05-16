// Middleware used to protect routes by applying NextAuth authentication.
// This ensures that only authenticated users can access certain parts of the app,
// while allowing public access to static files and specific routes.

import NextAuth from "next-auth"
import { authConfig } from "../auth.config"

const { auth } = NextAuth(authConfig)
 
export default auth(async(req) => {
  if (!req.auth) { // User not logged in.
    if (req.nextUrl.pathname == "/dashboard") {
      const newUrl = new URL("/login", req.nextUrl.origin)
      return Response.redirect(newUrl)
    }
  } else { // User logged in.
    if (req.nextUrl.pathname == "/login") {
      const newUrl = new URL("/dashboard", req.nextUrl.origin)
      return Response.redirect(newUrl)
    }
  }
})

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}