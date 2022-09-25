import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Instagram } from "react-feather";

const MainFooter = () => {
  return (
    <div className="">
      {/* call to action section */}
      <div className="px-4">
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
            <div className="px-4 py-2 bg-white rounded-full text-black cursor-pointer">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      {/* footer itseelf */}
    </div>
  );
};

export default MainFooter;
