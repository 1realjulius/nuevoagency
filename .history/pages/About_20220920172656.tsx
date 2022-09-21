import Image from "next/image";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* navbar */}
      <div>
        <MainNavbar />
      </div>
      {/* header */}
      <div className="z-10 relative min-h-screen min-w-screen">
        <div>
          <Image
            src="/Assets/moonrise.png"
            layout="fill"
            alt=""
            className=" absolute object-cover"
          />
        </div>
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-8xl font-bold">ABOUT ME</h1>
            <div className="flex flex-row items-center justify-center space-x-4 py-4">
              <div>Home</div>
              <div>About</div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <h1>Scroll Down</h1>
          </div>
        </div>
      </div>
      {/* main */}
      <div>This is the continuation</div>
    </div>
  );
};

export default About;
