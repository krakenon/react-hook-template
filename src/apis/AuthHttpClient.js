import { getAccessToken, refreshToken } from '@kongd/auth';
import axios from 'axios';

const PUBLIC_API_URL = process.env.REACT_APP_API_URL;

// create an axios instance
const http = axios.create({
  baseURL: PUBLIC_API_URL,
  timeout: 30000, // request timeout
});

// request interceptor
http.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['Authorization'] = getAccessToken();

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
http.interceptors.response.use(
  (response) => {
    const res = response.data;

    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // token expired
      refreshToken();
    }

    return Promise.reject(error);
  }
);

export default http;
