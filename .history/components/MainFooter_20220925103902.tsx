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
            <h1 className="text-9xl md:text-[220px] leading-none font-bold text-gray-400/10">
              START
            </h1>
          </div>
          <div className="absolute items-center justify-center flex flex-col">
            <p className="text-base text-gray-400">Are you ready to</p>
            <h1 className="text-3xl md:text-7xl font-bold pb-4 pt-2 text-center">
              CAPTURE YOUR BEST{" "}
              <span className="text-yellow-600">EXPERIENCES</span>{" "}
              <br className="hidden md:block" /> AND MAKE THEM{" "}
              <span className="text-yellow-600">MEMORIES</span>
            </h1>
            <div className="px-4 py-2 bg-white rounded-full text-black cursor-pointer">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      {/* footer itseelf */}
      <div>
        <div className="grid md:grid-cols-3">
          <div>madooo</div>
          <div className="col-span-2">payyy</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
