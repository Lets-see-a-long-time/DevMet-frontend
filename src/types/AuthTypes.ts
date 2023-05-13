export interface AuthTypes {
  name: string;
  email: string;
  image: string;
  role: string;
  stack: string;
  nickname: string;
}

export interface UserTypes {
  id: string;
  name: string;
  email: string;
  image: string;
  provider: string;
}

export interface SessionTypes {
  expires: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
}

export interface RegisterTypes {
  name: string | undefined;
  email: string | undefined;
  image: string | null;
  role: string;
  stack: string;
  nickname: string;
}

export interface HeaderTypes {
  headers: {
    Authorization: string;
  };
}
