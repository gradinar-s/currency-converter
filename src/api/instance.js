import axios from "axios";

export const instance = axios.create({
  baseURL: "https://involve.software/test_front/api",
});
