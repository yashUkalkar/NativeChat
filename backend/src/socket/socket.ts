// Packages
import { Server } from "socket.io";
import { Server as httpServer } from "http";

import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "./ioTypes.js";

export default function socketInit(httpServer: httpServer) {
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(httpServer, {
    path: "/socket",
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });
  return io;
}
