import React, { useState } from "react";

const PickColor = ({ handleNext }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const colors = [
    {
      id: 1,
      name: "orange-200",
    },
    { id: 2, name: "white" },
    { id: 3, name: "green-300" },
    { id: 4, name: "blue-500" },
    { id: 5, name: "pink-400" },
    { id: 6, name: "orange-700" },
  ];

  const colorSelected = (id) => {
    setSelectedColor(id);
  };
  const selectSize = (size) => {
    setSizeSelected(size);
  };
  return (
    <div className="pb-6 w-fit mx-auto">
      <div>
        <h1 className="font-semibold mb-3">Select Colors</h1>
        <div className="grid grid-cols-3 gap-9 w-fit">
          {colors.map((color) => (
            <div
              onClick={() => colorSelected(color.id)}
              id={color.id}
              className={`w-24 h-24 bg-${
                color.name
              } cursor-pointer  rounded-md ${
                color.id == selectedColor && "border-2 border-black shadow-lg"
              } `}
            ></div>
          ))}
        </div>
        <h1 className="font-semibold mb-3 mt-6">Select Size</h1>
        <div className="flex gap-9">
          {sizes.map((size) => (
            <div
              onClick={() => selectSize(size)}
              className={`w-12 h-12 border flex items-center justify-center  rounded-md cursor-pointer font-semibold border-black hover:bg-black hover:text-white transition-all ease-in-out ${
                size == sizeSelected && "bg-black text-white"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9 mx-auto">
        <button
          onClick={handleNext}
          disabled={sizeSelected == null || (colorSelected == null && true)}
          className={`w-full rounded-md  hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white ${
            sizeSelected == null || colorSelected == null
              ? "bg-gray-600"
              : "bg-teal-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PickColor;
