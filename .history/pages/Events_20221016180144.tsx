import React from "react";

const Events = () => {
  return (
    <div className="overflow-hidden">
      {/* ParentElement */}
      <body className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0 overflow-hidden">
        <div className="w-[100%] h-[100vh] snap-x snap-mandatory overflow-x-scroll overflow-hidden flex">
          {/* childern */}
          <div className="bg-green-800 w-[100vw] h-[100vh] snap-start flex-none">
            page1
          </div>
          <div className="bg-pink-800 w-[100vw] h-[100vh] snap-end flex-none">
            page2
          </div>
          <div className="bg-blue-800 w-[100vw] h-[100vh] snap-end flex flex-col">
            <div className="bg-indigo-200 text-white w-[100vw] h-[100vh] flex-none">
              joy
            </div>
            <div className="bg-blue-400 text-white w-[100vw] h-[100vh]">
              joy
            </div>
            <div className="bg-black text-white w-[100vw] h-[100vh]">joy</div>
            <div className="bg-black text-white w-[100vw] h-[100vh]">joy</div>
            <div className="bg-black text-white w-[100vw] h-[100vh]">joy</div>
            <div className="bg-black text-white w-[100vw] h-[100vh]">joy</div>
            <div className="bg-black text-white w-[100vw] h-[100vh]">joy</div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Events;
