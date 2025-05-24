import axios from "axios";

const instance = axios.create({
  baseURL: "https://tg-channels-back-production.up.railway.app",
  //   baseURL: "tg-channels-back-production.up.railway.app", // или https://api.site.com
  // или https://api.site.com
  withCredentials: true,
});

export default instance;
