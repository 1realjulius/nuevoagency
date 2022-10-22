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
        <div className="flex flex-col  w-full py-2 pb-6">
          <h1 className="text-[38px] md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular pt-6 pb-4 leading-none">
            <span>We Make Perfect Memories From Experiences </span>
            <span className="text-[#828282]">With Awsome Videos</span>
          </h1>
          <div className="py-2 flex flex-row space-x-2 md:space-x-4 items-start">
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
                        ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer flex flex-row items-center space-x-2"
                        : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer flex flex-row items-center space-x-2 "
                    }`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                        <path
                          fillRule="evenodd"
                          d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h1>Book a shoot</h1>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
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
                        ? "px-4 py-2 border text-white hover:bg-[#FF0000] hover:text-white rounded-full hover:border-transparent border-white cursor-pointer flex flex-row items-center space-x-2"
                        : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer flex flex-row items-center space-x-2 "
                    }`}
                  >
                    <span>
                      <Youtube className="w-6 h-6" />
                    </span>
                    <span className="text-base">Youtube</span>
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
