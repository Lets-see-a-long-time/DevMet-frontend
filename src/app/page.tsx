import Main from "@/components/main.components";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
