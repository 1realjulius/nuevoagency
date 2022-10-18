import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
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
        <div
          className={`fixed top-3 right-3 
            ${open ? "bg-green-300 p-2" : "bg-red-300 p-2"}
          `}
        >
          <div className="w-6 flex justify-end items-center">
            <div
              className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
              onClick={handleHanburgerManu}
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
    </div>
  );
};

export default NavBar;
