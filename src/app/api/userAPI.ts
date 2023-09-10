import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/user`,
});

export const getUserList = () => {
  return instance.get('/list');
};

export const getUserDetatil = (id: string) => {
  return instance.get(`/${id}`);
};

export const updateUser = (id: string) => {
  return instance.patch(`/${id}`, {});
};
