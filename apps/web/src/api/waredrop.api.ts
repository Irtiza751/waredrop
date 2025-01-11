import axios from "axios";

export const waredropApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
