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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
