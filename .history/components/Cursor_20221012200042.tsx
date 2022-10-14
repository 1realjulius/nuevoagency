import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

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

  return <div>Cursor</div>;
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
