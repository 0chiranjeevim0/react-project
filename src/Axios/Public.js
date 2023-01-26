import axios from "axios";

const Axios = axios.create({
  baseURL: "",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default Axios;
