import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

export const [curVar, setCurVar] = useState("default");

export const Cursor = () => {
  useEffect(() => {
    const mouseMove = (movement: any) => {
      setMousePosition({
        x: movement.clientX,
        y: movement.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      {/* custom cursor */}
      <motion.div
        variants={variants}
        animate={curVar}
        className={`${
          curVar === "default"
            ? "bg-white h-3 w-3 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : curVar === "btnHover"
            ? "bg-blue-400 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : " bg-white h-24 w-24 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50 mix-blend-difference"
        }`}
      />
    </div>
  );
};

export const variants = {
  default: {
    x: mousePosition.x - 6,
    y: mousePosition.y - 6,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  text: {
    x: mousePosition.x - 48,
    y: mousePosition.y - 48,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  btnHover: {
    x: mousePosition.x - 10,
    y: mousePosition.y - 10,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
