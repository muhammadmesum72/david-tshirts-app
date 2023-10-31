import React, { useState, useRef } from "react";
import FileUpload from "./FileUpload";
import TShirtMockup from "./Tshirt-Mockup";
import DownloadButton from "./DownloadBtn";
import html2canvas from "html2canvas";
import DesignCanvas from "./DesignCanvas";

const AddingDesign = ({handleNext, handleBack, selectedColor}) => {
 
  return (
    <div className="py-6">
      <DesignCanvas />
      <div className=" w-1/2 mx-auto">
        
      </div>
      {/* <canvas ref={canvasRef} className="hidden" width="500" height="500" /> */}
    </div>
  );
};

export default AddingDesign;
