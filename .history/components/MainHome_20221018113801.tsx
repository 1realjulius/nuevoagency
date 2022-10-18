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

  const magnet = withMouseOverArea;
  //Custom cursor
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [textImgActive, setTextImgActive] = useState(false);

  const btnx = useSpring(10, { stiffness: 100, damping: 100 });
  const btny = useSpring(10, { stiffness: 100, damping: 100 });

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

      transition: { ease: "easeOut", duration: 0.5 },
    },
    text: {
      x: mousePosition.x - 48,
      y: mousePosition.y - 48,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    btnHover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    btn1Hover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const [curVar, setCurVar] = useState("default");
  const textEnter = () => setCurVar("text");
  const textLeave = () => setCurVar("default");
  const btnEnter = () => setCurVar("btnHover");
  const btnLeave = () => setCurVar("default");
  const btn1Enter = () => setCurVar("btn1Hover");
  const btn1Leave = () => setCurVar("default");

  return (
    <div className="">
      {/* ParentElement */}
      <main className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0">
        <section className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
          {/* childern */}
          <section className="bg-green-800 w-[100vw] h-[100vh] snap-start">
            <ComingSoon />
          </section>
          <section className="bg-pink-800 w-[100vw] h-[100vh] snap-start ">
            page2
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
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
