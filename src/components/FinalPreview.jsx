import React from "react";
import ShirtMockup from "../assets/tshirt-mockup.jpg";

const FinalPreview = ({handleGotoHome}) => {
  return (
    <div className="mb-12">
      <div className="bg-white p-4 rounded-lg border border-gray-300 relative my-12">
        <img src={ShirtMockup} alt="T-Shirt" className="mx-auto" />
      </div>
      <div className="flex gap-12">
        <button onClick={handleGotoHome} className="w-full rounded-md text-teal-500 hover:text-black transition-all ease-in-out py-3 font-semibold uppercase bg-white">
          Go to Home
        </button>
        <button className="w-full rounded-md bg-teal-500 hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white">
          Download
        </button>
      </div>
    </div>
  );
};

export default FinalPreview;
