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
          <div className="grid md:grid-cols-2 py-4 md:px-20">
            {pFeatureImg.map((pfeature) => {
              return (
                <div key={pfeature.id} className="flex flex-col p-2">
                  <div className="">
                    <motion.img
                      // layoutId="img"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      src={pfeature.img}
                      alt=""
                      className="object-cover h-[200px] md:h-[400px] w-[100vw] rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between py-2 px-2">
                    <div>
                      <h1 className="text-lg">{pfeature.imgType}</h1>
                    </div>
                    <Link href={pfeature.igLink}>
                      <div className="cursor-pointer bg-white rounded-full text-black p-2">
                        <span className="">
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
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Link href="#">
              <div className="bg-white text-black flex flex-row items-center space-x-2 cursor-pointer px-5 py-2 rounded-full">
                <h1 className="text-lg">View More on Instagram</h1>
                <span>
                  <Instagram className=" w-8 h-8" />
                </span>
              </div>
            </Link>
          </div>
        </div>
        {/* WHAT YOU GET IE SERVICES */}
        <div className="p-2 py-10 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex-row items-center justify-center md:pl-10">
            <h1 className="text-4xl md:text-7xl font-bold space-x-2 text-center">
              <span>WHAT YOU GET WHEN YOU SHOOT WITH</span>
              <span className="text-yellow-600">US</span>
            </h1>
          </div>
          <div className="flex-1 flex-col space-y-4 items-center justify-center md:pl-10">
            <div className="flex flex-row items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </svg>
              </span>
              <h1 className="flex flex-row items-center space-x-2 text-2xl md:text-4xl font-semibold">
                <span className="text-yellow-600">15</span>
                <span>Soft coppies</span>{" "}
              </h1>
            </div>
            <div className="flex flex-row items-center space-x-2 text-center md:text-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>
              <h1 className="flex flex-row items-center space-x-2 text-2xl md:text-4xl font-semibold">
                <span className="text-yellow-600">5</span>
                <span>Image Retouches</span>{" "}
              </h1>
            </div>
            <div className="flex flex-row items-center space-x-2 text-center md:text-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 md:w-12 md:h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </span>
              <h1 className="flex flex-row items-center space-x-2 text-2xl md:text-4xl font-semibold">
                <span className="text-yellow-600">Awsome</span>
                <span>Customer Experience</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
