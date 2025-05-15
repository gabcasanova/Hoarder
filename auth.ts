// This file sets up and exports key NextAuth functions (auth, signIn, signOut)
// using our custom authentication configuration and a credentials provider with Zod validation.

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

import { authConfig } from './auth.config';
import { getUserByEmail } from '@/lib/queries';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ 
            email: z.string().email(), 
            password: z.string()
          })
          .safeParse( credentials )
        
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data

          // Try to find the email.
          const user = await getUserByEmail(email)
          if (!user) return null

          // Check if the password is correct.
          // If so, return only what's necessary.
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) {
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              language: user.language
            };
          }

          return null // Return nothing if no match.
        }
        
        console.log("Invalid credentials.");
        return null;
      },
    }),
  ],
})