import axios from 'axios';
import type { RegisterTypes } from '@/types/AuthTypes';
import Cookies from 'js-cookie';
import { UserTypes } from '@/types/UserTypes';

const accessToken = Cookies.get('access_token');

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const registerUser = async (userInfo: RegisterTypes, token: string) => {
  const response = await instance.patch('/register', userInfo, {
    headers: {
      Authorization: `Baerer ${token}`,
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
