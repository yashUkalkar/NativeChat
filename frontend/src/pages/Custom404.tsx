import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen grid place-items-center z-10">
      <div className="bg-dark-blue text-white backdrop:blur-xl flex flex-col items-center gap-10 justify-center p-10 relative">
        {/* Link to homepage */}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center gap-2 text-xl sm:text-2xl text-pink cursor-pointer hover:scale-110 transition after:w-full after:h-1 after:absolute after:bottom-0 after:left-0 after:bg-pink"
        >
          <HomeIcon />
          <h4>Go to Home!</h4>
        </div>

        <div className="flex justify-center items-center gap-2 text-2xl sm:text-4xl">
          <CustomErrorIcon />
          <h2>Page not accessible!</h2>
        </div>
      </div>
    </div>
  );
}

const CustomErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="{1.5}"
      stroke="currentColor"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
};

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};
