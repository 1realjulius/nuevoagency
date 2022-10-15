import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";

const Contact = () => {
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
      <div className="px-4 md:px-16 md:pt-20 pt-16">
        {/* Hero text */}
        <div>
          <div className="py-4">
            <h1 className="py-4 text-4xl md:text-7xl">
              <span>Hey! Tell Us </span> <br />
              <span>Everything</span>
            </h1>
          </div>
        </div>
        {/* interested Services */}
        <div className="flex flex-col items-start justify-start">
          <div>
            <h1>I'm Interested in...</h1>
          </div>
          {/* checkboxes */}
          <div className="grid grid-col-3 md:grid-cols-5 bg-purple-300">
            {/* checkbox */}
            <div className="flex flex-col items-center border-white border-2 rounded-full px-4 py-3">
              <h1>Wedding Shoot</h1>
            </div>
          </div>
        </div>
        <div>Main Form</div>
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default Contact;
