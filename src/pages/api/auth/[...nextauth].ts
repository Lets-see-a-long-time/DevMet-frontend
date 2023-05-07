import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';
import GithupProvider from 'next-auth/providers/github';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
import { redirect } from 'next/dist/server/api-utils';
import axios from 'axios';
import { registerUser } from '@/api/registerAPI';
import { testUser } from '@/app/api/registerAPI';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    secret: 'secret',
  },

  secret: 'secret',

  pages: {
    signIn: '/',
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
    async jwt({ token, user, account }: any) {
      console.log('token', token);
      console.log('user', user);
      console.log('account', account);

      // if (account?.accessToken) {
      //   token.accessToken = account.accessToken;
      // }

      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.sub;
        // session.accessToken = token.accessToken;
      }

      if (session) {
        registerUser;
        // await axios
        //   .post('http://localhost:3001/auth', {
        //     userId: token.userId,
        //     name: session.user.name,
        //     email: session.user.email,
        //     image: session.user.image,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   });
        const result = await testUser({
          userId: token.userId,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        });
        // console.log('result', result);
        console.log('sesisson', session);
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
