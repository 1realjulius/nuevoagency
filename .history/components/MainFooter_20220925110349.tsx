import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

const MainFooter = () => {
  return (
    <div className="">
      {/* call to action section */}
      <div className="px-4">
        <div className="flex relative flex-row items-center justify-center min-h-[200px] py-20">
          <div>
            <h1 className="text-9xl md:text-[220px] leading-none font-bold text-gray-400/10">
              START
            </h1>
          </div>
          <div className="absolute items-center justify-center flex flex-col">
            <p className="text-base text-gray-400">Are you ready to</p>
            <h1 className="text-3xl md:text-7xl font-bold pb-4 pt-2 text-center">
              CAPTURE YOUR BEST{" "}
              <span className="text-yellow-600">EXPERIENCES</span>{" "}
              <br className="hidden md:block" /> AND MAKE THEM{" "}
              <span className="text-yellow-600">MEMORIES</span>
            </h1>
            <div className="px-4 py-2 bg-white rounded-full text-black cursor-pointer">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      {/* footer itseelf */}
      <div className="px-6">
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
                  <h1 className="text-xl md:text-2xl">email@email.com</h1>
                </Link>
              </div>
              <div className="py-2">
                <Link href="#">
                  <h1 className="text-xl md:text-2xl">0549321512</h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-6 pt-2">
              <div className="p-2 bg-white text-black rounded-full ">
                <Link href="#">
                  <div>
                    <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
              </div>
              <div className="p-2 bg-white text-black rounded-full flex flex-col items-center justify-center">
                <Link href="#">
                  <div>
                    <Twitter className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
              </div>
              <div className="p-2 bg-white text-black rounded-full flex flex-col items-center justify-center">
                <Link href="#">
                  <div>
                    <Facebook className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="md:grid md:grid-cols-2">
              <div className="">
                <div className="cursor-pointer">
                  <Link href="/">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">Home</h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Services">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">
                        Services
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/About">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">
                        About Us
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Contact">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">Contact</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="py-6">
                <div className="cursor-pointer">
                  <Link href="/Photography">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">
                        Photography
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Videography">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">
                        Videography
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Events">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">Events</h1>
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Mentoring">
                    <div>
                      <h1 className="text-xl md:text-6xl font-bold">
                        Mentoring
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
