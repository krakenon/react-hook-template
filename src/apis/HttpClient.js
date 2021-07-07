import axios from 'axios';

const PUBLIC_API_URL = process.env.REACT_APP_API_URL;

// create an axios instance
const http = axios.create({
  baseURL: PUBLIC_API_URL,
  timeout: 30000, // request timeout
});

// response interceptor
http.interceptors.response.use(
  (response) => {
    const res = response.data;

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
