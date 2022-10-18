import { motion } from "framer-motion";
import React, { useState } from "react";
import MainFooter from "../components/MainFooter";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  // this is set to show after the form has been sumbitted
  if (isSent) {
    console.log("Message  Sent! this is the email: " + email);
  }

  // this is to capture the value from the email form
  const onEmailChange = (email: any) => {
    setEmail(email.target.value);
  };

  //The State Manager For The Custom CheckBoxes
  const [wIsChecked, setWIsChecked] = useState(false);
  const [bIsChecked, setBIsChecked] = useState(false);

  //CheckBox-1 (Wedding Shoot)
  const wCheck = (e: any) => {
    const checked = e.target.checked;
    const B1data = e.target.value;
    if (checked) {
      //checked
      setWIsChecked(true);
      console.log("c yayy", B1data);
    } else {
      //unchecked
      setWIsChecked(false);
      console.log("unchecked yayyy");
    }
  };
  //Checkbox-2 (Birthday Shoots)
  const bCheck = (e: any) => {
    const checked = e.target.checked;
    const B1data = e.target.value;
    if (checked) {
      //checked
      setBIsChecked(true);
      console.log("c yayy", B1data);
    } else {
      //unchecked
      setBIsChecked(false);
      console.log("unchecked yayyy");
    }
  };

  //The State Manager for the Custom Radio Boxes.
  const [clientBudget, setClientBudget] = useState("Basic");

  const handleBudgetChange = (event: any) => {
    setClientBudget(event.target.value);
  };
  console.log(clientBudget);
  const resetRadioState = () => {
    setClientBudget("");
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
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 py-4 text-sm md:text-lg ">
                  {/* wcb */}
                  <div
                    className={`${
                      wIsChecked
                        ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <label>
                      {/* //this input is hidden cos there is no appearance for it */}
                      <input
                        type="checkbox"
                        name="Wedding"
                        value="Wedding Soot"
                        className="appearance-none"
                        onClick={(e) => {
                          wCheck(e);
                        }}
                      />
                      <span data-text="Basic">Wedding Shoot</span>
                    </label>
                  </div>
                  {/* bcb */}
                  <div
                    className={`${
                      bIsChecked
                        ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                        : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                    }`}
                  >
                    <label>
                      {/* //this input is hidden cos there is no appearance for it */}
                      <input
                        type="checkbox"
                        name="Birthday"
                        value="Birthday Soot"
                        className="appearance-none"
                        onClick={(e) => {
                          bCheck(e);
                        }}
                      />
                      <span data-text="Basic">Birthday Shoot</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* form Its slef */}
            <div>
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
                <div
                  className={`${
                    clientBudget === "Basic"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                  }`}
                >
                  <label>
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Basic"
                      checked={clientBudget === "Basic"}
                      onChange={handleBudgetChange}
                      className="appearance-none"
                    />
                    <span data-text="Basic">1k - 4k</span>
                  </label>
                </div>
                {/* rcbe */}
                <div
                  className={`${
                    clientBudget === "Economy"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                  }`}
                >
                  <label>
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Economy"
                      className="appearance-none"
                      checked={clientBudget === "Economy"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Basic">4k - 6k</span>
                  </label>
                </div>
                {/* rcba */}
                <div
                  className={`${
                    clientBudget === "Advance"
                      ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
                      : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
                  }`}
                >
                  <label>
                    {/* //this input is hidden cos there is no appearance for it */}
                    <input
                      type="radio"
                      name="BudgetOptions"
                      value="Advance"
                      className="appearance-none"
                      checked={clientBudget === "Advance"}
                      onChange={handleBudgetChange}
                    />
                    <span data-text="Basic">{">"} 6k</span>
                  </label>
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
