import type { ComponentType } from "react";
import { useState } from "react";
// import { useMeasuredSize } from "https://framer.com/m/framer/useMeasuredSize.js"

import {
  motionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  transform,
} from "framer-motion";

// Create motionValues to keep track of the mouse position that can be shared across the two overrides
// Value ranges from 0 to 1
const mouseX = motionValue(0.5);
const mouseY = motionValue(0.5);

// Apply this override to the mouse over area
export function withMouseOverArea(Component: any): ComponentType {
  return (props: any) => {
    /* State */
    const [frame, setFrame] = useState({
      width: 800,
      height: 800,
      top: 0,
      left: 0,
    });

    /* Convert cursor position values */
    const convertCursorPosition = (e: any) => {
      mouseX.set((e.nativeEvent.clientX - frame.left) / frame.width);
      mouseY.set((e.nativeEvent.clientY - frame.top) / frame.height);
    };

    /* On Mouse Enter, get object frame and convert values */
    const handleMouseEnter = (e: any) => {
      const currentElement = e.target.getBoundingClientRect();

      setFrame({
        width: currentElement.width,
        height: currentElement.height,
        top: currentElement.top,
        left: currentElement.left,
      });

      convertCursorPosition(e);
    };

    /* On Mouse Move, convert values */
    const handleMouseMove = (e: any) => {
      convertCursorPosition(e);
    };

    /* On Mouse Leave, reset */
    const handleMouseLeave = (e: any) => {
      mouseX.set(0.5);
      mouseY.set(0.5);
    };

    return (
      <Component
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    );
  };
}

// Apply this override to object you want to animate
export function withMagnetic(Component: any): ComponentType {
  return (props: any) => {
    /* Constants */
    // Customize these to change the intensity of the transforms and the bounciness of the animations.
    const rotateValue = 10;
    const transformValue = rotateValue * 2;
    const springValue = { stiffness: 300, damping: 30 };

    /* Convert mouse position values */
    const targetRotateX = useTransform(
      mouseY,
      [0, 1],
      [rotateValue, -rotateValue]
    );
    const targetRotateY = useTransform(
      mouseX,
      [0, 1],
      [-rotateValue, rotateValue]
    );
    const targetX = useTransform(
      mouseX,
      [0, 1],
      [-transformValue, transformValue]
    );
    const targetY = useTransform(
      mouseY,
      [0, 1],
      [-transformValue, transformValue]
    );
    const targetShadowX = useTransform(mouseX, [0, 1], [20, -20]);
    const targetShadowY = useTransform(mouseY, [0, 1], [60, 20]);

    /* UseSpring MotionValues */
    const rotateX = useSpring(targetRotateX, springValue);
    const rotateY = useSpring(targetRotateY, springValue);
    const x = useSpring(targetX, springValue);
    const y = useSpring(targetY, springValue);
    const shadowX = useSpring(targetShadowX, springValue);
    const shadowY = useSpring(targetShadowY, springValue);

    /* MotionTemplate for shadow property */
    /* With useMotionTemplate, you can use MotionValues (and thus, useSpring) within strings. This is useful for animating and interpolating properties like Drop Shadow, Box Shadow, Gradients, and many more. */
    const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.25))`;

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          x,
          y,
          rotateX,
          rotateY,
          filter,
          perspective: 1200,
        }}
      />
    );
  };
}
