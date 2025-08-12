import { Place } from "src/types/types";

export const placeMap = {
  thailand: {
    name: "Thailand",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/thailand/1/",
  } as Place,
  iceland: {
    name: "Iceland",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/iceland/1/",
  },
  cambodia: {
    name: "Cambodia",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/cambodia/1/",
  } as Place,
  vietnam: {
    name: "Vietnam",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/vietnam/1/",
  },
  "timor leste": {
    name: "Timor Leste",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/timorLeste/1/",
  } as Place,
  singapore: {
    name: "Singapore",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/singapore/1/",
  } as Place,
  indonesia: {
    name: "Indonesia",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/indonesia/1/",
  } as Place,
  japan: {
    name: "Japan",
    url: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/1/",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/1/",
  } as Place,
};

const places: Place[] = [
  {
    name: "Iceland",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/iceland/1/",
    maxNumber: 32,
  },
  {
    name: "Thailand",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/thailand/1/",
    maxNumber: 34,
  },
  {
    name: "Cambodia",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/cambodia/1/",
    maxNumber: 1,
  },
  {
    name: "Vietnam",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/vietnam/1/",
    maxNumber: 1,
  },
  {
    name: "Timor Leste",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/timorLeste/1/",
    maxNumber: 1,
  },
  {
    name: "Singapore",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/singapore/1/",
    maxNumber: 1,
  },
  {
    name: "Indonesia",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/indonesia/1/",
    maxNumber: 1,
  },
  {
    name: "Japan",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/1/",
    maxNumber: 14,
  },
];

export default places;
