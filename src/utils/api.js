import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {  hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "19997d6991mshc3552a963ef6480p183474jsna8186f00452d",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
