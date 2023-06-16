<<<<<<< HEAD
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/auth/user",
=======

import { UserTypes } from "@/types/UserTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_API_SERVER_URL}/user`,
>>>>>>> 0b08203 (Refactor. api env)
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
