import axios from "axios";

const BASE_URL = process.env.NEXTAUTH_URL;
const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
