import React from "react";
import "./canvas.css";
import { Place } from "../../types";
import Places from "../Places/Places";
import ImageBox from "../ImageBox/ImageBox";

const Canvas: React.FC = () => {
  const places: Place[] = [
    { name: "Iceland", url: "" },
    { name: "Thailand", url: "" },
    { name: "Cambodia", url: "" },
    { name: "Vietnam", url: "" },
    { name: "Timor Leste", url: "" },
    { name: "Singapore", url: "" },
    { name: "Indonesia", url: "" },
  ];

  return (
    <>
      <div className="canvas-outer">
        <ImageBox url="/holidayPhotos/Japan/Japan_3a_Canon_AE-1_Fujifilm_Superia_X-TRA_400/22210002.jpg" />
        <Places places={places} />
        <ImageBox url="/holidayPhotos/Japan/Japan_3a_Canon_AE-1_Fujifilm_Superia_X-TRA_400/22210002.jpg" />
      </div>
    </>
  );
};

export default Canvas;
