import React from "react";

const Events = () => {
  return (
    <div className="min-h-screen min-w-full">
      {/* ParentElement */}
      <div className="bg-purple-200 w-[100%] h-[100vh]">
        {/* childern */}
        <div className="bg-green-200 w-[100vw] h-[100ch]">page1</div>
      </div>
    </div>
  );
};

export default Events;
