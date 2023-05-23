export interface UserTypes {
  id: string;
  name: string;
  userId: string;
  email: string;
  image: string;
  nickname: string;
  role: string;
  stack: string;
  expires: string;
  provider: string;
  projects: string[];
  createdAt: string;
  updatedAt: string;
}
export interface SearchProps {
  userData?: UserTypes[];
}
