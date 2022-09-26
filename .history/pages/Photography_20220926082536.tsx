import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

const Photography = () => {
  const pFeatureImg = [
    { id: 1, igLink: "#", imgType: "Potrait", img: "/Assets/bright-rain.png" },
    { id: 2, igLink: "#", imgType: "Wedding", img: "/Assets/floss.png" },
    { id: 3, igLink: "#", imgType: "Festival", img: "/Assets/landscape.jpg" },
    { id: 4, igLink: "#", imgType: "Landscape", img: "/Assets/moonrise.png" },
    { id: 5, igLink: "#", imgType: "Wedding", img: "/Assets/floss.png" },
    { id: 6, igLink: "#", imgType: "Festival", img: "/Assets/landscape.jpg" },
  ];

  return (
    <div className="bg-black min-h-screen min-w-screen text-white flex flex-col">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div className="px-6 md:px-16 pt-16">
        {/* heaader */}
        <div className="flex flex-col  w-full h-[76vh] md:h-[60vh] p-2">
          <h1 className="flex flex-row items-center space-x-2">
            <span className="text-black p-1 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-xl font-bold">Photography</span>
          </h1>
          <h1 className="text-4xl md:text-6xl md:pr-20 font-bold pt-4">
            <span>We Make Perfect Memories Out Of </span>
            <span className="text-[#828282]">Your Experiences With Photos</span>
          </h1>
          <div className="py-4 flex flex-col items-start">
            <div>
              <Link href="#">
                <div className="px-4 py-2 bg-white text-black rounded-full">
                  <h1 className="text-lg font-bold">Contact US</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-2">
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-start">
                  <span>8.5</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-bold text-[#828282]">
                  <span>YEARS OF</span>
                  <br />
                  <span className="text-white">EXPERIENCE</span>
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-center">
                  <span>140</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-bold text-[#828282]">
                  <span>PROJECCTS</span>
                  <br />
                  <span className="text-white">COMPLETED</span>
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-center">
                  <span>1.2K</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-bold text-[#828282]">
                  <span>TRUSTED</span>
                  <br />
                  <span className="text-white">COMPANIES</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div>
          <div>
            <div className="">
              <motion.img
                // layoutId="img"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                src="/Assets/bright-rain.png"
                alt=""
                className="object-cover h-[200px] md:h-[400px] w-[100vw] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default Photography;
