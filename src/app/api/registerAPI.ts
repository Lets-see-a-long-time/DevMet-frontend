import axios from "axios";
import type { HeaderTypes, RegisterTypes } from "@/types/AuthTypes";

const instance = axios.create({
  baseURL: "http://localhost:3001/auth",
  // headers: {
  //   Authorization:
  // }
});
export const registerUser = async (
  userInfo: RegisterTypes,
  headers: HeaderTypes
) => {
  const response = await instance.post("/register", userInfo, {
    headers: {
      Authorization: headers.AccessToken,
    },
  });
  return response;
};

export const getToken = async () => {
  const response = await instance.get("/token");
  return response;
};
