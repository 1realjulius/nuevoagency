import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Instagram } from "react-feather";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

const Contact = () => {
  const formCheckBoxBata = ["joy"];
  const [isSent, setIsSent] = useState(false);
  const [checkWeddingActive, setCheckWeddingActive] = useState(false);
  const [checkGraduationActive, setCheckGraduationActive] = useState(false);
  const [checkBirthdayActive, setCheckBirthdayActive] = useState(false);
  const [B1Active, setB1Active] = useState(false);
  const [B2Active, setB2Active] = useState(false);
  const [B3Active, setB3Active] = useState(false);
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  if (isSent) {
    console.log("Message  Sent! this is the email: " + email);
  }

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

  const [activeCB, setActiveCB] = useState("");
  console.log(activeCB);
  const checkB1 = () => {
    if (B1Active === false) {
      setB1Active(true);
      setActiveCB("B1");
    } else {
      setB1Active(false);
      setActiveCB("");
    }
  };
  const checkB2 = () => {
    if (B2Active === false) {
      setB2Active(true);
      setActiveCB("B2");
    } else {
      setB2Active(false);
      setActiveCB("");
    }
  };
  const checkB3 = () => {
    if (B3Active === false) {
      setB3Active(true);
      setActiveCB("B3");
    } else {
      setB3Active(false);
      setActiveCB("");
    }
  };

  const b1check = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      //checked
    } else {
      //unchecked
    }
  };

  // this is to capture the value from the email form
  const onEmailChange = (email: any) => {
    setEmail(email.target.value);
  };
  return (
    <div className="bg-black min-h-screen min-w-full text-white font-FredokaOneRegular">
      {/* navbar */}
      <div className="sticky top-0 z-50 hidden">
        <NavBar />
      </div>
      {/* main */}
      <div className="px-4 md:px-40 md:pt-20 pt-6">
        {/* Hero text */}
        <div className="py-10">
          <div className="py-4">
            <h1 className="py-4 text-4xl md:text-7xl">
              <span>Hey! Tell Us </span> <br />
              <span>Everything</span>
            </h1>
          </div>
        </div>
        {/* Main form */}
        <div>
          <div>
            <form
              action="submit"
              className="flex flex-col text-2xl md:text-3xl"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true);
              }}
            >
              {/* interested Services */}
              <div className="flex flex-col items-start justify-start">
                <div className="pb-4">
                  <h1 className="text-2xl md:text-3xl text-[#828282]">
                    I'm Interested in...
                  </h1>
                </div>
                {/* checkboxes */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4 text-sm md:text-lg">
                  {/* checkbox */}
                  <div
                    onClick={checkWedding}
                    className={`${
                      checkWeddingActive
                        ? "flex flex-col items-center bg-white text-black border-2 border-transparent cursor-pointer rounded-full px-4 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3 cursor-pointer"
                    }`}
                  >
                    <h1>Wedding</h1>
                  </div>
                  {/* checkbox */}
                  <div
                    onClick={checkGraduation}
                    className={`${
                      checkGraduationActive
                        ? "flex flex-col items-center bg-white text-black  border-2 border-transparent cursor-pointer rounded-full px-4 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3 cursor-pointer"
                    }`}
                  >
                    <h1>Graduations</h1>
                  </div>
                  {/* checkbox */}
                  <div
                    onClick={checkBirthday}
                    className={`${
                      checkBirthdayActive
                        ? "flex flex-col items-center bg-white text-black border-2 border-transparent cursor-pointer  rounded-full px-4 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-4 py-3 cursor-pointer"
                    }`}
                  >
                    <h1>Birthday</h1>
                  </div>
                </div>
              </div>
              {/* User Name */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <input
                  type="text"
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  placeholder="Your name"
                />
              </div>
              {/* user Email */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <input
                  onChange={onEmailChange}
                  type="email"
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  placeholder="Your Email"
                />
              </div>
              {/* Tell Us about Your Event */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <textarea
                  placeholder="Tell Us About Your Event"
                  maxLength={5000}
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  spellCheck="false"
                />
              </div>
              {/* Project Budgets */}
              <div className="flex flex-col items-start justify-start">
                <div className="pb-4 pt-6">
                  <h1 className="text-2xl md:text-3xl text-[#828282]">
                    Project Budget (GHS)
                  </h1>
                </div>
                {/* checkboxes */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4 text-sm md:text-lg">
                  {/* cb */}
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="Basic"
                        value="Basic"
                        className="absolute top-0 left-0 appearance-none"
                        onClick={(e) => {
                          b1check(e);
                        }}
                      />
                      <span data-text="Basic">100 - 200</span>
                    </label>
                  </div>
                  {/* checkbox */}
                  <div
                    onClick={checkB1}
                    className={`${
                      activeCB == "B1"
                        ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <h1>10 - 20k</h1>
                  </div>
                  {/* checkbox */}
                  <div
                    onClick={checkB2}
                    className={`${
                      activeCB == "B2"
                        ? "flex flex-col items-center bg-white text-black border-2 border-transparent  rounded-full px-6 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <h1>20 - 50k</h1>
                  </div>
                  {/* checkbox */}
                  <div
                    onClick={checkB3}
                    className={`${
                      activeCB == "B3"
                        ? "flex flex-col items-center bg-white text-black border-2 border-transparent  rounded-full px-6 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <h1>{">"} 50k</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-6 my-4 md:pt-0 text-base">
                  <motion.input
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", duration: 0.2 }}
                    type="submit"
                    value="Book A Shoot"
                    data-wait="Please wait..."
                    // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                    className=" px-6 py-4 border-2 border-white hover:border-transparent hover:bg-white hover:text-black rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <NewFooter />
      </div>
      {/* footer */}
      <div className="hidden">
        <MainFooter />
      </div>
    </div>
  );
};

export default Contact;