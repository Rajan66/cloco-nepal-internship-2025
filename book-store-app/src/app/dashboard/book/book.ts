import { Book } from "@/types/index";

export const getBooks = async (): Promise<Book[]> => {
    try {
        const response = await fetch("http://localhost:5000/books");
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getBook = async (id?: number) => {
    try {
        const response = await fetch(`http://localhost:5000/books/${id}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch book: ${id}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBook = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:5000/books/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Failed to delete book: ${id}`);
        }

        return response;
    } catch (error) {
        console.log(error);
    }
};
