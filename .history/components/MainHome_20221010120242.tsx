import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { Instagram } from "react-feather";

const HeroImg = [
  {
    id: 1,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Potrait",
    imgStyle: "",
    img: "/Assets/bright-rain.png",
  },
  {
    id: 2,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Wedding",
    imgStyle: "md:col-span-2",
    img: "/Assets/floss.png",
  },
  {
    id: 3,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "md:col-span-2",
    img: "/Assets/landscape.jpg",
  },
  {
    id: 4,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Landscape",
    imgStyle: "",
    img: "/Assets/moonrise.png",
  },
  {
    id: 5,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Wedding",
    imgStyle: "",
    img: "/Assets/floss.png",
  },
  {
    id: 6,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "",
    img: "/Assets/landscape.jpg",
  },
  {
    id: 7,
    igLink: "#",
    imgEvent: "Beach",
    imgType: "Festival",
    imgStyle: "",
    img: "/Assets/landscape.jpg",
  },
];

const MainHome = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const CategorySlideLength = HeroImg.length;
  if (!Array.isArray(HeroImg) || HeroImg.length <= 0) {
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
  const pFeatureImg = [
    {
      id: 1,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Potrait",
      imgStyle: "",
      img: "/Assets/bright-rain.png",
    },
    {
      id: 2,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Wedding",
      imgStyle: "md:col-span-2",
      img: "/Assets/floss.png",
    },
    {
      id: 3,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Festival",
      imgStyle: "md:col-span-2",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 4,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Landscape",
      imgStyle: "",
      img: "/Assets/moonrise.png",
    },
    {
      id: 5,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Wedding",
      imgStyle: "",
      img: "/Assets/floss.png",
    },
    {
      id: 6,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Festival",
      imgStyle: "",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 7,
      igLink: "#",
      imgEvent: "Beach",
      imgType: "Festival",
      imgStyle: "",
      img: "/Assets/landscape.jpg",
    },
  ];

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const btnx = useSpring(10, { stiffness: 100, damping: 100 });
  const btny = useSpring(10, { stiffness: 100, damping: 100 });

  const rotateX = useTransform(btnx, [0, 10], [-10, 10]);
  const rotateY = useTransform(btny, [0, 10], [-10, 10]);

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
    imgHover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const magnetbtn = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    btnx.set(e.clientX - rect.left);
    btny.set(e.clientY - rect.top);
  };

  const magnetbtnRest = () => {
    btnx.set(10, true);
    btny.set(10, true);
  };

  const [curVar, setCurVar] = useState("default");
  const textEnter = () => setCurVar("text");
  const textLeave = () => setCurVar("default");
  const btnEnter = () => setCurVar("btnHover");
  const btnLeave = () => setCurVar("default");
  const imgEnter = () => setCurVar("imgHover");
  const imgLeave = () => setCurVar("default");

  // console.log(curVar.length > 0 ? "hiii" : "fuc You");
  return (
    <div className="bg-[#161719] text-white flex flex-col font-FredokaOneRegular z-10 ">
      {/* navbar */}
      {/* custom cursor */}
      <motion.div
        variants={variants}
        animate={curVar}
        className={`${
          curVar === "default"
            ? "bg-white h-4 w-4 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : curVar === "btnHover"
            ? "bg-blue-400 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : curVar === "imgHover"
            ? "bg-blue-400 h-40 w-40 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : " bg-white h-24 w-24 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50 mix-blend-difference"
        }`}
      />
      {/* main */}
      <div className="px-4 md:px-16 pt-16">
        {/* heaader */}
        <div className="flex flex-col  w-full p-2">
          <h1 className="flex flex-row items-center space-x-2">
            <span className="text-black p-1 bg-white rounded-full">
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
            <span className="text-xl font-FredokaOneRegular">Photography</span>
          </h1>
          <h1 className="text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular pt-6 pb-4">
            <span
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className=""
            >
              We Make Perfect Memories Out Of Your Experiences{" "}
            </span>
            <span className="text-[#828282]">With Exceptional Photos</span>
          </h1>
          <div className="py-2 flex flex-row space-x-4 items-start">
            <motion.div
              onMouseEnter={btnEnter}
              onMouseLeave={btnLeave}
              className=""
            >
              <Link href="/Contact">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  className={` ${
                    curVar === "btnHover"
                      ? "px-4 py-2  text-white bg-[#828282] rounded-full"
                      : "px-4 py-2 bg-white text-black rounded-full "
                  }`}
                >
                  <h1 className="text-lg font-FredokaOneRegular flex flex-row items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Book A Shoot</span>
                  </h1>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div className="">
              <motion.div className="">
                <Link href="#">
                  <div className="px-4 py-2 bg-white  text-black rounded-full ">
                    <h1 className="text-lg font-FredokaOneRegular flex flex-row items-center space-x-2 ">
                      <span>
                        <Instagram className="w-6 h-6" />
                      </span>
                      <span>Our IG</span>
                    </h1>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col items-start">
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>8.5</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282]">
                  <span>YEARS OF</span>
                  <br />
                  <span className="text-white">EXPERIENCE</span>
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>140</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282] px-4">
                  <span>PROJECCTS</span>
                  <br />
                  <span className="text-white">COMPLETED</span>
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-6xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>1.2K</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm font-FredokaOneRegular text-[#828282] px-4">
                  <span>TRUSTED</span>
                  <br />
                  <span className="text-white">COMPANIES</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="">
          {/* mainimg */}
          <div>
            <div className="">
              <motion.img
                layoutId="img"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                src="/Assets/bright-rain.png"
                alt=""
                className="object-cover h-[200px] md:h-[600px] w-[100vw] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="">{/* <MainFooter /> */}</div>
    </div>
  );
};
export default MainHome;
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
