import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openBtn, setBtnOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const changeNavColour = () => {
    if (window.scrollY >= 10) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    // Client-side-only code
    window.addEventListener("scroll", changeNavColour);
  });

  const openNav = () => {
    setOpen(true);
    setBtnOpen(!open);
  };
  const closeNav = () => {
    setOpen(false);
    setBtnOpen(!open);
  };
  return (
    <div className="fixed top-5 right-5 overflow-hidden z-50">
      <div className="">
        <AnimatePresence>
          {open ? (
            <div className="z-50 min-h-screen min-w-full overflow-hidden">
              <motion.div className="relative bg-[#161719] min-w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-6 py-10">
                <div className="absolute top-0 w-full py-2 px-8 flex flex-row items-center justify-between">
                  <div>
                    <Link href="/">
                      <div className="relative w-[98px] h-[36px] cursor-pointer">
                        <Image
                          src="/Assets/simplewhitebg.png"
                          layout="fill"
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <div className="w-11/12 flex justify-end items-center">
                      <div
                        className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
                        onClick={closeNav}
                      >
                        {/* the btn */}
                        <span
                          className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                            openBtn ? "rotate-45 translate-y-2.5" : ""
                          }`}
                        />
                        <span
                          className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                            openBtn ? "w-0" : "w-full"
                          }`}
                        />
                        <span
                          className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                            openBtn ? "-rotate-45 -translate-y-2.5" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col">
                    <div className="grid md:grid-cols-2 justify-center">
                      <div className="flex flex-col items-center justify-center space-y-4 py-4">
                        <div className="cursor-pointer">
                          <Link href="/About">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              About
                            </h1>
                          </Link>
                        </div>
                        <div className="cursor-pointer">
                          <Link href="/Contact">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              Contact
                            </h1>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="cursor-pointer">
                          <Link href="/Photography">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              Photography
                            </h1>
                          </Link>
                        </div>
                        <div className="cursor-pointer">
                          <Link href="/Videography">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              Videography
                            </h1>
                          </Link>
                        </div>
                        <div className="cursor-pointer">
                          <Link href="/Events">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              Events
                            </h1>
                          </Link>
                        </div>
                        <div className="cursor-pointer">
                          <Link href="/Mentoring">
                            <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                              Mentoring
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              className={`${
                navColour
                  ? "flex flex-row items-center justify-end px-4 md:px-8 py-2 bg-white"
                  : "flex flex-row items-center justify-end px-4 md:px-8 py-2"
              }`}
            >
              <div>
                {navColour ? (
                  <div className="w-11/12 flex justify-end items-center">
                    <div
                      className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
                      onClick={openNav}
                    >
                      {/* the btn */}
                      <span
                        className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "rotate-45 translate-y-2.5" : ""
                        }`}
                      />
                      <span
                        className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "w-0" : "w-full"
                        }`}
                      />
                      <span
                        className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "-rotate-45 -translate-y-2.5" : ""
                        }`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-11/12 flex justify-end items-center">
                    <div
                      className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
                      onClick={openNav}
                    >
                      {/* the btn */}
                      <span
                        className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "rotate-45 translate-y-2.5" : ""
                        }`}
                      />
                      <span
                        className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "w-0" : "w-full"
                        }`}
                      />
                      <span
                        className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                          openBtn ? "-rotate-45 -translate-y-2.5" : ""
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
