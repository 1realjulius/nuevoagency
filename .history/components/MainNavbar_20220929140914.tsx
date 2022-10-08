import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import NavComponent from "./NavComponent";

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
              ? "py-1 pt-2  flex w-full flex-row items-center justify-between px-4 md:px-6 bg-[#242424] shadow-2xl"
              : "py-1 pt-2 flex w-full flex-row items-center justify-between px-4 md:px-6 bg-inherit"
          }`}
        >
          {/* logo */}
          <div className="">
            <Link href="/">
              <div className="hidden relative w-[44px] h-[44px] cursor-pointer">
                <Image
                  src="/Assets/NuevoLogosm.png"
                  layout="fill"
                  alt=""
                  className=""
                />
              </div>
            </Link>
            {navColour ? (
              <Link href="/">
                <div className="relative w-[102px] h-[40px] cursor-pointer">
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
                <div className="relative w-[102px] h-[40px] cursor-pointer">
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
          {/* Call to action And Menu */}
          <div className="flex flex-row items-center space-x-9">
            {/* Nav Menu */}
            <div>
              <div>
                {/* <NavbarComponent /> */}
                <NavComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
