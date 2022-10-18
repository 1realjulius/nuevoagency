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
import ComingSoon from "./ComingSoon";

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
    <div className="">
      {/* ParentElement */}
      <main className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0">
        <section className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
          {/* childern */}
          <section className="bg-green-800 w-[100vw] h-[100vh] snap-start">
            <ComingSoon />
          </section>
          <section className="bg-pink-800 w-[100vw] h-[100vh] snap-start ">
            page2
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
        </section>
      </main>
    </div>
  );
};
export default MainHome;
