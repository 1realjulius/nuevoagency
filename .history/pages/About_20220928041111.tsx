import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Facebook, Instagram, Twitter } from "react-feather";
import MainFooter from "../components/MainFooter";
import { motion } from "framer-motion";

const About = () => {
  const TeamData = [
    {
      id: 1,
      role: "Photo Editor",
      name: "Dan Makrol",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 2,
      role: "Video Editor",
      name: "Benny Sardine",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 3,
      role: "Video Directo",
      name: "Teo Addo",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 4,
      role: "Accountant",
      name: "Ama Inn",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 5,
      role: "Events Planner",
      name: "Mark Pedi",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 6,
      role: "Snr Coach",
      name: "Julius Eghan",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 7,
      role: "Snr Editor",
      name: "Joshua Eghan",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 8,
      role: "Jnr Coach",
      name: "Erica Eghan",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
  ];
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white font-FredokaOneRegular">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div className="px-6 md:px-16 pt-16">
        {/* header */}
        <div className="h-[8vh] md:h-[20vh] w-full p-2">
          <h1 className="text-4xl md:pt-4 md:text-8xl md:pr-20 font-FredokaOneRegular pb-4">
            <span>About </span>
            <span className="text-[#828282]">Us</span>
          </h1>
        </div>
        {/* About and the CEO */}
        <div className="p-2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-1 flex flex-col justify-between ">
              <div>
                <h1 className="text-xl md:text-5xl font-FredokaOneRegular">
                  Welcome to{" "}
                  <span className="text-[#828282]">nuevo Agency</span>{" "}
                  hereCerte, inquam, pertinax non provident, similique sunt in
                  malis dolor,
                  <span className="text-[#828282]">
                    non intellegamus, tu paulo ante cum soluta nobis est
                    consecutus?
                  </span>
                  hereCerte, inquam, pertinax
                </h1>
              </div>
              <div className="py-2 flex flex-row space-x-4 items-start">
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                    <h1 className="text-xl font-FredokaOneRegular">
                      Contact Us
                    </h1>
                  </div>
                </Link>
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                    <h1 className="flex flex-row items-center space-x-2 text-xl font-FredokaOneRegular">
                      <span>Get A Quota</span>
                      <span>
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
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </span>
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col md:items-end  md:px-10">
              {/* img of ceo */}
              <div className="pt-4 ">
                <div className="">
                  <motion.img
                    layoutId="img"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/landscape.jpg"
                    alt=""
                    className="object-cover h-[300px] md:h-[400px] w-[100vw] rounded-xl"
                  />
                </div>
              </div>
              <div className="py-2">
                <h1 className="flex flex-row space-x-2 font-FredokaOneRegular text-base">
                  <span className="text-[#828282]">Founder, CEO</span>
                  <span>PRINCE TK. AMPONSAH</span>
                </h1>
                <h1 className="flex flex-row space-x-2 font-FredokaOneRegular text-base">
                  <span>email@email.com</span>
                </h1>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div>
                  <Link href="#">
                    <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                      <Facebook className=" w-5 h-5" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                      <Instagram className=" w-5 h-5" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                      <Twitter className=" w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The team */}
        <div>
          <div>
            <h1 className="text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular py-6">
              <span>OUR </span>
              <span className="text-[#828282]">TEAM</span>
            </h1>
            <h1 className="text-xl md:text-5xl font-FredokaOneRegular  pb-4">
              <span>These are the </span>
              <span className="text-[#828282]">Awsome </span>
              <span>faces behind our </span>
              <span className="text-[#828282]">Great Works.</span>
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {TeamData.map((worker) => {
                return (
                  <div key={worker.id}>
                    <div className="pt-4 ">
                      <div className="">
                        <motion.img
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -30, opacity: 0 }}
                          src={worker.img}
                          alt=""
                          className="object-cover h-[140px] w-[140px] md:h-[200px] md:w-[200px] rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="py-2">
                      <h1 className="flex flex-col md:flex-row md:space-x-2 font-FredokaOneRegular text-sm">
                        <span className="text-[#828282]">{worker.role}</span>
                        <span>{worker.name}</span>
                      </h1>
                      <h1 className="flex flex-row space-x-2 font-FredokaOneRegular text-sm">
                        <span>{worker.email}</span>
                      </h1>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div>
                        <Link href={worker.ig}>
                          <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                            <Instagram className=" w-5 h-5" />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link href={worker.tw}>
                          <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                            <Twitter className=" w-5 h-5" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* our core values and value propositions*/}
        <div className="my-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-1 py-2">
              <div>
                <h1 className="text-xl md:text-5xl font-FredokaOneRegular py-2">
                  Our Professional{" "}
                  <span className="text-[#828282]">Services</span>
                </h1>{" "}
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">Lorem Ipsum </span>is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries,
                </h1>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div>
                <h1 className="text-xl md:text-5xl font-FredokaOneRegular py-2">
                  Our Professional{" "}
                  <span className="text-[#828282]">Services</span>
                </h1>{" "}
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">Lorem Ipsum </span> is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries,
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* our clients */}
        <div className="my-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1 py-2">
              <div>
                <h1 className="flex flex-row space-x-2 md:space-x-0 md:flex-col text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular py-6">
                  <span>OUR </span>
                  <span className="text-[#828282]">CLIENTS</span>
                </h1>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="grid grid-cols-2 gap-2">
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 1 </span>
                </h1>
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 2 </span>
                </h1>
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 3</span>
                </h1>
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 4</span>
                </h1>
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 5</span>
                </h1>
                <h1 className="text-xl md:text-4xl">
                  <span className="text-[#828282]">Awsome Brand 6</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
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
                  className="object-cover h-[300px] md:h-[400px] w-[100vw] rounded-xl"
                />
                <motion.img
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  src="/Assets/moonrise.png"
                  alt=""
                  className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 object-cover h-[150px] md:h-[250px] w-[200px] md:w-[400px] rounded-xl"
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
                        className="w-8 h-8 md:w-12 md:h-12"
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
                        className="w-8 h-8 md:w-12 md:h-12"
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
                        className="w-8 h-8 md:w-12 md:h-12"
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
                  These and many more you have to see,{" "}
                  <span className="text-white">lets go</span>
                </p>
              </div>
              <div className="py-2 flex flex-col items-start">
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                    <h1 className="text-xl font-FredokaOneRegular">
                      Contact Us
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div>
          <div className="flex flex-col md:flex-row md:py-10">
            <div className="flex-1 py-2">
              <div className="">
                <h1 className="text-[#828282] text-lg md:text-xl">
                  Are You Ready To
                </h1>
                <h1 className="text-4xl md:text-7xl py-2">
                  <span>Capture Your Best </span>
                  <span className="text-[#828282]">Experiences </span>
                  <span>And Make Them Awsome </span>
                  <span className="text-[#828282]">Memories</span>
                </h1>
              </div>
              <div className="py-2 flex flex-col items-start">
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-5 py-2 rounded-lg flex flex-row items-center justify-center">
                    <h1 className="text-xl font-FredokaOneRegular">
                      Contact Us
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 py-2 md:pl-20 ">
              <div className="relative">
                <motion.img
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  src="/Assets/landscape.jpg"
                  alt=""
                  className="object-cover h-[300px] md:h-[400px] w-[100vw] rounded-xl"
                />
                <div className="absolute -top-2 -right-2">
                  <Link href="#">
                    <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                      <Instagram className=" w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </Link>
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

export default About;
