import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Link from "next/link";

const ComingSoon = () => {
  const bgImages = [
    {
      id: 1,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[224px] md:h-[480px] w-[100vw]",
      img: "/Assets/nhero4.jpg",
    },
    {
      id: 2,
      imgContainerStyle: "col-span-1 md:col-span-1",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHero2.jpg",
    },
    {
      id: 3,
      imgContainerStyle: "col-span-1 row-span-2 md:col-span-1",
      imgStyle: "h-[224px] md:h-[480px] w-[100vw]",
      img: "/Assets/prince-01.jpg",
    },
    {
      id: 4,
      imgContainerStyle: "hidden md:flex",
      imgStyle: "h-28 md:h-56 w-[100vw]",
      img: "/Assets/nHome5.jpg",
    },
  ];

  //Destructuring an array
  const bgImages3 = {
    h1: { name: "joy", age: 16 },
    h2: { name: "mark", age: 6 },
    h3: { name: "ben", age: 10 },
  };
  const { h1, h2 } = bgImages3;
  const h1name = h1?.name;

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="relative h-full w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute top-[2px] left-[0px] w-full md:w-[50vw] p-2 h-full space-y-2">
          <div className="grid grid-cols-2  md:grid-cols-2 gap-2 md:gap-4 h-64 w-full z-10">
            {bgImages.map((img) => (
              <div
                key={img.id}
                className={`${img.imgContainerStyle} flex flex-col relative`}
              >
                <motion.img
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  src={img.img}
                  alt=""
                  className={`${img.imgStyle} object-cover`}
                />
                <div className="absolute -bottom-3  w-[100vw] h-8 bg-black/80 blur" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-[100vw] py-3 text-black flex flex-row justify-between px-4">
          <div>
            <h1>NuevoAgency</h1>
          </div>
          <div>
            <h1>NuevoAgency</h1>
          </div>
        </div>
        <div className="z-20 absolute bottom-10 left-0 md:py-10 md:right-2 md:text-end">
          <div>
            {/* herotext */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[72px] md:text-8xl px-2 md:px-5 py-3 leading-none space-y-3"
            >
              <motion.h1>
                <motion.span>Make </motion.span> <br />
                <motion.span>Aswome </motion.span> <br />
                <motion.span>Memories </motion.span> <br />
                <motion.span>With Us </motion.span>
              </motion.h1>
            </motion.div>
            {/* coming soon text */}
            <div className="px-4 flex flex-col md:items-end">
              <p className="text-[#828282] flex flex-row items-center space-x-2 text-lg">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
                <span>Official Website Coming Soon</span>
              </p>
            </div>
            {/* CTA buttons */}
            <div className="px-4 flex flex-col md:items-end py-4">
              <div className="flex flex-row items-center space-x-4">
                {/* contact btn */}
                <div>
                  <Link href="#">
                    <div className="bg-white px-4 py-2 text-black">
                      <h1>Book a shoot</h1>
                    </div>
                  </Link>
                </div>
                {/* ig page */}
                <div>
                  <Link href="#">
                    <div className="bg-white px-4 py-2 text-black">
                      <h1>Ig</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
