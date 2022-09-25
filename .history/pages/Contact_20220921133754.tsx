import Image from "next/image";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const Contact = () => {
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* Header */}
      <div className="z-10 relative min-h-screen min-w-screen">
        <div>
          <Image
            src="/Assets/floss.png"
            layout="fill"
            alt=""
            className=" absolute object-cover"
          />
        </div>
        <div className="absolute flex min-h-screen min-w-full items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-6xl md:text-8xl font-bold">GET IN TOUCH</h1>
            <div className="flex flex-row items-center justify-center space-x-4 py-4">
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                Home
              </div>
              <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
                Contact
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 px-5 py-2 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
            <h1>Scroll Down</h1>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="py-20 px-40">
        {/* lets work together */}
        <div className="flex flex-col items-center justify-center px-40">
          <h1 className="text-4xl pb-4">Let's Work Together</h1>
          <p className="text-xl text-center">
            Certe, inquam, pertinax non emolumento aliquo, sed quia dolor sit,
            aspernatur aut fugiat. Ut placet, inquam tum dicere exorsus est
            primum.
          </p>
        </div>
        {/* contacct form */}
        <div className="py-10 flex flex-row justify-center items-center">
          <form action="submit" className="flex flex-col space-y-6">
            <input
              type="text"
              className="border-b bg-inherit text-black w-80 p-2 active:border-none"
              // maxLength={256}
              placeholder="Your name"
            />
            <input
              type="email"
              className="border-b bg-inherit text-black w-80 p-2"
              // maxLength={256}
              placeholder="Email Address"
            />
            <input
              type="number"
              className="border-b bg-inherit text-black w-80 p-2"
              // maxLength={256}
              placeholder="Contact Phone"
            />
            <input
              type="text"
              className="border-b bg-inherit text-black w-80 p-2"
              maxLength={5000}
              placeholder="Contact Phone"
            />
          </form>
        </div>
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Contact;
