import React, { useEffect } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

const NavbarComponent = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [open, setOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setOpen(!open);
  }

  function openModal() {
    setIsOpen(true);
    setOpen(!open);
  }

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

  return (
    <div className=" flex flex-col items-center justify-center font-FredokaOneRegular">
      <div className="bg-blue-200 min-h-screen min-w-screen">
        <div>haaddsnf</div>
      </div>
      <div className="w-11/12 flex justify-end items-center">
        <div
          className="group w-8 h-6 cursor-pointer flex flex-col justify-between items-center"
          onClick={openModal}
        >
          {/* the btn */}
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
