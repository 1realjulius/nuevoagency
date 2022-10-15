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
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/* main */}
      <div className="px-4 md:px-16 md:pt-20 pt-16">
        {/* Hero text */}
        <div>
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
            <h1>I'm Interested in...</h1>
          </div>
          {/* checkboxes */}
          <div className="grid grid-col-3 md:grid-cols-5 gap-2 py-4">
            {/* checkbox */}
            <div
              onClick={checkWedding}
              className={`${
                checkWeddingActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-white border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Wedding Shoot</h1>
            </div>
            {/* checkbox */}
            <div
              onClick={checkGraduation}
              className={`${
                checkGraduationActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-white border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Graduation Shoot</h1>
            </div>
            {/* checkbox */}
            <div
              onClick={checkBirthday}
              className={`${
                checkBirthdayActive
                  ? "flex flex-col items-center bg-white text-black rounded-full px-4 py-3"
                  : "flex flex-col items-center border-white border-2 rounded-full px-4 py-3"
              }`}
            >
              <h1>Birthday Shoot</h1>
            </div>
          </div>
        </div>
        {/* Main form */}
        <div>
          <div>
            <form action="submit" className="flex flex-col md:space-y-6">
              <input
                type="text"
                className="border-b-2 border-[#828282] bg-white bg-inherit w-80 md:w-[400px] p-2 outline-none"
                // maxLength={256}
                placeholder="Your name"
              />
              <input
                type="email"
                className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[40vw] p-2 outline-none"
                // maxLength={256}
                placeholder="Your Email"
              />

              <input
                type="number"
                className="border-b-2 border-[#828282] bg-inherit w-80 md:w-[400px] p-2 outline-none"
                // maxLength={256}
                placeholder="Your Contact Phone"
              />
              <textarea
                // id="Contact-v2-Info"
                // name="Contact-v2-Info"
                placeholder="Describe your project..."
                maxLength={5000}
                // data-name="Contact v2 Info"
                className="border-b-2 border-[#828282] bg-inherit w-84 md:w-[400px] p-2 pb-10 outline-none"
                spellCheck="false"
              />
              <div>
                <div className="py-4 md:pt-0">
                  {" "}
                  <input
                    type="submit"
                    value="Submit Message"
                    data-wait="Please wait..."
                    // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                    className=" px-5 py-2 border-2 border-white rounded-full cursor-pointer"
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
