import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

// request interceptor example
api.interceptors.request.use(
  config => {
    // You can attach auth tokens here if you store them
    return config;
  },
  error => Promise.reject(error)
);

// response interceptor example
api.interceptors.response.use(
  res => res,
  error => {
    // global error handling
    return Promise.reject(error);
  }
);

export default api;
