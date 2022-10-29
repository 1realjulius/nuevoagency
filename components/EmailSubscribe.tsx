import React, { useState } from "react";
import axios from "axios";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("Submit");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: any) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/EmailSubscribe", { email });
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (e: any) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };
  return (
    <div className="flex flex-col  w-full pb-10 px-4">
      {/* email Subscribe */}
      <div className="flex flex-row items-center mb-10  border-t-2 pt-4 border-[#E8EAED]">
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
          <div className="pb-2 flex flex-row items-center">
            {/* icon for Subscribe */}
            <div className="md:hidden">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </span>
            </div>
            <h1 className="text-xl">Get Our Pckages and Prices</h1>
          </div>
          <div className="flex flex-col md:flex-row ">
            {/* user Email */}
            <div className="flex flex-row items-center text-base w-full md:w-[70vw] rounded-lg">
              <input
                type="email"
                name="SenderEmail"
                className="h-12 w-full p-2 py-3 outline-none bg-[#E5E7EB] placeholder:text-black/40 md:rounded-l-lg md:rounded-r-none rounded-lg"
                placeholder="your@example.com"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2 flex flex-col ">
              <button
                type="submit"
                value=""
                onClick={subscribe}
                name="subscribe"
                className="h-12 px-5 w-full md:w-fit bg-black text-white md:rounded-r-lg md:rounded-l-none rounded-lg text-lg"
              >
                {state}
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
    </div>
  );
};

export default EmailSubscribe;
