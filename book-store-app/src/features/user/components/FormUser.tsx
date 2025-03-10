"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserSchema, TUser } from "@/schemas/userSchema";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../actions/user";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormUser = () => {
  const router = useRouter();

  // react-hook-form manages the state so we don't need handleChange and value like in vanilla html form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUser>({
    resolver: zodResolver(UserSchema),
    mode: "onBlur",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
    onSettled: (apiData: any) => {
      if (apiData.status === 201) {
        toast.success("User created successfully");
        reset();
        router.push("/dashboard/user");
      } else {
        toast.error("User creation failed");
        reset();
      }
    },
  });

  const onSubmit = async (data: TUser) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 p-10"
    >
      <div className="flex flex-col gap-4 ">
        <Label htmlFor="username">Username:*</Label>
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
      <div className="flex flex-col gap-2 ">
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password..."
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="is_active">User Status:*</Label>
        <Controller
          name="is_active"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select user status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="True">True</SelectItem>
                  <SelectItem value="False">False</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.is_active && (
          <p className="text-red-500 text-sm">{errors.is_active.message}</p>
        )}
      </div>

      <Button type="submit" className="w-fit p-4">
        Submit
      </Button>
    </form>
  );
};

export default FormUser;
