import React from "react";
import MainNavbar from "../components/MainNavbar";

const Photography = () => {
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* main */}
      <div className="flex flex-col items-center justify-center px-6 pt-20">
        {/* hero sec */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:py-20">
            <h1>Photography</h1>
            <h1 className="text-7xl text-center md:px-80">
              We Make Perfect Meories Out Of Your Experiences With Photos
            </h1>
          </div>
          <div>slider</div>
        </div>
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Photography;
