import { motion } from "framer-motion";
import React, { useState } from "react";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [wIsChecked, setWIsChecked] = useState(false);
  const [bIsChecked, setBIsChecked] = useState(false);
  const [senderID, setSenderID] = useState("");
  const [senderName, setSenderName] = useState("");
  const [sernderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [eventType, setEventType] = useState({});
  const [eventBudget, setEventBudget] = useState("Basic");

  //Get Current Date for the Sender Identification
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const mytoday = mm + dd + yyyy;
  const Identification = `#${mytoday}${senderName.slice(0, 3)}`;
  if (senderName.length > 5) {
    setSenderID(Identification);
  }

  const formData = {
    senderID,
    senderName,
    sernderEmail,
    senderMessage,
    eventType,
    eventBudget,
  };

  // when form is submitted
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(1);
    if (formData) {
    }
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
      console.log(5);
      if (!res.ok) {
        console.log(6);
      }
    } catch (error) {
      console.log(1);
      console.log(error);
    }
    console.log(7, "Shit is done Bro 🚀🚀🚀");
  };

  //The State Manager For The Custom CheckBoxes
  //CheckBox-1 (Wedding Shoot)
  const wCheck = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      //checked
      setWIsChecked(true);
      setEventType((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      //unchecked
      setWIsChecked(false);
    }
  };

  //Checkbox-2 (Birthday Shoots)
  const bCheck = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      //checked
      setBIsChecked(true);
      setEventType((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      //unchecked
      setBIsChecked(false);
    }
  };

  //The State Manager for the Custom Radio Boxes.
  const handleBudgetChange = (event: any) => {
    setEventBudget(event.target.value);
  };
  // console.log("this is current Form Data", formData);

  return (
    <div className="bg-black min-h-screen min-w-full text-white font-FredokaOneRegular select-none">
      {/* navbar */}
      <div className="z-40">
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
                        value="Wedding Soot"
                        className="appearance-none"
                        onClick={(e) => {
                          wCheck(e);
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
                        value="Birthday Soot"
                        className="appearance-none"
                        onClick={(e) => {
                          bCheck(e);
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
                  placeholder="Your name"
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
              <div className="my-4 py-2 text-base bg-blue-200 flex flex-row ">
                <motion.input
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.2 }}
                  type="submit"
                  value="Book A Shoot"
                  data-wait="Please wait..."
                  // id="w-node-_6ff1d45d-b2d3-3275-5478-e8f208e3f136-bf8cdb21"
                  className=" px-6 py-4 border-2 border-white hover:border-transparent hover:bg-white hover:text-black rounded-full cursor-pointer select-none"
                />
                <div>
                  <h1>
                    By Booking You Have Agreed To Our{" "}
                    <span>Terms & Agreements</span> and{" "}
                    <span>Privacy Policy</span>
                  </h1>
                </div>
              </div>
            </div>
          </form>
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
