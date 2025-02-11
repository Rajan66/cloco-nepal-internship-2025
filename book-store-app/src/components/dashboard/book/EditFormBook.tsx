"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookSchema, TBook } from "@/schemas/bookSchema";
import { useGetBook } from "@/hooks/bookQueries";

const EditFormBook = () => {
    const router = useRouter();
    const { id: bookId } = useParams();

    const { data: bookData, isLoading } = useGetBook(Number(bookId));
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TBook>({
        resolver: zodResolver(BookSchema),
        defaultValues: {
            title: bookData?.title,
            isbn: bookData?.isbn,
            author: bookData?.author,
            price: bookData?.price,
            pageCount: bookData?.pageCount,
            description: bookData?.description,
        },
    });

    useEffect(() => {
        if (bookData) {
            setValue("title", bookData?.title ?? "");
            setValue("isbn", bookData?.isbn ?? "");
            setValue("author", bookData?.author ?? "");
            setValue("price", bookData?.price ?? "");
            setValue("pageCount", bookData?.pageCount ?? "");
            setValue("description", bookData?.description ?? "");
        }
    }, [bookData]);

    if (isLoading) {
        return (
            <div>
                <Loader2Icon />
            </div>
        );
    }
    const updateBook = async (data: TBook) => {
        try {
            const response = await fetch(`http://localhost:5000/books/${bookId}`, {
                method: "PUT",
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.text}`);
            }
            console.log(response);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const onSubmit = async (data: TBook) => {
        try {
            const response = await updateBook(data);
            toast.success("Book updated succesfully");
            console.log(await response.json());
            reset();
            router.push("/dashboard/book");
        } catch (error) {
            toast.error(`Error: ${error}`);
            console.error("Form submit error:", error);
        }
    };

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
            <div className="flex flex-col gap-2">
                <Label htmlFor="price">Price*:</Label>
                <Input
                    id="price"
                    type="text" 
                    placeholder="Enter book's price..."
                    {...register("price", {
                        setValueAs: (v) => (v === "" ? undefined : parseFloat(v)),
                    })}
                />
                {errors.price && (
                    <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="pageCount">Page Count*:</Label>
                <Input
                    id="pageCount"
                    type="number"
                    placeholder="Enter book's page count..."
                    {...register("pageCount", { valueAsNumber: true })}
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

export default EditFormBook;
