import { PlacesProps, Place } from "../../types";
import "./places.css";

const Places: React.FC<PlacesProps> = ({ places }) => {
  const onMouseOverEvent = (place: Place) => {
    console.log(place.name);
  };

  return (
    <div className="places-box">
      {places.map((place, index) => (
        <h2 key={index} style={{ margin: 0 }}>
          <a
            href={place.url}
            className="places-text"
            onMouseOver={() => {
              onMouseOverEvent(place);
            }}
          >
            {place.name.toUpperCase()}
          </a>
        </h2>
      ))}
    </div>
  );
};

export default Places;
