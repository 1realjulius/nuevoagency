import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewFooter = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 bg-white text-black px-4 py-2">
        <div className="col-span-2">Subscribe</div>
        <div className="md:border-l-[3px] ">Contact Us</div>
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
