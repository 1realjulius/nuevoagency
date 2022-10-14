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
      <main className="h-[100vh] flex flex-col items-center justify-center px-4">
        {/* hero text */}
        <div className="min-h-[90vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-[54px] md:text-8xl text-center leading-tight">
            <span>We Turn </span>
            <span>Experiences </span>
            <span>into Awsome </span>
            <span>Memories.</span>
          </h1>
          <div className="absolute bottom-4 right-4">
            <div className="border-2 border-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
              <p className="text-sm">scroll</p>
              <p className="text-sm">down</p>
            </div>
          </div>
        </div>
        {/* p section */}
        <div className="flex flex-col items-center justify-center">
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
          <div>blikfb</div>
        </div>
      </main>
      {/* footer */}
      <footer className="">{/* <MainFooter /> */}</footer>
    </div>
  );
};
export default MainHome;
