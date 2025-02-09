import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/book/Columns"
import { Book } from '@/types/index'
import React from 'react'
import { getData } from '@/api/book'

// server component
const page = async () => {

  const data = await getData()
  console.log(data)

  return (
    <div>
      <DataTable<Book, string[]> columns={columns} data={data} />
    </div>
  )
}

export default page