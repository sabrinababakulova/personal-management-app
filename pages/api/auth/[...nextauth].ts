import NextAuth, { NextAuthOptions } from "next-auth";
import { NextAuthAction } from "next-auth/lib/types";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async authorize(email: String) {
    //   if (email !== process.env.NECESARYEMAIL) {
    //     return false;
    //   }
    //   return true;
    // },
    async signIn({ user, account, profile, email, credentials }) {
      if (
        user.email === process.env.NECESARYEMAIL &&
        user.name === process.env.NECESARYNAME
      ) {
        return true;
      }
      return false;
    },
    // async redirect({ url, baseUrl }) {
    //   if (url !== baseUrl) {
    //     console.log("not authorized");
    //     return baseUrl;
    //   }
    //   return url;
    // },
  },
});
