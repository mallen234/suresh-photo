import { Place } from "src/types/types";
import "./places.css";

export interface PlacesProps {
  places: Place[];
  placeNameChange: React.Dispatch<React.SetStateAction<Place | undefined>>;
}

const Places: React.FC<PlacesProps> = ({ places, placeNameChange }) => {
  const onMouseOverEvent = (place: Place) => {
    console.log(place.name);
    placeNameChange(place);
  };

  return (
    <div className="places-box">
      {places.map((place, index) => (
        <h1 key={index} style={{ margin: 0 }}>
          <a
            href={place.url}
            className="places-text"
            onMouseOver={() => {
              onMouseOverEvent(place);
            }}
          >
            {place.name.toUpperCase()}
          </a>
        </h1>
      ))}
    </div>
  );
};

export default Places;
