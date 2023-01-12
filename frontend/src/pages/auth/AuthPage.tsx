// Packages
import { useContext, lazy } from "react";

// Pages
const ChatPage = lazy(() => import("../chat/ChatPage"));

// Page components
import HeroSection from "./HeroSection";
import SignSection from "./SignSection";

// Components
import Header from "../../components/Header";

// Contexts
import { UserContext } from "../../contexts/UserContext";

export default function AuthPage() {
  const { user } = useContext(UserContext);
  return user ? <ChatPage /> : <HomePage />;
}

const HomePage = () => {
  return (
    <div className="z-20">
      <Header />
      <div className="min-h-screen w-screen min-w-[305px] grid place-items-center overflow-hidden gap-5">
        <div className="py-10 px-5 w-full sm:w-[95%] md:w-[90%] lg:w-[85%] flex justify-between lg:justify-center items-center bg-white bg-opacity-70 backdrop-blur-[5px] sm:rounded-lg shadow-[1px_1px_15px_2px_rgba(0,0,0,0.1)] landscape:mt-10">
          <HeroSection />
          <div className="h-[300px] w-[2px] bg-pink hidden lg:block">
            {/* Divider Line */}
          </div>
          <SignSection />
        </div>
      </div>
    </div>
  );
};
