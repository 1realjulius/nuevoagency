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
        {/* header */}
        <div className="flex flex-row py-2">
          <div className="">
            <h1 className="text-4xl md:text-7xl  md:text-start">
              <span className="leading-none">Get Your </span>
              <span className="text-[#828282]">Best Experiences </span>
              <br />
              <span className="leading-none">Made into </span>
              <span className="text-[#828282]">Awsome Memories</span>
            </h1>
            <h2 className="md:py-2">
              We will respond to your message as soon as we get it.
            </h2>
          </div>
        </div>

        {/* contact form */}
        <div className=" py-16 text-lg">
          <div className="md:col-span-2 py-2">
            <form action="submit" className="flex flex-col md:space-y-6">
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    className="border-b-2 border-[#828282] bg-inherit w-full rounded-none md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="border-b-2 border-[#828282] bg-inherit w-full rounded-none md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="border-b-2 border-[#828282] bg-inherit w-full rounded-none md:w-[400px] p-2 outline-none"
                    // maxLength={256}
                    placeholder="Contact Phone"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border-b-2 border-[#828282] bg-inherit w-full rounded-none md:w-[400px] p-2 outline-none"
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
                    className="border-b-2 border-[#828282] bg-inherit w-full rounded-none md:w-[400px] p-2 pb-10 outline-none"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div>
                <div className="py-4 md:pt-0">
                  {" "}
                  <input
                    type="submit"
                    value="Book A Shoot"
                    data-wait="Sending Please wait..."
                    // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                    className=" px-5 py-2 border-2 border-white rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Agency Contact */}
        <div className="py-10 pb-20">
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1 py-2">
              <h2 className="text-[#828282]">Mobile Number.</h2>
              <Link href="tel:+233549321512">
                <h1 className="font-FredokaOneRegular text-4xl md:text-7xl cursor-pointer">
                  +233 549 321 512
                </h1>
              </Link>
            </div>
            <div className="flex-1 py-2">
              <h2 className="text-[#828282]">Email Address.</h2>
              <Link href="mailto:support@nuevo.com?subject=Booking A Shoot.">
                <h1 className="font-FredokaOneRegular text-3xl md:text-7xl cursor-pointer">
                  support@nuevo.com
                </h1>
              </Link>
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
