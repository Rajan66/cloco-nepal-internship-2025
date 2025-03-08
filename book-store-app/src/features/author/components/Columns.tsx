'use client';
import { toast } from 'react-toastify';
import { ColumnDef } from '@tanstack/react-table';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Delete, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialogDescription,
    AlertDialogTrigger,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { deleteAuthor } from '@/features/author/actions/author';
import { Author } from '@/types/index';
import { useRouter } from 'next/navigation';
// where do i put components of pages inside dashboard
export const columns: ColumnDef<Author>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorFn: (row: Author) => `${row.user.username}`,
        header: 'Username',
    },
    {
        accessorFn: (row: Author) => `${row.user.first_name} ${row.user.last_name}`, // to concatenate the firstname and lastname
        header: 'Name',
    },
    {
        accessorFn: (row: Author) => `${row.user.email}`,
        header: 'Email',
    },
    {
        accessorFn: (row: Author) =>
            `${row.bio ? `${row.bio?.substring(0, 50)}...` : ''}`,
        header: 'Bio',
    },
    {
        accessorFn: (row: Author) => {
            const fixedDateStr = row.created_at.slice(0, 23) + 'Z';
            const date = new Date(fixedDateStr);
            return date.toLocaleDateString();
        },
        header: 'Created At',
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const author = row.original;
            const router = useRouter();

            const queryClient = useQueryClient();
            const { mutate, isPending: Deleting } = useMutation({
                mutationFn: deleteAuthor,
                onSuccess: () => {
                    toast.success('Author deleted successfully');
                    queryClient.invalidateQueries({ queryKey: ['authors'] });
                },
            });

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(author.id.toString())
                            }
                        >
                            Copy Author ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.push(`/dashboard/author/${author.id}`)}
                        >
                            Edit Author
                        </DropdownMenuItem>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    {Deleting ? 'Deleting...' : 'Delete Author'}
                                </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete book?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this author?
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => mutate(author.id)}
                                        disabled={Deleting}
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
