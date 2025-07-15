export type Place = {
  name: string;
  url: string;
  urlBase?: string;
  maxNumber: number;
};

export interface PlacesProps {
  places: Place[];
  placeNameChange: React.Dispatch<React.SetStateAction<String>>;
}
