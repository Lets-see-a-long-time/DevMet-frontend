import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';
import GithupProvider from 'next-auth/providers/github';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
import { signUser } from '@/app/api/registerAPI';
import { setCookie } from 'nookies';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },

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
    //우리가 만들어주는게 jwt인데 굳이 jwt를 써야하나 ?
    async jwt({ token, user, account }: any) {
      if (user && account) {
        user.provider = account.provider;
        const accessToken = await signUser(user);
        console.log('token', accessToken.data.accessToken);

        setCookie(null, 'accessToken', accessToken.data.accessToken, {
          maxAge: 5 * 60 * 60,
          path: '/',
          sameSite: 'none',
          // secure: true,
          // httpOnly: true,
          // domain:
        });

        //user -> userDTO
        // const apiToken = await getToken();
      }

      // try {
      //   const newToken = await getToken().then((res) => res.data);
      //   token.accessToken = newToken;
      //   return session;
      // } catch (err) {
      //   console.log(err);
      //   return null;
      // }

      return token;
    },

    async session({ session }) {
      // try {
      //   const token = await getToken().then((res) => res.data);
      //   session.accessToken = token;
      //   return session;
      // } catch (err) {
      //   console.log(err);
      //   return null;
      // }
      return session;
    },
    // async getSession() {
    //   // 이곳에서 세션을 검색하고, user와 account 정보를 반환합니다.
    //   // 세션 검색을 위한 API 호출이나 데이터베이스 쿼리 등이 포함될 수 있습니다.
    //   // 결과를 Promise로 반환합니다.
    //   return { user, account };
    // },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
