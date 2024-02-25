'use client'
import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const useSocket = () => {
  const socket = useContext(SocketContext);
  
  if (socket === null) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return socket;
};

export const SocketProvider = (props) => {
  const socket = useMemo(() => io("http://localhost:5000"), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default useSocket;
