'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AuthorSchema, TAuthor } from '@/schemas/authorSchema';
import { useGetAuthor } from '@/hooks/authorQueries';
import { updateAuthor } from '@/features/author/actions/author';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const EditFormAuthor = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { id: id } = useParams();
    const authorId = id?.toString();

    const { data: authorData, isLoading } = useGetAuthor(authorId);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TAuthor>({
        resolver: zodResolver(AuthorSchema),
        defaultValues: {
            user_id: authorData?.user.id,
            bio: authorData?.bio,
        },
    });

    const {
        data: response,
        isPending,
        mutate,
    } = useMutation({
        mutationFn: updateAuthor,
        onSettled: (apiData: any) => {
            if (apiData.status === 200) {
                queryClient.invalidateQueries({ queryKey: ['author', authorId] });
                queryClient.invalidateQueries({ queryKey: ['authors'] });
                toast.success('Author updated successfully');
            }
        },
    });

    useEffect(() => {
        if (authorData) {
            setValue('user_id', authorData?.user.id ?? '');
            setValue('bio', authorData?.bio ?? '');
        }
    }, [authorData]);

    if (isLoading) {
        return (
            <div>
                <Loader2Icon />
            </div>
        );
    }

    const onSubmit = async (data: TAuthor) => {
        mutate({ id: authorId, data: data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ">
                <Label htmlFor="user">User:*</Label>
                <Input
                    id="user"
                    type="number"
                    placeholder="select an user..."
                    {...register('user_id')}
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
                    {...register('bio')}
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

export default EditFormAuthor;
