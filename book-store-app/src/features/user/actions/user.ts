import {
  DeleteRequest,
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/lib/axios";

export const getUsers = async () => {
  try {
    const response = await GetRequest("v1/users/");
    const data = await response.data;

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUser = async (id?: number) => {
  try {
    const response = await GetRequest(`v1/users/${id}/`);
    const data = await response.data;

    // later we will have to send response instead of just the data
    // because response contains status, text etc from the backend
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data: any) => {
  try {
    const response = await PostRequest(`v1/users/`, {
      ...data,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (data: { id?: number; data: any }) => {
  try {
    const response = await PutRequest(`v1/users/${data.id}/`, {
      ...data.data,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await DeleteRequest(`v1/users/${id}/`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
