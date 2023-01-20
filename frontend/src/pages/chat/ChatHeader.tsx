// Packages
import { useNavigate } from "react-router-dom";

// Page Components
import ProfileSection from "./ProfileSection";

export default function ChatHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white bg-opacity-60 backdrop-blur-[7px] fixed top-0 left-0 w-full flex items-center justify-between px-5 py-2 sm:px-12 z-10">
        <h1
          className="text-4xl md:text-[42px] font-bold text-center cursor-pointer hover:scale-105 active:scale-100 transition"
          onClick={() => navigate("/")}
        >
          Native<span className="text-pink">Chat</span>
        </h1>

        <ProfileSection />
      </header>
    </>
  );
}
