"use client";
import Link from "next/link";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "./ReactQueryProvider";
import TopNav from "@/components/Nav/TopNav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
