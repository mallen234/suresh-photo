import { useState } from "react";
import "./SmoothImage.css"; // contains the fade CSS

interface SmoothImageProps {
  src: string;
  alt: string;
  width: number;
  ref: React.MutableRefObject<HTMLImageElement | null>;
}

const SmoothImage: React.FC<SmoothImageProps> = ({ src, alt, ref, width }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      ref={ref}
      className={loaded ? "loaded" : ""}
      onLoad={() => setLoaded(true)}
      style={{
        width: `${width}px`,
      }}
    />
  );
};

export default SmoothImage;
