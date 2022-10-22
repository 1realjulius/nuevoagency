import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Youtube } from "react-feather";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

const Events = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen text-white flex flex-col font-FredokaOneRegular">
      {/* navbar */}
      <div className="z-40">
        <NavBar />
      </div>
      {/* Logo */}
      <div className="absolute top-5 left-5 md:left-10">
        <div className="">
          <Link href="/">
            <div className="relative h-[28px] w-[142px] md:h-[40px] md:w-[202px] cursor-pointer">
              <Image
                src="/Assets/whitefooterlogo.png"
                layout="fill"
                alt=""
                className="absolute object-contain "
              />
            </div>
          </Link>
        </div>
      </div>
      {/* main  */}
      <div className="px-4 md:px-16 pt-16">
        {/* heder */}
        <div className="flex flex-col items-center justify-center text-center  w-full py-2 pb-6">
          <h1 className="text-[42px] md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular pt-6 pb-4 leading-10">
            <span>Experience The Great Taste Of </span>
            <span className="text-[#828282]">Food </span>
            <span>And </span>
            <span className="text-[#828282]">Breze </span>
            <span>With Awsome </span>
            <span className="text-[#828282]">Events.</span>
          </h1>
          <div className="py-2 flex flex-row space-x-2 md:space-x-4 items-start">
            <motion.div className=" md:text-xl">
              <div className="m-2">
                <Link href="#">
                  <motion.div
                    layout
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className={` ${
                      1 < 2
                        ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer flex flex-row items-center space-x-2"
                        : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer flex flex-row items-center space-x-2 "
                    }`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>
                    </span>
                    <h1>Get Ticket</h1>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
            <motion.div className=" md:text-xl">
              <div className="m-2">
                <Link href="#">
                  <motion.div
                    layout
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className={` ${"px-4 py-2 border text-white hover:bg-[#FF0000] hover:text-white rounded-full hover:border-transparent border-white cursor-pointer flex flex-row items-center space-x-2"}`}
                  >
                    <span>
                      <Youtube className="w-6 h-6" />
                    </span>
                    <span>Youtube</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* hero Video */}
        <div>
          <div className="">
            {/* Make Video Parallax */}
            <motion.img
              layoutId="img"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              src="/Assets/floss.png"
              alt=""
              className="object-cover h-[300px] md:h-[600px] w-[100vw] rounded-xl"
            />
          </div>
        </div>
        {/* explore or recent work */}
        <div className="flex flex-col pt-8 py-4 md:pt-20">
          <div className="flex flex-row items-center md:py-6">
            <div>
              <h1 className="font-FredokaOneRegular">
                <span className="text-4xl md:text-7xl  leading-none">
                  EXPLORE
                </span>
                <br />
                <span className="text-[#828282] text-xl md:text-4xl ">
                  OUR RECENT WORK
                </span>
              </h1>
            </div>
          </div>
          <div>Sticky Scroll of the video Projects here</div>
        </div>
      </div>
      {/* footer */}
      <div>
        <NewFooter />
      </div>
    </div>
  );
};

export default Events;
