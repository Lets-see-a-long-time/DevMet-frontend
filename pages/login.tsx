import React from "react";
import { signIn, useSession } from "next-auth/react";

const login = () => {
  return (
    <>
      <button
        onClick={() => {
          signIn("kakao");
        }}
      >
        <img src="images/kakao/kakao_login_large_narrow.png" />
      </button>
      <button
        onClick={() => {
          signIn("naver");
        }}
      >
        <img src="images/naver/btnG_완성형.png" style={{ width: 350 }} />
      </button>

      <button
        className="border-4 border-black m-10"
        onClick={() => {
          signIn("google");
        }}
      >
        구글로그인
      </button>
      <button
        className="border-4 border-black"
        onClick={() => {
          signIn("githup");
        }}
      >
        깃허브로그인
      </button>
    </>
  );
};

export default login;
