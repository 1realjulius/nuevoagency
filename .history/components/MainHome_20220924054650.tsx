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
    },
    {
      id: 2,
      catSection: "Videography",
      catImage: "/Assets/floss.png",
      catHeroText:
        "We Make Perfect Meories Out Of Your Experiences With Videos",
      catLink: "/Videography",
    },
    {
      id: 3,
      catSection: "Events",
      catImage: "/Assets/moonrise.png",
      catHeroText: "We Organize Events That Have Grater Impact On The Society",
      catLink: "/Events",
    },
    {
      id: 4,
      catSection: "Mentoring",
      catImage: "/Assets/landscape.jpg",
      catHeroText: "Make Memories Out Of Your Experiences",
      catLink: "/Mentoring",
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
                      <div className="bg-white px-5 py-2 shadow-md rounded-lg flex flex-row items-center justify-center">
                        <h1 className="text-xl font-bold">
                          View {Catslide.catSection}
                        </h1>
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
                className="p-1 bg-white rounded-full cursor-pointer"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
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
                className="p-1 bg-white rounded-full cursor-pointer"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
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
