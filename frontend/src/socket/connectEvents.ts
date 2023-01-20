import { Socket } from "socket.io-client";

export default function addConnectEvents(socket: Socket) {
  socket.on("connect", () => {
    console.log("Connected socket with ID:", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
}
