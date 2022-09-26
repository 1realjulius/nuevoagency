import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

const MainFooter = () => {
  return (
    <div className="relative">
      {/* call to action section */}
      <div className="p-4 pb-10 flex flex-col items-center justify-center md:py-20">
        <div className="bg-[#242424] w-[90vw] md:w-[60vw] relative flex flex-col p-4 rounded-xl font-bold">
          <div className="absolute -top-4 -right-2 flex flex-row">
            <Link href="/Contact">
              <span className="p-2 bg-white rounded-full shadow-xl text-black cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="">
            <h1 className="text-[#828282]">Are You Ready To</h1>
            <h1 className="text-4xl md:text-7xl py-4">
              <span>Capture Your Best </span>
              <span className="text-[#828282]">Experiences </span>
              <span>And Make Them </span>
              <span className="text-[#828282]">Memories</span>
            </h1>
          </div>
          <div className="pt-4 md:absolute md:right-4 md:bottom-4 md:flex md:flex-col md:items-end md:pt-10">
            <Link href="/Contact">
              <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                <h1 className="text-xl font-bold">Contact Us</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* footer itseelf */}
      <div className="px-6 py-4 pt-8 md:pt-20 flex flex-col bg-[#242424]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-2">
            {/* logo */}
            <div className="py-4">
              <Link href="/">
                <div className="md:hidden relative w-[44px] h-[44px] cursor-pointer">
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
            </div>
            {/* socials */}
            <div className="flex flex-row items-center space-x-4">
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Facebook className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Instagram className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Twitter className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* navlinks */}
          <div className="flex flex-col font-bold">
            <div className="flex flex-row space-x-4 py-2">
              <div className="cursor-pointer">
                <Link href="/About">
                  <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                    About
                  </h1>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/Contact">
                  <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                    Contact
                  </h1>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/Services">
                  <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                    Services
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-row space-x-4 py-2">
                <div className="cursor-pointer">
                  <Link href="/Photography">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Photography
                    </h1>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Videography">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Videography
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-center  space-x-4 py-2">
                <div className="cursor-pointer">
                  <Link href="/Events">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Events
                    </h1>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Mentoring">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Mentoring
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:justify-between pt-4 text-gray-600">
          <p>© 2022 Nuevo Agency.</p>
          <p>Terms & Conditions. Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
