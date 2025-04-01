import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL || 'https://eventopia-back.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
