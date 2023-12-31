import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
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

  const handleShirtColor = () => {
    const colorMap = {
      white: whiteShirt,
      black: blackShirt,
      blue: blueShirt,
      pink: pinkShirt,
      orange: orangeShirt,
      green: greenShirt,
    };
    return colorMap[selectedColor] || whiteShirt;
  };

  const [canvasWidth, setCanvasWidth] = useState(300);
  const [canvasHeight, setCanvasHeight] = useState(300);

  const handleResize = () => {
    const newCanvasWidth = window.innerWidth < 786 ? 300 : 400;
    const newCanvasHeight = window.innerWidth < 786 ? 300 : 400;
    setCanvasWidth(newCanvasWidth);
    setCanvasHeight(newCanvasHeight);
    if (canvas) {
      canvas.setDimensions({ width: newCanvasWidth, height: newCanvasHeight });
      canvas.renderAll();
    }
  };

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: canvasWidth,
      height: canvasHeight,
    });

    fabric.Image.fromURL(
      handleShirtColor(),
      (backgroundImg) => {
        newCanvas.setBackgroundImage(
          backgroundImg,
          newCanvas.renderAll.bind(newCanvas),
          {
            scaleX: newCanvas.width / backgroundImg.width,
            scaleY: newCanvas.height / backgroundImg.height,
          }
        );
      },
      { crossOrigin: "Anonymous" },
      (err, img) => {
        if (err) {
          console.error("Error loading image:", err);
        } else {
          canvas.add(img);
        }
      }
    );

    setCanvas(newCanvas);

    newCanvas.on("object:selected", (e) => {
      setSelectedObject(e.target);
    });

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        fabric.Image.fromURL(e.target.result, (img) => {
          const canvasAspectRatio = canvas.width / canvas.height;
          const imageAspectRatio = img.width / img.height;

          let newWidth, newHeight;
          if (canvasAspectRatio > imageAspectRatio) {
            newWidth = canvas.width * 0.5;
            newHeight = (canvas.width * 0.5) / imageAspectRatio;
          } else {
            newHeight = canvas.height * 0.5;
            newWidth = canvas.height * 0.5 * imageAspectRatio;
          }
          img.set({
            scaleX: newWidth / img.width,
            scaleY: newHeight / img.height,
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
      <div className="w-fit bg-white mx-auto">
        <canvas ref={canvasRef} className="" />
      </div>
      <div className="mx-auto w-full px-6 md:w-1/2 py-6 space-y-3 ">
        <div className="border-dashed border-2 p-8 text-center text-sm md:text-auto">
          <input
            type="file"
            onChange={handleAddImage}
            accept="image/*"
            className="border  border-gray-300 bg-white p-3 mb-3 rounded-md font-bold w-full mx-auto"
          />
          <p>Drag & drop your design here, or click to select a file</p>
        </div>
        <button
          className="w-full bg-teal-500 rounded-md hover:text-black transition-all ease-in-out py-3 font-semibold uppercase text-white"
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
