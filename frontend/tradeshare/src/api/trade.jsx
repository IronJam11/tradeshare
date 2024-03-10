// api/tradeApi.js
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const axiosConfig = {
  withCredentials: true,
};

export const fetchTradesApi = () => {
  return axios.get("http://127.0.0.1:8000/trades/", axiosConfig);
};

export const createTradeApi = (newTrade) => {
    console.log(newTrade)
  return axios.post("http://127.0.0.1:8000/trades/", newTrade, axiosConfig);
};

export const deleteTradeApi = (tradeId) => {
  return axios.delete(`http://127.0.0.1:8000/trades/${tradeId}/`, axiosConfig);
};

export const editTradeApi = (tradeId, newData) => {
  return axios.put(
    `http://127.0.0.1:8000/trades/${tradeId}/`,
    newData,
    axiosConfig
  );
};
