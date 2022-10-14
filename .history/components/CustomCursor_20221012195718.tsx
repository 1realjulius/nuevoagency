import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
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
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
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

  const [curVar, setCurVar] = useState("default");
  const textEnter = () => setCurVar("text");
  const textLeave = () => setCurVar("default");
  const btnEnter = () => setCurVar("btnHover");
  const btnLeave = () => setCurVar("default");
  return (
    <div>
      {/* custom cursor */}
      <motion.div
        variants={variants}
        animate={curVar}
        className={`${
          curVar === "default"
            ? "bg-white h-2 w-2 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : curVar === "btnHover"
            ? "bg-blue-400 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50"
            : " bg-white h-24 w-24 rounded-full fixed top-0 left-0 pointer-events-none hidden md:block z-50 mix-blend-difference"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
