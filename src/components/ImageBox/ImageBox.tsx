import React from "react";
import "./imagebox.css";

interface ImageProps {
  url: string;
}

const ImageBox: React.FC<ImageProps> = ({ url }) => {
  const maxLeft = 200;
  const minNum = 50;
  const maxVerticalMovement = 300;

  const maxWidth = 200;
  const randomNumberObjMaker = () => {
    const x = Math.random();
    const y = Math.random();
    return { x: x, y: y };
  };

  const image = randomNumberObjMaker();

  return (
    <>
      <div className="box-outer">
        <img
          src={url}
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
