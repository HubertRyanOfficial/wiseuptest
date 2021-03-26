import axios from "axios";

const api = axios.create({
  baseURL: "https://604fcacdc20143001744dc72.mockapi.io/wv1"
})

export default api;