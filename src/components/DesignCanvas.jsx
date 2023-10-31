import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import ShirtBg from "../assets/tshirt-mockup.jpg";
import blackShirt from "../assets/tshirts/black.jpg";
import whiteShirt from "../assets/tshirts/white.jpg";
import blueShirt from "../assets/tshirts/blue.jpg";
import pinkShirt from "../assets/tshirts/pink.jpg";
import orangeShirt from "../assets/tshirts/orange.jpg";
import greenShirt from "../assets/tshirts/green.jpg";

const DesignCanvas = ({ handleBack, selectedColor }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [shirtColorSelected, setShirtColorSelected] = useState(null);

  const handleShirtColor = () => {
    if(selectedColor === "white"){
      return whiteShirt
    }
    if(selectedColor === "black"){
      return blackShirt
    }
    if(selectedColor === "blue"){
      return blueShirt
    }
    if(selectedColor === "pink"){
      return pinkShirt
    }
    if(selectedColor === "orange"){
      return orangeShirt
    }
    if(selectedColor === "green"){
      return greenShirt
    }
  }


  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 400,
    });

    fabric.Image.fromURL(handleShirtColor(), (backgroundImg) => {
      newCanvas.setBackgroundImage(
        backgroundImg,
        newCanvas.renderAll.bind(newCanvas),
        {
          scaleX: newCanvas.width / backgroundImg.width,
          scaleY: newCanvas.height / backgroundImg.height,
        }
      );
    });

    setCanvas(newCanvas);

    newCanvas.on("object:selected", (e) => {
      const selectedObject = e.target;
      setSelectedObject(selectedObject);
    });
  }, []);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        fabric.Image.fromURL(e.target.result, (img) => {
          img.set({
            scaleX: 0.3,
            scaleY: 0.3,
          });
          img.setControlsVisibility({
            mt: true,
            mb: true,
            ml: true,
            mr: true,
            bl: true,
            br: true,
            tl: true,
            tr: true,
            mtr: true,
          });

          canvas.add(img);
          canvas.renderAll();
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 0.8,
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "custom_tshirt_design.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full mt-6">
      <div className="mb-6 w-fit bg-white mx-auto">
        <canvas ref={canvasRef} className="" />
      </div>
      <div className="mx-auto w-1/2 py-6 space-y-3 ">
        <div className="border-dashed border-2 p-8 text-center">
          <input
            type="file"
            onChange={handleAddImage}
            accept="image/*"
            className="border  border-gray-300 bg-white p-3 mb-3 rounded-md font-bold w-full mx-auto"
          />
          <p>Drag & drop your design here, or click to select a file</p>
        </div>
        <button
          className="w-full bg-teal-500 rounded-md  hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white"
          onClick={handleDownload}
        >
          Download Design
        </button>
        <button
          onClick={handleBack}
          className="w-full rounded-md text-teal-500 hover:text-black transition-all ease-in-out py-3 font-semibold uppercase bg-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DesignCanvas;
