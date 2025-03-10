"use client";
import React from "react";
import Link from "next/link";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";
import { columns } from "@/features/user/components/Columns";
import { Button } from "@/components/ui/button";
import { useGetUsers } from "@/hooks/userQueries";
import { User } from "@/types/index";
import { PlusCircleIcon } from "lucide-react";

const page = () => {
  const { data, isLoading } = useGetUsers();
  console.log(data);

  return (
    <div className="mx-auto md:mx-10 py-4 ">
      <div className="pb-4 justify-between flex">
        <div></div>
        <Link href="/dashboard/user/new">
          <Button>
            <PlusCircleIcon />
            Add User
          </Button>
        </Link>
      </div>
      {!isLoading ? (
        <DataTable<User, string[]> columns={columns} data={data ?? []} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
