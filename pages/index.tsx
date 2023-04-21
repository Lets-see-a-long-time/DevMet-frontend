import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      {!session ? (
        <>
          <button
            className=""
            onClick={() => {
              router.push("/login");
            }}
          >
            로그인
          </button>
          <div style={{ fontSize: 100, fontWeight: 400 }}>로그인하세요 !</div>
        </>
      ) : (
        <>
          {console.log(session)}
          <button
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </button>
        </>
      )}
    </>
  );
}
