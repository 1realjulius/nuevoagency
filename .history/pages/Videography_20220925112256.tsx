import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import { motion } from "framer-motion";
import { Instagram } from "react-feather";

const Videography = () => {
  const pFeatureImg = [
    {
      id: 1,
      igLink: "#",
      imgType: "trailer for wedding",
      img: "/Assets/bright-rain.png",
    },
    {
      id: 2,
      igLink: "#",
      imgType: "trailer for festival",
      img: "/Assets/floss.png",
    },
  ];

  return (
    <div className="bg-black min-h-screen min-w-screen text-white flex flex-col">
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
          src="/Assets/floss.png"
          // layout="fill"
          alt=""
          className="object-cover h-[60vh] md:h-[80vh] w-[100vw]"
        />
        <div className="absolute top-0 flex h-[60vh] md:h-[80vh] w-f[80vw] items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center md:px-40 text-center">
            <h1 className="absolute top-14 text-xl font-bold py-4 flex flex-row items-center space-x-4">
              <motion.span>Videoography</motion.span>
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
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
            <h1 className="text-4xl md:text-7xl font-bold space-x-2 text-center">
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
                <h1 className="text-lg font-semibold">
                  View More on Instagram
                </h1>
                <span>
                  <Instagram className=" w-8 h-8" />
                </span>
              </div>
            </Link>
          </div>
        </div>
        {/* WHAT YOU GET IE SERVICES */}
        <div className="px-4 py-10 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex-row items-center justify-center md:pl-10">
            <h1 className="text-4xl md:text-7xl font-bold space-x-2 pb-6 text-center">
              <span>WHAT YOU GET WHEN YOU SHOOT WITH</span>
              <span className="text-yellow-600">US</span>
            </h1>
          </div>
          <div className="flex-1 flex-col space-y-4 items-center justify-center md:pl-10 text-center md:text-start">
            <div className="flex flex-row items-center space-x-2 text-start">
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
            <div className="flex flex-row items-center space-x-2 text-start">
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
            <div className="flex flex-row items-center space-x-2 text-start">
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
                <span>Experience</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <MainFooter />
      </div>
    </div>
  );
};

export default Videography;
