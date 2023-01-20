// Packages
import { useEffect, useState, useContext } from "react";

// Page components
import AddNewChat from "./AddNewChat";

// Types
import { UserType } from "../../types/UserType";
import { CurrentChat } from "../../contexts/CurrentChatContext";

// Assets
import ProfileIcon from "../../assets/ProfileIcon";
import WebIcon from "../../assets/WebIcon";

export default function ChatsSection() {
  const [chats, setChats] = useState<UserType[]>([]);

  useEffect(() => {
    // TODO: Fetch all conversations from DB
    setChats([
      {
        username: "User 1",
        user_id: "somerandomid",
        user_image: "",
        email: "",
      },
      {
        username: "User 2",
        user_id: "somerandomid7523",
        user_image: "",
        email: "",
      },
    ]);
  }, []);

  return (
    <section className="bg-white bg-opacity-50 backdrop-blur-[7px] rounded-md lg:rounded-r-none h-full">
      <div className="p-2">
        <div className="border-b-[1px] pb-2 border-pink">
          <div className="py-[6px] sm:px-2 flex items-center justify-between">
            <h3 className="font-bold text-2xl">Chats</h3>
            <AddNewChat />
          </div>
        </div>

        <div id="chats" className="flex flex-col gap-2 mt-4">
          <ChatOption username="Global" user_id="" user_image="" email="" />
          {chats.map((chat, index) => {
            return <ChatOption key={index} {...chat} />;
          })}
        </div>
      </div>
    </section>
  );
}

const ChatOption = (props: UserType) => {
  const { setCurrentChat } = useContext(CurrentChat);
  return (
    <div
      onClick={(e) => {
        // Set chat state
        const { email, ...rest } = props;
        setCurrentChat(rest);

        // Set selected chat styles
        const currentSelectedChat = document.querySelector(".selected-chat");
        if (currentSelectedChat) {
          currentSelectedChat.classList.remove("selected-chat");
        }
        e.currentTarget.classList.add("selected-chat");

        // Bring message view on screen
        const messageSection = document.getElementById("message-section");
        const windowWidth = window.innerWidth;
        if (messageSection && windowWidth < 1023) {
          messageSection.style.transform = "translateX(-100%)";
        }
      }}
      className="border border-gray border-opacity-50 flex items-center gap-2 rounded-md p-1 cursor-pointer hover:scale-105 active:scale-100 transition"
    >
      <div>
        {props.user_image ? (
          <img src={props.user_image} alt="ProfileImage" />
        ) : props.user_id ? (
          <ProfileIcon />
        ) : (
          <WebIcon />
        )}
      </div>
      <h3 className="text-xl font-semibold">{props.username}</h3>
    </div>
  );
};
