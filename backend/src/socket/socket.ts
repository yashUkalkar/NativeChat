// Packages
import { Server } from "socket.io";
import { Server as httpServer } from "http";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

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
