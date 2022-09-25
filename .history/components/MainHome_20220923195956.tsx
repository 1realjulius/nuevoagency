import Image from "next/image";
import React from "react";

const MainHome = () => {
  return (
    <div>
      {/* photography section */}
      <div>
        <div className="">
          <div className="relative w-screen h-screen">
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className=" absolute object-cover"
            />
          </div>
        </div>
      </div>
      {/* Videography section */}
      <div>
        <div className="">
          <div className="relative w-screen h-screen">
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className=" absolute object-cover"
            />
          </div>
        </div>
      </div>
      {/* Events section */}
      <div></div>
      {/* Mentoring section */}
      <div></div>
      {/* Call to action */}
      <div></div>
    </div>
  );
};

export default MainHome;
