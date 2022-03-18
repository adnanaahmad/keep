import axios from "axios";

const baseURL = 'http://localhost:8080/api';

export const axiosInstanceApi = axios.create({
    baseURL,
    headers: {Authorization: `Bearer token`}
});

export const axiosInstance = axios.create({
    baseURL,
});
// Add a request interceptor
// axiosInstance.interceptors.request.use((config) => {
//     // Do something before request is sent
//     return config;
//   }, (error) => {
//     // Do something with request error
//     return Promise.reject(error);
// });

