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
    <div className="text-white bg-black flex flex-col font-FredokaOneRegular z-10 w-full">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/* main */}
      <div>
        {/* hero text */}
        <div className="bg-blue-200">
          <h1 className="text-7xl">
            We Turn Your Experiences into Awsome Memories.
          </h1>
        </div>
      </div>
      {/* footer */}
      <div className="">{/* <MainFooter /> */}</div>
    </div>
  );
};
export default MainHome;
