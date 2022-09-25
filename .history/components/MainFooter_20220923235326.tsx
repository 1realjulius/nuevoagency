import Image from "next/image";
import React from "react";

const MainFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden z-10">
      {/* call to action section */}
      <div>
        <div className="flex relative flex-row items-center justify-center min-h-[200px] py-20">
          <div>
            <h1 className="text-9xl md:text-[180px] font-bold text-gray-400/10">
              START
            </h1>
          </div>
          <div className="absolute items-center justify-center flex flex-col">
            <p className="text-base text-gray-400">
              GET YOUR BEAUTIFUL PICTUES AND AWSOME VIDEOS
            </p>
            <h1 className="text-3xl md:text-5xl font-medium pb-4 pt-2 text-center">
              Are You Ready to take your <br /> awsome shots with us?
            </h1>
            <div className="px-4 py-2 bg-white rounded-full text-black">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Instagram section */}
      <div>
        <div className="relative w-[200px] h-[200px]">
          <div>
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className=" absolute object-cover"
            />
          </div>
        </div>
      </div>
      {/* footer itself */}
      <div></div>
    </div>
  );
};

export default MainFooter;
