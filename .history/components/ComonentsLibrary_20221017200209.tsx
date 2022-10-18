import React, { useState } from "react";

export const ComonentsLibrary = () => {
  return <div>ComonentsLibrary</div>;
};

export const CustomCheckBox = () => {
  const [B1IsChecked, setB1IsChecked] = useState(false);
  const b1check = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      //checked
      setB1IsChecked(true);
      console.log("checked yayyy");
    } else {
      //unchecked
      setB1IsChecked(false);
      console.log("unchecked yayyy");
    }
  };
  return (
    <div
      className={`${
        B1IsChecked
          ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent  px-6 py-3"
          : "flex flex-col items-center border-[#828282] border-2 rounded-full px-6 py-3"
      }`}
    >
      <label>
        {/* //this input is hidden cos there is no appearance for it */}
        <input
          type="checkbox"
          name="Basic"
          value="Basic"
          className="appearance-none"
          onClick={(e) => {
            b1check(e);
          }}
        />
        <span data-text="Basic">100 - 200</span>
      </label>
    </div>
  );
};

export const CustomRadioBox = () => {
  const [clientBudget, setClientBudget] = useState("Basic");

  const handleBudgetChange = (event: any) => {
    setClientBudget(event.target.value);
  };
  console.log(clientBudget);
  const resetRadioState = () => {
    setClientBudget("");
  };
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-4 text-sm md:text-lg">
        {/* rcbb */}
        <div
          className={`${
            clientBudget === "Basic"
              ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
              : "flex flex-col items-center border-[#828282] border-2 rounded-full"
          }`}
        >
          <label className="cursor-pointer px-6 py-3">
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
              ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
              : "flex flex-col items-center border-[#828282] border-2 rounded-full"
          }`}
        >
          <label className="cursor-pointer px-6 py-3">
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
              ? "flex flex-col items-center bg-white text-black rounded-full border-2 border-transparent"
              : "flex flex-col items-center border-[#828282] border-2 rounded-full"
          }`}
        >
          <label className="cursor-pointer px-6 py-3">
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
  );
};
