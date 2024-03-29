import axios from "axios";
import type { RegisterTypes } from "@/types/AuthTypes";
import Cookies from "js-cookie";
import { UserTypes } from "@/types/UserTypes";

const accessToken = Cookies.get('access_token');

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const registerUser = async (userInfo: RegisterTypes) => {
  const response = await instance.patch('/register', userInfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const signUser = async (user: UserTypes) => {
  const response = await instance.post('/', user);
  return response;
};

export const testApi = async () => {
  const response = await instance.get('/test');
  return response;
};
