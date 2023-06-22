import axios from "axios";
export const baseURL = "https://asos2.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "9e30f360d9msh775c4c837dc1fd0p1304c0jsn6442d8f89848",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  });
  return data;
};
