import Image from "next/image";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* navbar */}
      <div className="sticky top-0 z-50">
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
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                Home
              </div>
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                About
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 px-5 py-2 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
            <h1>Scroll Down</h1>
          </div>
        </div>
      </div>
      {/* main */}
      <div>
        {/* feature Section lets chat */}
        <div className="z-20 min-h-screen min-w-full">
          <div className="ites-center justify-center flex flex-row pt-40 px-4">
            <div className="flex flex-1 items-center justify-center">
              <div className="px-40">
                <h1 className="text-3xl">
                  Welcome to nuevo Agency hereCerte, inquam, pertinax non
                  provident, similique sunt in malis dolor, non intellegamus, tu
                  paulo ante cum soluta nobis est consecutus?
                </h1>
                <div></div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">hello</div>
          </div>
        </div>
        {/*Message from editor feature Section 1 */}
        <div></div>
        {/*Request a quota feature Section 1 */}
        <div></div>
        {/* simple testimonial feature Section */}
        <div></div>
        {/* what i do feature Section */}
        <div></div>
        {/* projects completed and happy clients feature Section */}
        <div></div>
        {/* start contact us feature Section 1 */}
        <div></div>
        {/* instagram feature Section 1 */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
