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
      <div className="px-4 md:px-16 md:pt-20 scroll-m-1 pt-16">
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
              <h2 className="text-[#828282] flex flex-row items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </span>
                <span>Mobile Number.</span>
              </h2>
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
