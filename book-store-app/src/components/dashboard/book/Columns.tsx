"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Book } from "@/types/index";

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
        accessorFn: (row: Book) => `${row.author.firstname} ${row.author.lastname}`, // concatenate the firstname and lastname
        header: "Author",
        // cell: ({ row }) => {
        //     const book = row.original;  // This gives you the full Book object
        //     return <div>{`${book.author.firstname} ${book.author.lastname}`}</div>;
        // }
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
        accessorFn: (row: Book) => `$${row.price}.00`,
        header: "Price",
    },
    {
        accessorKey: "publishedDate",
        header: "Published Date",
    },
]