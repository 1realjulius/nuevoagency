import Image from "next/image";
import React from "react";

const NewHome = () => {
  return (
    <div className="bg-black/50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative min-w-screen min-h-screen flex flex-col items-center">
        <div className="absolute bottom-40 z-20">
          <div>hadf</div>
        </div>
        <div className="absolute top-40 z-20">
          <div>hadf</div>
        </div>
        <div className="absolute bottom-10 z-0">
          <div className="relative w-[90vw] h-[60vh] flex flex-col items-center justify-center">
            <div className="relative w-[90vw] h-[60vh]">
              <Image
                src="/Assets/floss.png"
                layout="fill"
                priority
                alt=""
                className="absolute object-cover rounded-xl"
              />
            </div>
            <div className="bg-white px-5 py-3 rounded-full absolute -top-8 -right-2 shadow-lg">
              <h1>btn</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
