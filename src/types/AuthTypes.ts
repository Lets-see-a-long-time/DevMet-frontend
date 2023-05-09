export interface AuthTypes {
  name: string;
  email: string;
  image: string;
  expires: string;
  role: string;
  stack: string;
  nickname: string;
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
  expires: string | undefined;
}

export interface HeaderTypes {
  AccessToken: string;
}
