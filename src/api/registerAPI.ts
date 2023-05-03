import axios from "axios";
import type { RegisterTypes } from "@/types/RegisterTypes";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { TokenTypes } from "@/types/TokenTypes";

const instance = axios.create({
  baseURL: "http://localhost:3001/auth",
});

export const registerUser = (userInfo: RegisterTypes) => {
  const response = instance.post("/register", userInfo);
  return response;
};
