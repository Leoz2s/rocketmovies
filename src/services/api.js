import axios from 'axios';

export const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://moviesapi-oa1z.onrender.com",
});