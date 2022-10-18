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
    <div>
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
    </div>
  );
};
