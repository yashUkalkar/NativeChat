import { io } from "socket.io-client";

// Events
import addConnectEvents from "./connectEvents";

const getSocketInstance = () => {
  const SERVER_URL =
    import.meta.env.VITE_SERVER_BASE_URL || "http://localhost:5001";
  const socket = io(SERVER_URL, {
    path: "/socket",
    transports: ["websocket"],
  });

  return socket;
};

const socketInstance = getSocketInstance();
// Add events
addConnectEvents(socketInstance);

export default socketInstance;
