import { z } from "zod";

export const BookSchema = z.object({
    title: z
        .string({ required_error: "Title is required" })
        .min(1, { message: "Title is required" }),
    isbn: z
        .string({ required_error: "ISBN is required" })
        .min(5, { message: "ISBN should not be less than 5 characters" }),
    author: z
        .string({ required_error: "Author is required" })
        .min(1, { message: "Author is required" }),
    description: z
        .string({ required_error: "Description is required" })
        .min(1, { message: "Description should be at least 10 words" }),
    price: z
        .number({ required_error: "Price is required" })
        .min(1, { message: "Price is required" }),
    pageCount: z
        .number({ required_error: "Page count is required" })
        .min(1, { message: "Page count is required" }),
});

// deduce the type of bookschema to create new type TBook
export type TBook = z.infer<typeof BookSchema>;
