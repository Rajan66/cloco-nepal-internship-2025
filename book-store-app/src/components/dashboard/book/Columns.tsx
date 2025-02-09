"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Book } from "@/types/index";
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteBook } from "@/api/book";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AlertDialogDescription, AlertDialogTrigger, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

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
    {
        accessorFn: (row: Book) => `${row.author.firstname} ${row.author.lastname}`,
        header: "Author",
    },
    {
        accessorFn: (row: Book) => `${row.description.substring(0, 50)}...`,
        header: "Description",
    },
    {
        accessorKey: "pageCount",
        header: "Page Count",
    },
    {
        accessorKey: "price",
        header: () => <div>Price</div>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price)

            return <div>{formatted}</div>
        },
    },
    {
        accessorKey: "publishedDate",
        header: "Published Date",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const book = row.original;
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
                            onClick={() => navigator.clipboard.writeText(book.id.toString())}
                        >
                            Copy Book ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit Book</DropdownMenuItem>
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
                                    <AlertDialogAction onClick={() => mutate(book.id)} disabled={Deleting}>
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
