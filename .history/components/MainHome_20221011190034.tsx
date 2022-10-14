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
    <div className="text-white flex flex-col font-FredokaOneRegular z-10 min-h-screen">
      {/* navbar */}
      <nav className="sticky top-0 z-50">
        <NavBar />
      </nav>
      {/* main */}
      <main className="flex flex-col items-center justify-center px-4">
        {/* hero section */}
        <div className="min-h-screen w-full flex flex-col pt-16">
          <div className="bg-green-200 relative flex flex-col items-center justify-center">
            <div className="relative w-[90vw] h-[80vh] md:h-[90vh] bg-yellow-200 flex flex-col items-center justify-center">
              {/* hero bg images */}
              <div className="absolute grid grid-cols-3 h-full w-full gap-2 ">
                <div className="bg-blue-200 col-span-2 relative h-full w-full">
                  <div className="">
                    <motion.img
                      // layoutId="img"
                      // initial={{ x: 30, opacity: 0 }}
                      // animate={{ x: 0, opacity: 1 }}
                      // exit={{ x: -30, opacity: 0 }}
                      src="/Assets/bright-rain.png"
                      alt=""
                      className="absolute object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="bg-red-200">2</div>
                <div className="bg-amber-200 col-span-3">3</div>
              </div>
              {/* hero text */}
              <div className="absolute">
                <h1>hello dear</h1>
              </div>
            </div>
          </div>
        </div>
        {/* p section */}
        <div>blikfb</div>
      </main>
      {/* footer */}
      <footer className="">{/* <MainFooter /> */}</footer>
    </div>
  );
};
export default MainHome;
