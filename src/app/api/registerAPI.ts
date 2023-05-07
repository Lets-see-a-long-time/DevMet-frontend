import axios from 'axios';
import type { RegisterTypes } from '@/types/RegisterTypes';

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
  // headers: {
  //   Authorization:
  // }
});
export const registerUser = async (userInfo: RegisterTypes) => {
  const response = await instance.post('/register', userInfo);
  return response;
};

export const testUser = async (userInfo: any) => {
  const response = await instance.post('', userInfo);
  return response;
};

export const testt = async (config: any) => {
  const response = await instance.get('/test', config);
  return response;
};
