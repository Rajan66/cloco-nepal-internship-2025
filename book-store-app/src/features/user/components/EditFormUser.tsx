"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EditUserSchema, TEditUser } from "@/schemas/userSchema";
import { useGetUser } from "@/hooks/userQueries";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../actions/user";

const EditFormUser = () => {
  const router = useRouter();
  const { id: id } = useParams();
  const userId = Number(id);

  const { data: userData, isLoading } = useGetUser(userId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TEditUser>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      username: userData?.username,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
      is_active: userData?.is_active.toString(),
    },
  });

  useEffect(() => {
    if (userData) {
      setValue("username", userData?.username ?? "");
      setValue("first_name", userData?.first_name ?? "");
      setValue("last_name", userData?.last_name ?? "");
      setValue("email", userData?.email ?? "");
      setValue("is_active", userData?.is_active.toString() ?? "");
    }
  }, [userData, setValue]);

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSettled: (apiData: any) => {
      if (apiData.status == 200) {
        toast.success("User update successfully");
        reset();
        router.push("/dashboard/user");
      }
      toast.error("User updation failed");
    },
  });

  if (isLoading) {
    return (
      <div>
        <Loader2Icon />
      </div>
    );
  }

  const onSubmit = async (data: TEditUser) => {
    mutate({ id: userId, data: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Label htmlFor="firstname">Username:*</Label>
        <Input
          id="username"
          type="text"
          placeholder="Enter username..."
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <Label htmlFor="first_name">Firstname:</Label>
        <Input
          id="first_name"
          type="text"
          placeholder="Enter firstname..."
          {...register("first_name")}
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm">{errors.first_name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 ">
        <Label htmlFor="last_name">Lastname:*</Label>
        <Input
          id="last_name"
          type="text"
          placeholder="Enter lastname..."
          {...register("last_name")}
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm">{errors.last_name.message}</p>
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

      <Button type="submit" className="w-fit p-4">
        Submit
      </Button>
    </form>
  );
};

export default EditFormUser;
