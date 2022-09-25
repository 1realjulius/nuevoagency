import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Instagram } from "react-feather";

const MainFooter = () => {
  return (
    <div className="">
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
      <div className="flex flex-row items-center justify-center p-4 space-x-4">
        <Link href="#">
          <div className="relative group flex flex-col items-center justify-center w-[300px] h-[300px] cursor-pointer">
            <Image
              src="/Assets/floss.png"
              layout="fill"
              alt=""
              className="absolute object-cover"
            />
            <div className="hidden group-hover:block absolute ">
              <div className="flex items-center justify-center text-center flex-col space-y-2">
                <p className="text-base">View on</p>
                <h1 className="text-4xl font-bold leading-none pb-4">
                  Instagram
                </h1>
                <Instagram className="w-10 h-10" />
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="relative group flex flex-col items-center justify-center w-[400px] h-[300px] cursor-pointer">
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className="absolute object-cover"
            />
            <div className="hidden group-hover:block absolute ">
              <div className="flex items-center justify-center text-center flex-col space-y-2">
                <p className="text-base">View on</p>
                <h1 className="text-4xl font-bold leading-none pb-4">
                  Instagram
                </h1>
                <Instagram className="w-10 h-10" />
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="relative group flex flex-col items-center justify-center w-[200px] h-[300px] cursor-pointer">
            <Image
              src="/Assets/landscape.jpg"
              layout="fill"
              alt=""
              className="absolute object-cover"
            />
            <div className="hidden group-hover:block absolute ">
              <div className="flex items-center justify-center text-center flex-col space-y-2">
                <p className="text-base">View on</p>
                <h1 className="text-4xl font-bold leading-none pb-4">
                  Instagram
                </h1>
                <Instagram className="w-10 h-10" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* footer itself */}
      <div>
        <div className="flex fle-row w-full p-8">
          <div className="flex-1 flex-col items-center justify-center">
            <div>
              <Link href="#">
                <div className="relative flex flex-col items-center justify-center w-[140px] h-[44px] cursor-pointer">
                  <Image
                    src="/Assets/logowhite.svg"
                    layout="fill"
                    alt=""
                    className="absolute object-contain"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="#">
                <div className="py-1">
                  <h1 className="text-2xl text-white">email@email.com</h1>
                </div>
              </Link>
              <Link href="#">
                <div className="py-1">
                  <h1 className="text-2xl text-white">234567890</h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="px-5 py-2 rounded-md bg-white text-black">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="flex-1"> hell0</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
