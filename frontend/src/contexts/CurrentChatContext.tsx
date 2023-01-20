// Packages
import React, { createContext, useState } from "react";

interface CurrentChatType {
  user_id: string;
  username: string;
  user_image?: string;
}
export const CurrentChat = createContext<{
  currentChat: CurrentChatType | null;
  setCurrentChat: React.Dispatch<React.SetStateAction<CurrentChatType>> | any;
}>({
  currentChat: {
    user_id: "",
    username: "Global",
  },
  setCurrentChat: null,
});

interface ProviderProps {
  children: React.ReactNode;
}
export const CurrentChatContext: React.FC<ProviderProps> = ({ children }) => {
  const [currentChat, setCurrentChat] = useState<CurrentChatType | null>(null);

  return (
    <CurrentChat.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChat.Provider>
  );
};
