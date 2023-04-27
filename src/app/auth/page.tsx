"use client";

import React, { useEffect } from "react";
import { LoginButton, LogoutButton } from "@/components/buttons.component";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";
import { SessionTypes } from "@/types/SessionTypes";

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
        </>
      )}
    </div>
  );
}

export default Login;
