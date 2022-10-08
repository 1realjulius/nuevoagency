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
    <div className="absolute top-0 overflow-hidden w-full">
      <div className="">
        <AnimatePresence>
          {open ? (
            <div className="z-50 min-h-screen min-w-full overflow-hidden">
              <motion.div
                layoutId="bgss"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
                className="relative bg-[#161719] min-w-full min-h-screen flex flex-col items-center overflow-hidden p-6 py-10"
              >
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
                      <div>bsdfaj</div>
                      <div>bsdfaj</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              className={`${
                navColour
                  ? "flex flex-row items-center justify-between px-4 md:px-8 py-2 bg-red-200"
                  : "flex flex-row items-center justify-between px-4 md:px-8 py-2"
              }`}
            >
              <div>
                {/* logo */}
                <div className="">
                  {navColour ? (
                    <Link href="/">
                      <div className="relative w-[98px] h-[36px] cursor-pointer">
                        <Image
                          src="/Assets/simpleblackbg.png"
                          layout="fill"
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ) : (
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
                  )}
                </div>
              </div>
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
