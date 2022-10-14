import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { Instagram } from "react-feather";
import NavBar from "./NavBar";

const HeroImg = [
  {
    id: 1,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Potrait",
    imgStyle: "",
    img: "/Assets/bright-rain.png",
  },
  {
    id: 2,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Wedding",
    imgStyle: "md:col-span-2",
    img: "/Assets/floss.png",
  },
  {
    id: 3,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "md:col-span-2",
    img: "/Assets/landscape.jpg",
  },
  {
    id: 4,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Landscape",
    imgStyle: "",
    img: "/Assets/moonrise.png",
  },
  {
    id: 5,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Wedding",
    imgStyle: "",
    img: "/Assets/floss.png",
  },
  {
    id: 6,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "",
    img: "/Assets/landscape.jpg",
  },
  {
    id: 7,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "",
    img: "/Assets/landscape.jpg",
  },
];

const MainHome = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const CategorySlideLength = HeroImg.length;
  if (!Array.isArray(HeroImg) || HeroImg.length <= 0) {
    return null;
  }

  const nextPSlide = () => {
    setCurrentCategory(
      currentCategory === CategorySlideLength - 1 ? 0 : currentCategory + 1
    );
  };

  const prevPSlide = () => {
    setCurrentCategory(
      currentCategory === 0 ? CategorySlideLength - 1 : currentCategory - 1
    );
  };
  return (
    <div className="bg-[#161719] text-white flex flex-col font-FredokaOneRegular z-10 ">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/* main */}
      <div className="px-4 md:px-16 pt-16">
        {/* heaader */}
        <div className="flex flex-col  w-full p-2">
          <h1 className="text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular pt-6 pb-4">
            <span className="">
              We Make Perfect Memories Out Of Your Experiences{" "}
            </span>
            <span className="text-[#828282]">With Exceptional Photos</span>
          </h1>
        </div>
        {/* main */}
        <div className="">
          {/* mainimg */}
          <div>
            {HeroImg.map((hero, index) => (
              <div>
                {index === currentCategory && (
                  <div>
                    <div className="relative flex flex-col items-center">
                      {/* img */}
                      <div className="">
                        <motion.img
                          layoutId="img"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          src="/Assets/bright-rain.png"
                          alt=""
                          className="object-cover h-[200px] md:h-[600px] w-[80vw] rounded-xl"
                        />
                      </div>
                      {/* lb */}
                      <div>lb</div>
                      {/* rb */}
                      <div>rb</div>
                      {/* igl */}
                      <div>ig</div>
                    </div>
                    <div></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="">{/* <MainFooter /> */}</div>
    </div>
  );
};
export default MainHome;
