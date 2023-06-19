import Cookies from 'js-cookie';
import { createContext } from 'react';
import { io } from 'socket.io-client';

const userId = Cookies.get('user_id');

export const socket = io(`http://43.200.164.47:3001/notification`, {
  query: {
    userId,
  },
});
export const SocketContext = createContext(socket);
