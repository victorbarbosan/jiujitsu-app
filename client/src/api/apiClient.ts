import axios from 'axios';

// Base URL
const API_BASE_URL = import.meta.env.SERVER_API_URL || 'http://localhost:3000/api';

// Axios Instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // TODO: add authorization tokens
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.satus === 401) {
            // TODO: handle unauthorized access
        } else if (error.response?.status === 403) {
            // TODO: handle forbidden access
        } else if (error.response?.status === 404) {
            // TODO: handle not found
        } else if (error.response?.status === 500) {
            // TODO: handle server error
        } else {
            // TODO: handle other errors
        }
    }
);

export default apiClient;