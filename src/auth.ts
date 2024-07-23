import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Password",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Matheus",
          email: credentials?.email as string,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
      } as any;
      return session;
    },
  },
};

// Export named handlers for each HTTP method
export const GET = NextAuth(options);
export const POST = NextAuth(options);
