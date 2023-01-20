// Packages
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { UserContext } from "../../contexts/UserContext";

// Socket
import socketInstance from "../../socket/socket";

// Assets
import ProfileIcon from "../../assets/ProfileIcon";

export default function ProfileSection() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // * logout by removing user from sessionstorage
  // * and setUser state to  null
  const logoutUser = () => {
    if (user) {
      sessionStorage.removeItem("userData");
      setUser(null);
      socketInstance.disconnect();
    }
  };

  return (
    <div className="relative" onClick={() => setShowMenu(!showMenu)}>
      <div>
        {user?.user_image ? (
          <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer">
            <img
              className="w-full h-full object-cover border-2 border-pink rounded-full hover:scale-110 active:scale-95 transition"
              src={user.user_image}
              alt={user.username}
            />
          </div>
        ) : (
          <div className="cursor-pointer rounded-full hover:scale-110 active:scale-95 transition">
            <ProfileIcon />
          </div>
        )}
      </div>
      <ul
        className={
          "bg-dark-blue text-white absolute top-full right-0 mt-2 shadow-xl px-7 p-4 rounded-2xl rounded-tr-none w-max text-xl text-right flex flex-col items-start justify-between gap-3 transform origin-top transition" +
          (showMenu ? "" : " scale-y-0")
        }
      >
        <li
          className="cursor-pointer hover:scale-110 active:scale-95 transition flex items-center justify-start gap-2"
          onClick={() => navigate(`/${user?.username}`)}
        >
          <InfoIcon /> Profile
        </li>
        <li
          className="cursor-pointer hover:scale-110 active:scale-95 transition flex items-center justify-start gap-2"
          onClick={() => navigate("/about")}
        >
          <CodeIcon /> About
        </li>
        <li
          className="cursor-pointer hover:scale-110 active:scale-95 transition flex items-center justify-start gap-2"
          onClick={() => navigate("/contact")}
        >
          <ContactIcon /> Contact
        </li>
        <li
          className="cursor-pointer hover:scale-110 active:scale-95 transition flex items-center justify-start gap-2 text-error font-semibold"
          onClick={logoutUser}
        >
          <LogoutIcon /> Sign Out
        </li>
      </ul>
    </div>
  );
}

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};

const CodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
};

const ContactIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
      />
    </svg>
  );
};
