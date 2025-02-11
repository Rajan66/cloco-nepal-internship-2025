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
import { AuthorSchema, TAuthor } from "@/schemas/authorSchema";
import { useGetAuthor } from "@/hooks/authorQueries";

const EditFormAuthor = () => {
    const router = useRouter();
    const { id: authorId } = useParams();

    const { data: authorData, isLoading } = useGetAuthor(Number(authorId));
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TAuthor>({
        resolver: zodResolver(AuthorSchema),
        defaultValues: {
            firstname: authorData?.firstname,
            lastname: authorData?.lastname,
            email: authorData?.email,
            address: authorData?.address,
            phone: authorData?.phone,
            bio: authorData?.bio,
        },
    });

    useEffect(() => {
        if (authorData) {
            setValue("firstname", authorData?.firstname ?? "");
            setValue("lastname", authorData?.lastname ?? "");
            setValue("email", authorData?.email ?? "");
            setValue("address", authorData?.address ?? "");
            setValue("phone", authorData?.phone ?? "");
            setValue("bio", authorData?.bio ?? "");
        }
    }, [authorData]);

    if (isLoading) {
        return (
            <div>
                <Loader2Icon />
            </div>
        );
    }
    const updateAuthor = async (data: TAuthor) => {
        try {
            const response = await fetch(`http://localhost:5000/authors/${authorId}`, {
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

    const onSubmit = async (data: TAuthor) => {
        try {
            const response = await updateAuthor(data);
            toast.success("Author updated succesfully");
            console.log(await response.json());
            reset();
            router.push("/dashboard/author");
        } catch (error) {
            toast.error(`Error: ${error}`);
            console.error("Form submit error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ">
                <Label htmlFor="firstname">Firstname:*</Label>
                <Input
                    id="firstname"
                    type="text"
                    placeholder="Enter firstname..."
                    {...register("firstname")}
                />
                {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2 ">
                <Label htmlFor="lastname">Lastname:*</Label>
                <Input
                    id="lastname"
                    type="text"
                    placeholder="Enter lastname..."
                    {...register("lastname")}
                />
                {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2 ">
                <Label htmlFor="email">Email:*</Label>
                <Input id="email" type="text" placeholder="Enter email..." {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2 ">
                <Label htmlFor="address">Address:</Label>
                <Input
                    id="address"
                    type="text"
                    placeholder="Enter address..."
                    {...register("address")}
                />
                {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address?.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2 ">
                <Label htmlFor="phone">Phone:</Label>
                <Input id="phone" type="text" placeholder="Enter phone..." {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-2 ">
                <Label htmlFor="bio">Bio:</Label>
                <Textarea id="bio" placeholder="Write a few words..." {...register("bio")} />
                {errors.bio && <p className="text-red-500 text-sm">{errors.bio?.message}</p>}
            </div>

            <Button type="submit" className="w-fit p-4">
                Submit
            </Button>
        </form>
    );
};

export default EditFormAuthor;
