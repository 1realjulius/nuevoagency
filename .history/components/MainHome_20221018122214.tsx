import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { Instagram } from "react-feather";
import NavBar from "./NavBar";
import ComingSoon from "./ComingSoon";
import { withMouseOverArea } from "./Magnetic";

const MainHome = () => {
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

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (movement: any) => {
      setMousePosition({
        x: movement.clientX,
        y: movement.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    project: {
      x: mousePosition.x - 34,
      y: mousePosition.y - 34,
      transition: {
        ease: "easeOut",
        type: "spring",
        mass: 0.6,
        dur: 0.8,
      },
    },
    contact: {
      opacity: 1,
      fontSize: "32px",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    btnHover: {
      opacity: 1,
      fontSize: "32px",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    btn1Hover: {
      opacity: 1,
      fontSize: "32px",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    aboutPage: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
  };

  const projectEnter = () => {
    setCursorVariant("project");
    setCursorText("try");
  };

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event: any) {
    setCursorText("heloo");
    setCursorVariant("contact");
  }

  function contactLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  const btnEnter = () => setCursorVariant("btnHover");
  const btnLeave = () => setCursorVariant("default");
  const btn1Enter = () => setCursorVariant("btn1Hover");
  const btn1Leave = () => setCursorVariant("default");
  const aboutSectionEnter = () => setCursorVariant("aboutPage");
  const aboutSectionLeave = () => setCursorVariant("default");
  return (
    <div className="">
      {/* ParentElement */}
      <main className="bg-black min-h-[100vh] min-w-[100vw] m-0">
        <section className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
          {/* childern */}
          <div>
            <NavBar />
          </div>
          {/* custom cursor */}
          <motion.div
            variants={variants}
            animate={cursorVariant}
            className={`${
              cursorVariant === "default"
                ? "bg-white h-[10px] w-[10px] rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
                : cursorVariant === "btnHover"
                ? "bg-blue-400 rounded-full fixed top-0 left-0 pointer-event"
                : cursorVariant === "btn1Hover"
                ? "bg-blue-400 rounded-full fixed top-0 left-0 pointer-event"
                : cursorVariant === "aboutPage"
                ? "bg-black h-[10px] w-[10px] rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
                : " bg-green-200 h-24 w-24 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50 mix-blend-difference"
            }`}
          >
            {cursorVariant === "project" && <h1>{cursorText}</h1>}
          </motion.div>
          {/* home */}
          <section className="w-[100vw] h-[100vh] snap-start">
            <div className="w-[100vw] h-[100vh] bg-black text-white font-FredokaOneRegular">
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
                        <div className="absolute -bottom-2  w-[100vw] h-8 bg-black/50 blur" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="z-20 absolute bottom-12 left-0 md:py-10 md:right-2 md:text-end">
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
                    {/* coming soon text */}
                    <div className="px-4 flex flex-col md:items-end">
                      <p className="text-[#828282] flex flex-row items-center space-x-2 text-base">
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
                      <div className="flex flex-row items-center">
                        {/* contact btn */}
                        <motion.div
                          onMouseEnter={btnEnter}
                          onMouseLeave={btnLeave}
                          className=""
                        >
                          <div className="m-2">
                            <Link href="/Contact">
                              <motion.div
                                layout
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                                className={` ${
                                  cursorVariant === "btnHover"
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
                        <div onMouseEnter={btn1Enter} onMouseLeave={btn1Leave}>
                          <div className="m-2">
                            <Link href="/Contact">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                initial={{ opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                                className={` ${
                                  cursorVariant === "btn1Hover"
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
            </div>
          </section>
          <section className="bg w-[100vw] h-[100vh] snap-start  ">
            <div
              onMouseEnter={aboutSectionEnter}
              onMouseLeave={aboutSectionLeave}
              className="w-full bg-white text-black h-full flex flex-col items-center justify-center"
            >
              {/* about text */}
              <div>
                <h1 className="text-xl md:text-7xl text-center">
                  <span>Here at </span>
                  <span>Nuevo</span>{" "}
                  <span>Our Aim is to make Exceptional Memories</span>{" "}
                  <span>From Our Clients Memories</span>
                </h1>
              </div>
              {/* text writer and btns */}
              <div className="py-6 flex flex-col ">
                {/* text writer */}
                <div className="flex flex-row items-center justify-center space-x-4">
                  <div>
                    <div className="p-2">
                      <Image
                        src="/Assets/prince-01.jpg"
                        width="60px"
                        height="60px"
                        alt=""
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl">
                      <span className="text-[#828282]">CEO, </span>
                      <span>Lead Photographer.</span>
                    </h1>
                  </div>
                </div>
                {/* btns */}
                <div className="py-4">
                  <div>
                    <Link href="/Photography">
                      <div className="px-4 py-3 border-2 border-black rounded-full">
                        <h1>View Photography</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
        </section>
      </main>
    </div>
  );
};
export default MainHome;
