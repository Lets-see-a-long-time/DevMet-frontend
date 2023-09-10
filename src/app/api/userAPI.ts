import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/user`,
});

export const getUserList = async () => {
  const result = await instance.get('?page=1&itemCount=10');
  return result;
};

export const getUserDetatil = async (id: number) => {
  const result = await instance.get(`/${id}`);
  return result;
};

export const updateUser = (id: string) => {
  return instance.patch(`/${id}`, {});
};
