import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MainHome = () => {
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
            className="w-5 h-5"
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
      catIcon: <h1 className="text-black">hq</h1>,
    },
    {
      id: 4,
      catSection: "Mentoring",
      catImage: "/Assets/landscape.jpg",
      catHeroText: "Make Memories Out Of Your Experiences",
      catLink: "/Mentoring",
      catIcon: <h1 className="text-black">hq</h1>,
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
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {/* photography section */}
      <div className="relative ">
        <div className="flex flex-col items-center justify-center">
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
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Catslide.catImage}
                    layout="fill"
                    alt=""
                    className="object-cover overflow-hidden"
                  />
                  <div className="absolute top-10">
                    <h1 className="text-white text-lg font-bold py-4">
                      {Catslide.catSection}
                    </h1>
                  </div>
                  <div className="absolute bottom-32 text-center px-80">
                    <h1 className="text-white text-7xl">
                      {Catslide.catHeroText}
                    </h1>
                  </div>
                  <div className="absolute bottom-6 cursor-pointer">
                    <Link href={Catslide.catLink}>
                      <div className="bg-white px-5 py-2 shadow-md rounded-lg flex flex-row items-center space-x-4">
                        <h1 className="text-xl font-bold">
                          View {Catslide.catSection}
                        </h1>
                        <span>{Catslide.catIcon}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute bottom-6 left-4">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="absolute bottom-6 right-8">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div
                onClick={prevPSlide}
                className="p-1 hover:bg-white text-white hover:text-black rounded-full cursor-pointer"
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
                className="p-1 hover:bg-white text-white hover:text-black rounded-full cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default MainHome;
