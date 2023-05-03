"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { FailedRegister } from "@/components/register.components";
import { useInput } from "@/hooks/useInput";

const Register = () => {
  const { data: session } = useSession();
  const [registerData, setRegisterData] = useState({
    name: session?.user?.name as string,
    email: session?.user?.email as string,
    image: session?.user?.image as string,
    expires: session?.expires as string,
    role: "",
    stack: "",
    nickname: "",
  });
  const { onChange, onSubmit, values } = useInput(registerData);

  const currentUrl = window.location.href;
  return (
    <>
      {!session ? (
        <FailedRegister />
      ) : (
        <>
          11
          <div>여기는 레지스터</div>
          <form onSubmit={(e) => onSubmit(e, currentUrl)}>
            <input
              type="text"
              name="role"
              placeholder="role"
              onChange={onChange}
              className="w-24 border-black"
            />
            <input
              type="text"
              name="stack"
              placeholder="stack"
              onChange={onChange}
              className="w-24 border-1 border-black"
            />
            <input
              type="text"
              name="nickname"
              placeholder="nickname"
              onChange={onChange}
              className="w-24 border-1 border-current"
            />
            <button>회원가입완료</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
