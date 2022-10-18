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
    <div className="overflow-hidden w-full z-40 flex">
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
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "rotate-45 translate-y-2.5" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white  rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "-rotate-45 -translate-y-3" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div>
          {open && (
            <div className="fixed top-0 w-full min-h-screen bg-black z-30 text-white">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="relative top-14 w-full bg-blue-300 flex flex-col items-center justify-center h-screen"
              >
                <div>haa</div>
                <div className="absolute bottom-2 bg-black">haaaaaa</div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
