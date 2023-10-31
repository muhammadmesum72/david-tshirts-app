import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import FileUpload from "./FileUpload";
import deleteIcon from "../assets/del icon.png";

const DesignCanvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 400,
    });
    
    fabric.Image.fromURL("../assets/tshirt-mockup.jpg", (img) => {
      newCanvas.setBackgroundImage(img, newCanvas.renderAll.bind(newCanvas), {
        scaleX: 400 / img.width,
        scaleY: 400 / img.height,
      });
    });
    setCanvas(newCanvas);


    newCanvas.on("object:selected", (e) => {
      const selectedObject = e.target;
      setSelectedObject(selectedObject);
    });
  }, []);

  //   const [selectedObject, setSelectedObject] = useState(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        fabric.Image.fromURL(e.target.result, (img) => {
          img.set({
            scaleX: 0.5,
            scaleY: 0.5,
          });

          // Create a delete icon
          fabric.Image.fromURL(deleteIcon, (deleteImg) => {
            deleteImg.set({
              scaleX: 0.1,
              scaleY: 0.1,
              top: img.top - 20,
              left: img.left + img.width * 0.5 - 10,
              hasControls: false,
              hasBorders: false,
              selectable: false,
            });

            // Group the image and delete icon
            const group = new fabric.Group([img, deleteImg], {
              left: img.left,
              top: img.top,
            });

            // Set up delete functionality when the delete icon is clicked
            deleteImg.on("mousedown", () => {
              canvas.remove(group);
              canvas.renderAll();
            });

            // Enable corner controls for the group
            group.setControlsVisibility({
              mt: true,
              mb: true,
              ml: true,
              mr: true,
              bl: true,
              br: true,
              tl: true,
              tr: true,
              mtr: false, // Disable rotating point for the group
            });

            canvas.add(group);
            canvas.renderAll();
          });
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
    <div className="w-full">
      {/* <button onClick={handleAddImage}>Add Image</button> <br /> */}
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
      </div>
    </div>
  );
};

export default DesignCanvas;
