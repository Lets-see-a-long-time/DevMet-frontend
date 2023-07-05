"use client";

import { signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

export function LoginButton({ site }: { site: string }) {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => signIn(site, { callbackUrl: "/auth/register" })}
    >
      {site}로그인
    </button>
  );
}

export function LogoutButton() {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => {
        signOut();
        Cookies.remove("access_token");
        Cookies.remove("user_id");
      }}
    >
      로그아웃
    </button>
  );
}
