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
import { CustomerSchema, TCustomer } from "@/schemas/customerSchema";
import { useGetCustomer } from "@/hooks/customerQueries";

const EditFormCustomer = () => {
    const router = useRouter();
    const { id: customerId } = useParams();

    const { data: customerData, isLoading } = useGetCustomer(Number(customerId));
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TCustomer>({
        resolver: zodResolver(CustomerSchema),
        defaultValues: {
            firstname: customerData?.firstname,
            lastname: customerData?.lastname,
            email: customerData?.email,
            address: customerData?.address,
            phone: customerData?.phone,
        },
    });

    useEffect(() => {
        if (customerData) {
            setValue("firstname", customerData?.firstname ?? "");
            setValue("lastname", customerData?.lastname ?? "");
            setValue("email", customerData?.email ?? "");
            setValue("address", customerData?.address ?? "");
            setValue("phone", customerData?.phone ?? "");
        }
    }, [customerData]);

    if (isLoading) {
        return (
            <div>
                <Loader2Icon />
            </div>
        );
    }
    const updateCustomer = async (data: TCustomer) => {
        try {
            const response = await fetch(
                `http://localhost:5000/customers/${customerId}`,
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                }
            );
            console.log(response)
            if (!response.ok) {
                throw new Error(`Error: ${response.text}`);
            }
            console.log(response);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const onSubmit = async (data: TCustomer) => {
        try {
            const response = await updateCustomer(data);
            toast.success("Customer updated succesfully");
            console.log(await response.json());
            reset();
            router.push("/dashboard/customer");
        } catch (error) {
            toast.error(`Something went wrong!`);
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

export default EditFormCustomer;
