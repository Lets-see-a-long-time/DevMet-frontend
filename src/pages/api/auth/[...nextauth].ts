
import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import GithupProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import { signUser } from "@/app/api/registerAPI";


const nextAuthOptions = (req, res) =>{
 return {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
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
    //우리가 만들어주는게 jwt인데 굳이 jwt를 써야하나 ?
    async jwt({ token, user, account }: any) {
        console.log('token',token)
      if (user && account) {
        user.provider = account.provider;
        const accessToken = await signUser(user);
        token.userId = accessToken.data.userId;
        token.accessToken=accessToken.data.accessToken;
        console.log('accessToken',accessToken.data.accessToken)
        res.setHeader("Set-Cookie", [
          `access_token=${accessToken.data.accessToken};  Path=/`
        ]);
        
      }
      
      
      return token;
    },

    async session({ session, token }:any) {
      // try {
      //   const token = await getToken().then((res) => res.data);
      //   session.accessToken = token;
      //   return session;
      // } catch (err) {
      //   console.log(err);
      //   return null;
      // }
      // console.log(token, "session in token");
      session.accessToken = token.accessToken
      session.user.userId = token.userId;
      return session;
    },
 

    async redirect({ url, baseUrl }:any) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
 }
};
export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res))
}