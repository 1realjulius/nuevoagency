import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";

const MainNavbar = () => {
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

  return (
    <nav className="absolute w-full">
      <div className="">
        <div
          className={`${
            navColour
              ? "py-2 pt-4  flex w-full flex-row items-center justify-between px-6 bg-black/70 "
              : "py-2 pt-4 flex w-full flex-row items-center justify-between px-6"
          }`}
        >
          {/* The logo */}
          <Link href="/">
            <div className="md:hidden relative w-[24px] h-[24px] cursor-pointer">
              <Image
                src="/Assets/nLogowhite.png"
                layout="fill"
                alt=""
                className=""
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hidden md:block relative w-[120px] h-[24px] cursor-pointer">
              <Image
                src="/Assets/logowhite.svg"
                layout="fill"
                alt=""
                className=""
              />
            </div>
          </Link>
          {/* Call to action And Menu */}
          <div className="flex flex-row items-center space-x-9">
            {/* Nav Menu */}
            <div>
              <div>
                <NavbarComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
