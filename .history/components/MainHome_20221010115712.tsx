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
        <div className="z-10 w-full bg-blue-200 flex flex-col">
          <div>
            <div>
              <h1>home</h1>
            </div>
          </div>
          <div className="">
            {HeroImg.map((hero, index) => (
              <div key={hero.id}>
                {index === currentCategory && (
                  <div>
                    <div className="p-2 relative flex flex-col items-start justify-center">
                      <div className="absolute left-4 z-10">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevPSlide}
                          className="bg-white text-black p-1 rounded-full cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      </div>
                      <div className="absolute right-4 z-10">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextPSlide}
                          className="bg-white text-black p-1 rounded-full cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-pink-200 z-10">
                        h
                      </div>
                      <div className="md:px-40">
                        <motion.img
                          layoutId="img"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          src={hero.img}
                          alt=""
                          className="object-cover h-[50vh] md:h-[80vh] w-[100vw] rounded-xl -z-10"
                        />
                      </div>
                    </div>
                    <div className="bg-blue-200">ljksda</div>
                  </div>
                )}
              </div>
            ))}
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
