import React, { useState } from "react";

const PickColor = ({ handleNext, colorSelected, selectedColor, colors }) => {
  return (
    <div className="pb-6 mt-6 w-fit mx-auto">
      <div>
        <h1 className="font-semibold mb-3">Select Colors</h1>
        <div className="grid grid-cols-3 gap-9 w-fit">
          <div
            onClick={() => {
              colorSelected("orange");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[#e79469] cursor-pointer rounded-md ${
              "orange" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
          <div
            onClick={() => {
              colorSelected("white");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[white] cursor-pointer rounded-md ${
              "white" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
          <div
            onClick={() => {
              colorSelected("green");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[#cbd5bf] cursor-pointer rounded-md ${
              "green" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
          <div
            onClick={() => {
              colorSelected("blue");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[#1261c4] cursor-pointer rounded-md ${
              "blue" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
          <div
            onClick={() => {
              colorSelected("pink");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[#fec9dd] cursor-pointer rounded-md ${
              "pink" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
          <div
            onClick={() => {
              colorSelected("black");
            }}
            className={`w-16 h-16 md:w-24 md:h-24 bg-[black] cursor-pointer rounded-md ${
              "black" === selectedColor && "border-2 border-black shadow-lg"
            } `}
          ></div>
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
