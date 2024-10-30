// src/api/axiosInstance.js

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Or get from context
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
