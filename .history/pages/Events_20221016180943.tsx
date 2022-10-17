import React from "react";

const Events = () => {
  return (
    <div className="overflow-hidden">
      {/* ParentElement */}
      <main className="bg-purple-200 min-h-[100vh] min-w-[100vw] m-0 overflow-hidden">
        <div className="w-[100%] h-[100vh] snap-both snap-mandatory overflow-x-visible overflow-hidden flex">
          {/* childern */}
          <section className="bg-green-800 w-[100vw] h-[100vh] snap-start flex-none">
            page1
          </section>
          <section className="bg-pink-800 w-[100vw] h-[100vh] snap-start snap-y flex-none">
            page2
          </section>
          <section className="bg-blue-800 w-[100vw] h-[100vh] snap-start flex-none">
            page3
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;
