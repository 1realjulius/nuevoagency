import Image from "next/image";
import React from "react";

const NewHome = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-screen h-screen flex flex-col items-center">
        <div>aaaaa</div>
        <div className="absolute bottom-0">
          <div className="relative  w-[200px] h-[50px] px-4 ">
            <Image
              src="/Assets/bright-rain.png"
              width="50vh"
              height="50vh"
              layout="responsive"
              alt=""
              className=" absolute object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
