import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/customer/Columns"
import { Customer } from '@/types/index'
import React from 'react'
import { getCustomer } from '@/api/customer'

const page = async () => {

    const data = await getCustomer()
    console.log(data)

    return (
        <div className="mx-auto md:mx-10 py-10 ">
            <DataTable<Customer, string[]> columns={columns} data={data} />
        </div>
    )
}

export default page