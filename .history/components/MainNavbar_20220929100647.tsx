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
              ? "py-1 pt-4  flex w-full flex-row items-center justify-between px-4 md:px-6 bg-[#828282] shadow-2xl"
              : "py-1 pt-4 flex w-full flex-row items-center justify-between px-4 md:px-6"
          }`}
        >
          {/* logo */}
          <div className="py-4">
            <Link href="/">
              <div className="md:hidden relative w-[44px] h-[44px] cursor-pointer">
                <Image
                  src="/Assets/NuevoLogosm.png"
                  layout="fill"
                  alt=""
                  className=""
                />
              </div>
            </Link>
            <Link href="/">
              <div className="hidden md:block relative w-[160px] h-[70px] cursor-pointer">
                <Image
                  src="/Assets/white.png"
                  layout="fill"
                  alt=""
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
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
