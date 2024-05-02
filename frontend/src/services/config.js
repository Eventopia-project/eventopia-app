import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.29.0.12:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;