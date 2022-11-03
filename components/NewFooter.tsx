import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NewFooter = () => {
  const [SubscriberEmail, setSubscriberEmail] = useState();

  return (
    <div className="-z-10 flex flex-col ">
      <div className="bg-white pt-2 text-black flex flex-row justify-between px-4 z-20 border-t-2">
        <div>
          <Link href="/">
            <div className="flex flex-row items-center cursor-pointer">
              <span className="text-lg">©</span>
              <span className="mb-[2px]">
                <span className="">
                  <span className="relative">
                    <Image
                      src="/Assets/footerlogo.png"
                      width="102"
                      height="20"
                      alt=""
                      className="object-contain"
                    />
                  </span>
                </span>
              </span>
              <span className="">• 2022</span>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="#">
            <h1 className="cursor-pointer">Terms & Conditions</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
