import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b486717f83bf478283e139535a08e15d",
  },
});

export default api;
