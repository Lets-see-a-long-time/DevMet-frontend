"use client";
import { useSession } from "next-auth/react";

export default async function useApi() {
  const { data: session } = useSession();
  const accessToken = session;
  return session;
}
