import React from "react";
import "./imagebox.css";
import { Place } from "src/types/types";

interface ImageProps {
  currentPlace?: Place;
}

const ImageBox: React.FC<ImageProps> = ({ currentPlace }) => {
  const maxLeft = 200;
  const minNum = 150;
  const maxVerticalMovement = 300;

  const maxWidth = 200;
  const randomNumberObjMaker = () => {
    const x = Math.random();
    const y = Math.random();
    return { x: x, y: y };
  };

  const image = randomNumberObjMaker();

  const randomImageNumber = Math.floor(
    Math.random() * (currentPlace?.maxNumber || 1)
  );

  return (
    <>
      <div className="box-outer">
        <img
          src={`${currentPlace?.urlBase}${randomImageNumber}.jpg`}
          className="image-container"
          style={{
            left: `${image.x * maxLeft}px`,
            top: `${image.y * maxVerticalMovement}px`,
            width: `${minNum + image.y * maxWidth}px`,
          }}
        />
      </div>
    </>
  );
};

export default ImageBox;
