// Packages
import { useContext } from "react";

// Page components
import Message from "./Message";

// Contexts
import { UserContext } from "../../contexts/UserContext";
import { CurrentChat } from "../../contexts/CurrentChatContext";

// Socket events
import { sendMessage } from "../../socket/messageEvents";

// Assets
import ProfileIcon from "../../assets/ProfileIcon";
import WebIcon from "../../assets/WebIcon";
import SendIcon from "../../assets/SendIcon";
import LeftArrow from "../../assets/LeftArrow";

export default function MessageArea() {
  const { user } = useContext(UserContext);
  const { currentChat, setCurrentChat } = useContext(CurrentChat);

  // Handle send event
  const sendHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.message && user && currentChat) {
      sendMessage({
        message: data.message.toString(),
        to: currentChat.user_id,
        from: {
          username: user.username,
        },
      });
    }

    // Clear form
    e.currentTarget.reset();
  };

  // Select chat image
  let chatImage = ProfileIcon;
  if (!currentChat?.user_id) {
    chatImage = WebIcon;
  } else if (currentChat?.user_image) {
    chatImage = () => (
      <img
        src={currentChat.user_image}
        className="w-full h-full object-cover"
        alt="Profile Image"
      />
    );
  }

  return (
    <section className="flex flex-col justify-between bg-white lg:bg-opacity-50 lg:backdrop-blur-[7px] rounded-md lg:rounded-l-none h-full p-2">
      <div className="border-b-[1px] pb-2 border-pink flex items-center justify-between">
        <div
          onClick={() => {
            // Unselect current chat
            const currentSelectedChat =
              document.querySelector(".selected-chat");
            if (currentSelectedChat) {
              currentSelectedChat.classList.remove("selected-chat");
            }

            // Set currentChat state to null
            setCurrentChat(null);

            // Send message view off screen
            const messageSection = document.getElementById("message-section");
            const windowWidth = window.innerWidth;
            if (messageSection && windowWidth < 1023) {
              messageSection.style.transform = "translateX(100%)";
            }
          }}
          className="lg:hidden bg-pink text-white overflow-hidden rounded-full p-1 cursor-pointer hover:scale-110 transition active:scale-100"
        >
          <LeftArrow />
        </div>

        <div className="flex items-center md:gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden grid place-items-center">
            {chatImage()}
          </div>
          <h3 className="text-2xl font-semibold">{currentChat?.username}</h3>
        </div>

        <div>Toggle translate</div>
      </div>

      <div
        id="message-area"
        className="my-4 px-2 flex-grow overflow-auto flex flex-col gap-3"
      >
        <Message message="SampleMessage" sender="Sampleuser" />
        <Message message="SampleMessage sent" sender="You" sent />
        <Message message="SampleMessage" sender="Sampleuser" />
        <Message message="SampleMessage sent" sender="You" sent />
      </div>

      <div>
        <form className="relative" onSubmit={sendHandler} autoComplete="off">
          <input
            type="text"
            name="message"
            placeholder="Write your message here..."
            className="border-pink border-[1px] focus:border-2 transition rounded-md"
          />

          <button
            type="submit"
            className="bg-pink text-white flex items-center justify-between gap-1 absolute top-0 right-0 h-full rounded-md px-2 hover:scale-105 active:scale-100 transition"
            title="Send"
          >
            <h4 className="text-xl hidden lg:block">Send</h4>
            <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
}
