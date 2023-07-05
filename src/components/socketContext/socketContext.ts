import Cookies from "js-cookie";
import { createContext } from "react";
import { io } from "socket.io-client";

const userId = Cookies.get("user_id");

export const socket = io(
  `${process.env.NEXT_PUBLIC_API_SERVER_URL}/notification`,
  {
    query: {
      userId,
    },
  }
);
export const SocketContext = createContext(socket);
