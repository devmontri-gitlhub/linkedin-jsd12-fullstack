import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://linkedin-jsd12-fullstack.onrender.com/api/users',
    withCredentials: true,
});

export const getAllUsers = async () => (await apiClient.get('/')).data;
export const createUser = async (data) => (await apiClient.post('/', data)).data;
export const updateUser = async (id, data) => (await apiClient.put(`/${id}`, data)).data;
export const deleteUser = async (id) => (await apiClient.delete(`/${id}`)).data;