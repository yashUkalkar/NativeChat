// Packages
import { useContext, useEffect, lazy } from "react";
import { useNavigate } from "react-router-dom";

// Page components
const ChatHeader = lazy(() => import("./ChatHeader"));

// Contexts
import { UserContext } from "../../contexts/UserContext";

// Assets
import ProfileIcon from "../../assets/ProfileIcon";

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    user && (
      <div className="flex flex-col w-screen h-screen">
        <ChatHeader />
        <main className="flex-grow grid place-items-center">
          <section className="bg-white bg-opacity-50 backdrop-blur-[7px] flex flex-col justify-center items-center w-full h-full md:h-[90%] min-w-[320px] max-w-[500px] my-2 py-2">
            <h2 className="text-3xl font-bold mb-5">{user.username}</h2>
            {user.user_image ? (
              <div className="w-[200px] h-[200px]">
                <img
                  className="border-4 border-pink w-full h-full object-cover rounded-full"
                  src={user.user_image}
                  alt="Profile Picture"
                />
              </div>
            ) : (
              <div className="my-5">
                <h3 className="text-center">No profile image set!</h3>
                <input type="file" name="photo" />
              </div>
            )}

            <span className="relative my-3">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </span>

            <div>
              <h4>Default translation language</h4>
              <select name="translation_language">
                <option value="" defaultChecked>
                  Select a language
                </option>
                <option value="en">English</option>
              </select>
            </div>
          </section>
        </main>
      </div>
    )
  );
}
