"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AuthorSchema, TAuthor } from "@/schemas/authorSchema";
import { useMutation } from "@tanstack/react-query";
import { createAuthor } from "../actions/author";
import { AxiosError } from "axios";
import { useGetUsers } from "@/hooks/userQueries";
import { User } from "@/types";

const FormAuthor = () => {
  const router = useRouter();
  const { data: users, isLoading } = useGetUsers();
  console.log(users);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TAuthor>({
    resolver: zodResolver(AuthorSchema),
    mode: "onBlur",
  });

  const { mutate } = useMutation({
    mutationFn: createAuthor,
    onSettled: (apiData: any) => {
      if (apiData.status === 201) {
        toast.success("Author updated successfully");
        router.push("/dashboard/author");
      }
    },
    onError: (apiData: AxiosError) => {
      toast.error("Author creation failed");
      toast.error(`${apiData.message}`);
    },
  });

  const onSubmit = async (data: TAuthor) => {
    console.log(data);
    const finalData = {
      user_id: Number(data.user_id), // Ensure user_id is a number
      bio: data.bio,
    };
    mutate(finalData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="user_id">User:*</Label>
        <Controller
          name="user_id"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {!isLoading &&
                    users?.map((user: User) => (
                      <SelectItem key={user.id} value={user.id.toString()}>
                        {user.username}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.user_id && (
          <p className="text-red-500 text-sm">{errors.user_id.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 ">
        <Label htmlFor="bio">Bio:</Label>
        <Textarea
          id="bio"
          placeholder="Write a few words..."
          {...register("bio")}
        />
        {errors.bio && (
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>
        )}
      </div>

      <Button type="submit" className="w-fit p-4">
        Submit
      </Button>
    </form>
  );
};

export default FormAuthor;
