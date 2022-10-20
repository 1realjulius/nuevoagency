import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);
  const [menuColour, setMenuColour] = useState(false);

  const changeMenuColour = () => {
    if (window.scrollY >= 10 && !menuBtnState) {
      setMenuColour(true);
    } else {
      setMenuColour(false);
    }
  };

  useEffect(() => {
    // Client-side-only code
    window.addEventListener("scroll", changeMenuColour);
  });

  const handleHanburgerManu = () => {
    if (!menuBtnState) {
      //open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      //close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };

  const openNav = () => {
    setOpen(true);
    setBtnOpen(!open);
  };
  const closeNav = () => {
    setOpen(false);
    setBtnOpen(!open);
  };
  return (
    <div className="overflow-hidden w-full z-40 flex select-none">
      <div className="flex flex-col items-center justify-center ">
        {/* Hanburger Manu Itself */}
        <div
          className={`fixed top-3 right-3 z-40
            ${open ? "p-3" : "p-3"}
          `}
        >
          <div className="w-6 flex justify-end items-center">
            <div
              className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out mix-blend-difference 
                ${openBtn ? "rotate-45 translate-y-2.5 bg-black" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out  mix-blend-difference
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white  rounded-lg cursor-pointer transform transition duration-300 ease-in-out mix-blend-difference
                ${openBtn ? "-rotate-45 -translate-y-3 bg-black" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div>
          <AnimatePresence mode="sync">
            {open && (
              <div className="fixed top-0 right-0 w-full md:w-[50vw] min-h-screen bg-white z-30 text-black overflow-hidden md:border-l-[6px] ">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative pt-8 w-full h-screen"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="px-8 ">
                      <Link href="/">
                        <div className="border-b-2 border-[#E8EAED] cursor-pointer">
                          <Image
                            src="/Assets/footerlogo.png"
                            width="182px"
                            height="40px"
                            alt=""
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <div className="flex flex-col items-start justify-start text-4xl md:text-6xl">
                        <div className="py-2 px-8">
                          <Link href="/About">
                            <div className="cursor-pointer">
                              <h1>About</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Photography">
                            <div className="cursor-pointer">
                              <h1>Photography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Videography">
                            <div className="cursor-pointer">
                              <h1>Videography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Events">
                            <div className="cursor-pointer">
                              <h1>Events</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Mentoring">
                            <div className="cursor-pointer">
                              <h1>Mentoring</h1>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  w-full">
                      <div className="py-4 px-8 ">
                        <div className="border-t-2 pt-4 border-[#E8EAED]">
                          <div className="flex flex-row items-center space-x-4">
                            <div>
                              <Link href="#">
                                <div className="cursor-pointer">
                                  <h1>Instagram</h1>
                                </div>
                              </Link>
                            </div>
                            <div>
                              <Link href="#">
                                <div className="cursor-pointer">
                                  <h1>Twitter</h1>
                                </div>
                              </Link>
                            </div>
                            <div>
                              <Link href="#">
                                <div className="cursor-pointer">
                                  <h1>Facebook</h1>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral-200 pb-24 py-6 md:pb-20 px-8">
                        <div className="">
                          <h1 className="text-3xl md:text-5xl">
                            <span className="py-2 select-none">
                              Have An Event?
                            </span>
                          </h1>
                          <Link href="/Contact">
                            <h2 className="py-2 cursor-pointer">
                              <span className="border-b-2 text-2xl text-[#828282] select-none border-[#828282] pr-2 py-2">
                                Tell Us About It
                              </span>
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
