import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

  const [currentCategory, setCurrentCategory] = useState(0);

  const CategorySlideLength = AgencyCategories.length;
  if (!Array.isArray(AgencyCategories) || AgencyCategories.length <= 0) {
    return null;
  }

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
    <div className="bg-[#161719] min-h-screen min-w-full text-white overflow-hidden">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* header */}
      <div className="relative min-h-screen min-w-screen">
        <div>
          <Image
            src="/Assets/moonrise.png"
            layout="fill"
            alt=""
            className=" absolute object-cover"
          />
        </div>
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center md:px-40 text-center">
            <h1 className="text-xl font-bold py-4 flex flex-row items-center space-x-4">
              <span>Photography</span>
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
            <h1 className="md:text-7xl font-bold">
              We Make Perfect Meories Out Of Your Experiences With Photos
            </h1>
          </div>
          <div className="absolute bottom-6 flex flex-row items-center space-x-4">
            <div className=" px-5 py-2 rounded-full bg-white text-black cursor-pointer">
              <h1 className="text-xl font-medium">Contact Us</h1>
            </div>
            <div className=" px-5 py-2 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
              <h1 className="text-xl font-medium">Scroll Down</h1>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div>
        {/* we have worked with section */}
        <div></div>
        {/* slider section */}
        <div className="">
          {AgencyCategories.map((Catslide, index) => (
            <div
              className={`
            ${
              index === currentCategory &&
              "overflow-hidden relative w-screen h-screen"
            }
              `}
              key={index}
            >
              {index === currentCategory && (
                <div className="relative flex flex-row py-20 md:px-20 items-center">
                  <div className="relative w-full h-[600px] flex flex-col items-center justify-center">
                    <Image
                      src={Catslide.catImage}
                      layout="fill"
                      alt=""
                      className=" absolute object-cover rounded-xl"
                    />
                    <div className="absolute bottom-20">
                      <h1 className="text-4xl font-bold">
                        {Catslide.catSection}
                      </h1>
                    </div>
                    <div className="absolute bottom-10">
                      <h1 className="text-2xl font-medium">
                        0{currentCategory + 1} | 0{CategorySlideLength}
                      </h1>
                    </div>
                    <div
                      onClick={prevPSlide}
                      className=" absolute left-4 p-1 hover:bg-white text-white hover:text-black rounded-full cursor-pointer"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      onClick={nextPSlide}
                      className="absolute right-4 p-1 hover:bg-white text-white hover:text-black rounded-full cursor-pointer"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* feature section  */}
        <div>
          <div className="flex flex-row py-10 pb-20">
            <div className="flex-1 px-10 justify-end items-center">
              <div className="relative w-[400px] h-[600px] right-0 flex flex-col justify-end">
                <div>
                  <Image
                    src="/Assets/moonrise.png"
                    layout="fill"
                    alt=""
                    className=" absolute object-cover rounded-xl"
                  />
                </div>
                <div className="relative -right-80 -bottom-10 w-[400px] h-[400px]">
                  <Image
                    src="/Assets/moonrise.png"
                    layout="fill"
                    alt=""
                    className=" absolute object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 p-10">
              <div>
                <h1 className="text-6xl">
                  We Take All Kind Of Shoots For Ny Event
                </h1>
                <div className="text-xl">
                  <h2 className="text-4xl py-1 px-4">Potraits</h2>
                  <h2 className="text-4xl py-1 px-4">Potraits</h2>
                  <h2 className="text-4xl py-1 px-4">Potraits</h2>
                  <h2 className="text-4xl py-1 px-4">Potraits</h2>
                  <h2 className="text-4xl py-1 px-4">Potraits</h2>
                </div>
                <div>contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Photography;
