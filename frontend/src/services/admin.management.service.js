import axios from 'axios';
const API_URL = 'https://linkedin-jsd12-fullstack.onrender.com/api/admins';

export const getAdminsAPI = async () => {
    const res = await axios.get(API_URL, { withCredentials: true });
    return res.data;
};

export const createAdminAPI = async (data) => {
    const res = await axios.post(API_URL, data, { withCredentials: true });
    return res.data;
};

export const updateAdminAPI = async (id, data) => {
    const res = await axios.put(`${API_URL}/${id}`, data, { withCredentials: true });
    return res.data;
};

export const deleteAdminAPI = async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
    return res.data;
};