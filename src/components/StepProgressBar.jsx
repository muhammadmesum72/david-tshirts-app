import React from "react";

const StepProgressBar = ({
  isScreenPickColor,
  isScreenAddDesign,
  isScreenPreview,
}) => {
  return (
    <div className="flex items-center justify-center gap-12 text-md">
      <div className={`opacity-50 ${isScreenPickColor && "opacity-100 font-bold"} flex flex-col items-center justify-center`}>
        <span className={`flex items-center justify-center border-black rounded-full border w-6 h-6 text-sm mb-2 `}>
          1
        </span>
        <span>Pick Color & Size</span>
      </div>
      <div className={`opacity-50 ${isScreenAddDesign && "opacity-100 font-bold"} flex flex-col items-center justify-center`}>
        <span className={`flex items-center justify-center border-black rounded-full border w-6 h-6 text-sm mb-2`}>
          2
        </span>

        <span>Finalize Design</span>
      </div>
      <div className={`opacity-50 ${isScreenPreview && "opacity-100 font-bold"} flex flex-col items-center justify-center`}>
        <span className={`flex items-center justify-center border-black rounded-full border w-6 h-6 text-sm mb-2`}>
          3
        </span>

        <span>Preview</span>
      </div>
    </div>
  );
};

export default StepProgressBar;
