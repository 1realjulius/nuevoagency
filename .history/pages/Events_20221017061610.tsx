import React from "react";
import ComingSoon from "../components/ComingSoon";

const Events = () => {
  return (
    <div className="">
      {/* ParentElement */}
      <body className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0">
        <div className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
          {/* childern */}
          <div className="bg-green-800 w-[100vw] h-[100vh] snap-start">
            <ComingSoon />
          </div>
          <div className="bg-pink-800 w-[100vw] h-[100vh] snap-start ">
            page2
          </div>
          <div className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </div>
        </div>
      </body>
    </div>
  );
};

export default Events;
