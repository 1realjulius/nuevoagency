import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
    <div className="bg-black min-h-screen min-w-screen text-white pb-20 flex flex-col">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* header */}
      <div className="relative">
        <motion.img
          layoutId="img"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          src="/Assets/bright-rain.png"
          // layout="fill"
          alt=""
          className="object-cover h-[60vh] md:h-[80vh] w-[100vw]"
        />
        <div className="absolute top-0 flex h-[60vh] md:h-[80vh] w-f[80vw] items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center md:px-40 text-center">
            <h1 className="absolute top-14 text-xl font-bold py-4 flex flex-row items-center space-x-4">
              <motion.span>Photography</motion.span>
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold">
              We Make Perfect Meories Out Of Your Experiences With Photos
            </h1>
          </div>
          <div className="absolute bottom-6 flex flex-row items-center space-x-4">
            <div className=" px-5 py-2 rounded-full bg-white text-black cursor-pointer">
              <h1 className="text-xl font-medium">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="">
        {/* EXPERIENCES */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-center">
                <span>8.5</span>
                <span className="text-yellow-400">+</span>
              </h1>
              <h2 className="text-sm text-gray-400">YEARS OF EXPERIENCE</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-center">
                <span>140</span>
                <span className="text-yellow-400">+</span>
              </h1>
              <h2 className="text-sm text-gray-400">PROJECCTS COMPLETED</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="text-4xl md:text-7xl font-bold flex flex-row items-center justify-center">
                <span>1.2K</span>
                <span className="text-yellow-400">+</span>
              </h1>
              <h2 className="text-sm text-gray-400">TRUSTED COMPANIES</h2>
            </div>
          </div>
        </div>
        {/* RECENT WORK WITH IG LINKS */}
        <div className="flex flex-col items-center justify-center p-4">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold space-x-2">
              <span>EXPLORE OUR RECENT</span>
              <span className="text-yellow-600">WORK</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 py-4">
            {pFeatureImg.map((pfeature) => {
              return (
                <div className="flex flex-col p-2">
                  <div className="">
                    <motion.img
                      // layoutId="img"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      src={pfeature.img}
                      alt=""
                      className="object-cover h-[200px] md:h-[400px] w-[100vw]"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between py-2 px-2">
                    <div>{pfeature.imgType}</div>
                    <div className="cursor-pointer">
                      <Link href={pfeature.igLink}>
                        <span className="bg-white rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* WHAT YOU GET IE SERVICES */}
        <div></div>
      </div>
    </div>
  );
};

export default Photography;
