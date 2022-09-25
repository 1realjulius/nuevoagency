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
        <div>
          <div>
            <h1>Photography</h1>
            <h1 className="text-7xl">
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
