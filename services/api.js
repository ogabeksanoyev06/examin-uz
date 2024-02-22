import axios from 'axios';

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const access_token = '';
    if (access_token !== null) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {

    } else if (error.response.status === 404) {
      console.log('awdawdawdawda');
    } else if (error.response.status === 500) {

    } else if (error.response.status === 400) {

    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
