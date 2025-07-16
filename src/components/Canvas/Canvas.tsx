import React, { useState } from "react";
import "./canvas.css";
import { Place } from "src/types/types";

import ImageBox from "src/components/ImageBox/ImageBox";
import places from "src/const";
import Places from "../Places/Places";

const Canvas: React.FC = () => {
  const [currentPlace, setCurrentPlace] = useState<Place>();

  return (
    <>
      <div className="canvas-outer">
        {/* <ImageBox currentPlace={currentPlace} /> */}
        <Places places={places} placeNameChange={setCurrentPlace} />
        <ImageBox currentPlace={currentPlace} />
      </div>
    </>
  );
};

export default Canvas;
