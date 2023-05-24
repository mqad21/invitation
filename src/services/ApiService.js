import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

console.log(process.env)

const service = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getWishes = async () => {
    const response = await service.get('/wishes');
    return response.data;
}

export const sendWish = async (data) => {
    const response = await service.post('/wishes', data);
    return response.data;
}