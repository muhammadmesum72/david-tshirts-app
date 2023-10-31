import React, { useState } from "react";
import Header from "./components/Header";
import PickColor from "./components/PickColor";
import StepProgressBar from "./components/StepProgressBar";
import AddingDesign from "./components/AddingDesign";
import FinalPreview from "./components/FinalPreview";
import DesignCanvas from "./components/DesignCanvas";

const App = () => {
  const [isScreenPickColor, setScreenPickColor] = useState(true);
  const [isScreenAddDesign, setScreenAddDesign] = useState(false);
  const [isScreenPreview, setScreenPreview] = useState(false);

  const showScreenAddDesign = () => {
    setScreenAddDesign(true);
    setScreenPickColor(false);
    setScreenPreview(false);
  };

  const showScreenPickColor = () => {
    setScreenPickColor(true);
    setScreenAddDesign(false);
    setScreenPreview(false);
  };

  const showScreenPreview = () => {
    setScreenPreview(true);
    setScreenAddDesign(false);
    setScreenPickColor(false);
  };

  const handleDownload = () => {
    alert("Image Downloaded");
  };

  return (
    <div className="container mx-auto">
      <Header />
      <DesignCanvas />
      <StepProgressBar
        isScreenPickColor={isScreenPickColor}
        isScreenAddDesign={isScreenAddDesign}
        isScreenPreview={isScreenPreview}
      />
      {/* {isScreenPickColor && <PickColor handleNext={showScreenAddDesign} />} */}
      {isScreenAddDesign && <AddingDesign handleBack={showScreenPickColor} handleNext={showScreenPreview} />}
      {isScreenPreview && (
        <FinalPreview
          handleGotoHome={showScreenPickColor}
          handleDownload={handleDownload}
        />
      )}
      {/* <div id="tshirt-container">
        <FileUpload onFileUpload={handleFileUpload} />
        <TShirtMockup design={design} />
      </div>
      <div className="mt-8">
        <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download T-Shirt
        </button>
      </div>
      <canvas ref={canvasRef} className="hidden" width="500" height="500" /> */}
    </div>
  );
};

export default App;
