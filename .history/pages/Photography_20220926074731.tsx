import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

const Photography = () => {
  const pFeatureImg = [
    { id: 1, igLink: "#", imgType: "Potrait", img: "/Assets/bright-rain.png" },
    { id: 2, igLink: "#", imgType: "Wedding", img: "/Assets/floss.png" },
    { id: 3, igLink: "#", imgType: "Festival", img: "/Assets/landscape.jpg" },
    { id: 4, igLink: "#", imgType: "Landscape", img: "/Assets/moonrise.png" },
    { id: 5, igLink: "#", imgType: "Wedding", img: "/Assets/floss.png" },
    { id: 6, igLink: "#", imgType: "Festival", img: "/Assets/landscape.jpg" },
  ];

  return (
    <div className="bg-black min-h-screen min-w-screen text-white flex flex-col px-4">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div>
        {/* heaader */}
        <div className="flex flex-col pt-10 bg-white/50 h-[76vh]">
          <div></div>
        </div>
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default Photography;
