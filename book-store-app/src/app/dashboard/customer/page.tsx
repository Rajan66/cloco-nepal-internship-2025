"use client";
import React from "react";
import Link from "next/link";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";
import { columns } from "@/components/dashboard/customer/Columns";
import { Button } from "@/components/ui/button";
import { useGetCustomers } from "@/hooks/customerQueries";
import { Customer } from "@/types/index";
import { PlusCircleIcon } from "lucide-react";

const page = () => {
    const { data, isLoading } = useGetCustomers();
    console.log(data);

    return (
        <div className="mx-auto md:mx-10 py-4 ">
            <div className="pb-4 justify-between flex">
                <div></div>
                <Link href="/dashboard/customer/new">
                    <Button>
                        <PlusCircleIcon />
                        Add Customer
                    </Button>
                </Link>
            </div>
            {!isLoading ? (
                <DataTable<Customer, string[]> columns={columns} data={data ?? []} />
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default page;
