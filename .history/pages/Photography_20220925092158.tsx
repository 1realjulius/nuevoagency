import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

const Photography = () => {
  const AgencyCategories = [
    {
      id: 1,
      catSection: "Photography",
      catImage: "/Assets/bright-rain.png",
      catHeroText:
        "We Make Perfect Meories Out Of Your Experiences With Photos",
      catLink: "/Photography",
      catIcon: (
        <span className="text-black">
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
      ),
    },
    {
      id: 2,
      catSection: "Videography",
      catImage: "/Assets/floss.png",
      catHeroText:
        "We Make Perfect Meories Out Of Your Experiences With Videos",
      catLink: "/Videography",
      catIcon: (
        <span className="text-black">
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
      ),
    },
    {
      id: 3,
      catSection: "Events",
      catImage: "/Assets/moonrise.png",
      catHeroText: "We Organize Events That Have Grater Impact On The Society",
      catLink: "/Events",
      catIcon: (
        <span className="text-black">
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </span>
      ),
    },
    {
      id: 4,
      catSection: "Mentoring",
      catImage: "/Assets/landscape.jpg",
      catHeroText: "Make Memories Out Of Your Experiences",
      catLink: "/Mentoring",
      catIcon: (
        <span className="text-black">
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
      ),
    },
  ];

  const p1Img = [
    { id: 1, img1: "/Assets/bright-rain.png", img2: "/Assets/moonrise.png" },
  ];
  const p2Img = [
    { id: 1, img1: "/Assets/moonrise.png", img2: "/Assets/landscape.jpg" },
  ];
  const p3Img = [
    { id: 1, img1: "/Assets/landscape.jpg", img2: "/Assets/floss.png" },
  ];
  const p4Img = [
    { id: 1, img1: "/Assets/floss.png", img2: "/Assets/bright-rain.png" },
  ];

  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentFeatureImage, setCurrentFeatureImage] = useState(p1Img);
  const [ActiveBtn, setActiveBtn] = useState(1);

  const CategorySlideLength = AgencyCategories.length;
  if (!Array.isArray(AgencyCategories) || AgencyCategories.length <= 0) {
    return null;
  }

  const setP1Img = () => {
    setCurrentFeatureImage(p1Img);
    setActiveBtn(1);
  };
  const setP2Img = () => {
    setCurrentFeatureImage(p2Img);
    setActiveBtn(2);
  };
  const setP3Img = () => {
    setCurrentFeatureImage(p3Img);
    setActiveBtn(3);
  };
  const setP4Img = () => {
    setCurrentFeatureImage(p4Img);
    setActiveBtn(4);
  };

  console.log(`the active btn is,${ActiveBtn}`);

  const nextPSlide = () => {
    setCurrentCategory(
      currentCategory === CategorySlideLength - 1 ? 0 : currentCategory + 1
    );
  };
  const prevPSlide = () => {
    setCurrentCategory(
      currentCategory === 0 ? CategorySlideLength - 1 : currentCategory - 1
    );
  };

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
            <h1 className="text-4xl md:text-7xl font-bold">
              <span>EXPLORE OUR RECENT</span>
              <span className="text-yellow-600">WORK</span>
            </h1>
          </div>
          <div></div>
        </div>
        {/* WHAT YOU GET IE SERVICES */}
        <div></div>
      </div>
    </div>
  );
};

export default Photography;
