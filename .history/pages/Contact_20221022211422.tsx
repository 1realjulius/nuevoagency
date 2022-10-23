import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

const Contact = () => {
  //Get Current Date for the Sender Identification
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const mytoday = mm + dd + yyyy;

  const [SubscriberEmail, setSubscriberEmail] = useState();

  const [isSent, setIsSent] = useState(false);
  const [SubmitBtn, setSubmitBtn] = useState("Book A Shoot");
  const [wIsChecked, setWIsChecked] = useState(false);
  const [bIsChecked, setBIsChecked] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [senderID, setSenderID] = useState(
    `#${mytoday}${senderName.slice(0, 3)}`
  );
  const [eType1, setEType1] = useState("");
  const [eType2, setEType2] = useState("");
  const eventType = `${eType1} ${eType1 && eType2 ? "," : ""} ${eType2}`;
  const [eventBudget, setEventBudget] = useState("Basic");

  const formData = {
    senderID,
    senderName,
    senderEmail,
    senderMessage,
    eventType,
    eventBudget,
  };

  // when form is submitted
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(1);
    setSubmitBtn("Booking...");
    console.log(3);
    try {
      console.log(4);
      const res = await fetch("/api/ContactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "Aplication/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res.status);
      if (res.status === 200) {
        setSubmitBtn("Event Booked");
      }
    } catch (error) {
      console.log(1);
      console.log(error);
      setSubmitBtn("Try Again");
    }
    console.log(7, "Shit is done Bro 🚀🚀🚀");
  };

  //The State Manager For The Custom CheckBoxes
  //CheckBox-1 (Wedding Shoot)
  const wCheck = (e: any) => {
    const checked = e.target.checked;
    const ch = e.target.value;
    if (checked) {
      //checked
      setWIsChecked(true);
      setEType1("Wedding");
    } else {
      //unchecked
      setWIsChecked(false);
      setEType1("");
    }
  };

  //Checkbox-2 (Birthday Shoots)
  const bCheck = (e: any) => {
    const checked = e.target.checked;
    const ch = e.target.value;
    if (checked) {
      //checked
      setBIsChecked(true);
      setEType2("Birthday");
    } else {
      //unchecked
      setBIsChecked(false);
      setEType2("");
    }
  };

  console.log(formData);
  //The State Manager for the Custom Radio Boxes.
  const handleBudgetChange = (event: any) => {
    setEventBudget(event.target.value);
  };

  return (
    <div className="bg-black relative min-h-screen min-w-full text-white font-FredokaOneRegular select-none">
      {/* navbar */}
      <div className="z-40">
        <NavBar />
      </div>
      {/* Logo */}
      <div className="absolute top-5 left-5 md:left-10">
        <div className="">
          <Link href="/">
            <div className="relative h-[28px] w-[142px] md:h-[40px] md:w-[202px] cursor-pointer">
              <Image
                src="/Assets/whitefooterlogo.png"
                layout="fill"
                alt=""
                className="absolute object-contain "
              />
            </div>
          </Link>
        </div>
      </div>
      {/* main */}
      <div className="px-4 md:px-10 md:py-10 pt-6">
        {/* Hero text */}
        <div className="py-10">
          <div className="py-4">
            <h1 className="py-2 text-[34px] md:text-6xl space-y-3 leading-none">
              <span className="">Heyy There </span> <br />
              <span className="py-2 pr-4 text-2xl md:text-3xl border-b-[3px] text-[#828282] border-[#828282]">
                Tell Us About Your Event
              </span>
            </h1>
          </div>
        </div>
        {/* Main form */}
        <div>
          <form
            action="submit"
            className="flex flex-col text-2xl md:text-3xl"
            onSubmit={handleOnSubmit}
          >
            {/* interested Services */}
            <div className="flex flex-col items-start justify-start">
              <div className="pb-4">
                <h1 className="text-2xl md:text-3xl text-[#828282]">
                  I'm Interested in...
                </h1>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4 text-sm md:text-lg md:space-x-2">
                  {/* wcb */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", duration: 0.2 }}
                    className={`${
                      wIsChecked
                        ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent "
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full"
                    }`}
                  >
                    <label className="cursor-pointer px-6 py-3 select-none">
                      {/* //this input is hidden cos there is no appearance for it */}
                      <input
                        type="checkbox"
                        name="Event1"
                        value="Wedding"
                        className="appearance-none"
                        onClick={(w) => {
                          wCheck(w);
                        }}
                      />
                      <span data-text="Basic">Wedding Shoot</span>
                    </label>
                  </motion.div>
                  {/* bcb */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", duration: 0.2 }}
                    className={`${
                      bIsChecked
                        ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full"
                    }`}
                  >
                    <label className="cursor-pointer px-6 py-3 select-none">
                      {/* //this input is hidden cos there is no appearance for it */}
                      <input
                        type="checkbox"
                        name="Event2"
                        value="Birthday"
                        className="appearance-none"
                        onClick={(b) => {
                          bCheck(b);
                        }}
                      />
                      <span data-text="Basic">Birthday Shoot</span>
                    </label>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* form Its slef */}
            <div>
              {/* User Name */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <input
                  type="text"
                  name="SenderName"
                  onChange={(event: any) => {
                    setSenderName(event.target.value);
                  }}
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  placeholder="Your First Name"
                />
              </div>
              {/* user Email */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <input
                  type="email"
                  name="SenderEmail"
                  onChange={(event: any) => {
                    setSenderEmail(event.target.value);
                  }}
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  placeholder="Your Email"
                />
              </div>
              {/* Tell Us about Your Event */}
              <div className="py-2 my-6 border-b-[3px] border-[#828282] w-full md:w-[70vw]">
                <textarea
                  name="SenderMessage"
                  onChange={(event: any) => {
                    setSenderMessage(event.target.value);
                  }}
                  placeholder="Tell Us About Your Event"
                  maxLength={5000}
                  className="w-full p-2 outline-none bg-inherit placeholder:text-[#828282]"
                  spellCheck="false"
                />
              </div>
            </div>
            {/* Project Budgets */}
            <div className="flex flex-col items-start justify-start">
              <div className="pb-4 pt-6">
                <h1 className="text-2xl md:text-3xl text-[#828282]">
                  Project Budget (GHS)
                </h1>
              </div>
              {/*Radio checkboxes */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4 text-sm md:text-lg">
                {/* rcbb */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    eventBudget === "Basic"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full"
                  }`}
                >
                  <label className="cursor-pointer px-6 py-3 select-none">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Basic"
                      checked={eventBudget === "Basic"}
                      onChange={handleBudgetChange}
                      className="appearance-none"
                    />
                    <span data-text="Basic">1k - 4k</span>
                  </label>
                </motion.div>
                {/* rcbe */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    eventBudget === "Economy"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full"
                  }`}
                >
                  <label className="cursor-pointer px-6 py-3 select-none">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Economy"
                      className="appearance-none"
                      checked={eventBudget === "Economy"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Basic">4k - 6k</span>
                  </label>
                </motion.div>
                {/* rcba */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  className={`${
                    eventBudget === "Advance"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full"
                  }`}
                >
                  <label className="cursor-pointer px-6 py-3 select-none">
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Advance"
                      className="appearance-none"
                      checked={eventBudget === "Advance"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Basic">{">"} 6k</span>
                  </label>
                </motion.div>
              </div>
            </div>
            <div className="">
              <div className="my-4 py-2 text-base flex flex-col md:flex-row text-center md:items-center md:space-x-4">
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  type="submit"
                  value={SubmitBtn}
                  className=" px-6 py-4 border-2 border-white hover:border-transparent hover:bg-white hover:text-black rounded-full cursor-pointer select-none"
                />
                <div className="px-2 text-sm text-[#828282] py-2">
                  <h1>
                    <span>By Booking You Have Agreed To Our </span>
                    <br />
                    <span className="text-white">Terms & Agreements </span>
                    <span>and </span>
                    <span className="text-white">Privacy Policy</span>
                  </h1>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <div className="hidden">
        <div className="-z-10 flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-white text-black px-2 pt-2 md:py-2">
            {/* email Subscribe */}
            <div className="col-span-3 flex flex-row items-center md:border-b-0 border-b-[3px] md:py-4">
              {/* icon for Subscribe */}
              <div className="hidden md:flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-24 h-24 md:w-44 md:h-44"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>
              </div>
              {/* Sunscribe Form */}
              <div className="p-2 w-full md:w-[50%] items-start">
                <div className="py-2">
                  <h1 className="text-2xl">Get Our Pckages and Prices</h1>
                </div>
                <div className="flex flex-col md:flex-row ">
                  {/* user Email */}
                  <div className="flex flex-row items-center text-lg w-full md:w-[70vw] rounded-lg">
                    <input
                      type="email"
                      name="SenderEmail"
                      onChange={(event: any) => {
                        setSubscriberEmail(event.target.value);
                      }}
                      className="w-full p-2 py-3 outline-none bg-[#E5E7EB] placeholder:text-black md:rounded-l-lg md:rounded-r-none rounded-lg"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="py-1 my-2 md:my-0 flex flex-col ">
                    <button
                      type="submit"
                      className="py-3 px-5 w-full md:w-fit bg-black text-white md:rounded-r-lg md:rounded-l-none rounded-lg text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="px-2 text-sm text-[#828282] py-2">
                  <h1>
                    <span>By Booking You Have Agreed To Our </span>
                    <br />
                    <span className="text-black">Terms & Agreements </span>
                    <span>and </span>
                    <span className="text-black">Privacy Policy</span>
                  </h1>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="col-span-2 md:border-l-[3px] p-2 flex flex-col w-full md:px-2 md:pt-2">
              <div className="flex flex-col justify-between h-full w-full">
                <div className="px-2 py-2">
                  <h1 className="text-3xl md:text-6xl">Have An Event !</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center px-2 py-2">
                  <h1 className="text-sm">
                    <span>• Wedding </span>
                    <span className="text-[#828282]">Shoot</span>
                  </h1>
                  <h1 className="text-sm md:text-sm">
                    <span>• Graduations </span>
                  </h1>
                  <h1 className="text-sm md:text-sm">
                    <span>• Birthday </span>
                    <span className="text-[#828282]">Shoot</span>
                  </h1>
                </div>
                <div className="bg-[#E5E7EB] w-full p-2 rounded-lg text-[#828282] hover:text-black cursor-pointer">
                  <Link href="/Contact">
                    <div className=" py-1 flex flex-row items-center justify-between">
                      <h1 className="text-xl md:text-2xl ">
                        <span>Tell Us About It</span>
                      </h1>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 md:w-8 md:h-8 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white pt-2 md:pt-4 md:py-4 text-black flex flex-row justify-between px-4 z-20 border-t-2">
            <div>
              <Link href="/">
                <div className="flex flex-row items-center cursor-pointer">
                  <span className="text-lg pb-1">©</span>
                  <span>
                    <span className="">
                      <span className="relative">
                        <Image
                          src="/Assets/footerlogo.png"
                          width="102px"
                          height="20px"
                          alt=""
                          className="object-contain"
                        />
                      </span>
                    </span>
                  </span>
                  <span className="pb-1">• 2022</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex">
              <Link href="#">
                <h1 className="cursor-pointer">Terms & Conditions</h1>
              </Link>
            </div>
            <div className="md:hidden">
              <Link href="#">
                <h1 className="cursor-pointer text-[#828282] ">T&C</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
