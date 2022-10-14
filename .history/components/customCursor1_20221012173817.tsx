import React from "react";
import { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";

export default function CustomCursor1() {
  const mouse = useMousePosition(document.body);

  const x = mouse.x - 7;
  const y = mouse.y - 7;
  const opacity = mouse.state ? 1 : 0;
  const scale = mouse.state ? 1 : 0;

  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        height: "14px",
        width: "14px",
        backgroundColor: "#009EFF",
        borderRadius: "100px",
        pointerEvents: "none",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ x, y, opacity, scale }}
    />
  );
}

const CursorStyle = {
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  height: "14px",
  width: "14px",
  backgroundColor: "#009EFF",
  borderRadius: "100px",
  pointerEvents: "none",
};

function useIsClient() {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient;
}
const useMousePosition = (target: HTMLElement) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [state, setState] = useState(0);
  const onMove = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  const onEnter = () => {
    setState(1);
  };
  const onLeave = () => {
    setState(0);
  };
  useEvent(target, "mousemove", onMove);
  useEvent(target, "mouseenter", onEnter);
  useEvent(target, "mouseleave", onLeave);
  return { x, y, state };
};
