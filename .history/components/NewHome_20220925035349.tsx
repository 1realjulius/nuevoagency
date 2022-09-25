import Image from "next/image";
import React from "react";

const NewHome = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative min-w-screen min-h-screen flex flex-col items-center">
        <div>aaaaa</div>

        <div className="absolute right-4">btn</div>
        <div className="absolute bottom-10">
          <div className="relative w-[90vw] h-[60vh] flex flex-col items-center justify-center bg-blue-300">
            <Image
              src="/Assets/bright-rain.png"
              layout="fill"
              alt=""
              className="absolute object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
