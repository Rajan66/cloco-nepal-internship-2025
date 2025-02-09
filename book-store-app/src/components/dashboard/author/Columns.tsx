"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Author } from "@/types/index";

export const columns: ColumnDef<Author>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorFn: (row: Author) => `${row.firstname} ${row.lastname}`, // to concatenate the firstname and lastname
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
        accessorFn: (row: Author) => `${row.bio?.substring(0, 50)}...`,
        header: "Bio",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
]