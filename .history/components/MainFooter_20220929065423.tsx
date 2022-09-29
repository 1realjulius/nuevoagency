import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";

const MainFooter = () => {
  return (
    <div className="relative font-FredokaOneRegular">
      {/* footer itseelf */}
      <div className="px-6 py-4 pt-8 md:pt-20 flex flex-col bg-[#242424]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-2">
            {/* logo */}
            <div className="py-4">
              <Link href="/">
                <div className="md:hidden relative w-[44px] h-[44px] cursor-pointer">
                  <Image
                    src="/Assets/NuevoLogosm.png"
                    layout="fill"
                    alt=""
                    className=""
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="hidden md:block relative w-[180px] h-[70px] cursor-pointer">
                  <Image
                    src="/Assets/white.png"
                    layout="fill"
                    alt=""
                    className=""
                  />
                </div>
              </Link>
            </div>
            {/* socials */}
            <div className="flex flex-row items-center space-x-4">
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Facebook className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Instagram className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="bg-white p-2 hover:bg-[#828282] cursor-pointer text-black hover:text-white rounded-full">
                    <Twitter className=" w-8 h-8" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* navlinks */}
          <div className="flex flex-col font-FredokaOneRegular">
            <div className="flex flex-row space-x-4 py-2 md:items-end md:justify-end">
              <div className="cursor-pointer">
                <Link href="/About">
                  <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                    About
                  </h1>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/Contact">
                  <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                    Contact
                  </h1>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:items-end">
              <div className="flex flex-row md:items-end space-x-4 py-2">
                <div className="cursor-pointer">
                  <Link href="/Photography">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Photography
                    </h1>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Videography">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Videography
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-center  space-x-4 py-2">
                <div className="cursor-pointer">
                  <Link href="/Events">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Events
                    </h1>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/Mentoring">
                    <h1 className="text-2xl md:text-5xl hover:text-[#828282]">
                      Mentoring
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:justify-between pt-4 text-[#828282] font-FredokaOneRegular">
          <p>© 2022 Nuevo Agency.</p>
          <p>Terms & Conditions. Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
