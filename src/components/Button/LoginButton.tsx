"use client";
import { signIn } from "next-auth/react";
import React from "react";

interface ILoginProps {
  type: "kakao" | "naver" | "google";
}

export const LoginButton = ({ type }: ILoginProps) => {
  return (
    <button
      className={`w-login h-login rounded-login bg-${type} mb-5 shadow-md`}
      onClick={() => signIn(type, { callbackUrl: "/auth/register" })}
    >
      {type}로 로그인
    </button>
  );
};
