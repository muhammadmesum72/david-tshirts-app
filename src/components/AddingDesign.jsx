import React, { useState, useRef } from "react";
import FileUpload from "./FileUpload";
import TShirtMockup from "./Tshirt-Mockup";
import DownloadButton from "./DownloadBtn";
import html2canvas from "html2canvas";
import DesignCanvas from "./DesignCanvas";

const AddingDesign = ({handleNext, handleBack}) => {
  const [design, setDesign] = useState(null);
  const canvasRef = useRef(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setDesign(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw t-shirt mockup
    const tshirtImage = new Image();
    tshirtImage.src = "/tshirt.png";
    tshirtImage.onload = () => {
      ctx.drawImage(tshirtImage, 0, 0, canvas.width, canvas.height);

      // Draw user's design
      if (design) {
        const userDesignImage = new Image();
        userDesignImage.src = design;
        userDesignImage.onload = () => {
          ctx.drawImage(userDesignImage, 0, 0, canvas.width, canvas.height);

          // Trigger download
          const downloadLink = document.createElement("a");
          downloadLink.href = canvas.toDataURL();
          downloadLink.download = "custom-tshirt.png";
          downloadLink.click();
        };
      }
    };
  };
  return (
    <div className="py-6">
      {/* <div id="tshirt-container">
        <TShirtMockup design={design} />
        <FileUpload onFileUpload={handleFileUpload} />
      </div> */}
      <DesignCanvas />
      <div className=" w-1/2 mx-auto">
        <button onClick={handleBack} className="w-full rounded-md text-teal-500 hover:text-black transition-all ease-in-out py-3 font-semibold uppercase bg-white">Back</button>
        {/* <button onClick={handleNext} className="w-full rounded-md bg-teal-500 hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white">
          Preview and Download
        </button> */}

      </div>
      <canvas ref={canvasRef} className="hidden" width="500" height="500" />
    </div>
  );
};

export default AddingDesign;
