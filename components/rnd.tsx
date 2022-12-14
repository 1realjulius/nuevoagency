import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Link, Instagram } from "react-feather";

const Rnd = () => {
  const [name, setName] = useState("");
  setName("julius");
  console.log(name);

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
  ];
  const VideographyImages = [
    {
      id: 1,
      Vimage: "/Assets/floss.png",
      heroText: "This is for Videographyimage 1",
    },
    {
      id: 2,
      Vimage: "/Assets/bright-rain.png",
      heroText: "This is for Videographyimage 2",
    },
    {
      id: 3,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 4,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 5,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 6,
      Vimage: "/Assets/floss.png",
      heroText: "This is for Videographyimage 3",
    },
  ];
  const EventsImages = [
    {
      id: 1,
      Eimage: "/Assets/moonrise.png",
      heroText: "This is for Eventimage 1",
    },
    {
      id: 2,
      Eimage: "/Assets/floss.png",
      heroText: "This is for Eventimage 2",
    },
    {
      id: 3,
      Eimage: "/Assets/bright-rain.png",
      heroText: "This is for Eventimage 3",
    },
  ];
  const MentoringImages = [
    {
      id: 1,
      Mimage: "/Assets/landscape.jpg",
      heroText: "This is for Mentoringimage 1",
    },
    {
      id: 2,
      Mimage: "/Assets/floss.png",
      heroText: "This is for Mentoringimage 2",
    },
    {
      id: 3,
      Mimage: "/Assets/moonrise.png",
      heroText: "This is for Mentoringimage 3",
    },
    {
      id: 4,
      Mimage: "/Assets/bright-rain.png",
      heroText: "This is for Mentoringimage 4",
    },
    {
      id: 5,
      Mimage: "/Assets/Julius_Eghan.jpg",
      heroText: "This is for Mentoringimage 5",
    },
  ];

  const [currentP, setCurrentP] = useState(0);
  const [currentV, setCurrentV] = useState(0);
  const [currentE, setCurrentE] = useState(0);
  const [currentM, setCurrentM] = useState(0);
  const PslideLength = PhotographyImages.length;
  const VslideLength = VideographyImages.length;
  const EslideLength = EventsImages.length;
  const MslideLength = MentoringImages.length;

  if (!Array.isArray(PhotographyImages) || PhotographyImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(VideographyImages) || VideographyImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(EventsImages) || EventsImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(MentoringImages) || MentoringImages.length <= 0) {
    return null;
  }

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
  const nextESlide = () => {
    setCurrentE(currentE === EslideLength - 1 ? 0 : currentE + 1);
  };
  const prevESlide = () => {
    setCurrentE(currentE === 0 ? EslideLength - 1 : currentE - 1);
  };
  const nextMSlide = () => {
    setCurrentM(currentM === MslideLength - 1 ? 0 : currentM + 1);
  };
  const prevMSlide = () => {
    setCurrentM(currentM === 0 ? MslideLength - 1 : currentM - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {/* photography section */}

      <div>
        <div className="relative h-full w-full flex flex-col justify-end overflow-hidden">
          <div className="absolute top-[2px] left-[0px] w-full md:w-[50vw] p-2 h-full space-y-2">
            <div className="grid grid-cols-2  md:grid-cols-2 gap-2 md:gap-4 h-64 w-full z-10">
              hhw
            </div>
          </div>
          <div className="z-20 absolute bottom-16 left-0 md:py-10 md:right-2 md:text-end">
            <div>
              {/* herotext */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[72px] md:text-[110px] px-2 md:px-5 py-2 leading-none space-y-3"
              >
                <motion.h1>
                  <motion.span>Make </motion.span> <br />
                  <motion.span>Aswome </motion.span> <br />
                  <motion.span>Memories </motion.span> <br />
                  <motion.span>With Us.</motion.span>
                </motion.h1>
              </motion.div>
              {/* Hero Secondary text */}
              <div className="px-4 flex flex-col md:items-end">
                <p className="text-[#828282] flex flex-row items-center text-base md:text-xl">
                  <span>??? We Make Memories From Your Experiences.</span>
                </p>
              </div>
              {/* CTA buttons */}
              <div className="px-4 flex flex-col md:items-end py-4">
                <div className="flex flex-row items-center text-xl">
                  {/* contact btn */}
                  <motion.div className="">
                    <div className="m-2">
                      <Link href="/Contact">
                        <motion.div
                          layout
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 1 }}
                          transition={{ ease: "easeOut", duration: 0.2 }}
                          className={` ${
                            1 < 2
                              ? "px-4 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                              : "px-4 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                          }`}
                        >
                          <h1>Book a shoot</h1>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                  {/* ig Page */}
                  <div>
                    <div className="m-2">
                      <Link href="/Contact">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 1 }}
                          initial={{ opacity: 1 }}
                          transition={{ ease: "easeOut", duration: 0.2 }}
                          className={` ${
                            1 < 2
                              ? "px-2 py-2  bg-white text-black rounded-full border-2 border-transparent cursor-pointer"
                              : "px-2 py-2 border-2 border-white text-white rounded-full cursor-pointer "
                          }`}
                        >
                          <Instagram className="w-6 h-6" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
      <div className="relative ">
        <div className="flex flex-col items-center justify-center">
          {PhotographyImages.map((Pslide, index) => (
            <div
              className={`
        ${index === currentP && "overflow-hidden relative w-screen h-screen"}
          `}
              key={index}
            >
              {index === currentP && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Pslide.Pimage}
                    layout="fill"
                    alt=""
                    className="object-cover overflow-hidden"
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentP + 1} | 0{PslideLength}
                </h1>
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
      {/* Videography section */}
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          {VideographyImages.map((Vslide, index) => (
            <div
              className={`
        ${index === currentP && "overflow-hidden relative w-screen h-screen"}
          `}
              key={index}
            >
              {index === currentV && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Vslide.Vimage}
                    layout="fill"
                    alt=""
                    className="object-cover overflow-hidden"
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
          <div className="absolute bottom-6 right-8">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div
                onClick={prevVSlide}
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentV + 1} | 0{VslideLength}
                </h1>
              </div>
              <div
                onClick={nextVSlide}
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
      {/* Events section */}
      <div className="relative hidden">
        <div className="flex flex-col items-center justify-center">
          {EventsImages.map((Eslide, index) => (
            <div
              className={
                index === currentE
                  ? "overflow-hidden relative w-screen h-screen"
                  : ""
              }
              key={index}
            >
              {index === currentE && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Eslide.Eimage}
                    layout="fill"
                    alt=""
                    className=" absolute object-cover overflow-hidden"
                  />
                  <div className="absolute bottom-20">
                    <h1 className="text-white text-4xl">{Eslide.heroText}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-4">
            <h1 className="text-white text-lg font-bold">Events</h1>
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
              <h1 className="text-xl font-bold text-white">View Events</h1>
            </div>
          </div>
          <div className="absolute bottom-6 right-8">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div
                onClick={prevESlide}
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentE + 1} | 0{EslideLength}
                </h1>
              </div>
              <div
                onClick={nextESlide}
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
      {/* Mentoring section */}
      <div className="relative hidden">
        <div className="flex flex-col items-center justify-center">
          {MentoringImages.map((Mslide, index) => (
            <div
              className={
                index === currentM
                  ? "overflow-hidden relative w-screen h-screen"
                  : ""
              }
              key={index}
            >
              {index === currentM && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={Mslide.Mimage}
                    layout="fill"
                    alt=""
                    className=" absolute object-cover overflow-hidden"
                  />
                  <div className="absolute bottom-20">
                    <h1 className="text-white text-4xl">{Mslide.heroText}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-4">
            <h1 className="text-white text-lg font-bold">Mentoring</h1>
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
              <h1 className="text-xl font-bold text-white">View Mentoring</h1>
            </div>
          </div>
          <div className="absolute bottom-6 right-8">
            <div className="flex flex-row items-center justify-between space-x-6">
              <div
                onClick={prevMSlide}
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
              <div>
                <h1 className="text-white text-xl font-bold">
                  0{currentM + 1} | 0{MslideLength}
                </h1>
              </div>
              <div
                onClick={nextMSlide}
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

export default Rnd;
