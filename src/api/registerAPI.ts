import axios from "axios";
import type { RegisterTypes } from "@/types/RegisterTypes";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { TokenTypes } from "@/types/TokenTypes";

const instance = axios.create({
  baseURL: "http://localhost:3001/auth",
});

export const registerUser = async(userInfo: RegisterTypes) => {
  const response = await  instance.post("/register", userInfo);
  return response;
};

export const test = async(userInfo: any) => {
  const response = await  instance.post("/testing", userInfo);
  return response;
};
