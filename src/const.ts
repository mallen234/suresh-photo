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
    name: "Iceland I",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/iceland/1/",
    maxNumber: 32,
  },
  {
    name: "Thailand I",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/thailand/1/",
    maxNumber: 34,
  },
  {
    name: "Thailand II",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/thailand/2/",
    maxNumber: 34,
  },
  {
    name: "Thailand III",
    url: "",
    urlBase:
      "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/thailand/3/",
    maxNumber: 34,
  },
  {
    name: "London I",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/london/1/",
    maxNumber: 34,
  },
  {
    name: "Japan I",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/1/",
    maxNumber: 14,
  },
  {
    name: "Japan II",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/2/",
    maxNumber: 14,
  },
  {
    name: "Japan III",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/3/",
    maxNumber: 14,
  },
  {
    name: "Japan IV",
    url: "",
    urlBase: "https://suresh-photo-bucket.s3.eu-west-2.amazonaws.com/japan/4/",
    maxNumber: 14,
  },
];

export default places;
