import { useEffect } from "react";
import gsap from "gsap";

import ErrorIcon from "../assets/ErrorIcon";

interface ErrorProps {
  message: string;
}
export default function ErrorPopup(props: ErrorProps) {
  useEffect(() => {
    gsap.to(".error-popup", {
      translateY: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.out",
    });
    gsap.to(".error-popup", {
      translateY: "-100%",
      duration: 0.5,
      delay: 5,
    });
  });
  return (
    <div className="error-popup text-white bg-error fixed top-0 left-0 w-full z-20 flex flex-col sm:flex-row justify-center items-center gap-2 sm:p-2 selection:bg-dark-blue -translate-y-full shadow-xl">
      <ErrorIcon />
      <h4 className="text-lg text-center sm:text-2xl mb-1">{props.message}</h4>
    </div>
  );
}
