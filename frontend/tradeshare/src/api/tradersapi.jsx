import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const axiosConfig = {
  withCredentials: true,
};

export const fetchTradersApi = () => {
  return axios.get("http://localhost:8000/traders/", axiosConfig);
};
