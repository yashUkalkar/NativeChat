import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_BASE_URL;
export default axios.create({
  baseURL: SERVER_URL || "http://localhost:5001",
});
