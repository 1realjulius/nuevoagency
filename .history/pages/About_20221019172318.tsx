import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import MainFooter from "../components/MainFooter";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

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
      role: "Video Directo",
      name: "Teo Addo",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 5,
      role: "Video Directo",
      name: "Teo Addo",
      ig: "#",
      tw: "#",
      email: "email@email.com",
      img: "/Assets/landscape.jpg",
    },
    {
      id: 6,
      role: "Video Directo",
      name: "Teo Addo",
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
      <div className="absolute top-5 left-5">
        <div>Nuevo Logo</div>
      </div>
      {/* main */}
      <div className="px-4 pt-8">
        {/* header */}
        <div className="">
          <div className="md:px-10 py-4">
            <h1 className="text-4xl md:pt-10  pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular py-2">
              <span>Our </span>
              <span className="text-[#828282]">Team</span>
            </h1>
            <h1 className="text-2xl md:text-4xl font-FredokaOneRegular  pb-4">
              <span>These are the </span>
              <span className="text-[#828282]">Awsome </span>
              <span>faces behind our </span>
              <span className="text-[#828282]">Great Works.</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-10 md:justify-between pb-10 md:px-10">
            <div className="w-full col-span-4 md:px-5">
              {/* img of ceo */}
              <div className="">
                <div className="">
                  <motion.img
                    layoutId="img"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/landscape.jpg"
                    alt=""
                    className="object-cover h-[300px] md:h-[420px] w-[100vw] rounded-xl"
                  />
                </div>
                <div className="py-1">
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
            <div className="w-full h-full col-span-6">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:px-5">
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
                            className="object-cover h-[100px] w-[100px] md:h-[140px] md:w-[140px] rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="py-2">
                        <h1 className="flex flex-col md:flex-row md:space-x-2 font-FredokaOneRegular text-sm">
                          <span className="text-[#828282]">{worker.role}</span>
                          <span>{worker.name}</span>
                        </h1>
                        <h1 className="flex flex-row space-x-2 font-FredokaOneRegular text-sm">
                          <span className="truncate">{worker.email}</span>
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
        </div>
        {/* Our Goals */}
        <div>
          <div className="flex flex-col md:flex-row md:px-16 py-4 md:py-12">
            <div className="flex-1 flex flex-col items-start px-2">
              <div className="border-b-[3px] border-[#828282] mb-4 pb-1 pr-2 ">
                <h2 className="text-xl md:text-2xl">Our Aims</h2>
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl">
                  From the moment our company was founded, we have helped our
                  clients find exceptional solutions for their businesses ,
                  creating memorable brands and digital products. Our expertise
                  grows with each year, and our accumulated experience empowers
                  us to develop products exactly as they should be.
                </h1>
              </div>
            </div>
            <div className="flex-1 hidden md:flex px-2">
              <div className="">
                <div className="">
                  <motion.img
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/landscape.jpg"
                    alt=""
                    className="object-cover h-[300px] md:h-[420px] w-[100vw] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Numbers */}
        <div>
          <div className="flex flex-row justify-between px-5 text-lg md:text-6xl md:px-40 md:py-10">
            <div>
              <div className="flex flex-col items-start justify-start pt-6 pb-6 ">
                <h1 className="text-4xl md:text-8xl font-FredokaOneRegular flex flex-row ">
                  <span>140</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm md:text-2xl font-FredokaOneRegular text-[#828282] md:px-2">
                  <span>PROJECCTS</span>
                  <br />
                  <span className="text-white">COMPLETED</span>
                </h2>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-8xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>8.5</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm md:text-2xl font-FredokaOneRegular text-[#828282] md:px-2">
                  <span>YEARS OF</span>
                  <br />
                  <span className="text-white">EXPERIENCE</span>
                </h2>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center pt-6 pb-6 ">
                <h1 className="text-4xl md:text-8xl font-FredokaOneRegular flex flex-row items-center justify-center">
                  <span>1.2K</span>
                  <span className="text-[#828282]">+</span>
                </h1>
                <h2 className="text-sm md:text-2xl font-FredokaOneRegular text-[#828282] md:px-2">
                  <span>TRUSTED</span>
                  <br />
                  <span className="text-white">COMPANIES</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Email And Location */}
        <div className="flex flex-col items-center bg-blue-300">
          <div className="py-2">
            <h1 className="text-2xl md:text-7xl">support@nuevostodios.com</h1>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="">
        <NewFooter />
      </div>
    </div>
  );
};

export default About;
