// Packages
import { Socket } from "socket.io-client";
import { useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

// Socket
import socketInstance from "./socket";

// * Sending message
interface sendMessageParams {
  message: string;
  to: string;
  from: {
    user_image?: string;
    username: string;
  };
}
export const sendMessage = (params: sendMessageParams) => {
  console.log(
    `Send event fired with message: 
    Message - ${params.message} 
    To - ${params.to}
    From - ${params.from.username}`
  );
  socketInstance.emit("send-message", params);
};

// * Receiving message
interface receiveMessageParams {
  message: string;
  from: {
    user_image: string;
    username: string;
  };
}
export const receiveMessageHandler = (socketInstance: Socket) => {
  socketInstance.on(
    "receive-message",
    ({ message, from }: receiveMessageParams) => {
      console.log(`Received message as follows -
    From: ${from.username}
    Message: ${message}`);
    }
  );
};
