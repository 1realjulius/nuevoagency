import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

const MainFooter = () => {
  return (
    <div className="  md:px-10">
      {/* call to action section */}
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="bg-white w-[90vw] md:w-[40vw] relative text-black flex flex-col p-4 rounded-xl">
          <div className="absolute -top-4 -right-2">
            <span className="p-1 bg-white rounded-full">
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </span>
          </div>
          <div>
            <h1>jbassjdj</h1>
          </div>
          <div className="">haa</div>
        </div>
      </div>
      {/* footer itseelf */}
      <div className="px-6 py-4 hidden">
        <div className="grid md:grid-cols-3">
          <div>
            <div>
              <Link href="/">
                <div className="relative w-[140px] h-[44px] cursor-pointer">
                  <Image
                    src="/Assets/logowhite.svg"
                    layout="fill"
                    alt=""
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="px-2">
              <div className="py-2">
                <Link href="#">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    email@email.com
                  </h1>
                </Link>
              </div>
              <div className="py-2">
                <Link href="#">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    0549321512
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-6 pt-2">
              <div className="p-2 bg-white text-black rounded-full ">
                <Link href="#">
                  <div>
                    <Instagram className="w-6 h-6 " />
                  </div>
                </Link>
              </div>
              <div className="p-2 bg-white text-black rounded-full flex flex-col items-center justify-center">
                <Link href="#">
                  <div>
                    <Twitter className="w-6 h-6 " />
                  </div>
                </Link>
              </div>
              <div className="p-2 bg-white text-black rounded-full flex flex-col items-center justify-center">
                <Link href="#">
                  <div>
                    <Facebook className="w-6 h-6 " />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="md:grid md:grid-cols-2">
              <div className="py-6 md:py-2">
                <div className="cursor-pointer">
                  <Link href="/">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">Home</h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Services">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        Services
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/About">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        About Us
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Contact">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        Contact
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="py-6 md:py-2">
                <div className="cursor-pointer">
                  <Link href="/Photography">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        Photography
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Videography">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        Videography
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Events">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">Events</h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Mentoring">
                    <div>
                      <h1 className="text-4xl md:text-4xl font-bold">
                        Mentoring
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:justify-between pt-4 text-gray-600">
          <p>© 2022 Nuevo Agency.</p>
          <p>Terms & Conditions. Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
