import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";

const DesignCanvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1000,
      height: 500,
    });
    setCanvas(newCanvas);
    fabric.Image.fromURL('../assets/tshirt-mockup.jpg', (img) => {
        newCanvas.setBackgroundImage(img, newCanvas.renderAll.bind(newCanvas), {
          scaleX: newCanvas.width / img.width,
          scaleY: newCanvas.height / img.height,
        });
      });

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
    <div className="w-full">
      {/* <button onClick={handleAddImage}>Add Image</button> <br /> */}
      {/* <button onClick={handleDownload}>Download Design</button> <br /> */}
      <input type="file" onChange={handleAddImage} accept="image/*" />
      <div className=" my-12 w-fit bg-white">
        <canvas ref={canvasRef} className="" />
      </div>
    </div>
  );
};

export default DesignCanvas;
