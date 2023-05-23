"use client";
import Link from "next/link";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "./ReactQueryProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <SessionProvider>{children}</SessionProvider>
        </ReactQueryProvider>
        <Link href={"/auth"}>로그인으로가</Link>
        <Link className="borderbox" href={"/user"}>
          유저페이지로가
        </Link>
      </body>
    </html>
  );
}
