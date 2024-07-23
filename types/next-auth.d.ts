import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  type UserSession= DefaultSession["user"];
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    } & UserSession;
  }

  interface CredentialsInputs {
    email: string;
    password: string;
  }
}
