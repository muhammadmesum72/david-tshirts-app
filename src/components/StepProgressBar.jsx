import React from "react";

const StepProgressBar = ({
  isScreenPickColor,
  isScreenAddDesign
}) => {
  return (
    <div className="flex items-center justify-center gap-12 text-md text-black py-6 border-b-2 w-fit mx-auto">
      <div
        className={` ${
          isScreenPickColor ? "opacity-100 font-bold" : "opacity-50"
        } flex flex-col items-center justify-center`}
      >
        <span
          className={`flex items-center justify-center border-black rounded-full border w-6 h-6 text-sm mb-2 `}
        >
          1
        </span>
        <span>Pick Shirt Color</span>
      </div>
      <div
        className={` ${
          isScreenAddDesign ? "opacity-100 font-bold " : "opacity-50"
        } flex flex-col items-center justify-center`}
      >
        <span
          className={`flex items-center justify-center border-black rounded-full border w-6 h-6 text-sm mb-2`}
        >
          2
        </span>

        <span>Finalize Design</span>
      </div>
    </div>
  );
};

export default StepProgressBar;
