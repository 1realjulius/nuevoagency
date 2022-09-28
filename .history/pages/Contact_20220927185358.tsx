import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";

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
        <MainNavbar />
      </div>
      {/* main */}
      <div className="px-6 md:px-16 pt-16">
        {/* header */}
        <div className="h-[8vh] md:h-[20vh] w-full p-2">
          <h1 className="text-4xl md:pt-4 md:text-8xl md:pr-20 font-FredokaOneRegular pb-4">
            <span>Our </span>
            <span className="text-[#828282]">Contacts</span>
          </h1>
        </div>
        {/* Primary Services */}
        <div className="p-2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-1 flex flex-col ">
              <div>
                <h1 className="text-[#828282] text-lg md:text-xl">
                  Let's Goooo !
                </h1>
                <h1 className="text-xl md:text-5xl font-FredokaOneRegular">
                  Here at <span className="text-[#828282]">Nuevo Agency</span>{" "}
                  we offer these main services
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Services.map((service) => {
                  return (
                    <div key={service.id}>
                      <div className="pt-4 ">
                        <div className="">
                          <motion.img
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            src={service.img}
                            alt=""
                            className="object-cover h-[140px] w-[140px] md:h-[200px] md:w-[200px] rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="py-2">
                        <h1 className="flex flex-col md:flex-row md:space-x-2 font-FredokaOneRegular text-sm">
                          <span>Professional</span>
                          <span className="text-[#828282]">{service.name}</span>
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-5xl font-FredokaOneRegular py-2">
                Our Professional{" "}
                <span className="text-[#828282]">Services</span>
              </h1>{" "}
              <div className="py-1">
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">Lorem Ipsum </span>is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy.
                </h1>
              </div>
              <div className="py-1">
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">Lorem Ipsum </span>is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy.
                </h1>
              </div>
              <div className="py-1">
                <h1 className="text-lg md:text-2xl">
                  <span className="text-[#828282]">Lorem Ipsum </span>is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy.
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="grid md:grid-cols-3 py-10">
          <div className="md:col-span-2 py-2">
            <form action="submit" className="flex flex-col md:space-y-6">
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    className="border-b-2 border-[#828282] bg-white w-80 md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Contact Phone"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Budget"
                  />
                </div>
                <div>
                  <textarea
                    // id="Contact-v2-Info"
                    // name="Contact-v2-Info"
                    placeholder="Describe your project..."
                    maxLength={5000}
                    // data-name="Contact v2 Info"
                    className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[400px] p-2 pb-10 outline-none"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div>
                <div className="py-4 md:pt-0">
                  {" "}
                  <input
                    type="submit"
                    value="Submit Message"
                    data-wait="Please wait..."
                    // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                    className=" px-5 py-2 border-2 border-white rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-row py-2">
            <div className="">
              <h1 className="font-FredokaOneRegular text-4xl md:text-7xl  md:text-end">
                <span className="leading-none">Get Your</span>
                <br />
                <span className="text-[#828282]">Experience </span>
                <span className="leading-none">Captured Into</span>
                <br />
                <span className="text-[#828282]">A Memory</span>
              </h1>
              <h2 className="md:text-end md:py-2">
                We will respond to your message as soon as we get it.
              </h2>
            </div>
          </div>
        </div>
        {/* Agency Contact */}
        <div className="py-4">
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1">
              <h2 className="text-[#828282]">Mobile Number.</h2>
              <h1 className="font-FredokaOneRegular text-4xl md:text-7xl">
                +233 549 321 512
              </h1>
            </div>
            <div className="flex-1">
              <h2 className="text-[#828282]">Email Address.</h2>
              <h1 className="font-FredokaOneRegular text-3xl md:text-7xl">
                support@nuevo.com
              </h1>
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

export default Contact;
