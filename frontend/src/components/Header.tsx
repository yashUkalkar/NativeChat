// Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Component
import { Divide as HamburgerMenu } from "hamburger-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-5 py-2 sm:px-12 md:px-12 z-10 bg-white lg:hidden bg-opacity-70 backdrop-blur-[5px]">
        <div className="flex justify-between items-center align-middle">
          <h1 className="text-4xl font-bold">
            Native<span className="text-pink">Chat</span>
          </h1>
          <HamburgerMenu
            toggled={showMenu}
            toggle={() => setShowMenu(!showMenu)}
            size={32}
            rounded
            label="Menu"
            color={showMenu ? "#cc1d5e" : "currentColor"}
            distance="sm"
          />
        </div>
      </header>
      <ul
        className={
          "mt-10 fixed top-4 w-full lg:hidden left-0 z-20 bg-white text-center text-xl flex flex-col items-center justify-evenly gap-4 p-2 transform origin-top transition" +
          (showMenu ? "" : " scale-y-0")
        }
      >
        <li
          className={
            "navlink w-fit font-semibold p-1 transition" +
            (showMenu ? "" : " opacity-0")
          }
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={
            "navlink w-fit font-semibold p-1 transition" +
            (showMenu ? "" : " opacity-0")
          }
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
