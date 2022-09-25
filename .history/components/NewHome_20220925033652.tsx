import Image from "next/image";
import React from "react";

const NewHome = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-screen h-screen flex flex-col items-center">
        <div>aaaaa</div>
        <div>
          <div className="relative w-[50vh] h-[50vh]">
            <Image
              src="/Assets/bright-rain.png"
              layout="fill"
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
