import React from "react";
import "./imagebox.css";
import { Place } from "src/types/types";

interface ImageProps {
  currentPlace?: Place;
}

const ImageBox: React.FC<ImageProps> = ({ currentPlace }) => {
  const maxLeft = 200;
  const minWidth = 250;
  const maxVerticalMovement = 600;

  const maxWidth = 300;

  let a = [];
  const allowedColumnsSet = new Set([0, 1, 2, 6, 7, 8]);
  const bannedBoxesSet = new Set();
  for (let i = 0; i < 80; i++) {
    if (
      Math.random() > 0.9 &&
      allowedColumnsSet.has(i % 10) &&
      !bannedBoxesSet.has(i)
    ) {
      const banned = [
        i,
        i + 1,
        i + 2,
        i + 9,
        i + 10,
        i + 11,
        i + 12,
        i + 20,
        i + 21,
        i + 22,
      ];
      banned.forEach((b) => bannedBoxesSet.add(b));
      const randomImageNumber = Math.floor(
        Math.random() * (currentPlace?.maxNumber || 1)
      );
      const randomImageWidth = minWidth + Math.random() * maxWidth;
      console.log({ randomImageWidth });
      a.push(
        <div className="col">
          {" "}
          <img
            src={`${currentPlace?.urlBase}${randomImageNumber}.jpg`}
            className="image-container"
            style={{
              // left: `${image.left}px`,
              // top: `${image.top}px`,
              width: `${randomImageWidth}px`,
            }}
          />
        </div>
      );
    } else {
      a.push(<div className="col"></div>);
    }
  }

  return (
    <>
      <div className="box-outer">
        {/* <img
          src={`${currentPlace?.urlBase}${randomImageNumber}.jpg`}
          className="image-container"
          style={{
            left: `${image.left}px`,
            top: `${image.top}px`,
            width: `${image.width}px`,
          }}
        />
        <img
          src={`${currentPlace?.urlBase}${randomImageNumber2}.jpg`}
          className="image-container"
          style={{
            left: `${image2.left}px`,
            top: `${image2.top}px`,
            width: `${image2.width}px`,
            transform: "matrix(1, 2, 0, 1, 380, 163)",
          }}
        />
        <img
          src={`${currentPlace?.urlBase}${randomImageNumber3}.jpg`}
          className="image-container"
          style={{
            left: `${image3.left}px`,
            top: `${image3.top}px`,
            width: `${image3.width}px`,
          }}
        /> */}
        <div className="flex-grid">{a.map((c) => c)}</div>
      </div>
    </>
  );
};

export default ImageBox;
