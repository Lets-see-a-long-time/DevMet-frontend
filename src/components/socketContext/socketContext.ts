import Cookies from "js-cookie";
import { createContext } from "react";
import { io } from "socket.io-client";

const userId = Cookies.get('user_id');

export const socket = io('http://localhost:3001/notification',{
    query: {
        userId
    }
});
export const SocketContext = createContext(socket);