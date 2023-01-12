// Packages
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full h-full hidden lg:grid place-items-center">
      <div className="w-full max-w-[40ch] flex flex-col justify-between min-h-[370px]">
        <h1 className="font-bold text-5xl">
          Native<span className="text-pink">Chat</span>
        </h1>

        <div>
          <h3 className="font-bold text-gray text-2xl max-w-[27ch]">
            Break the language barrier with a single tap!
          </h3>

          <nav>
            <ul className="font-semibold list-disc ml-4 mt-5">
              <li>
                <h5>
                  <span className="text-pink font-bold">Translate</span> any
                  message to your language
                </h5>
              </li>
              <li>
                <h5>
                  Turn on{" "}
                  <span className="text-pink font-bold">auto-translate</span>{" "}
                  for hassle free communication
                </h5>
              </li>
            </ul>
          </nav>
        </div>

        {/* Call to action logo */}
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center gap-5 text-xl">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
