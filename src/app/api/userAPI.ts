import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/auth/user",
});

export const getUserList = () => {
  return instance.get("/list");
};

export const getUserDetatil = (id: string) => {
  return instance.get(`/${id}`);
};

export const updateUser = (id: string) => {
  return instance.patch(`/${id}`, {});
};
