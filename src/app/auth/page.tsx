"use client";

import React, { useEffect } from "react";
import { LoginButton, LogoutButton } from "@/components/buttons.component";
import { getSession, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { SessionTypes } from "@/types/AuthTypes";

function Login() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <>
          <div>user</div>
          <div className="flex">
            <LoginButton site="kakao" />
            <LoginButton site="naver" />
            <LoginButton site="google" />
            <LoginButton site="githup" />
            <LogoutButton />
          </div>
          <button
            onClick={() => {
              console.log("로그아웃되었으요");
              signOut({ callbackUrl: "/" });
            }}
          >
            로그아웃하기
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
