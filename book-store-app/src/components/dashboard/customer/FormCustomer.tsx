"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomerSchema, TCustomer } from "@/schemas/customerSchema";

const FormCustomer = () => {
    const router = useRouter();

    // react-hook-form manages the state so we don't need handleChange and value like in vanilla html form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TCustomer>({
        resolver: zodResolver(CustomerSchema),
        mode: "onBlur",
        // onBlur throws a validation error when the user leaves the field
        // onChange throws a validation error when the user is typing
        // default is onSubmit
    });

    const createCustomer = async (data: TCustomer) => {
        try {
            const response = await fetch("http://localhost:5000/customers", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const result = response.json();
            return result;
        } catch (error) {
            throw error;
        }
    };
    const onSubmit = async (data: TCustomer) => {
        try {
            const result = await createCustomer(data);
            toast.success("Customer created succesfully");
            console.log(result);
            reset();
            router.push("/dashboard/customer");
        } catch (error) {
            toast.error(`Something went wrong`);
            console.error("Form submit error:", error);
        }
    };
    console.log(errors);

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
                <Input
                    id="email"
                    type="text"
                    placeholder="Enter email..."
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
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
                <Input
                    id="phone"
                    type="text"
                    placeholder="Enter phone..."
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>

            <Button type="submit" className="w-fit p-4">
                Submit
            </Button>
        </form>
    );
};

export default FormCustomer;
