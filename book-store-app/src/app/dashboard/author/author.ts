import { Author } from "@/types/index";

// TODO where to put the apis folder ( inside actions/api? )
export const getAuthors = async (): Promise<Author[]> => {
    try {
        const response = await fetch("http://localhost:5000/authors");
        if (!response.ok) {
            throw new Error("Failed to fetch authors");
        }

        const data = await response.json();

        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getAuthor = async (id?: number) => {
    try {
        const response = await fetch(`http://localhost:5000/authors/${id}`, {
            method: "GET",
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to fetch author: ${id}`);
        }
        // later we will have to send response instead of just the data
        // because response contains status, text etc from the backend
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAuthor = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:5000/authors/${id}`, {
            method: "DELETE",
        });
        console.log(response);

        if (!response.ok) {
            throw new Error(`Failed to delete author: ${id}`);
        }

        return response;
    } catch (error) {
        console.log(error);
    }
};
