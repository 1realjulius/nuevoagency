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
        <div className="absolute flex-col flex- min-h-screen min-w-screen items-center justify-center">
          <h1 className="text-8xl font-bold">ABOUT ME</h1>
          <div>
            <div>
              <h1>Home</h1>
            </div>
            <div>
              <h1>About</h1>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div>This is the continuation</div>
    </div>
  );
};

export default About;