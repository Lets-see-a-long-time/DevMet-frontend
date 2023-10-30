import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/projects`,
});
export const getProjects = async () => {
  const response = await instance.get("");
  return response;
};
