import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import GithupProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    secret: "secret",
  },

  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_KEY as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),
    GithupProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    
    async jwt({ token, user,account,profile }: any) {
      // console.log('account',account)
      // console.log('profile',profile)
      if(account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      if (token) {
        user = token;
      }

      return user;
    },
    async session({ session, token, user }:any) {
      // console.log('session',session)
      if(token){
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
    }
  
      
      return session
    },
  
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // }
    
  },
});
