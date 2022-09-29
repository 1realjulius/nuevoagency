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
              ? "py-2 pt-4  flex w-full flex-row items-center justify-between px-4 bg-[#828282]/95 "
              : "py-2 pt-4 flex w-full flex-row items-center justify-between px-4"
          }`}
        >
          {/* logo */}
          <div className="">
            <Link href="/">
              <div className="md:hidden relative w-[40px] h-[40px] cursor-pointer">
                <Image
                  src="/Assets/NuevoLogosm.png"
                  layout="fill"
                  alt=""
                  className=""
                />
              </div>
            </Link>
            <Link href="/">
              <div className="hidden md:block relative w-[140px] h-[30px] cursor-pointer">
                <Image
                  src="/Assets/simplewhitebg.png"
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
