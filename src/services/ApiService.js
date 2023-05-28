import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getWishes = async (page = 1) => {
    const response = await service.get('/wishes', {
        params: {
            page
        }
    });
    return response.data;
}

export const sendWish = async (data) => {
    const response = await service.post('/wishes', data);
    return response.data;
}

export const saveLog = async (data) => {
    const response = await service.post('/logs', data);
    return response.data;
}