import axios, { AxiosRequestConfig } from 'axios';

const api = process.env.NEXT_PUBLIC_API_URL;

export const GetRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    config.params = data;
    return axios.get(`${api}/${url}`, config);
};

export const PostRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.post(`${api}/${url}`, data, config);
};

export const PutRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.put(`${api}/${url}`, data, config);
};

export const PatchRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.patch(`${api}/${url}`, data, config);
};

export const DeleteRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.delete(`${api}/${url}`, config);
};