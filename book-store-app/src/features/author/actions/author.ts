import { DeleteRequest, GetRequest, PostRequest, PutRequest } from '@/lib/axios';

export const getAuthors = async () => {
    try {
        const response = await GetRequest('v1/users/authors/');
        const data = await response.data;

        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getAuthor = async (id?: string) => {
    try {
        const response = await GetRequest(`v1/users/authors/${id}/`);
        const data = await response.data;

        // later we will have to send response instead of just the data
        // because response contains status, text etc from the backend
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createAuthor = async (data: any) => {
    try {
        const response = await PostRequest(`v1/users/authors/`, {
            ...data,
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateAuthor = async (data: { id?: string; data: any }) => {
    try {
        const response = await PutRequest(`v1/users/authors/${data.id}/`, {
             ...data.data ,
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAuthor = async (id: string) => {
    try {
        const response = await DeleteRequest(`v1/users/authors/${id}/`);

        return response;
    } catch (error) {
        console.log(error);
    }
};
