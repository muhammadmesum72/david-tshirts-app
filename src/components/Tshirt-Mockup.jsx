import React from 'react';
import ShirtMockup from "../assets/tshirt-mockup.jpg"

const TShirtMockup = ({ design }) => {
  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg border border-gray-300 relative">
        <img src={ShirtMockup} alt="T-Shirt" className="mx-auto" />
        {design && (
          <div
            className="absolute  inset-0 flex items-center justify-center "
            style={{
              clipPath: 'polygon(24% 12%, 66% 12%, 66% 90%, 24% 90%)',
              overflow: 'hidden',
            }}
          >
            <img
              src={design}
              alt="User's Design"
              className="h-fit w-fit object-cover opacity-50"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TShirtMockup;
