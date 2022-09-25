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
            <h1 className="text-5xl md:text-8xl font-bold">GET IN TOUCH</h1>
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
      <div className="py-20 md:px-40">
        {/* lets work together */}
        <div className="flex flex-col items-center justify-center md:px-40">
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
              className="border-b bg-inherit w-80 md:w-[400px] p-2 outline-none"
              // maxLength={256}
              placeholder="Your name"
            />
            <input
              type="email"
              className="border-b bg-inherit w-80 md:w-[400px] p-2 outline-none"
              // maxLength={256}
              placeholder="Email Address"
            />
            <input
              type="number"
              className="border-b bg-inherit w-80 md:w-[400px] p-2 outline-none"
              // maxLength={256}
              placeholder="Contact Phone"
            />
            <input
              type="text"
              className="border-b bg-inherit w-80 md:w-[400px] p-2 outline-none"
              // maxLength={256}
              placeholder="Budget"
            />
            <textarea
              // id="Contact-v2-Info"
              // name="Contact-v2-Info"
              placeholder="Describe your project..."
              maxLength={5000}
              // data-name="Contact v2 Info"
              className="border-b bg-inherit w-80 md:w-[400px] p-2 pb-10 outline-none"
              spellCheck="false"
            />
            <input
              type="submit"
              value="Submit Message"
              data-wait="Please wait..."
              // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
              className=" px-5 py-2 border-2 border-white rounded-full"
            />
          </form>
        </div>
        {/* contact info */}
        <div className="">
          <div className="flex flex-col items-center justify-center p-4 border-2">
            <p>Call Me</p>
            <h1>(+233) 549321512</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Call Me</p>
            <h1>(+233) 549321512</h1>
          </div>
        </div>
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Contact;
