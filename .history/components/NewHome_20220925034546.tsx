import Image from "next/image";
import React from "react";

const NewHome = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative min-w-screen min-h-screen flex flex-col items-center">
        <div>aaaaa</div>
        <div className="absolute bottom-0">
          <div className="relative  w-[200px] h-[100px] px-4 ">
            <Image
              src="/Assets/bright-rain.png"
              width="200px"
              height="400px"
              layout="responsive"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
