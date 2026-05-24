import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const loginAdmin = async (username, password) => {
    const response = await apiClient.post('/login', { username, password });
    return response.data;
};

export const logoutAdmin = async () => {
    const response = await apiClient.post('/logout');
    return response.data;
};