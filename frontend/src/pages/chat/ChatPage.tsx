// Packages
import { useEffect, useContext } from "react";

// Page Components
import ChatHeader from "./ChatHeader";
import ChatsSection from "./ChatsSection";
import MessageSection from "./MessageSection";

// Socket
import socketInstance from "../../socket/socket";

// Contexts
import { UserContext } from "../../contexts/UserContext";
import { CurrentChatContext } from "../../contexts/CurrentChatContext";

export default function ChatPage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) socketInstance.connect();
  }, []);
  return (
    user && (
      <>
        <ChatHeader />

        <main className="w-screen h-screen flex items-center justify-between overflow-hidden lg:grid grid-cols-5 lg:gap-2 pt-20 px-5 sm:px-12 pb-5">
          <CurrentChatContext>
            <div className="w-full h-full flex-shrink-0 col-span-2">
              <ChatsSection />
            </div>
            <div
              className="w-full h-full flex-shrink-0 col-span-3 translate-x-[10%] lg:translate-x-0"
              id="message-section"
            >
              <MessageSection />
            </div>
          </CurrentChatContext>
        </main>
      </>
    )
  );
}
