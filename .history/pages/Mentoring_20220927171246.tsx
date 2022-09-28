import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import { motion } from "framer-motion";
import { Instagram } from "react-feather";

const Mentoring = () => {
  const pFeatureImg = [
    {
      id: 1,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Elmina Fest",
      img: "/Assets/bright-rain.png",
    },
    {
      id: 2,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Accra Fest",
      img: "/Assets/floss.png",
    },
    {
      id: 3,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Fetu Fest",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 4,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Volta fest",
      img: "/Assets/moonrise.png",
    },
  ];

  return (
    <div className="bg-[#161719] min-h-screen min-w-screen text-white flex flex-col font-FredokaOneRegular">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div className="px-6 md:px-16 pt-16">
        {/* heaader */}
        <div className="flex flex-col  w-full h-[72vh] md:h-[80vh] p-2">
          <h1 className="flex flex-row items-center space-x-2">
            <span className="text-black p-1 bg-white rounded-full">
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </span>
            <span className="text-xl font-FredokaOneRegular">Mentoring</span>
          </h1>
          <h1 className="text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular pt-6 pb-4">
            <span>We Make Perfect Memories For Experiences </span>
            <span className="text-[#828282]">With Exceptional Photos</span>
          </h1>
          <div className="py-4 pt-6 md:pt-6 flex flex-row space-x-4 items-start">
            <div>
              <Link href="/Contact">
                <div className="px-4 py-2 bg-white hover:bg-[#828282] hover:text-white text-black rounded-full cursor-pointer">
                  <h1 className="text-lg font-FredokaOneRegular">Contact US</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link href="#">
                <div className="px-4 py-2 bg-white hover:bg-[#828282] hover:text-white text-black rounded-full cursor-pointer">
                  <h1 className="text-lg font-FredokaOneRegular flex flex-row items-center space-x-2">
                    <span>
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
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>
                    </span>
                    <span>Join Us</span>
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start pb-2">
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>8.5</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282]">
                  <span>YEARS OF</span>
                  <br />
                  <span className="text-white">EXPERIENCE</span>
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>140</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282] px-4">
                  <span>PROJECCTS</span>
                  <br />
                  <span className="text-white">COMPLETED</span>
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>1.2K</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282] px-4">
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
          {/* mainimg */}
          <div>
            <div className="">
              <motion.img
                layoutId="img"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                src="/Assets/landscape.jpg"
                alt=""
                className="object-cover h-[200px] md:h-[400px] w-[100vw] rounded-xl"
              />
            </div>
          </div>
          {/* explore or recent work */}
          <div className="flex flex-col pt-8 py-4 md:pt-20">
            <div className="flex flex-row items-center md:py-6">
              <div>
                <h1 className="font-FredokaOneRegular">
                  <span className="text-4xl md:text-7xl  leading-none">
                    EXPLORE
                  </span>
                  <br />
                  <span className="text-[#828282] text-xl md:text-4xl ">
                    OUR RECENT WORK
                  </span>
                </h1>
              </div>
            </div>
            <div className="grid md:grid-cols-3 py-4 md:gap-6">
              {pFeatureImg.map((pfeature) => {
                return (
                  <div key={pfeature.id} className={` flex flex-col`}>
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
                      <div className="flex flex-col md:flex-row md:space-x-2 font-FredokaOneRegular">
                        <h1 className="text-lg">{pfeature.imgEvent}</h1>
                        <h1 className="text-lg text-[#828282]">
                          {pfeature.imgType}
                        </h1>
                      </div>
                      <Link href={pfeature.igLink}>
                        <div className="cursor-pointer bg-white rounded-full text-black p-2">
                          <span className="">
                            <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* WHAT YOU GET IE SERVICES */}
          <div>
            <div className="flex flex-col pb-4 md:flex-row md:py-10">
              <div className="flex-1 py-2 md:pr-20 order-2 md:order-1">
                <div className="relative">
                  <motion.img
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/floss.png"
                    alt=""
                    className="object-cover h-[300px] md:h-[400px] w-[100vw] rounded-xl"
                  />
                  <motion.img
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/moonrise.png"
                    alt=""
                    className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 object-cover h-[150px] md:h-[250px] w-[200px] md:w-[400px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 py-2 order-1 md:order-2">
                <div className="">
                  <h1 className="text-[#828282] text-lg md:text-xl">
                    What you get when you
                  </h1>
                  <h1 className="text-4xl md:text-7xl py-2">
                    <span>Shoot With </span>
                    <span className="text-[#828282]">Us</span>
                  </h1>
                  <div className="flex flex-col space-y-3 py-2">
                    <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
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
                      <span className="">15</span>
                      <span className="text-[#828282]">Soft coppies.</span>
                    </h2>
                    <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
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
                      <span className="">5</span>
                      <span className="text-[#828282]">Image Retouches.</span>
                    </h2>
                    <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
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
                      <span className="">Awsome</span>
                      <span className="text-[#828282]">Experience.</span>
                    </h2>
                  </div>
                  <p className="text-[#828282] text-lg md:text-xl">
                    These and many more you have to see, check out our{" "}
                    <span className="text-white">services</span>
                  </p>
                </div>
                <div className="py-2 flex flex-col items-start">
                  <Link href="/Contact">
                    <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                      <h1 className="text-xl font-FredokaOneRegular">
                        Contact Us
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* contact us */}
          <div>
            <div className="flex flex-col md:flex-row md:py-10">
              <div className="flex-1 py-2">
                <div className="">
                  <h1 className="text-[#828282] text-lg md:text-xl">
                    Are You Ready To
                  </h1>
                  <h1 className="text-4xl md:text-7xl py-2">
                    <span>Capture Your Best </span>
                    <span className="text-[#828282]">Experiences </span>
                    <span>And Make Them Awsome </span>
                    <span className="text-[#828282]">Memories</span>
                  </h1>
                </div>
                <div className="py-2 flex flex-col items-start">
                  <Link href="/Contact">
                    <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                      <h1 className="text-xl font-FredokaOneRegular">
                        Contact Us
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex-1 py-2 md:pl-20 ">
                <div className="relative">
                  <motion.img
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/landscape.jpg"
                    alt=""
                    className="object-cover h-[300px] md:h-[400px] w-[100vw] rounded-xl"
                  />
                  <div className="absolute -top-2 -right-2">
                    <Link href="#">
                      <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                        <Instagram className=" w-6 h-6 md:w-8 md:h-8" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="">
        <MainFooter />
      </div>
    </div>
  );
};

export default Mentoring;
