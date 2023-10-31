import React, { useState } from "react";
import Header from "./components/Header";
import PickColor from "./components/PickColor";
import StepProgressBar from "./components/StepProgressBar";
import AddingDesign from "./components/AddingDesign";
import FinalPreview from "./components/FinalPreview";
import DesignCanvas from "./components/DesignCanvas";
import KonvaCanvas from "./components/KonvaCanvas";

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
  const [selectedColor, setSelectedColor] = useState(null);

  const colorSelected = (name) => {
    setSelectedColor(name);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        {/* <KonvaCanvas /> */}
        {/* <DesignCanvas /> */}
        <StepProgressBar
          isScreenPickColor={isScreenPickColor}
          isScreenAddDesign={isScreenAddDesign}
          isScreenPreview={isScreenPreview}
        />
        {isScreenPickColor && (
          <PickColor
            colorSelected={colorSelected}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            handleNext={showScreenAddDesign}
          />
        )}
        {isScreenAddDesign && (
          <DesignCanvas
            selectedColor={selectedColor}
            handleBack={showScreenPickColor}
          />
          // <AddingDesign
          // selectedColor={selectedColor}
          //   handleBack={showScreenPickColor}
          //   handleNext={showScreenPreview}
          // />
        )}
        {/* {isScreenPreview && (
        <FinalPreview
          handleGotoHome={showScreenPickColor}
          handleDownload={handleDownload}
        />
      )} */}
      </div>
    </>
  );
};

export default App;
