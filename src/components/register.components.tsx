"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type } from "os";
import React, { useEffect } from "react";

const FailedRegister = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      console.log("만약 세션이 없을 때 실행되는 로직");
      // 가입하지않고 register를 입력했을 때 로직
      //    alert("소셜로그인 하고 오세요 !");
      //    router.push("/login");
    } else {
      console.log("만약 세션이 있을 때 실행되는 로직");
    }
  }, [session, router]);

  return (
    <>
      <div>로그인하고 오세요 !</div>
    </>
  );
};

export { FailedRegister };
