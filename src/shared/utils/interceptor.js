import axios from "axios";

const baseURL = 'http://localhost:8080';
const clientRequest = axios.create({baseURL});

// apiCall is wrapper function that works as an interceptor

export const apiCall = ({...options}) => {
    clientRequest.defaults.headers.common.Authorization('Bearer Token');
    onSuccess = response => response;
    onError = error => error;
    clientRequest(options).then(onSuccess).catch(onError);
}

