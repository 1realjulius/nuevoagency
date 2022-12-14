import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Carosel = () => {
  const Images = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
    { id: 5, image: "/Assets/Julius_Eghan.jpg" },
  ];

  const HeaderImageTexts = [
    {
      id: 1,
      heroText: "This is for image 1",
      heroSubTitle: "subtitle for hero 1",
    },
    {
      id: 2,
      heroText: "This is for image 2",
      heroSubTitle: "subtitle for hero 2",
    },
    {
      id: 3,
      heroText: "This is for image 3",
      heroSubTitle: "subtitle for hero 3",
    },
    {
      id: 4,
      heroText: "This is for image 4",
      heroSubTitle: "subtitle for hero 4",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [currentHeroText, setHeroTextCurrent] = useState(0);
  const slideLength = Images.length;
  const HeroTextLength = HeaderImageTexts.length;

  if (!Array.isArray(Images) || Images.length <= 0) {
    return null;
  }
  if (!Array.isArray(HeaderImageTexts) || HeaderImageTexts.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
    setHeroTextCurrent(
      currentHeroText === HeroTextLength - 1 ? 0 : currentHeroText + 1
    );
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
    setHeroTextCurrent(
      currentHeroText === 0 ? HeroTextLength - 1 : currentHeroText - 1
    );
  };

  return (
    <div>
      <div className="min-w-screen relative flex min-h-screen">
        {/* This is the image */}
        {Images.map((slide, index) => (
          <div
            className={
              index === current
                ? "slide active h-screen w-screen overflow-hidden transition duration-500"
                : "slide transition duration-100"
            }
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                layout="fill"
                alt=""
                className=" absolute object-cover"
              />
            )}
          </div>
        ))}
        {/* Top Section */}
        <div className="absolute top-6 flex w-full flex-row items-center justify-end px-8">
          {/* The logo */}
          <div className="absolute w-[140px] h-[44px] left-4">
            <Image
              src="/Assets/logowhite.svg"
              layout="fill"
              alt=""
              className=""
            />
          </div>
          {/* Call to action And Menu */}
          <div className="flex flex-row items-center space-x-3">
            {/* Bookings */}
            <div className="rounded-full border-2 border-white px-5 pt-2 flex items-center justify-center pb-3 text-white">
              <h1 className="text-lg leading-none">Bookings</h1>
            </div>
            {/* Nav Menu */}
            <div>
              <div>
                <NavbarComponent />
              </div>
            </div>
          </div>
        </div>
        {/* Down Section */}
        {/* HeroImgaeTests */}
        <div className="absolute bottom-12 flex w-full flex-row items-center justify-center py-20 text-white ">
          {HeaderImageTexts.map((hero, index) => (
            <div
              className={index === currentHeroText ? "slide active " : "slide "}
              key={index}
            >
              {index === currentHeroText && (
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl md:text-7xl font-extrabold">
                    {hero.heroText}
                  </h1>
                  <h2 className="text-xl py-2">{hero.heroSubTitle}</h2>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Down btns */}
        <div className="absolute bottom-6 flex w-full flex-row items-center justify-between px-6 text-white text-base">
          {/* Social Media */}
          <div className="flex flex-row items-center space-x-3">
            <Link href="#">
              <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] hover:bg-gray-200 hover:text-black cursor-pointer transition hover:duration-1000 hover:ease-in-out">
                Tw
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] hover:bg-gray-200 hover:text-black cursor-pointer transition hover:duration-1000 hover:ease-in-out">
                Fb
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] hover:bg-gray-200 hover:text-black cursor-pointer transition hover:duration-1000 hover:ease-in-out">
                Ig
              </div>
            </Link>
          </div>
          {/* The current Image Count */}
          <div className="text-lg hidden md:block">
            <h1>
              0{current + 1} | 0{slideLength}
            </h1>
          </div>
          {/* The btbs */}
          <div className="flex flex-row items-center space-x-6">
            {/* Arrow Left */}
            <div>
              <div
                onClick={prevSlide}
                className="flex items-center justify-center rounded-full p-2 hover:bg-gray-200 hover:text-black cursor-pointer transition hover:duration-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            {/* Arrow Right */}
            <div>
              <div
                onClick={nextSlide}
                className="flex items-center justify-center rounded-full p-2 hover:bg-gray-200 hover:text-black cursor-pointer transition hover:duration-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
