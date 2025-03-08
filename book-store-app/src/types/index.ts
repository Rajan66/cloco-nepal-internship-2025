export type Book = {
    id: string;
    isbn: string; // unique book identifier
    title: string;
    author: Author;
    category: Category[];
    description: string;
    page_count: number;
    price: number;
    publishedDate?: Date;
    createdAt: string;
    updatedAt: string;
};

export type Category = {
    id: string;
    title: string;
    description: string;
};

export type Review = {
    id: string;
    book: Book[];
    user: User[];
    rating: 1 | 2 | 3 | 4 | 5;
};

export type Author = {
    id: string;
    user: User;
    bio?: string;
    created_at: string;
    updated_at: string;
};

export type Customer = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    phone: string;
    active: 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
};

export type Publisher = {
    id: string;
    name: string;
    email: string;
    phone: string;
    about: string;
    address: Address[];
    status: 'ACTIVE' | 'INACTIVE';
};

export type Address = {
    id: string;
    country: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
};

export type User = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    phone: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
};
