"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { FailedRegister } from "@/components/register.components";
import { registerUser } from "@/app/api/registerAPI";
const Register = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [register, setRegister] = useState({
    name: session?.user?.name as string,
    email: session?.user?.email as string,
    image: session?.user?.image as string,
    expires: session?.user?.image as string,
    role: "",
    stack: "",
    nickname: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setRegister({ ...register, [name]: value });
    console.log(register);
  };

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser({
      ...register,
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      expires: session?.expires,
      image: session?.user?.image || "",
    });
    console.log(register);
  };
  console.log(session);

  return (
    <>
      {!session ? (
        <FailedRegister />
      ) : (
        <>
          11
          <div>여기는 레지스터</div>
          <form onSubmit={registerSubmit}>
            <input
              type="text"
              name="role"
              placeholder="role"
              onChange={onChangeInput}
              className="w-24 border-black"
            />
            <input
              type="text"
              name="stack"
              placeholder="stack"
              onChange={onChangeInput}
              className="w-24 border-1 border-black"
            />
            <input
              type="text"
              name="nickname"
              placeholder="nickname"
              onChange={onChangeInput}
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
