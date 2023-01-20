import { Socket } from "socket.io";

interface sendMessageParams {
  message: string;
  to: string;
  from: {
    user_image?: string;
    username: string;
  };
}
export const sendMessageHandler = (socket: Socket) => {
  socket.on("send-message", ({ message, to, from }: sendMessageParams) => {
    if (to) {
      console.log(`Sending message to user with ID: ${to}`);
      // TODO: Implement redis connection to get user with ID: ${to}; add message to database; emit event to only that socket id if database is updated successfully
    } else {
      socket.broadcast.emit("receive-message", { message, from });
      console.log("Broadcasted globally");
    }
  });
};
