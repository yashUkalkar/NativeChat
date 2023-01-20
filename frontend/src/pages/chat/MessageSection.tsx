// Packages
import { useContext } from "react";

// Page components
import MessageArea from "./MessagesArea";

// Contexts
import { CurrentChat } from "../../contexts/CurrentChatContext";

export default function MessageSection() {
  const { currentChat } = useContext(CurrentChat);

  return currentChat ? (
    <MessageArea />
  ) : (
    <section className="bg-white lg:bg-opacity-50 lg:backdrop-blur-[7px] rounded-md lg:rounded-l-none h-full p-2 grid place-items-center">
      <h3 className="text-2xl font-medium w-[20ch] text-center text-gray">
        No chat selected to show messages
      </h3>
    </section>
  );
}
