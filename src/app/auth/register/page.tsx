'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { FailedRegister } from '@/components/register.components';
import { useInput } from '@/hooks/useInput';
import { testApi } from '@/app/api/registerAPI';
import { SocketContext } from '@/components/socketContext/socketContext';

const Register = () => {
  const { data: session } = useSession();
  console.log('session', session);

  const socket = useContext(SocketContext);
  const [register, setRegister] = useState({
    // session.user.userId
    role: "",
    stack: "",
    nickname: "",
    expires: session?.expires,
  });

  const { onChange, onSubmit, values } = useInput(register);

  useEffect(() => {
    testApi();
  }, []);

<<<<<<< HEAD
=======
  const currentUrl = usePathname() as string;

>>>>>>> feat/user
  useEffect(() => {
    socket.on('message', (message) => {
      console.log('서버로부터 메시지 수신:', message);
      // 수신한 메시지에 대한 처리 로직 작성
    });

    socket.on('notification', (message) => {
      console.log('noti서버로부터 메시지 수신:', message);
      // 수신한 메시지에 대한 처리 로직 작성
    });

    // 컴포넌트 언마운트 시 'message' 이벤트 핸들러 제거
    return () => {
      socket.off('message');
    };
  }, []);

<<<<<<< HEAD
  const currentUrl = window.location.href;
=======
  
>>>>>>> feat/user
  return (
    <>
      {!session ? (
        <FailedRegister />
      ) : (
        <>
          11
          <div>여기는 레지스터</div>
<<<<<<< HEAD
          {/* <form onSubmit={(e) => onSubmit(e, currentUrl, session.accessToken)}>
=======
          <form onSubmit={(e) => onSubmit(e, currentUrl)}>
>>>>>>> feat/user
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
<<<<<<< HEAD
          </form> */}
=======
          </form> 
>>>>>>> feat/user
        </>
      )}
    </>
  );
};

export default Register;
