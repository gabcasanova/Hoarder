// Middleware used to protect routes by applying NextAuth authentication.
// This ensures that only authenticated users can access certain parts of the app,
// while allowing public access to static files and specific routes.

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}