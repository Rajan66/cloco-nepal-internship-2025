import React from 'react'
import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/customer/Columns"
import { useGetCustomers } from '@/hooks/customerQueries'
import { Customer } from '@/types/index'

const page = async () => {

    const { data, isLoading } = useGetCustomers();
    console.log(data)

    return (
        <div className="mx-auto md:mx-10 py-10 ">
            <DataTable<Customer, string[]> columns={columns} data={data ?? []} isLoading={isLoading} />
        </div>
    )
}

export default page