import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: process.env.serverURL,
});

export default axiosAPI;
