"use client";
import { toast } from "react-toastify";
import { ColumnDef } from "@tanstack/react-table";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
} from "@/components/ui/alert-dialog";
import { deleteBook } from "@/app/dashboard/book/book";
import { Book } from "@/types/index";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<Book>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "isbn",
        header: "ISBN",
    },
    // {
    //     accessorFn: (row: Book) => `${row.author.firstname} ${row.author.lastname}`,
    //     header: "Author",
    // },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorFn: (row: Book) => `${row.description.substring(0, 50)}...`,
        header: "Description",
    },
    {
        accessorKey: "price",
        header: () => <div>Price</div>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price);

            return <div>{formatted}</div>;
        },
    },
    {
        accessorKey: "pageCount",
        header: "Page Count",
    },

    {
        accessorKey: "publishedDate",
        header: "Published Date",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const book = row.original;
            const router = useRouter();
            const queryClient = useQueryClient();
            const { mutate, isPending: Deleting } = useMutation({
                mutationFn: deleteBook,
                onSuccess: () => {
                    toast.success("Book deleted successfully");
                    queryClient.invalidateQueries({ queryKey: ["books"] });
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
                                navigator.clipboard.writeText(book.id.toString())
                            }
                        >
                            Copy Book ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.push(`/dashboard/book/${book.id}`)}
                        >
                            Edit Book
                        </DropdownMenuItem>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    {Deleting ? "Deleting..." : "Delete Book"}
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
                                        onClick={() => mutate(book.id)}
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
