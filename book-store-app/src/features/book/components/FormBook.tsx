"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookSchema, TBook } from "@/schemas/bookSchema";
import { Button } from "@/components/ui/button";
import { Author } from "@/types/index";

const FormBook = () => {
    const [search, setSearch] = useState("");
    const [authors, setAuthors] = useState<Author[]>([]);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TBook>({
        resolver: zodResolver(BookSchema),
        mode: "onBlur",
        // onBlur throws a validation error when the user leaves the field
        // onChange throws a validation error when the user is typing
        // default is onSubmit
    });

    const createBook = async (data: TBook) => {
        try {
            const response = await fetch("http://localhost:5000/books", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.text}`);
            }
            const result = await response.json();

            return result;
        } catch (error) {
            throw error;
        }
    };

    const onSubmit = async (data: TBook) => {
        try {
            const result = await createBook(data);
            toast.success("Book created succesfully"); // TODO replace with repsonse message got from the backend
            console.log(result);
            reset();
            router.push("/dashboard/book");
        } catch (error) {
            console.log(`Form submit Something went wrong`);
            toast.error(`Something went wrong`);
        }
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title*:</Label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Enter book's title..."
                    {...register("title")}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="isbn">ISBN*:</Label>
                <Input
                    id="isbn"
                    type="text"
                    placeholder="Enter book's isbn..."
                    {...register("isbn")}
                />
                {errors.isbn && (
                    <p className="text-red-500 text-sm">{errors.isbn.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="author">Author*:</Label>
                <Input
                    id="author"
                    type="text"
                    placeholder="Enter book's author..."
                    {...register("author")}
                />
                {errors.author && (
                    <p className="text-red-500 text-sm">{errors.author.message}</p>
                )}
            </div>
            {/* {authors.length > 0 && (
                <ul className="relative bg-white border p-2 flex flex-col gap-2 shadow-lg">
                    {authors.map((author) => (
                        <li key={author.id} onClick={() => setSearch(author.firstname)}>
                            {author.firstname} {author.lastname}
                        </li>
                    ))}
                </ul>
            )}  */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price*:</Label>
                <Input
                    id="price"
                    type="text"
                    placeholder="Enter book's price..."
                    {...register("price")}
                />
                {errors.price && (
                    <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="pageCount">Page Count*:</Label>
                <Input
                    id="pageCount"
                    type="text"
                    placeholder="Enter book's page count..."
                    {...register("pageCount")}
                />
                {errors.pageCount && (
                    <p className="text-red-500 text-sm">{errors.pageCount.message}</p>
                )}
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="description">Description*:</Label>
                    <Textarea
                        id="description"
                        placeholder="Write at least 10 words about the book..."
                        {...register("description")}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">
                            {errors.description.message}
                        </p>
                    )}
                </div>
            </div>
            <Button type="submit" className="w-fit">
                Submit
            </Button>
        </form>
    );
};

export default FormBook;
