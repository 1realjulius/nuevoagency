import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NewFooter = () => {
  const [SubscriberEmail, setSubscriberEmail] = useState();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-white text-black px-2 pt-2 md:py-2">
        {/* email Subscribe */}
        <div className="col-span-3 flex flex-row items-center md:border-b-0 border-b-[3px] md:py-4">
          {/* icon for Subscribe */}
          <div className="hidden md:flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-24 md:w-44 md:h-44"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </span>
          </div>
          {/* Sunscribe Form */}
          <div className="p-2 w-full md:w-[50%] items-start">
            <div className="py-2">
              <h1 className="text-2xl">Get Our Pckages and Prices</h1>
            </div>
            <div className="flex flex-col md:flex-row ">
              {/* user Email */}
              <div className="flex flex-row items-center text-lg w-full md:w-[70vw] rounded-lg">
                <input
                  type="email"
                  name="SenderEmail"
                  onChange={(event: any) => {
                    setSubscriberEmail(event.target.value);
                  }}
                  className="w-full p-2 py-3 outline-none bg-[#E5E7EB] placeholder:text-black md:rounded-l-lg md:rounded-r-none rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="py-1 my-2 md:my-0 flex flex-col ">
                <button
                  type="submit"
                  className="py-3 px-5 w-full md:w-fit bg-black text-white md:rounded-r-lg md:rounded-l-none rounded-lg text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="px-2 text-sm text-[#828282] py-2">
              <h1>
                <span>By Booking You Have Agreed To Our </span>
                <br />
                <span className="text-black">Terms & Agreements </span>
                <span>and </span>
                <span className="text-black">Privacy Policy</span>
              </h1>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="col-span-2 md:border-l-[3px] p-2 flex flex-col w-full md:px-2 md:pt-2">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="px-2 py-2">
              <h1 className="text-3xl md:text-6xl">Have An Event !</h1>
            </div>
            <div className="flex flex-row space-x-2 items-center px-2 py-2">
              <h1 className="text-sm">
                <span>• Wedding </span>
                <span className="text-[#828282]">Shoot</span>
              </h1>
              <h1 className="text-sm md:text-sm">
                <span>• Graduations </span>
              </h1>
              <h1 className="text-sm md:text-sm">
                <span>• Birthday </span>
                <span className="text-[#828282]">Shoot</span>
              </h1>
            </div>
            <div className="bg-[#E5E7EB] w-full p-2 rounded-lg text-[#828282] hover:text-black cursor-pointer">
              <Link href="/Contact">
                <div className="md:py-4 py-2 flex flex-row items-center justify-between">
                  <h1 className="text-xl md:text-2xl ">
                    <span>Tell Us About It</span>
                  </h1>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 md:w-10 md:h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-2 md:pt-4 md:py-4 text-black flex flex-row justify-between px-4 z-20 border-t-2">
        <div>
          <Link href="/">
            <div className="flex flex-row items-center cursor-pointer">
              <span className="text-lg pb-1">©</span>
              <span>
                <span className="">
                  <span className="relative">
                    <Image
                      src="/Assets/footerlogo.png"
                      width="102px"
                      height="20px"
                      alt=""
                      className="object-contain"
                    />
                  </span>
                </span>
              </span>
              <span className="pb-1">• 2022</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="#">
            <h1 className="cursor-pointer">Terms & Conditions</h1>
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="#">
            <h1 className="cursor-pointer text-[#828282] ">T&C</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
