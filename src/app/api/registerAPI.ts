import axios from 'axios';
import type { RegisterTypes } from '@/types/RegisterTypes';

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
});
export const registerUser = async (userInfo: RegisterTypes) => {
  const response = await instance.post('/register', userInfo);
  return response;
};

export const testUser = async (userInfo: any, config: any) => {
  const response = await instance.post('/register', userInfo, config);
  return response;
};

export const testt = async (text: string, config: any) => {
  const response = await instance.post('/test', { text }, config);
  return response;
};
