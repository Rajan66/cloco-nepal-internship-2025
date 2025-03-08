"use client";
import React from "react";
import Link from "next/link";

import { PlusCircleIcon } from "lucide-react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";
import { columns } from "@/features/book/components/Columns";
import { Button } from "@/components/ui/button";
import { useGetBooks } from "@/hooks/bookQueries";
import { Book } from "@/types/index";

const page = () => {
  const { data, isLoading } = useGetBooks();

  return (
    <div className="mx-auto md:mx-10 py-4 ">
      <div className="pb-4 justify-between flex">
        <div></div>
        <Link href="/dashboard/book/new">
          <Button>
            <PlusCircleIcon />
            Add Book
          </Button>
        </Link>
      </div>
      {!isLoading ? (
        <DataTable<Book, string[]> columns={columns} data={data ?? []} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
