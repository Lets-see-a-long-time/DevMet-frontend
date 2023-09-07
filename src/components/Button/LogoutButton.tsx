"use client";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

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
