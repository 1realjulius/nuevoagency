import Image from "next/image";
import React, { useState } from "react";

const MainHome = () => {
  const PhotographyImages = [
    {
      id: 1,
      Pimage: "/Assets/bright-rain.png",
      heroText: "This is for Photographyimage 1",
      heroSubTitle: "subtitle for hero 1",
    },
    {
      id: 2,
      Pimage: "/Assets/floss.png",
      heroText: "This is for Photographyimage 2",
      heroSubTitle: "subtitle for hero 2",
    },
    {
      id: 3,
      Pimage: "/Assets/moonrise.png",
      heroText: "This is for Photographyimage 3",
      heroSubTitle: "subtitle for hero 3",
    },
    {
      id: 4,
      Pimage: "/Assets/landscape.jpg",
      heroText: "This is for Photographyimage 3",
      heroSubTitle: "subtitle for hero 3",
    },
  ];
  const VideographyImages = [
    {
      id: 1,
      Vimage: "/Assets/bright-rain.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 2,
      Vimage: "/Assets/floss.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 3,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 4,
      Vimage: "/Assets/landscape.jpg",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 5,
      Vimage: "/Assets/Julius_Eghan.jpg",
      heroText: "This is for Photographyimage 1",
    },
  ];
  const EventsImages = [
    {
      id: 1,
      Eimage: "/Assets/bright-rain.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 2,
      Eimage: "/Assets/floss.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 3,
      Eimage: "/Assets/moonrise.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 4,
      Eimage: "/Assets/landscape.jpg",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 5,
      Eimage: "/Assets/Julius_Eghan.jpg",
      heroText: "This is for Photographyimage 1",
    },
  ];
  const MentoringImages = [
    {
      id: 1,
      Mimage: "/Assets/bright-rain.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 2,
      Mimage: "/Assets/floss.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 3,
      Mimage: "/Assets/moonrise.png",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 4,
      Mimage: "/Assets/landscape.jpg",
      heroText: "This is for Photographyimage 1",
    },
    {
      id: 5,
      Mimage: "/Assets/Julius_Eghan.jpg",
      heroText: "This is for Photographyimage 1",
    },
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

  const [currentP, setCurrentP] = useState(0);
  const [currentV, setCurrentV] = useState(0);
  //   const [currentE, setCurrentE] = useState(0);
  //   const [currentM, setCurrentM] = useState(0);
  const [currentHeroText, setHeroTextCurrent] = useState(0);
  const PslideLength = PhotographyImages.length;
  const VslideLength = VideographyImages.length;
  //   const EslideLength = EventsImages.length;
  //   const MslideLength = MentoringImages.length;
  const HeroTextLength = HeaderImageTexts.length;

  if (!Array.isArray(PhotographyImages) || PhotographyImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(VideographyImages) || VideographyImages.length <= 0) {
    return null;
  }
  //   if (!Array.isArray(EventsImages) || EventsImages.length <= 0) {
  //     return null;
  //   }
  //   if (!Array.isArray(MentoringImages) || MentoringImages.length <= 0) {
  //     return null;
  //   }
  //   if (!Array.isArray(HeaderImageTexts) || HeaderImageTexts.length <= 0) {
  //     return null;
  //   }

  const nextPSlide = () => {
    setCurrentP(currentP === PslideLength - 1 ? 0 : currentP + 1);
  };
  const prevPSlide = () => {
    setCurrentP(currentP === 0 ? PslideLength - 1 : currentP - 1);
  };
  const nextVSlide = () => {
    setCurrentV(currentV === VslideLength - 1 ? 0 : currentV + 1);
  };
  const prevVSlide = () => {
    setCurrentV(currentV === 0 ? VslideLength - 1 : currentV - 1);
  };
  //   const nextESlide = () => {
  //     setCurrentE(currentE === EslideLength - 1 ? 0 : currentE + 1);
  //   };
  //   const prevESlide = () => {
  //     setCurrentE(currentE === 0 ? EslideLength - 1 : currentE - 1);
  //   };
  //   const nextMSlide = () => {
  //     setCurrentM(currentM === MslideLength - 1 ? 0 : currentM + 1);
  //   };
  //   const prevMSlide = () => {
  //     setCurrentM(currentM === 0 ? MslideLength - 1 : currentM - 1);
  //   };

  return (
    <div className="min-w-fit min-h-screen">
      {/* photography section */}
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          {PhotographyImages.map((Pslide, index) => (
            <div
              className={
                index === currentP
                  ? "overflow-hidden relative w-screen h-screen"
                  : "slide transition duration-100"
              }
              key={index}
            >
              {index === currentP && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Pslide.Pimage}
                    layout="fill"
                    alt=""
                    className=" absolute object-cover"
                  />
                  <div className="absolute bottom-20">
                    <h1 className="text-white text-4xl">{Pslide.heroText}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-4">
            <h1 className="text-white text-lg font-bold">Photography</h1>
          </div>
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
          <div className="absolute bottom-6">
            <div>
              <h1 className="text-xl font-bold text-white">View Photography</h1>
            </div>
          </div>
          <div className="absolute bottom-6 right-4">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div onClick={prevPSlide} className="p-1 bg-white rounded-full">
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentP + 1} | 0{PslideLength}
                </h1>
              </div>
              <div onClick={nextPSlide} className="p-1 bg-white rounded-full">
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
      {/* Videography section */}
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          {VideographyImages.map((Vslide, index) => (
            <div
              className={
                index === currentV
                  ? "overflow-hidden relative w-screen h-screen"
                  : "slide transition duration-100"
              }
              key={index}
            >
              {index === currentV && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Vslide.Vimage}
                    layout="fill"
                    alt=""
                    className=" absolute object-cover"
                  />
                  <div className="absolute bottom-20">
                    <h1 className="text-white text-4xl">{Vslide.heroText}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-4">
            <h1 className="text-white text-lg font-bold">Videography</h1>
          </div>
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
          <div className="absolute bottom-6">
            <div>
              <h1 className="text-xl font-bold text-white">View Videography</h1>
            </div>
          </div>
          <div className="absolute bottom-6 right-4">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div onClick={prevVSlide} className="p-1 bg-white rounded-full">
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentP + 1} | 0{PslideLength}
                </h1>
              </div>
              <div onClick={nextVSlide} className="p-1 bg-white rounded-full">
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
      {/* Events section */}
      <div></div>
      {/* Mentoring section */}
      <div></div>
      {/* Call to action */}
      <div></div>
    </div>
  );
};

export default MainHome;
