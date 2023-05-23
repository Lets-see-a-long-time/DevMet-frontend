import { UserTypes } from "@/types/AuthTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/user",
});

export const getUserList = () => {
  return instance.get("/");
};

export const getUserDetatil = (id: string) => {
  return instance.get(`/${id}`);
};

export const updateUser = (id: string, user: UserTypes) => {
  return instance.patch(`/${id}`, user);
};
