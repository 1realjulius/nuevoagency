import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";

const MainNavbar = () => {
  const [navColour, setNavColour] = useState(false);

  const changeNavColour = () => {
    if (window.scrollY >= 90) {
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
    <div
      className={`${
        navColour ? "sticky top-0 z-50 bg-[#161719]" : "sticky top-0 z-50"
      }`}
    >
      <div
        className={`absolute top-0 py-2 flex w-full flex-row items-center justify-end px-8 `}
      >
        {/* The logo */}
        <div className="absolute w-[140px] h-[44px] left-4">
          <Image
            src="/Assets/logowhite.svg"
            layout="fill"
            alt=""
            className=""
          />
        </div>
        {/* Call to action And Menu */}
        <div className="flex flex-row items-center space-x-9">
          {/* Bookings */}
          <div className="rounded-full border-2 border-white px-5 pt-2 flex items-center justify-center pb-3 text-white">
            <h1 className="text-lg leading-none">Bookings</h1>
          </div>
          {/* Nav Menu */}
          <div>
            <div>
              <NavbarComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
