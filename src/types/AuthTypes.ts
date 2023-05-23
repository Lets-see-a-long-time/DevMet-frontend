export interface AuthTypes {
  userId: string;
  role: string;
  stack: string;
  nickname: string;
}

export interface SessionTypes {
  session: {
    expires: string;
    user: {
      name: string;
      email: string;
      image: string;
    };
  };
}

export interface RegisterTypes {
  userId: string;
  role: string;
  stack: string;
  nickname: string;
}

export interface HeaderTypes {
  headers: {
    Authorization: string;
  };
}

export interface TokenTypes {
  name: string;
  email: string;
  picture: string;
  sub: string;
  userId: string;
  iat: number;
  exp: number;
  jti: string;
}
