"use client";
import React, { useEffect } from "react";
import { LoginButton } from "@/components/Button/LoginButton";
import { LogoutButton } from "@/components/Button/LogoutButton";
import { getSession, signOut, useSession } from "next-auth/react";
import { Typography } from "@material-tailwind/react";

function Login() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>로그인 되어있음</div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col bg-[#F7F7F7]">
          <div className="flex w-loginForm h-loginForm flex-col  bg-white shadow-md p-12">
            <div className="h-40 ">
              <Typography variant="h4">Devmet</Typography>
              <p>소셜 로그인으로</p>
              <Typography variant="h4">간편하게 디:멧하자</Typography>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center">
              <LoginButton type="kakao" />
              <LoginButton type="naver" />
              <LoginButton type="google" />
            </div>
          </div>
          <div className="mt-10 w-loginForm h-16 shadow-lg bg-white">
            이용 약관
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
