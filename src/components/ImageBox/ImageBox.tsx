import React, { useRef } from "react";
import "./imagebox.css";
import { Place } from "src/types/types";
import SmoothImage from "src/components/Image/SmoothImage";

interface ImageProps {
  currentPlace?: Place;
}

const ImageBox: React.FC<ImageProps> = ({ currentPlace }) => {
  const minWidth = 250;
  const imgRef = useRef<HTMLImageElement | null>(null);

  const maxWidth = 300;

  let imagesList = [];
  const allowedColumnsSet = new Set([0, 1, 2, 6, 7, 8]);
  const bannedBoxesSet = new Set();
  for (let i = 0; i < 80; i++) {
    if (imgRef.current) {
      console.log("here");
      console.log(imgRef.current);
    }
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
      imagesList.push(
        <div className="col">
          {" "}
          <SmoothImage
            alt={`${currentPlace?.name}`}
            ref={imgRef}
            src={`${currentPlace?.urlBase}${randomImageNumber}_compressed.jpg`}
            width={randomImageWidth}
          />
        </div>
      );
    } else {
      imagesList.push(<div className="col"></div>);
    }
  }

  return (
    <>
      <div className="box-outer">
        <div className="flex-grid">{imagesList.map((a) => a)}</div>
      </div>
    </>
  );
};

export default ImageBox;
