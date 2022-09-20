import React, { useState } from "react";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false); //initial stage
  return (
    <nav>
      <div className="w-11/12 flex justify-end items-center">
        <div
          className="group z-50 relative w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* the btn */}
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
