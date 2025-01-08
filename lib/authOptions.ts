import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import prisma from '@/lib/db';
import { toast } from 'sonner';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email Address',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        const existingUser = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password as string
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
              role: existingUser.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: 'Nourish360.session-token',
      options: {
        path: '/',
        httpOnly: true,
        sameSite: 'lax', // Adjust as per your app's requirements
        secure: process.env.NODE_ENV === 'production', // Secure in production
      },
    },
  },

  secret: process.env.JWT_SECRET || 'secret',
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser, trigger, session }) {
      token.sub = user.id;
      token.name = user.name;
      token.email = user.email;
      token.role = user.role;
      return token;
    },
    async session({ session, token, user }) {
      session.user = {
        id: token.sub as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
      };

      return session;
    },
  },

  pages: {
    signIn: '/signin',
  },
};
