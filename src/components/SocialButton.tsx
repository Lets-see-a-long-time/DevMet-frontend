"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

const SocialButton = () => {
  return (
    <>
      <button onClick={() => signIn("kakao")}>카카오 로그인</button>;
    </>
  );
};

export default SocialButton;
