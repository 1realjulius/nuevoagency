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
            <form action="submit">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Full name</span>
                  <input
                    type="text"
                    className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                    placeholder=""
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Email address</span>
                  <input
                    type="email"
                    className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                    placeholder="john@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">When is your event?</span>
                  <input
                    type="date"
                    className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">
                    What type of event is it?
                  </span>
                  <select
                    className="
                    block
                    w-full
                    mt-0
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  >
                    <option>Corporate event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Additional details</span>
                  <textarea
                    className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                    rows={2}
                  ></textarea>
                </label>
                <div className="block">
                  <div className="mt-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="
                          border-gray-300 border-2
                          text-black
                          focus:border-gray-300 focus:ring-black
                        "
                        />
                        <span className="ml-2">
                          Email me news and special offers
                        </span>
                      </label>
                    </div>
                  </div>
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
