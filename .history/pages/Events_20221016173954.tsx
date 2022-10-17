import React from "react";

const Events = () => {
  return (
    <div className="">
      {/* ParentElement */}
      <body className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0">
        <div className="w-[100%] h-[100vh]">
          {/* childern */}
          <div className="bg-green-200 w-[100%] ">page1</div>
        </div>
      </body>
    </div>
  );
};

export default Events;
