'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { FailedRegister } from '@/components/register.components';
import { useInput } from '@/hooks/useInput';
import { registerUser, testApi } from '@/app/api/registerAPI';

const Register = () => {
  const { data: session }: any = useSession();

  const [register, setRegister] = useState({
    // session.user.userId
    userId: '11',
    role: '',
    stack: '',
    nickname: '',
  });

  const { onChange, onSubmit, values } = useInput(register);

  useEffect(() => {
    testApi();
  }, []);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/notifications/');
    eventSource.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      // 받은 데이터 처리
      console.log('Received SSE:', data);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  const currentUrl = window.location.href;
  return (
    <>
      {!session ? (
        <FailedRegister />
      ) : (
        <>
          11
          <div>여기는 레지스터</div>
          <form onSubmit={(e) => onSubmit(e, currentUrl, session.accessToken)}>
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
