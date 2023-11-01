import React, { useState } from "react";
import Header from "./components/Header";
import PickColor from "./components/PickColor";
import StepProgressBar from "./components/StepProgressBar";
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

  const [selectedColor, setSelectedColor] = useState(null);

  const colorSelected = (name) => {
    setSelectedColor(name);
  };

  const colors = [
    {
      id: 1,
      name: "orange",
      hexCode: "FFAE00",
    },
    { id: 2, name: "white", hexCode: "#FFFFFF" },
    { id: 3, name: "green", hexCode: "#BEFF74" },
    { id: 4, name: "blue", hexCode: "#00D1FF" },
    { id: 5, name: "pink", hexCode: "#FF74DB" },
    { id: 6, name: "black", hexCode: "#000000" },
  ];  

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <StepProgressBar
          isScreenPickColor={isScreenPickColor}
          isScreenAddDesign={isScreenAddDesign}
          isScreenPreview={isScreenPreview}
        />
        {isScreenPickColor && (
          <PickColor
            colorSelected={colorSelected}
            selectedColor={selectedColor}
            handleNext={showScreenAddDesign}
            colors={colors}
          />
        )}
        {isScreenAddDesign && (
          <DesignCanvas
            selectedColor={selectedColor}
            handleBack={showScreenPickColor}
          />
        )}
      </div>
    </>
  );
};

export default App;
