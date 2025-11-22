import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getForecast = (location, date) =>
  axios.get(`${API_URL}/forecast`, {
    params: { location, date }
  });

export const addLocation = (data) =>
  axios.post(`${API_URL}/locations`, data);

export const getLocation = (id) =>
  axios.get(`${API_URL}/locations/${id}`);

export const getFavorites = () =>
  axios.get(`${API_URL}/favorites`);

export const addFavorite = (location_id) =>
  axios.post(`${API_URL}/favorites`, { location_id });
