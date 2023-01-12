import { useEffect } from "react";
import gsap, { Elastic } from "gsap";

// Assets
import img1 from "../assets/bg/1.png";
import img2 from "../assets/bg/2.png";
import img3 from "../assets/bg/3.png";
import img4 from "../assets/bg/4.png";
import img5 from "../assets/bg/5.png";
import img6 from "../assets/bg/6.png";
import img7 from "../assets/bg/7.png";
import img8 from "../assets/bg/8.png";
import img9 from "../assets/bg/9.png";
import img10 from "../assets/bg/10.png";
import img11 from "../assets/bg/11.png";

export default function Background() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  // Generate random background from images
  const randomBackground = () => {
    const random = Math.floor(Math.random() * (images.length - 1));
    return images[random];
  };

  const num = 500;
  const imgArray = [];
  for (let i = 0; i < num; i++) {
    imgArray.push(randomBackground());
  }

  useEffect(() => {
    gsap.to(".image-letter", {
      scale: 1,
      duration: 2,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: Elastic.easeOut.config(1, 0.3),
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden grid place-items-center -z-10">
      <div className="flex flex-wrap gap-5 md:gap-7 w-[120%]">
        {imgArray.map((image, index) => {
          return (
            <div
              key={index}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] image-letter scale-0 rounded-md shadow-[2px_2px_5px_3px_rgba(0,0,0,0.1)] p-2"
            >
              <img src={image} className="w-full opacity-70" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
