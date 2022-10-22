import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { Divide, Instagram } from "react-feather";
import NavBar from "./NavBar";
import ComingSoon from "./ComingSoon";
import { withMouseOverArea } from "./Magnetic";

const MainHome = () => {
  const bgImages = [
    {
      id: 1,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
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
      imgContainerStyle: "hidden md:flex",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHome5.jpg",
    },
  ];

  const photographyImages = [
    {
      id: 1,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 2,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 3,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 4,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 5,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 6,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 7,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 8,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 9,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 10,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 11,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 12,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 13,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 14,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 15,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 16,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 17,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 18,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 19,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 20,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 21,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 22,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 23,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 24,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[200px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
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

  return (
    <section className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
      {/* childern */}
      <div>
        <NavBar />
      </div>
      {/* home */}
      <section className="w-[100vw] h-[100vh] snap-start">
        <div className="w-[100vw] h-[100vh] bg-black text-white font-FredokaOneRegular">
          <div className="relative h-full w-full flex flex-col justify-end overflow-hidden">
            <div className="absolute top-[2px] left-[0px] w-full md:w-[50vw] p-2 h-full space-y-2">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-2 md:gap-4 h-64 w-full z-10">
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
            <div className="z-20 absolute bottom-16 left-0 md:py-10 md:right-2 md:text-end">
              <div>
                {/* herotext */}
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[72px] md:text-[110px] px-2 md:px-5 py-2 leading-none space-y-3"
                >
                  <motion.h1>
                    <motion.span>Make </motion.span> <br />
                    <motion.span>Aswome </motion.span> <br />
                    <motion.span>Memories </motion.span> <br />
                    <motion.span>With Us.</motion.span>
                  </motion.h1>
                </motion.div>
                {/* Hero Secondary text */}
                <div className="px-4 flex flex-col md:items-end">
                  <p className="text-[#828282] flex flex-row items-center text-base md:text-xl">
                    <span>• We Make Memories From Your Experiences.</span>
                  </p>
                </div>
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
                {/* scroll down btn */}
                <div className="absolute bottom-0 right-0 hidden md:flex">
                  scroll down
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Secton */}
      <section className="bg w-[100vw] h-[100vh] snap-start  ">
        <div className="w-full bg-white text-black h-full flex flex-col items-center justify-center px-4 md:px-20">
          {/* about text */}
          <div>
            <h1 className="text-3xl md:text-7xl text-center">
              <span>Here at </span>
              <span>Nuevo</span>{" "}
              <span>Our Aim is to make Exceptional Memories</span>{" "}
              <span>From Our Client's Experiences</span>
            </h1>
          </div>
          {/* text writer and btns */}
          <div className="py-6 flex flex-col w-full items-center justify-center">
            {/* text writer */}
            <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
              <div>
                <div className="p-2">
                  <Image
                    src="/Assets/prince-01.jpg"
                    width="60px"
                    height="60px"
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">CEO, </span>
                  <span>Lead Photographer.</span>
                </h1>
              </div>
            </div>
            {/* btns */}
            <div className="py-4">
              <div>
                <Link href="/About">
                  <div className="px-4 py-3 border-2 border-black rounded-full">
                    <h1 className="text-xl">About Us</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Photography Section */}
      <section className="bg-black w-[100vw] h-[100vh] snap-start p-2">
        <div className="w-full h-full relative text-white overflow-hidden">
          {/* bg images */}
          <div className="absolute -top-[160px] md:-top-[300px] left-0 md:-left-0 rotate-[25deg] z-10">
            <div className="w-[100vw] md:w-[70vw]">
              <div className="grid grid-cols-3  md:grid-cols-3 gap-2 md:gap-4 h-64 w-full z-10">
                {photographyImages.map((img) => (
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
          </div>
          <div className="absolute bottom-14 right-4  w-full flex flex-col items-end justify-end z-20">
            <div className="pl-20 py-8">
              <h1 className="text-6xl md:text-7xl text-end">
                <span> We make </span>
                <br />
                <span>maemories </span>
                <br />
                <span> with photos</span>
              </h1>
            </div>
            <div>
              <Link href="/Photography">
                <div className="px-4 py-3 border-2 rounded-full">
                  <h1>View Photography</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Videography Section */}
      <section className="bg-black w-[100vw] h-[100vh] snap-start p-4">
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col md:flex-row h-full items-center justify-between">
            <div className=" w-full md:w-[60vw]  h-full bg-white">
              <div className="grid grid-cols-2  md:grid-cols-2 gap-2 md:gap-4 h-64 w-full z-10 p-4">
                {videographyVieos.map((vid) => (
                  <div
                    key={vid.id}
                    className={`${vid.vidContainerStyle} flex flex-col relative`}
                  >
                    <motion.img
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      src={vid.vid}
                      alt=""
                      className={`${vid.vidStyle} object-cover`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex-1  h-full bg-blue-200">Content</div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section className="bg-yellow-300 w-[100vw] h-[100vh] snap-start p-2">
        page3
      </section>
      {/* Mentoring section */}
      <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start p-2">
        page3
      </section>
      {/* Footer */}
      <section className="bg-pink-800 w-[100vw] h-[100vh] snap-start p-2">
        page3
      </section>
    </section>
  );
};
export default MainHome;
