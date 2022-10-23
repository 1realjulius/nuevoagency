import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewFooter = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 bg-white text-black px-4 py-2">
        <div className="col-span-2 flex flex-row items-center">
          {/* icon for Subscribe */}
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-24 md:w-40 md:h-40"
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
          <div className="bg-blue-200 p-2">
            <div>
              <h1>Get Our Pckages and Prices</h1>
            </div>
            <div className="">
              <label>
                <input
                  type="email"
                  name="Sunscribe_Email"
                  id=""
                  placeholder="Your Email"
                  className="bg-white text-black p-2"
                />
              </label>
              <div>
                <button type="submit">Submit</button>
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
        <div className="md:border-l-[3px] md:px-2">Contact Us</div>
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
