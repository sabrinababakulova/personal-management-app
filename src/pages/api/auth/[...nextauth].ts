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
    async signIn({ user, account, profile, email, credentials }) {
      if (
        user.email === process.env.NECESARYEMAIL &&
        user.name === process.env.NECESARYNAME &&
        profile.login === process.env.NECESARYLOGIN
      ) {
        return true;
      }
      return false;
    },
    // async redirect({ url, baseUrl }) {
    //   if (isLoggedIn === true) {
    //     return url;
    //   }
    //   console.log(isLoggedIn);
    //   return baseUrl;
    // },
  },
});
