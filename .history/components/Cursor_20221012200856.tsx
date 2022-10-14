import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const [newMousePosition, setNewMousePosition] = useState({
  x: 0,
  y: 0,
});

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (movement: any) => {
      setMousePosition({
        x: movement.clientX,
        y: movement.clientY,
      });
      setNewMousePosition({
        x: movement.clientX,
        y: movement.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const [curVar, setCurVar] = useState("default");

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
    x: newMousePosition.x - 6,
    y: newMousePosition.y - 6,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  text: {
    x: newMousePosition.x - 48,
    y: newMousePosition.y - 48,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  btnHover: {
    x: newMousePosition.x - 10,
    y: newMousePosition.y - 10,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
