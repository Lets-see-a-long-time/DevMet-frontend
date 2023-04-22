import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

const page = () => {
  const poa = () => {
    return console.log("hi");
  };
  return (
    <>
      <div>user</div>
      <button onClick={poa}>123</button>
    </>
  );
};

export default page;
