import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://linkedin-jsd12-fullstack.onrender.com/api/admins',
    withCredentials: true,
});

export const getAdminProfile = async () => (await apiClient.get('/')).data;
export const createAdmin = async (data) => (await apiClient.post('/', data)).data;
export const updateAdmin = async (id, data) => (await apiClient.put(`/${id}`, data)).data; // ✨ เพิ่มตัวนี้
export const deleteAdmin = async (id) => (await apiClient.delete(`/${id}`)).data;