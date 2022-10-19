import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import MainFooter from "../components/MainFooter";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

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
  ];

  const Services = [
    { id: 1, img: "/Assets/landscape.jpg", name: "Photography" },
    { id: 2, img: "/Assets/landscape.jpg", name: "Videography" },
    { id: 3, img: "/Assets/landscape.jpg", name: "Mentoring" },
  ];
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white font-FredokaOneRegular">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/* main */}
      <div className="px-4 md:px-16 pt-16">
        {/* header */}
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
              <div className="py-2 flex flex-row space-x-4 items-start">
                {/* Contact */}
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-4 py-2 rounded-full flex flex-row items-center justify-center">
                    <h1 className="flex flex-row items-center space-x-2 md:text-xl font-FredokaOneRegular">
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
                {/* modal for the eamil list */}
                <Link href="/Contact">
                  <div className="bg-white hover:bg-[#828282] hover:text-white cursor-pointer text-black px-4 py-2 rounded-full flex flex-row items-center justify-center">
                    <h1 className="flex flex-row items-center space-x-2 md:text-xl font-FredokaOneRegular">
                      <span>Our Packages</span>
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
