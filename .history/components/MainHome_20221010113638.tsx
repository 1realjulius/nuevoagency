import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="flex flex-col text-white py-10 px-4 md:px-10 md:py-16">
      <div>
        {/* main */}
        <div className="relative z-10 w-full bg-blue-200 h-[80vh] flex flex-col">
          <div className="absolute bottom-4">
            {HeroImg.map((hero, index) => (
              <div key={hero.id}>
                {index === currentCategory && (
                  <div>
                    <div>
                      <div className="">
                        <motion.img
                          layoutId="img"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          src={hero.img}
                          alt=""
                          className="object-cover h-[50vh] w-[100vw] rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <div>
              <h1>home</h1>
            </div>
          </div>
        </div>
        {/* Photography */}
        <div></div>
        {/* Videography */}
        <div></div>
        {/* Events */}
        <div></div>
        {/* Mentoring */}
        <div></div>
        {/* work Numberss */}
        <div></div>
      </div>
    </div>
  );
};

export default MainHome;
