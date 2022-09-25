import Image from "next/image";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const Photography = () => {
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div className="relative min-h-screen min-w-screen">
        <div>
          <Image
            src="/Assets/moonrise.png"
            layout="fill"
            alt=""
            className=" absolute object-cover"
          />
        </div>
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-6xl md:text-8xl font-bold">ABOUT ME</h1>
            <div className="flex flex-row items-center justify-center space-x-4 py-4">
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                Home
              </div>
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                About
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 px-5 py-2 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
            <h1>Scroll Down</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-6 pt-20">
        {/* hero sec */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:py-20">
            <h1>Photography</h1>
            <h1 className="text-7xl text-center md:px-80">
              We Make Perfect Meories Out Of Your Experiences With Photos
            </h1>
          </div>
          <div>slider</div>
        </div>
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Photography;
