import axios from 'axios';
import type { HeaderTypes, RegisterTypes, UserTypes } from '@/types/AuthTypes';

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
  headers: {
    // Authorization: getCookie
  },
});

export const registerUser = async (userInfo: RegisterTypes, token: string) => {
  const response = await instance.post('/register', userInfo, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

export const signUser = async (user: UserTypes) => {
  const response = await instance.post('/', user);
  return response;
};
