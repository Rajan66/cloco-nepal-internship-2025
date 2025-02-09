import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/customer/Columns"
import { Customer } from '@/types/index'
import React from 'react'
import { getData } from '@/api/customer'

const page = async () => {

    const data = await getData()
    console.log(data)

    return (
        <div>
            <DataTable<Customer, string[]> columns={columns} data={data} />
        </div>
    )
}

export default page