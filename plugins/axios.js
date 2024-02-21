import axios from 'axios';

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
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
        $toast.error('You are not authorized to access this resource');
        // router.push(....)
      } else if (error.response.status === 404) {
        $toast.error('Resource not found');
      } else if (error.response.status === 500) {
        $toast.error('Internal server error');
      } else if (error.response.status === 400) {
        $toast.error('Bad request');
      } else {
        $toast.error(error.response.data.message);
        return Promise.reject(error);
      }
    }
  );

  return {
    provide: {
      api,
    },
  };
});
