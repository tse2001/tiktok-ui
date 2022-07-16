import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, option = {}) => {
    const response = await httpRequest.get(url, option);

    return response.data;
};
export default httpRequest;
