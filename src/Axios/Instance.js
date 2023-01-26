import axios from "axios";
import { RefreshToken } from "./refreshtoken";
const Axios = axios.create({
  baseURL: "",
  // timeout: 5000,
  headers: {
    Authorization:
      typeof window !== "undefined" && localStorage.getItem("access")
        ? "JWT " + JSON.parse(localStorage.getItem("access"))
        : "",
    "Content-Type": "application/json; charset=utf-8",
  },
});

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await RefreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `JWT ${result?.accessToken}`,
        };

        //New Access Token
        localStorage.setItem("access", JSON.stringify(result.accessToken));
      } else localStorage.clear();

      return axios(config);
    }

    return Promise.reject(error);
  }
);

export default Axios;
