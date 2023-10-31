import React, { useState, useRef } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";

const KonvaCanvas = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  let stageRef = useRef(null);
  let transformerRef = useRef(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newImage = new window.Image();
        newImage.src = e.target.result;
  
        newImage.onload = () => {
          setImages([...images, newImage]);
        };
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleDownload = () => {
    const dataURL = stageRef.toDataURL();
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "custom_tshirt_design.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageResize = (index, width, height) => {
    const updatedImages = [...images];
    updatedImages[index].width = width;
    updatedImages[index].height = height;
    setImages(updatedImages);
  };

  return (
    <div className="w-full">
      <button onClick={handleAddImage}>Add Image</button> <br />
      <button onClick={handleDownload}>Download Design</button> <br />
      <input type="file" onChange={handleAddImage} accept="image/*" />
      <div className="my-12 w-fit bg-white">
        <Stage width={1000} height={500} ref={(node) => (stageRef = node)}>
          <Layer>
            {images.map((image, index) => (
              <React.Fragment key={index}>
                <Image
                  image={image}
                  draggable
                  onDragEnd={(e) => {
                    // Update image position after dragging
                    const updatedImages = [...images];
                    updatedImages[index] = {
                      ...updatedImages[index],
                      x: e.target.x(),
                      y: e.target.y(),
                    };
                    setImages(updatedImages);
                  }}
                  onClick={() => setSelectedImageIndex(index)}
                />
                {selectedImageIndex === index && (
                  <Transformer
                    anchorSize={6}
                    borderDash={[3, 3]}
                    ref={(node) => (transformerRef = node)}
                    keepRatio={false}
                    onTransformEnd={() => {
                      // Update image size after transformation
                      const node = transformerRef.getLayer();
                      const scaleX = node.scaleX();
                      const scaleY = node.scaleY();

                      handleImageResize(index, node.width() * scaleX, node.height() * scaleY);
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default KonvaCanvas;
