// Packages
import { useState, useContext } from "react";

// Components
import FormField from "../../components/FormField";

// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ShowErrorContext } from "../../contexts/ShowErrorContext";
import { ShowLoaderContext } from "../../contexts/ShowLoaderContext";

// Helpers
import { signInUser, signUpUser } from "../../api/authRequests";

export default function SignSection() {
  const [loginForm, showLoginForm] = useState(true);
  const { setUser } = useContext(UserContext);
  const { setShowError } = useContext(ShowErrorContext);
  const { setShowLoader } = useContext(ShowLoaderContext);

  const authHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await (loginForm ? signInUser(data) : signUpUser(data)).then((res) => {
        setUser(res);
        // Add user to session storage for
        // persistence on refresh
        sessionStorage.setItem("userData", JSON.stringify(res));
      });
    } catch (err: any) {
      // * Returns Error(message)
      // * To display the 'message' returned
      setShowError({
        show: true,
        message: err.message,
      });
    } finally {
      setShowLoader(false);
      setTimeout(
        () =>
          setShowError({
            show: false,
            message: "Some error occured!\nSorry for the inconvenience.",
          }),
        5600
      );
    }
  };

  return (
    <main className="w-full h-full grid place-items-center z-10">
      {/* form container */}
      <div className="w-full max-w-[35ch] lg:max-w-[40ch] min-h-[370px] flex flex-col justify-between">
        <h2 className="font-bold text-3xl text-center mb-12 py-[5px]">
          {loginForm ? "Sign In" : "Sign Up"}
        </h2>

        <form
          onSubmit={authHandler}
          autoComplete="off"
          className="flex flex-col justify-center gap-5"
        >
          <FormField
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />

          {!loginForm ? (
            <FormField type="text" name="username" required />
          ) : (
            <></>
          )}

          <FormField
            type="password"
            name="password"
            minLength={6}
            maxLength={15}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-pink text-white rounded-md p-1 text-lg transition hover:bg-opacity-90 active:bg-dark-blue w-full max-w-sm"
          >
            {loginForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/*  form toggle */}
        <div className="flex justify-center items-center mt-10">
          <h4>{loginForm ? "Don't have an account?" : "Have an account?"}</h4>
          <span
            onClick={() => showLoginForm(!loginForm)}
            className="ml-1 underline text-pink cursor-pointer active:text-dark-blue hover:text-opacity-70"
          >
            {loginForm ? "Sign Up here" : "Sign In here"}
          </span>
        </div>
      </div>
    </main>
  );
}
