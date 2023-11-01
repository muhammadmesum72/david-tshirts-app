import React, { useState } from "react";

const PickColor = ({ handleNext, colorSelected, selectedColor, colors }) => {
 

  const selectColor = (colorName) => {
    colorSelected(colorName);
  };

  return (
    <div className="pb-6 mt-6 w-fit mx-auto">
      <div>
        <h1 className="font-semibold mb-3">Select Colors</h1>
        <div className="grid grid-cols-3 gap-9 w-fit">
          {colors.map((color) => (
            <div
              key={color.id}
              onClick={() => {
                selectColor(color.name);
              }}
              id={color.id}
              className={`w-16 h-16 md:w-24 md:h-24 bg-[${color.hexCode}] cursor-pointer rounded-md ${
                color.name === selectedColor &&
                "border-2 border-black shadow-lg"
              } `}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-9 mx-auto">
        <button
          onClick={handleNext}
          disabled={selectedColor === null}
          className={`w-full rounded-md hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white ${
            selectedColor === null ? "bg-gray-600" : "bg-teal-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PickColor;
