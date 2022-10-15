import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";

const Contact = () => {
  const formCheckBoxBata = ["joy"];
  const [checkWeddingActive, setCheckWeddingActive] = useState(false);
  const [checkGraduationActive, setCheckGraduationActive] = useState(false);
  const [checkBirthdayActive, setCheckBirthdayActive] = useState(false);

  const checkWedding = () => {
    if (checkWeddingActive === false) {
      formCheckBoxBata.push("wedding");
      setCheckWeddingActive(true);
    } else {
      setCheckWeddingActive(false);
    }
  };
  const checkGraduation = () => {
    if (checkGraduationActive === false) {
      formCheckBoxBata.push("wedding");
      setCheckGraduationActive(true);
    } else {
      setCheckGraduationActive(false);
    }
  };
  const checkBirthday = () => {
    if (checkBirthdayActive === false) {
      formCheckBoxBata.push("wedding");
      setCheckBirthdayActive(true);
    } else {
      setCheckBirthdayActive(false);
    }
  };
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white font-FredokaOneRegular">
      {/* navbar */}
      <div className="sticky top-0 z-50 hidden">
        <NavBar />
      </div>
      {/* main */}
      <div className="px-4 md:px-40 md:pt-20 pt-16">
        {/* Hero text */}
        <div className="py-10">
          <div className="py-4">
            <h1 className="py-4 text-4xl md:text-7xl">
              <span>Hey! Tell Us </span> <br />
              <span>Everything</span>
            </h1>
          </div>
        </div>
        {/* interested Services */}
        <div className="flex flex-col items-start justify-start">
          <div>
            <h1 className="text-3xl text-[#828282]">I'm Interested in...</h1>
          </div>
          {/* checkboxes */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4">
            {/* checkbox */}
            <div
              onClick={checkWedding}
              className={`${
                checkWeddingActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Wedding</h1>
            </div>
            {/* checkbox */}
            <div
              onClick={checkGraduation}
              className={`${
                checkGraduationActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Graduations</h1>
            </div>
            {/* checkbox */}
            <div
              onClick={checkBirthday}
              className={`${
                checkBirthdayActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Birthday</h1>
            </div>
          </div>
        </div>
        {/* Main form */}
        <div>
          <div>
            <form
              action="submit"
              className="flex flex-col md:space-y-6 text-3xl "
            >
              <div className="py-6">
                <input
                  type="text"
                  className="border-b-[3px] border-[#828282] bg-inherit w-80 md:w-[70vw] p-2 md:py-4 outline-none placeholder:text-[#828282]"
                  // maxLength={256}
                  placeholder="Your name"
                />
              </div>
              <div className="py-6">
                <input
                  type="email"
                  className="border-b-[3px] border-[#828282] bg-inherit w-80 md:w-[70vw] p-2 outline-none placeholder:text-[#828282]"
                  // maxLength={256}
                  placeholder="Your Email"
                />
              </div>
              <div className="py-6">
                <input
                  type="number"
                  className="border-b-[3px] border-[#828282] bg-inherit w-80 md:w-[70vw] p-2 outline-none placeholder:text-[#828282]"
                  // maxLength={256}
                  placeholder="Your Contact Phone"
                />
              </div>
              <div className="py-6">
                <textarea
                  // id="Contact-v2-Info"
                  // name="Contact-v2-Info"
                  placeholder="Describe your project..."
                  maxLength={5000}
                  // data-name="Contact v2 Info"
                  className="border-b-[3px] border-[#828282] bg-inherit w-84 md:w-[70vw] p-2 outline-none placeholder:text-[#828282]"
                  spellCheck="false"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div>
                  <h1 className="text-3xl text-[#828282]">Project Budget...</h1>
                </div>
                {/* checkboxes */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4 text-base">
                  {/* checkbox */}
                  <div
                    onClick={checkWedding}
                    className={`${
                      checkWeddingActive
                        ? "flex flex-col items-center bg-white text-black rounded-full px-5 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <h1>Wedding</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-6 md:pt-0 text-base">
                  <input
                    type="submit"
                    value="Submit Message"
                    data-wait="Please wait..."
                    // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                    className=" px-6 py-4 border-2 border-white rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default Contact;
