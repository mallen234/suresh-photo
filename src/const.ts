import { Place } from "src/types/types";

export const placeMap = {
  thailand: {
    name: "Thailand",
    url: "",
    urlBase: "/holidayPhotos/Thailand/1/",
  } as Place,
  iceland: { name: "Iceland", url: "", urlBase: "/holidayPhotos/Iceland/1/" },
  cambodia: {
    name: "Cambodia",
    url: "",
    urlBase: "/holidayPhotos/Cambodia/1/",
  } as Place,
  vietnam: { name: "Vietnam", url: "", urlBase: "/holidayPhotos/Vietnam/1/" },
  "timor leste": {
    name: "Timor Leste",
    url: "",
    urlBase: "/holidayPhotos/TimorLeste/1/",
  } as Place,
  singapore: {
    name: "Singapore",
    url: "",
    urlBase: "/holidayPhotos/Singapore/1/",
  } as Place,
  indonesia: {
    name: "Indonesia",
    url: "",
    urlBase: "/holidayPhotos/Indonesia/1/",
  } as Place,
  japan: {
    name: "Japan",
    url: "/holidayPhotos/Japan/1/",
    urlBase: "/holidayPhotos/Japan/1/",
  } as Place,
};

const places: Place[] = [
  {
    name: "Iceland",
    url: "",
    urlBase: "/holidayPhotos/Iceland/1/",
    maxNumber: 32,
  },
  {
    name: "Thailand",
    url: "",
    urlBase: "/holidayPhotos/Thailand/1/",
    maxNumber: 34,
  },
  {
    name: "Cambodia",
    url: "",
    urlBase: "/holidayPhotos/Cambodia/1/",
    maxNumber: 1,
  },
  {
    name: "Vietnam",
    url: "",
    urlBase: "/holidayPhotos/Vietnam/1/",
    maxNumber: 1,
  },
  {
    name: "Timor Leste",
    url: "",
    urlBase: "/holidayPhotos/TimorLeste/1/",
    maxNumber: 1,
  },
  {
    name: "Singapore",
    url: "",
    urlBase: "/holidayPhotos/Singapore/1/",
    maxNumber: 1,
  },
  {
    name: "Indonesia",
    url: "",
    urlBase: "/holidayPhotos/Indonesia/1/",
    maxNumber: 1,
  },
  { name: "Japan", url: "", urlBase: "/holidayPhotos/Japan/1/", maxNumber: 14 },
];

export default places;
