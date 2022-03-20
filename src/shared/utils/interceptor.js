import axios from "axios";
import { baseURL } from "../constants/constants";

export const protectedApi = axios.create({
    baseURL,
    headers: {Authorization: `Bearer token`}
});

export const api = axios.create({
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

