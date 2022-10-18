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
    if (window.scrollY >= 10) {
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
            ${menuColour ? "bg-white rounded-full" : ""}
          `}
        >
          <div className="w-8 flex justify-end items-center">
            <div
              className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "rotate-45 translate-y-2.5 bg-black" : ""}
                ${menuColour ? "bg-black" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "w-0" : "w-full"}
                ${menuColour ? "bg-black" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out 
                ${openBtn ? "-rotate-45 -translate-y-1 bg-black" : ""}
                ${menuColour ? "bg-black" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div>
          {open && (
            <div className="fixed top-0 w-full min-h-screen bg-white z-30 text-black">
              <div className="relative top-14 w-full bg-blue-300 flex flex-col items-center justify-center h-screen">
                <div>haa</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
