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
      <div className="absolute top-5 left-5">
        <div>Nuevo Logo</div>
      </div>
      {/* main */}
      <div className="px-4 md:px-16 pt-16">
        {/* header */}
        <div>
          <div>
            <h1 className="text-4xl md:pt-10 md:text-8xl md:pr-20 font-FredokaOneRegular py-6">
              <span>Our </span>
              <span className="text-[#828282]">Team</span>
            </h1>
            <h1 className="text-xl md:text-5xl font-FredokaOneRegular  pb-4">
              <span>These are the </span>
              <span className="text-[#828282]">Awsome </span>
              <span>faces behind our </span>
              <span className="text-[#828282]">Great Works.</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 md:items-center md:justify-between">
            <div className="bg-pink-200 w-full h-full col-span-4">
              <div className="pt-4 bg-blue-200 ">
                <div className="">
                  <motion.img
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    src="/Assets/nhero4.jpg"
                    alt=""
                    className="object-cover h-[140px] w-[140px] md:h-[200px] md:w-[200px] rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full col-span-4">
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
        </div>
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default About;
