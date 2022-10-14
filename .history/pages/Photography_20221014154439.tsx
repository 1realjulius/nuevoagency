import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Instagram } from "react-feather";
import { text } from "stream/consumers";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";

const Photography = () => {
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
  ];

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [textImgActive, setTextImgActive] = useState(false);
  const [textImg, setTextImg] = useState("/Assets/landscape.jpg");
  const textBgImg = useState("/Assets/landscape.jpg");

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
    imgHover: {
      x: mousePosition.x - 140,
      y: mousePosition.y - 140,
      transition: { ease: "easeOut", duration: 0.5, scale: 0.8 },
    },
    textbgimg: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
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
  const imgLeave = () => {
    setCurVar("default");
    setTextImgActive(false);
  };

  const imgEnter = () => {
    setCurVar("imgHover");
    setTextImgActive(true);
  };

  // console.log(curVar.length > 0 ? "hiii" : "fuc You");
  return (
    <div className="bg-[#161719] text-white flex flex-col font-FredokaOneRegular z-10 ">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
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
            ? " h-40 w-40 flex-col items-center justify-center fixed top-0 left-0 pointer-events-none hidden md:flex z-10"
            : " bg-white h-24 w-24 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50 mix-blend-difference"
        }`}
      >
        {textImgActive && (
          <div className="">
            <motion.img
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              src="/Assets/bright-rain.png"
              alt=""
              className="object-cover h-40 w-[100vw] rounded-xl"
            />
          </div>
        )}
      </motion.div>
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
              We Make Perfect Memories Out Off Your Experiences{" "}
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
          {/* explore or recent work */}
          <div className="flex flex-col pt-8 py-4 md:pt-20">
            <div className="flex flex-row items-center md:py-6">
              <div
                onMouseEnter={imgEnter}
                onMouseLeave={imgLeave}
                className="z-20"
              >
                <h1 className="font-FredokaOneRegular">
                  <span className="text-4xl md:text-7xl  leading-none">
                    EXPLORE
                  </span>
                  <br />
                  <span className="text-[#828282] text-xl md:text-4xl ">
                    OUR RECENT WORK
                  </span>
                </h1>
              </div>
            </div>
            <div className="grid md:grid-cols-3 py-4 md:gap-6">
              {pFeatureImg.map((pfeature) => {
                return (
                  <div
                    key={pfeature.id}
                    className={`${pfeature.imgStyle} flex flex-col`}
                  >
                    <div className="">
                      <motion.img
                        // layoutId="img"
                        // initial={{ x: 30, opacity: 0 }}
                        // animate={{ x: 0, opacity: 1 }}
                        // exit={{ x: -30, opacity: 0 }}
                        src={pfeature.img}
                        alt=""
                        className="object-cover h-[200px] md:h-[400px] w-[100vw] rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between py-2 px-2">
                      <div className="flex flex-col md:flex-row md:space-x-2 font-FredokaOneRegular">
                        <h1 className="text-lg">{pfeature.imgEvent}</h1>
                        <h1 className="text-lg text-[#828282]">
                          {pfeature.imgType}
                        </h1>
                      </div>
                      <Link href={pfeature.igLink}>
                        <div className=" bg-white rounded-full text-black p-2">
                          <span className="">
                            <Instagram className="w-6 h-6 md:w-5 md:h-5" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            {/* WHAT YOU GET IE SERVICES */}
            <div>
              <div className="flex flex-col pb-4 md:flex-row md:py-10">
                <div className="flex-1 py-2 md:pr-20 order-2 md:order-1">
                  <div className="relative">
                    <motion.img
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      src="/Assets/floss.png"
                      alt=""
                      className="object-cover h-[300px] md:h-[360px] w-[100vw] md:w-[30vw] rounded-xl"
                    />
                    <motion.img
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      src="/Assets/moonrise.png"
                      alt=""
                      className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 object-cover h-[150px] md:h-[280px] w-[200px] md:w-[400px] rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-1 py-2 order-1 md:order-2">
                  <div className="">
                    <h1 className="text-[#828282] text-lg md:text-xl">
                      What you get when you
                    </h1>
                    <h1 className="text-4xl md:text-7xl py-2">
                      <span>Shoot With </span>
                      <span className="text-[#828282]">Us</span>
                    </h1>
                    <div className="flex flex-col space-y-3 py-2">
                      <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                            />
                          </svg>
                        </span>
                        <span className="">15</span>
                        <span className="text-[#828282]">Soft coppies.</span>
                      </h2>
                      <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            />
                          </svg>
                        </span>
                        <span className="">5</span>
                        <span className="text-[#828282]">Image Retouches.</span>
                      </h2>
                      <h2 className="flex flex-row items-center text-xl md:text-3xl space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                          </svg>
                        </span>
                        <span className="">Awsome</span>
                        <span className="text-[#828282]">Experience.</span>
                      </h2>
                    </div>
                    <p className="text-[#828282] text-lg md:text-xl">
                      These and many more you have to see, check out our{" "}
                      <span className="text-white">services</span>
                    </p>
                  </div>
                  <div className="py-2 flex flex-row items-start space-x-2">
                    <div>
                      <Link href="/Contact">
                        <div className="px-4 py-2 bg-white hover:bg-[#828282] hover:text-white text-black rounded-full ">
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
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonials */}
            <div className="py-10">
              <div className="flex flex-row items-center md:py-6">
                <div>
                  <h1 className="font-FredokaOneRegular">
                    <span className="text-4xl md:text-7xl  leading-none">
                      Testimonials
                    </span>
                    <br />
                    <span className="text-[#828282] text-xl md:text-4xl "></span>
                  </h1>
                </div>
              </div>
              <div className="grid grid-col-3 md:grid-cols-6 gap-4 items-center justify-center text-base md:text-2xl">
                <div className="p-2 bg-white text-black col-span-2 md:col-span-2 rounded-md h-full">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> offers an awsome
                        customer experience.
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
                <div className="p-2 bg-white text-black rounded-md md:col-span-2 h-full ">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> deliver on time
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
                <div className="p-2 bg-white text-black col-span-3 md:col-span-2 md:row-span-2 rounded-md h-full">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> offers an awsome
                        customer experience.
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
                <div className="p-2 hidden md:block bg-white text-black rounded-md h-full">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> offers an awsome
                        customer experience.
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
                <div className="p-2 hidden md:block bg-white text-black md:col-span-2 rounded-md h-full">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> offers an awsome
                        customer experience.
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
                <div className="p-2 hidden md:block bg-white text-black rounded-md h-full">
                  <div>
                    {/* img */}
                    <div>
                      <motion.img
                        // initial={{ y: 30, opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: -30, opacity: 0 }}
                        src="/Assets/moonrise.png"
                        alt=""
                        className="object-cover h-[50px] w-[50px] rounded-full"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <h2>
                        I love how <span>@NuevoAgency</span> offers an awsome
                        customer experience.
                      </h2>
                    </div>
                    {/* social */}
                    <div>@iamjulius.e</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="">
        <MainFooter />
      </div>
    </div>
  );
};

export default Photography;
