import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "John",
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
};

// Export named handlers for each HTTP method
export const GET = NextAuth(options);
export const POST = NextAuth(options);
