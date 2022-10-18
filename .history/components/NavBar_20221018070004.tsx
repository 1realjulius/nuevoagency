import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [open, setOpen] = useState(false);
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
      setOpen(true);
      setBtnOpen(!open);
    } else {
      //close
      setOpen(false);
      setBtnOpen(!open);
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
    <div className="fixed top-0 overflow-hidden w-full z-40">
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
  );
};

export default NavBar;
