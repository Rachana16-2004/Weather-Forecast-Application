import axios from "axios";

const API_KEY = "9d83767161d842fd978143846252111";   


export const getWeatherFromAPI = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    return null;
  }
};