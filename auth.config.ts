// Configuration file for NextAuth.js

import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

export const authConfig = {
  pages: {
    signIn: '/login'
  },

  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    }
  },

  // Define authentication providers (e.g., GitHub, Google, etc.)
  providers: []
} satisfies NextAuthConfig