import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MainHome = () => {
  return (
    <div className="flex flex-col text-white py-10 px-4 md:px-10 md:py-16">
      <div>
        {/* main */}
        <div className="relative z-10 w-full bg-blue-200 h-[80vh] flex flex-col items-center justify-center">
          <div className="absolute top-6 left-6">tl</div>
          <div className="absolute top-6 right-6">tr</div>
          <div className="absolute bottom-6 left-6">dl</div>
          <div className="absolute bottom-6 right-6 -z-10">dr</div>
          <div>
            <div>
              <h1>home</h1>
            </div>
          </div>
        </div>
        {/* Photography */}
        <div></div>
        {/* Videography */}
        <div></div>
        {/* Events */}
        <div></div>
        {/* Mentoring */}
        <div></div>
        {/* work Numberss */}
        <div></div>
      </div>
    </div>
  );
};

export default MainHome;
