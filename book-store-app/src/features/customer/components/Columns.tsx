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
import { deleteCustomer } from "@/features/customer/actions/customer";
import { Customer } from "@/types/index";
import { useRouter } from "next/navigation";

// client component
export const columns: ColumnDef<Customer>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorFn: (row: Customer) => `${row.firstname} ${row.lastname}`, // to concatenate the firstname and lastname
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const customer = row.original;
            const router = useRouter();
            const queryClient = useQueryClient();
            const { mutate, isPending: Deleting } = useMutation({
                mutationFn: deleteCustomer,
                onSuccess: () => {
                    toast.success("Customer deleted successfully");
                    queryClient.invalidateQueries({ queryKey: ["customers"] });
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
                                navigator.clipboard.writeText(customer.id.toString())
                            }
                        >
                            Copy Book ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() =>
                                router.push(`/dashboard/customer/${customer.id}`)
                            }
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
                                        onClick={() => mutate(customer.id)}
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
