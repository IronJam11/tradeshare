// api/userApi.js
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const axiosConfig = {
  withCredentials: true,
};

export const loginApi = (credentials) => {
  return axios.post('http://127.0.0.1:8000/login/', credentials, axiosConfig);
};

export const logoutApi = () => {
  return axios.post('http://127.0.0.1:8000/logout/', {}, axiosConfig);
};

export const fetchCurrentUserApi = () => {
  return axios.get('http://127.0.0.1:8000/current_user/', axiosConfig);
};
