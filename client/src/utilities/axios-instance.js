import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_ADDR}`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 1000 * 60 * 10,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
