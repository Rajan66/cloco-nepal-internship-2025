export type Book = {
    id: number;
    isbn: string; // unique book identifier
    title: string;
    author: Author;
    description: string;
    pageCount: number;
    price: number;
    publishedDate?: Date;
    createdAt: string;
    updatedAt: string;
};

export type Author = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address?: string;
    phone?: string;
    bio?: string;
    books?: Book[];
    createdAt: string;
    updatedAt: string;
};

export type Customer = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    phone: string;
    active: "active" | "inactive";
    createdAt: string;
    updatedAt: string;
};
