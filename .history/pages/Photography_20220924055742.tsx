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
      <div>
        {/* hero sec */}
        <div>
          <div>
            <h1>Photography</h1>
            <h1>We Make Perfect Meories Out Of Your Experiences With Photos</h1>
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
