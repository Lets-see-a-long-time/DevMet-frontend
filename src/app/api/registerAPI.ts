import axios from "axios";
import type { RegisterTypes } from "@/types/RegisterTypes";
const instance = axios.create({
  baseURL: "http://localhost:3001",
});
export const registerUser = (userInfo: RegisterTypes) => {
  const response = instance.post("/register", userInfo);
  return response;
};
