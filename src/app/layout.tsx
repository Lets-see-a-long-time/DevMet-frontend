"use client";
import Link from "next/link";
import "./globals.css";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href={"/auth"}>로그인으로가</Link>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
