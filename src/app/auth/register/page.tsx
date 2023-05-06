'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import { FailedRegister } from '@/components/register.components';
import { registerUser, testt, testUser } from '@/app/api/registerAPI';
import { useInput } from '@/hooks/useInput';
const Register = () => {
  const { data: session }: any = useSession();
  const router = useRouter();
  const [register, setRegister] = useState({
    name: session?.user?.name as string,
    email: session?.user?.email as string,
    image: session?.user?.image as string,
    expires: session?.user?.image as string,
    role: '',
    stack: '',
    nickname: '',
  });
  const { onChange, onSubmit, values } = useInput(register);
  console.log(session?.accessToken);
  // useEffect(() => {
  //   if (session) {
  //     testUser({ user: session.user, accessToken: session.accessToken });
  //   }
  // }, [session]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setRegister({ ...register, [name]: value });
    console.log(register);
  };

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser({
      ...register,
      name: session?.user?.name || '',
      email: session?.user?.email || '',
      expires: session?.expires,
      image: session?.user?.image || '',
    });
  };

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
