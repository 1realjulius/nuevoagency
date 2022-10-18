import React from "react";
import ComingSoon from "../components/ComingSoon";

const Events = () => {
  return (
    <div className="">
      {/* ParentElement */}
      <main className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0">
        <section className="w-[100%] h-[100vh] snap-y snap-mandatory overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
          {/* childern */}
          <section className="bg-green-800 w-[100vw] h-[100vh] snap-start">
            <ComingSoon />
          </section>
          <section className="bg-pink-800 w-[100vw] h-[100vh] snap-start ">
            page2
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start ">
            page3
          </section>
        </section>
      </main>
    </div>
  );
};

export default Events;
