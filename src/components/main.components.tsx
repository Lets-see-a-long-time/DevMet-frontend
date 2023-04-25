"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Main = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        "session 있어요"
      ) : (
        <>
          <Link href={"/login"}>로그인하자 세션이 없으니</Link>
        </>
      )}
    </div>
  );
};

export default Main;