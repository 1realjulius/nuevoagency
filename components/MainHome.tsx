import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { Divide, Instagram } from "react-feather";
import NavBar from "./NavBar";
import ComingSoon from "./ComingSoon";
import { withMouseOverArea } from "./Magnetic";
import NewFooter from "./NewFooter";
import ReactPlayer from "react-player/lazy";

const MainHome = () => {
  const bgImages = [
    {
      id: 1,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[224px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 2,
      imgContainerStyle: "col-span-1 md:col-span-1",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHero2.jpg",
    },
    {
      id: 3,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[224px] md:h-[480px] w-[100vw]",
      img: "/Assets/prince-01.jpg",
    },
    {
      id: 4,
      imgContainerStyle: "col-span-1 md:col-span-1",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHome5.jpg",
    },
    {
      id: 5,
      imgContainerStyle: "col-span-1 md:col-span-1",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHome5.jpg",
    },
    {
      id: 6,
      imgContainerStyle: "col-span-1 md:col-span-1",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHome5.jpg",
    },
  ];

  const videographyVieos = [
    {
      id: 1,
      vidContainerStyle: "col-span-2",
      vidStyle: "h-[180px] md:h-[350px] w-[100vw]",
      vid: "/Assets/nhero4.jpg",
    },
    {
      id: 2,
      vidContainerStyle: "col-span-1 md:col-span-1",
      vidStyle: "h-[100px] md:h-[350px] w-[100vw]",
      vid: "/Assets/nHero2.jpg",
    },
    {
      id: 3,
      vidContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      vidStyle: "h-[100px] md:h-[350px] w-[100vw]",
      vid: "/Assets/prince-01.jpg",
    },
  ];

  //Destructuring an array
  const bgImages3 = {
    h1: { name: "joy", age: 16 },
    h2: { name: "mark", age: 6 },
    h3: { name: "ben", age: 10 },
  };
  const { h1, h2 } = bgImages3;
  const h1name = h1?.name;

  const x = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  const variants = {
    default: {
      x: -6,
      y: -6,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen ">
      {/* childern */}
      <div>
        <NavBar />
      </div>
      {/* hero section */}
      <div className="w-ful p-4 md:py-8 ">
        <div className="flex flex-col items-center justify-center">
          <div className=" py-4">
            <div className="flex flex-col items-center justify-center">
              <div className="py-8">
                {/* Nav Logo */}
                <div className="px-8 ">
                  <Link href="/">
                    <div className="cursor-pointer">
                      <Image
                        src="/Assets/whitefooterlogo.png"
                        width="182px"
                        height="40px"
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-[55px] leading-none md:text-8xl text-center">
                  <span>Make Awsome </span>
                  <br />
                  <span className="text-[#828282]">Memories </span>
                  <span>From Your </span>
                  <span>Best </span>
                  <br />
                  <span className="text-[#828282]">Experiences.</span>
                </h1>
              </div>
              <div className="py-4">
                {/* CTA buttons */}
                <div className="px-4 flex flex-col md:items-end py-4">
                  <div className="flex flex-row items-center text-xl">
                    {/* contact btn */}
                    <motion.div className="">
                      <div className="m-2">
                        <Link href="/Contact">
                          <motion.div
                            layout
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                            className={` ${
                              1 < 2
                                ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                                : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                            }`}
                          >
                            <h1>Book a shoot</h1>
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                    {/* ig Page */}
                    <div>
                      <div className="m-2">
                        <Link href="/Contact">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            initial={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                            className={` ${
                              1 < 2
                                ? "px-2 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                                : "px-2 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                            }`}
                          >
                            <Instagram className="w-6 h-6" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* photography section */}
      <div className=" p-4 md:py-10 md:px-10 ">
        <div>
          <div className="h-[70vh] md:h-[64vh] relative overflow-hidden">
            <div className="w-full h-full">
              <div className="grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-4 h-full">
                {bgImages.map((img) => (
                  <div
                    key={img.id}
                    className={`${img.imgContainerStyle} flex flex-col relative`}
                  >
                    <motion.img
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      src={img.img}
                      alt=""
                      className={`${img.imgStyle} object-cover`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-center py-6">
              <div>
                <h1 className="text-[40px] md:text-[60px] leading-none text-center">
                  Save memories with Images
                </h1>
              </div>
              <div>
                {/* contact btn */}
                <motion.div className="">
                  <div className="m-2">
                    <Link href="/Photography">
                      <motion.div
                        layout
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className={` ${
                          1 < 2
                            ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                            : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                        }`}
                      >
                        <h1>View Photography</h1>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* videography section */}
      <div className=" p-4 md:py-6 md:px-10 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            {/* replace this vid with the actual one */}
            <div className="w-full relative pt-[56.25%] rounded overflow-hidden bg-gray-200/10">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=p_nGCfhfex8"
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center py-4 md:py-0">
              <div>
                <h1 className="text-[40px] md:text-8xl leading-none text-center">
                  Save memories with Videos
                </h1>
              </div>
              <div>
                {/* contact btn */}
                <motion.div className="">
                  <div className="m-2">
                    <Link href="/Videography">
                      <motion.div
                        layout
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className={` ${
                          1 < 2
                            ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                            : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                        }`}
                      >
                        <h1>View Videography</h1>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* events  */}
      <div className=" p-4 md:py-6 md:px-10 ">
        <div className="relative flex flex-col items-center">
          <div className="w-full pt-[56.25%]  relative bg-white/20">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=p_nGCfhfex8"
              width="100%"
              height="100%"
              //controls
              className="absolute top-0 left-0 object-contain"
            />
            {/* <video
              controls
              src="/Assets/testvid.mp4"
              className="absolute top-0 left-0 "
              width="100%"
              height="100%"
            /> */}
          </div>
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-center py-2">
            <div>
              <h1 className="text-[40px] md:text-[60px] leading-none text-center">
                Make memories with Our Events
              </h1>
            </div>
            <div>
              {/* Events  btn */}
              <motion.div className="">
                <div className="m-2">
                  <Link href="/Events">
                    <motion.div
                      layout
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                      transition={{ ease: "easeOut", duration: 0.2 }}
                      className={` ${
                        1 < 2
                          ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                          : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                      }`}
                    >
                      <h1>View Events</h1>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div className="">
        <div className="md:px-10 px-4 md:py-10 py-6 bg-white text-black">
          <div className="w-full h-full flex flex-col md:flex-row items-end md:justify-between bg-black text-white p-2 rounded py-10 px-10">
            <div>
              <h1 className="text-[40px] md:text-8xl leading-none">
                <span>Have An</span>
                <br />
                <span>Event In Mind</span>
              </h1>
            </div>
            <Link href="/Contact">
              <div className="flex flex-row items-center space-x-2">
                <h1 className="text-[40px] md:text-8xl text-[#828282]">
                  Contact Us
                </h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 md:w-20 md:h-20 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <NewFooter />
      </div>
    </section>
  );
};
export default MainHome;
