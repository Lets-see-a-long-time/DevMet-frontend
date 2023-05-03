"use client";

import { signIn, signOut } from "next-auth/react";

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
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      로그아웃
    </button>
  );
}
