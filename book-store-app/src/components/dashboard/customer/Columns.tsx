"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Customer } from "@/types/index";

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
]