import NextAuth from 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    role?: string;
  }

  interface Session {
    user: User & {
      role?: string;
    };
  }
}
