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
                ${openBtn ? "rotate-45 translate-y-2.5 bg-[#000000]" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out  mix-blend-difference
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white  rounded-lg cursor-pointer transform transition duration-300 ease-in-out mix-blend-difference
                ${openBtn ? "-rotate-45 -translate-y-3 bg-[#000000]" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div className="">
          <AnimatePresence mode="sync">
            {open && (
              <div className="fixed top-0 right-0 w-full md:w-[50vw] min-h-screen bg-white z-30 text-black overflow-hidden">
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
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>About</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Photography">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Photography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Videography">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Videography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Events">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Events</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="#">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300 relative">
                              <span className="absolute top-0 -right-14 text-xs text-[#828282]">
                                Coming Soon
                              </span>
                              <h1>Mentoring</h1>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  w-full pb-10">
                      <div className="py-2 px-8 ">
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
                      {/* email Subscribe */}
                      <div className="flex flex-row items-center mb-10 px-4">
                        {/* icon for Subscribe */}
                        <div className="hidden md:flex">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-24 h-24 md:w-44 md:h-44"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                          </span>
                        </div>
                        {/* Sunscribe Form */}
                        <div className="p-2 w-full md:w-[50%] items-start">
                          <div className="py-2">
                            <h1 className="text-2xl">
                              Get Our Pckages and Prices
                            </h1>
                          </div>
                          <div className="flex flex-col md:flex-row ">
                            {/* user Email */}
                            <div className="flex flex-row items-center text-base w-full md:w-[70vw] rounded-lg">
                              <input
                                type="email"
                                name="SenderEmail"
                                // onChange={(event: any) => {
                                //   setSubscriberEmail(event.target.value);
                                // }}
                                className="h-12 w-full p-2 py-3 outline-none bg-[#E5E7EB] placeholder:text-black md:rounded-l-lg md:rounded-r-none rounded-lg"
                                placeholder="Your Email"
                              />
                            </div>
                            <div className="py-0 flex flex-col ">
                              <button
                                type="submit"
                                className="h-12 px-5 w-full md:w-fit bg-black text-white md:rounded-r-lg md:rounded-l-none rounded-lg text-lg"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="px-2 text-sm text-[#828282] py-2">
                            <h1>
                              <span>By Booking You Have Agreed To Our </span>
                              <br />
                              <span className="text-black">
                                Terms & Agreements{" "}
                              </span>
                              <span>and </span>
                              <span className="text-black">Privacy Policy</span>
                            </h1>
                          </div>
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
