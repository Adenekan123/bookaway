import axios from "axios";
import { API_KEY, API_HOST, API_URL } from "./config";

export const Axios = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
});

export const getDomains = async () => {
  return await Axios.get("domains");
};
